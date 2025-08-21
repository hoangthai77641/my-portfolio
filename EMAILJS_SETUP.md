# EmailJS Setup Guide

## Bước 1: Tạo tài khoản EmailJS

1. Truy cập https://www.emailjs.com/
2. Đăng ký tài khoản miễn phí
3. Đăng nhập vào Dashboard

## Bước 2: Tạo Email Service

1. Trong Dashboard, chọn "Email Services"
2. Chọn "Add New Service"
3. Chọn Gmail hoặc Outlook
4. Kết nối email của bạn
5. Lưu **Service ID** (ví dụ: service_abc123)

## Bước 3: Tạo Email Template

1. Chọn "Email Templates"
2. Chọn "Create New Template"
3. Tạo template với nội dung:

**Subject:** Portfolio Contact from {{from_name}}

**Content:**

```
Tên: {{from_name}}
Email: {{from_email}}

Tin nhắn:
{{message}}
```

4. Lưu **Template ID** (ví dụ: template_abc123)

## Bước 4: Lấy Public Key

1. Trong Dashboard, chọn "Account"
2. Trong tab "General", tìm **Public Key** (ví dụ: abc123xyz)

## Bước 5: Cập nhật .env.local

Thay thế các giá trị trong file .env.local:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_abc123
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123xyz
```

## Bước 6: Restart server

```bash
npm run dev
```

## Template Variables được sử dụng:

- `{{from_name}}` - Tên người gửi
- `{{from_email}}` - Email người gửi
- `{{message}}` - Nội dung tin nhắn
