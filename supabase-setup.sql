-- FUOYE Learn Supabase setup
-- Run this in Supabase SQL Editor before production use.

alter table public.users
add column if not exists dark_mode boolean default false;

alter table public.users enable row level security;

drop policy if exists "Read leaderboard" on public.users;
drop policy if exists "Create own profile" on public.users;
drop policy if exists "Update own profile" on public.users;
drop policy if exists "Admin update users" on public.users;
drop policy if exists "Admin delete users" on public.users;

create policy "Read leaderboard"
on public.users
for select
using (true);

create policy "Create own profile"
on public.users
for insert
to authenticated
with check (auth.uid() = id);

create policy "Update own profile"
on public.users
for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

create policy "Admin update users"
on public.users
for update
to authenticated
using (
  (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  or lower(auth.jwt() ->> 'email') = 'lilscope001@gmail.com'
)
with check (
  (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  or lower(auth.jwt() ->> 'email') = 'lilscope001@gmail.com'
);

create policy "Admin delete users"
on public.users
for delete
to authenticated
using (
  (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
  or lower(auth.jwt() ->> 'email') = 'lilscope001@gmail.com'
);
