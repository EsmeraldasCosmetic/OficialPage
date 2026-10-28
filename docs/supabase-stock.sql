-- Ejecutar una vez en SQL Editor. No crea cantidades ni descuenta ventas.
-- Aborta si ya existen columnas stock: revisar su definición antes de continuar.
begin;
alter table public.productos
  add column stock integer check (stock is null or stock between 0 and 1000000);
alter table public.producto_tonos
  add column stock integer check (stock is null or stock between 0 and 1000000);
comment on column public.productos.stock is 'Unidades para productos sin tonos. NULL: sin confirmar; 0: agotado.';
comment on column public.producto_tonos.stock is 'Unidades por tono. NULL: sin confirmar; 0: agotado.';

-- Protección adicional de la columna incluso si hay políticas de escritura antiguas.
-- Los administradores editan desde Dashboard; la tienda pública solo consulta.
create function public.ec_protect_stock() returns trigger
language plpgsql security invoker set search_path = '' as $$
begin
  if current_user in ('anon', 'authenticated') then
    if TG_OP = 'INSERT' then
      if NEW.stock is not null then raise exception 'Inventario: escritura pública no permitida'; end if;
    elsif NEW.stock is distinct from OLD.stock then
      raise exception 'Inventario: escritura pública no permitida';
    end if;
  end if;
  return NEW;
end;
$$;
revoke all on function public.ec_protect_stock() from public, anon, authenticated;
create trigger ec_productos_protect_stock before insert or update on public.productos
for each row execute function public.ec_protect_stock();
create trigger ec_tonos_protect_stock before insert or update on public.producto_tonos
for each row execute function public.ec_protect_stock();
commit;

-- No modifica RLS, permisos de lectura ni políticas existentes.
-- Auditar también DELETE y funciones SECURITY DEFINER mediante supabase-audit.sql.
