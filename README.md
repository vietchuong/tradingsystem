# Viết Chương Trading - Premium Course Landing Page

Một Landing Page cao cấp dành cho khóa học Trading của chuyên gia Viết Chương, được xây dựng với **Next.js 14**, **Tailwind CSS**, và **Framer Motion**.

## 🚀 Tính Năng Nổi Bật

- **Giao diện Dark Mode Premium**: Tone màu Deep Navy, Emerald Green và Gold thể hiện sự kỷ luật và thịnh vượng.
- **Hiệu ứng VCP Interactive**: Mô phỏng mẫu hình VCP (Volatility Contraction Pattern) với animation mượt mà.
- **R-Calculator**: Công cụ tính toán khối lượng lệnh (Position Sizing) tự động dựa trên rủi ro.
- **Tâm lý học hành vi**: Các thẻ lật (Flip cards) giải quyết các nỗi đau của Trader.
- **Responsive hoàn hảo**: Tối ưu cho mọi thiết bị từ Mobile đến Desktop.

## 🛠 Cài Đặt & Chạy Dự Án

### Yêu cầu
- Node.js 18.17 trở lên

### Hướng dẫn
1. Clone dự án:
   ```bash
   git clone <repo-url>
   cd trading-course-web
   ```

2. Cài đặt thư viện:
   ```bash
   npm install
   ```

3. Chạy môi trường Dev:
   ```bash
   npm run dev
   ```
   Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 📂 Cấu Trúc Thư Mục

```
trading-course-web/
├── app/
│   ├── layout.tsx       # Layout chính (Font, Global CSS)
│   ├── page.tsx         # Trang chủ lắp ghép các components
│   └── globals.css      # CSS biến và Tailwind imports
├── components/
│   ├── Hero.tsx         # Phần Hero với biểu đồ VCP
│   ├── PainPoints.tsx   # Phần Tâm lý giao dịch (Flip cards)
│   ├── ProgramPillars.tsx # 3 Trụ cột: Kỹ thuật, Tư duy, Quản trị
│   ├── RCalc.tsx        # Máy tính quản lý vốn
│   ├── SocialProof.tsx  # Bằng chứng lãi R-Multiple
│   └── Footer.tsx       # Form đăng ký và Disclaimer
├── public/              # Hình ảnh, icons
└── ...config files
```

## 🧪 Tự Động Test

File script kiểm tra logic máy tính R-Calc: `scripts/test_r_calc.js`

Chạy test:
```bash
node scripts/test_r_calc.js
```

## 👨‍💻 Tác Giả

**Thiết kế & Phát triển bởi Viết Chương**
Lấy cảm hứng từ những huyền thoại Trading.
