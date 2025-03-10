# 🌟 HHDonghua - Web Xem Phim Hoạt Hình

HHDonghua là một ứng dụng web xem phim hoạt hình (donghua) được phát triển với mục tiêu mang đến trải nghiệm giải trí mượt mà, tiện lợi cho người dùng yêu thích thể loại này. Dự án sử dụng công nghệ hiện đại như **Vue.js**, **Pinia**, **Firebase**, và **Vite** để đảm bảo hiệu suất cao, giao diện thân thiện và tính năng đa dạng.

## 🚀 Tính năng chính

- 🎬 **Xem phim:** Danh sách phim phong phú, hỗ trợ phát video chất lượng cao.
- 🔒 **Xác thực và Đăng nhập:** Người dùng có thể đăng ký, đăng nhập qua email hoặc Google nhờ Firebase Authentication.
- 👑 **Quản trị viên (Admin):** Hệ thống quản lý phim, người dùng và nội dung dành riêng cho admin.
- ❤️ **Yêu thích (Favorite):** Người dùng có thể lưu phim yêu thích để xem lại.
- 💬 **Bình luận (Comment):** Tương tác cộng đồng qua hệ thống bình luận dưới mỗi phim.
- 📢 **Nhóm chat (Chatgroup):** Kết nối người dùng qua các phòng chat thời gian thực, Chat AI 
- 📦 **Quản lý trạng thái:** Sử dụng Pinia để quản lý dữ liệu ứng dụng hiệu quả.

## 🛠️ Công nghệ sử dụng

- **Vue.js:** Framework chính để xây dựng giao diện người dùng.
- **Pinia:** Thư viện quản lý trạng thái nhẹ và mạnh mẽ.
- **Firebase:**
  - **Authentication:** Xác thực người dùng.
  - **Firestore:** Lưu trữ dữ liệu phim, bình luận, danh sách yêu thích.
  - **Realtime Database:** Hỗ trợ nhóm chat thời gian thực.
- **Vite:** Công cụ build nhanh và nhẹ cho hiệu suất phát triển tối ưu.

## 📦 Cài đặt và chạy dự án

### Yêu cầu
- **Node.js** (phiên bản 16.x trở lên)
- **npm** hoặc **Yarn**
- **Tài khoản Firebase** (để cấu hình Authentication, Firestore, Realtime Database)

### Hướng dẫn cài đặt

1. **Cài đặt các gói phụ thuộc:**

```bash
npm install
# hoặc
yarn install
```

2. **Cấu hình Firebase:**

- Tạo dự án trên Firebase Console.
- Lấy thông tin cấu hình (API Key, Auth Domain, Project ID, v.v.) và thêm vào tệp `.env`:

```plaintext
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

3. **Chạy dự án ở chế độ phát triển:**

```bash
npm run dev
# hoặc
yarn dev
```

- Mở trình duyệt và truy cập: [http://localhost:5173](http://localhost:5173)

4. **Build dự án để triển khai:**

```bash
npm run build
# hoặc
yarn build
```

## 📁 Cấu trúc thư mục

```
hhdonghua/
├── public/                # Tài nguyên tĩnh (logo, favicon, v.v.)
├── src/
│   ├── assets/           # Hình ảnh, CSS, v.v.
│   ├── components/       # Các thành phần Vue tái sử dụng
│   ├── views/            # Các trang (Home, MovieDetail, Admin, v.v.)
│   ├── stores/           # Pinia stores (auth, movies, chat, v.v.)
│   ├── router/           # Cấu hình Vue Router
│   ├── firebase/         # Cấu hình và hàm Firebase
│   ├── App.vue           # Component gốc
│   └── main.js           # Điểm khởi đầu ứng dụng
├── .env                  # Biến môi trường (Firebase config)
├── vite.config.js        # Cấu hình Vite
└── package.json          # Quản lý phụ thuộc
```

## 📚 Hướng dẫn sử dụng

### Người dùng thông thường
- **Đăng ký/Đăng nhập:** Sử dụng email hoặc Google để truy cập.
- **Xem phim:** Chọn phim từ danh sách, xem chi tiết và phát video.
- **Thêm vào yêu thích:** Nhấn nút "Yêu thích" để lưu phim.
- **Bình luận:** Viết ý kiến dưới mỗi phim.
- **Tham gia chat:** Vào nhóm chat để trò chuyện với cộng đồng.

### Quản trị viên
- **Đăng nhập Admin:** Sử dụng tài khoản có quyền admin.
- **Quản lý phim:** Thêm, sửa, xóa phim từ giao diện admin.
- **Quản lý người dùng:** Xem danh sách, chặn hoặc xóa tài khoản vi phạm.

## 🤝 Đóng góp

Chúng tôi hoan nghênh mọi đóng góp! Để tham gia:

1. Fork repository.
2. Tạo branch mới:

```bash
git checkout -b feature/your-feature-name
```

3. Commit thay đổi:

```bash
git commit -m "Add new feature"
```

4. Push lên branch:

```bash
git push origin feature/your-feature-name
```

5. Tạo Pull Request.

## 📜 Giấy phép

Dự án được phát hành dưới **MIT License**.

## 📧 Liên hệ

- **Email:** trankimthinh23@gmail.com
- **GitHub:** [thjnh-t](https://github.com/thjnh-t)

---

Cảm ơn bạn đã quan tâm đến **HHDonghua**! Chúc bạn có những phút giây thư giãn tuyệt vời 🎬❤️

![image](https://github.com/user-attachments/assets/476e5af8-c0c3-4894-a039-238079929f03)
