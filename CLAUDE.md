# Hướng dẫn cho Claude – INNER CODE version 2 (liên kết Tiệm Nhỏ An Yên)

> **Ghi chú: `innercode-version-2` và Tiệm Nhỏ An Yên.**
> Repo `minhle111509/innercode-version-2` (trước đây tên `innercode-giai-doan-1-v2`, đổi tên ngày 30/10/2026) chạy tại **https://innercode-version-2.pages.dev** (Cloudflare Pages, dự án `innercode-version-2`, tự cập nhật từ nhánh `main`). Không còn dùng GitHub Pages.
> Đây là bản sao của repo `innercode-giai-doan-1` (bản giai đoạn 1); **repo gốc đó và repo `innercode-v2` đã được chủ web xóa ngày 30/10/2026**, bản dự phòng do chủ web giữ. Web bán hàng chính vẫn là repo `minhle111509/innercode` (https://innercode.pages.dev) — không sửa repo đó.
> Đây là trang **duy nhất** liên kết qua lại với **Tiệm Nhỏ An Yên** (https://tiem-nho-an-yen.minhle111509.workers.dev): menu và chân trang mọi trang có nút sang Tiệm; chân trang Tiệm có nút "INNER CODE" trỏ về đây (repo `minhle111509/tiem-nho-an-yen`, `PARTNER_SITES` trong `src/components/Footer.tsx`). Đổi địa chỉ một trong hai web thì sửa liên kết ở cả hai phía.
> Ô Tarot dùng ảnh lá thật của bộ Rider–Waite (tranh Pamela Colman Smith, xuất bản 1909, được xem là phạm vi công cộng): trang chủ là **X – Wheel of Fortune** (`assets/tarot-wheel-of-fortune.webp`), đầu trang `tarot.html` là **XIX – The Sun** (`assets/tarot-the-sun.webp`), lấy từ gói npm `@cometpisces/tarot-kit-images` 0.2.0. Gói này tự ghi là không bảo đảm tình trạng bản quyền của ảnh.
> Chủ web cho phép sửa và cập nhật repo này (30/10/2026).


Nội dung web là bản giai đoạn 1 của INNER CODE (chưa có ví xu, khóa luận giải, chữa lành, cửa hàng). Web bán hàng chính là repo `minhle111509/innercode` (https://innercode.pages.dev).

## Quy tắc bắt buộc với chủ web
- Trả lời bằng tiếng Việt, dễ hiểu với người không làm kỹ thuật.
- **Không bao giờ đẩy (push) lên GitHub khi chưa được chủ web đồng ý.** Sửa xong: gửi preview (ảnh chụp màn hình hoặc mô tả thay đổi), chờ chủ web nhắn "ok" rồi mới push.
- Mỗi repo phải hỏi riêng. Đồng ý cho repo này không có nghĩa là đồng ý cho `innercode` hay `tiem-nho-an-yen`, và ngược lại.
- Không tự thêm tính năng của bản chính vào đây; chỉ sửa khi chủ web yêu cầu rõ cho repo này.
- Chạy `npm test` trước khi gửi preview; báo thật nếu có bài kiểm tra không đạt.

## Lưu ý kỹ thuật
- Không đặt khóa API, mật khẩu hay bí mật vào bất kỳ file nào.
- Thần số học: chữ Y chỉ là nguyên âm khi đứng riêng trong chữ (Vy, My); đứng sát A/E/I/O/U (Nguyen, Huy, Uyen) thì là phụ âm.
- Thần số học: năm thế giới và năm cá nhân rút gọn về 1–9 nhưng **giữ số Master 11 và 22** (ví dụ năm 2027 = 11). Tháng và ngày cá nhân vẫn rút gọn về 1–9.
- Các file `.html` sửa trực tiếp; `og:url`/`og:image` dùng địa chỉ https://innercode-version-2.pages.dev.
