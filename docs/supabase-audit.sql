-- Solo lectura. Ejecutar en SQL Editor del proyecto correcto.
select table_name, column_name, data_type, is_nullable
from information_schema.columns
where table_schema = 'public' and table_name in ('productos', 'producto_imagenes', 'producto_tonos')
order by table_name, ordinal_position;

select c.relname as tabla, c.relrowsecurity as rls
from pg_class c join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public' and c.relname in ('productos', 'producto_imagenes', 'producto_tonos');

select tablename, policyname, permissive, roles, cmd, qual, with_check
from pg_policies where schemaname = 'public'
and tablename in ('productos', 'producto_imagenes', 'producto_tonos');

select table_name, grantee, privilege_type from information_schema.table_privileges
where table_schema = 'public' and table_name in ('productos', 'producto_imagenes', 'producto_tonos');

select table_name, column_name, grantee, privilege_type from information_schema.column_privileges
where table_schema = 'public' and table_name in ('productos', 'producto_imagenes', 'producto_tonos');

select conrelid::regclass as tabla, conname, pg_get_constraintdef(oid) as definicion
from pg_constraint where conrelid in ('public.productos'::regclass, 'public.producto_imagenes'::regclass, 'public.producto_tonos'::regclass);
