export interface FAQCategory {
  id: string;
  title: string;
  description: string;
  icon?: string;
  questions: FAQItem[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqCategories: FAQCategory[] = [
  {
    id: "general",
    title: "Tổng quan",
    description: "Những câu hỏi cơ bản về nền tảng",
    questions: [
      {
        id: "general-1",
        question: "Dịch vụ phỏng vấn thử hoạt động như thế nào?",
        answer:
          "Bạn chọn người phỏng vấn phù hợp với lĩnh vực của mình, đặt lịch theo khung giờ có sẵn, và tham gia buổi phỏng vấn qua video call. Sau buổi phỏng vấn, bạn sẽ nhận được phản hồi chi tiết từ chuyên gia.",
      },
      {
        id: "general-2",
        question: "Ai có thể sử dụng dịch vụ này?",
        answer:
          "Dịch vụ dành cho tất cả mọi người — từ sinh viên mới ra trường, người chuyển ngành, đến chuyên gia muốn chuẩn bị cho vị trí cao hơn. Chúng tôi có người phỏng vấn cho nhiều lĩnh vực khác nhau.",
      },
      {
        id: "general-3",
        question: "Buổi phỏng vấn thử kéo dài bao lâu?",
        answer:
          "Mỗi buổi phỏng vấn thử kéo dài từ 45 đến 60 phút, bao gồm thời gian phỏng vấn và phản hồi. Một số gói cao cấp có thể kéo dài đến 90 phút với phần review CV bổ sung.",
      },
      {
        id: "general-4",
        question: "Tôi có cần chuẩn bị gì trước buổi phỏng vấn thử không?",
        answer:
          "Bạn nên chuẩn bị CV mới nhất, mô tả công việc mục tiêu, và đảm bảo kết nối internet ổn định. Người phỏng vấn sẽ gửi hướng dẫn chi tiết sau khi bạn đặt lịch.",
      },
    ],
  },
  {
    id: "booking",
    title: "Đặt lịch & Thanh toán",
    description: "Quy trình đặt lịch và phương thức thanh toán",
    questions: [
      {
        id: "booking-1",
        question: "Làm thế nào để đặt lịch phỏng vấn thử?",
        answer:
          "Truy cập trang Người phỏng vấn, chọn chuyên gia phù hợp, xem lịch có sẵn và chọn khung giờ. Sau khi thanh toán, bạn sẽ nhận được email xác nhận cùng link tham gia buổi phỏng vấn.",
      },
      {
        id: "booking-2",
        question: "Phương thức thanh toán nào được chấp nhận?",
        answer:
          "Chúng tôi chấp nhận thanh toán qua thẻ tín dụng/ghi nợ (Visa, Mastercard), ví điện tử (MoMo, ZaloPay), và chuyển khoản ngân hàng. Tất cả giao dịch đều được mã hóa và bảo mật.",
      },
      {
        id: "booking-3",
        question: "Tôi có thể hủy hoặc đổi lịch không?",
        answer:
          "Bạn có thể hủy hoặc đổi lịch miễn phí trước 24 giờ so với thời gian phỏng vấn. Hủy trong vòng 24 giờ sẽ bị tính phí 50%. Không đến buổi phỏng vấn mà không báo trước sẽ không được hoàn tiền.",
      },
      {
        id: "booking-4",
        question: "Có gói ưu đãi cho nhiều buổi không?",
        answer:
          "Có! Chúng tôi cung cấp các gói 3 buổi (giảm 10%), 5 buổi (giảm 15%) và 10 buổi (giảm 25%). Các gói này có thể sử dụng với bất kỳ người phỏng vấn nào trên nền tảng.",
      },
    ],
  },
  {
    id: "interviewer",
    title: "Người phỏng vấn",
    description: "Thông tin về đội ngũ chuyên gia",
    questions: [
      {
        id: "interviewer-1",
        question: "Người phỏng vấn được tuyển chọn như thế nào?",
        answer:
          "Tất cả người phỏng vấn đều là chuyên gia có ít nhất 5 năm kinh nghiệm trong lĩnh vực của họ. Họ trải qua quy trình xét duyệt nghiêm ngặt bao gồm kiểm tra kinh nghiệm, phỏng vấn thử, và đánh giá khả năng mentoring.",
      },
      {
        id: "interviewer-2",
        question: "Tôi có thể chọn người phỏng vấn theo lĩnh vực không?",
        answer:
          "Hoàn toàn được! Bạn có thể lọc người phỏng vấn theo lĩnh vực (IT, Marketing, Finance, v.v.), cấp độ (junior, senior, manager), và ngôn ngữ phỏng vấn.",
      },
      {
        id: "interviewer-3",
        question: "Làm thế nào để trở thành người phỏng vấn trên nền tảng?",
        answer:
          "Bạn cần có ít nhất 5 năm kinh nghiệm chuyên môn và kinh nghiệm phỏng vấn tuyển dụng. Truy cập trang 'Trở thành người phỏng vấn' để đăng ký. Đội ngũ của chúng tôi sẽ xét duyệt và liên hệ trong vòng 5 ngày làm việc.",
      },
    ],
  },
  {
    id: "feedback",
    title: "Phản hồi & Kết quả",
    description: "Về phản hồi sau buổi phỏng vấn",
    questions: [
      {
        id: "feedback-1",
        question: "Tôi sẽ nhận phản hồi như thế nào sau buổi phỏng vấn?",
        answer:
          "Bạn sẽ nhận được báo cáo phản hồi chi tiết trong vòng 24 giờ qua email và trên dashboard cá nhân. Báo cáo bao gồm đánh giá từng kỹ năng, điểm mạnh, điểm cần cải thiện và gợi ý cụ thể.",
      },
      {
        id: "feedback-2",
        question: "Phản hồi có bao gồm những gì?",
        answer:
          "Phản hồi bao gồm: đánh giá kỹ năng giao tiếp, kiến thức chuyên môn, kỹ năng giải quyết vấn đề, thái độ và sự tự tin, cùng với điểm số tổng thể và lộ trình cải thiện.",
      },
      {
        id: "feedback-3",
        question: "Buổi phỏng vấn có được ghi hình không?",
        answer:
          "Buổi phỏng vấn sẽ được ghi hình với sự đồng ý của bạn. Video sẽ chỉ được lưu trữ trên tài khoản cá nhân của bạn để xem lại và tự đánh giá. Chúng tôi không chia sẻ video với bất kỳ bên thứ ba nào.",
      },
    ],
  },
  {
    id: "technical",
    title: "Kỹ thuật & Hỗ trợ",
    description: "Vấn đề kỹ thuật và hỗ trợ khách hàng",
    questions: [
      {
        id: "technical-1",
        question: "Cần thiết bị gì để tham gia phỏng vấn thử?",
        answer:
          "Bạn cần máy tính hoặc laptop có camera, micro, và kết nối internet ổn định (tối thiểu 5Mbps). Chúng tôi sử dụng nền tảng video call trên trình duyệt — không cần cài đặt phần mềm thêm.",
      },
      {
        id: "technical-2",
        question: "Tôi gặp sự cố kỹ thuật trong buổi phỏng vấn thì sao?",
        answer:
          "Nếu gặp sự cố kỹ thuật, bạn có thể liên hệ đội hỗ trợ qua chat trực tiếp hoặc hotline. Nếu sự cố ảnh hưởng đến chất lượng buổi phỏng vấn, bạn sẽ được đặt lại lịch miễn phí.",
      },
      {
        id: "technical-3",
        question: "Dữ liệu cá nhân của tôi có được bảo mật không?",
        answer:
          "Chúng tôi cam kết bảo mật thông tin cá nhân theo tiêu chuẩn quốc tế. Dữ liệu được mã hóa end-to-end và lưu trữ trên máy chủ bảo mật. Bạn có thể xem chi tiết tại trang Chính sách Bảo mật.",
      },
    ],
  },
];
