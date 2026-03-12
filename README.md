# Xóm Connect

Mobile-first Next.js app kết nối cư dân theo bán kính gần, dùng Supabase cho Auth, Storage và Postgres/PostGIS.

## Local Setup

1. Cài dependencies:

```bash
npm install
```

2. Tạo `.env.local` từ `.env.example` và điền giá trị thật:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key
```

`NEXT_PUBLIC_SUPABASE_ANON_KEY` vẫn được hỗ trợ làm fallback nếu bạn chưa dùng publishable key mới.

3. Chạy toàn bộ file `supabase/schema.sql` trong Supabase SQL Editor.

4. Khởi động app:

```bash
npm run dev
```

App mặc định mở ở `http://localhost:3000`.

## Vercel Setup

Thêm các biến môi trường sau vào Vercel Project Settings → Environment Variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

Hoặc dùng `NEXT_PUBLIC_SUPABASE_ANON_KEY` nếu chưa có publishable key.

## Commands

```bash
npm run dev
npm run lint
npm run build
```

## Current Scope

- Supabase Auth cho login/register
- Lưu hồ sơ người dùng và vị trí
- Tạo bài đăng với ảnh trên Supabase Storage
- Nearby feed bằng PostGIS RPC `get_nearby_posts`
- Mobile-first UI với bottom navigation
