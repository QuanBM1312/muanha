import { useState, useEffect } from "react";
import PaymentModal from "./PaymentModal";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 10,
    minutes: 6,
    seconds: 9,
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Vé thường (1 buổi)", // <-- Đã sửa giá trị mặc định
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Hàm xử lý gửi dữ liệu đến Google Form
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSd8IQ7fHHoA06i9XG-O5su4gUSKNoDB5YY7F5JmIXU-d8xXIA/formResponse";
    const formDataUrl = new URLSearchParams();

    formDataUrl.append("entry.2120993187", formData.name); // Họ và tên
    formDataUrl.append("entry.1471538822", formData.phone); // Số điện thoại
    formDataUrl.append("entry.1435946775", formData.service); // Dịch vụ muốn đăng ký

    try {
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataUrl.toString(),
      });
      // Mở modal thay vì alert
      setIsModalOpen(true);
      setFormData({
        name: "",
        phone: "",
        service: "Vé thường (1 buổi)", // <-- Đã sửa giá trị reset
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };
  
  const handleMessengerClick = () => {
    const pageId = "109065508625040";
    const messengerDesktopUrl = `https://www.messenger.com/t/${pageId}`;
    const messengerAppUrl = `fb-messenger://user-thread/${pageId}`;

    // Kiểm tra xem người dùng có trên thiết bị di động không
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      window.location.href = messengerAppUrl;
    } else {
      window.open(messengerDesktopUrl, "_blank");
    }
  };

  return (
    <section className="relative w-full min-h-[784px] bg-[#E2F6FC] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1349 784"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="949.614"
              y1="432.457"
              x2="1106.3"
              y2="885.868"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#CCEEF0" />
              <stop offset="1" stopColor="#E5F6F7" />
            </linearGradient>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(988.479 739.725) rotate(-66.192) scale(350.56)"
            >
              <stop offset="0.275818" stopColor="#00ACB8" />
              <stop offset="0.588601" stopColor="#CCEEF0" />
              <stop offset="0.754773" stopColor="#66CDD4" />
              <stop offset="0.962057" stopColor="#F4F7FF" />
            </radialGradient>
          </defs>
          <path d="M1349 0H0V799H1349V0Z" fill="#E2F6FC" />
          <g filter="url(#filter0_f)">
            <path
              d="M866.702 458.522C711.641 525.777 640.461 705.999 707.716 861.06C774.971 1016.12 955.193 1087.3 1110.25 1020.05C1265.31 952.791 1336.49 772.568 1269.24 617.508C1201.98 462.447 1021.76 391.267 866.702 458.522Z"
              fill="url(#paint0_linear)"
            />
          </g>
          <g filter="url(#filter1_f)">
            <path
              d="M911.707 452.125C752.87 494.525 658.479 657.66 700.879 816.497C743.279 975.334 906.414 1069.73 1065.25 1027.33C1224.09 984.926 1318.48 821.791 1276.08 662.953C1233.68 504.116 1070.54 409.725 911.707 452.125Z"
              fill="url(#paint1_radial)"
            />
          </g>
        </svg>
      </div>

      <div className="relative max-w-[1349px] mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-12 lg:pb-20">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 lg:space-y-8 lg:col-span-3 w-fit">
            <div className="">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#3D3E56] leading-tight mb-4">
                SIÊU ƯU ĐÃI
              </h1>
              <div className="flex items-center gap-2">
                <div className="inline-block px-8 py-3 lg:px-10 lg:py-4 rounded-full bg-gradient-teal-vertical">
                  <h2 className="text-md sm:text-3xl font-semibold text-white">
                    TRẢI NGHIỆM
                  </h2>
                </div>
                <p className="text-md sm:text-3xl lg:text-[34px] font-semibold text-[#0D0F2C]">
                  TƯ VẤN MUA NHÀ 1:1
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-teal p-6 lg:p-8 space-y-4">
              <p className="text-center text-lg font-semibold text-teal-200">
                GIÁ TRẢI NGHIỆM CHỈ:
              </p>
              <div className="text-center">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-3xl sm:text-4xl lg:text-[35px] font-bold text-teal-600">
                    399.000 VNĐ/
                  </span>
                  <span className="text-xl lg:text-2xl text-teal-600">
                    buổi tư vấn
                  </span>
                </div>
                <div className="w-full h-px bg-teal-200 my-4"></div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-teal-600">
                    999.000 VNĐ/
                  </span>
                  <span className="text-xl lg:text-2xl text-teal-600">
                    gói 3 buổi tư vấn
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <button 
                onClick={handleMessengerClick} 
                className="w-full bg-teal hover:bg-teal-dark transition-colors text-white font-medium text-lg lg:text-[23px] py-4 lg:py-4 rounded-full flex items-center justify-center gap-3 shadow-lg"
              >
                <img
                  src="image 27.png"
                  alt="Zalo"
                  className="w-7 h-7"
                />
                Tư vấn và Đặt lịch
              </button>
              <button onClick={() => window.open("https://quatang.finful.co/", "_blank")} className="w-full bg-white hover:bg-gray-50 transition-colors text-[#333] font-medium text-lg lg:text-[23px] py-4 lg:py-4 rounded-full border border-teal">
                Nhận quà miễn phí trước
              </button>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-dark rounded-lg overflow-hidden lg:col-span-2">
            <div className="bg-dark p-6 lg:p-8 text-center">
              <h3 className="text-white text-lg lg:text-xl font-bold mb-2">
                NHANH TAY ĐĂNG KÝ
              </h3>
              <p className="text-white/80 text-base lg:text-lg">
                Số lượng ưu đãi và thời gian có hạn
              </p>
            </div>

            <div className="bg-dark-light p-6 lg:p-8">
              <div className="flex items-center justify-center gap-2 lg:gap-3 mb-6">
                <div className="bg-cyan-light p-3 lg:p-4 rounded">
                  <p className="text-2xl lg:text-3xl font-semibold text-dark -tracking-wider">
                    {String(timeLeft.days).padStart(2, "0")}
                  </p>
                </div>
                <div className="bg-cyan-light p-3 lg:p-4 rounded">
                  <p className="text-2xl lg:text-3xl font-semibold text-dark -tracking-wider">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </p>
                </div>
                <div className="bg-cyan-light p-3 lg:p-4 rounded">
                  <p className="text-2xl lg:text-3xl font-semibold text-dark -tracking-wider">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </p>
                </div>
                <div className="bg-cyan-light p-3 lg:p-4 rounded">
                  <p className="text-2xl lg:text-3xl font-semibold text-dark -tracking-wider">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 lg:gap-4 mb-8 text-white/70 text-base lg:text-lg font-medium">
                <span>Ngày</span>
                <span>Giờ</span>
                <span>Phút</span>
                <span>Giây</span>
              </div>

              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full px-4 py-3 rounded-md bg-[#FAFAFA] border border-[#F2F2F2] text-[#333] placeholder-[#B0B0B0] font-medium"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  className="w-full px-4 py-3 rounded-md bg-[#FAFAFA] border border-[#F2F2F2] text-[#333] placeholder-[#B0B0B0] font-medium"
                  pattern="0[0-9]{9}"
                  title="Số điện thoại phải có 10 chữ số và bắt đầu bằng số 0."
                  maxLength={10}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <div className="relative">
                  <select
                    className="w-full px-4 py-3 rounded-md bg-[#FAFAFA] border border-[#F2F2F2] text-[#333] font-medium appearance-none"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                  >
                    {/* Đã sửa giá trị các option */}
                    <option>Vé thường (1 buổi)</option>
                    <option>Vé VIP (3 buổi)</option>
                  </select>
                  <svg
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 fill-[#333]"
                    viewBox="0 0 10 9"
                  >
                    <path d="M4.94318 8.25L-0.00110563 -1.06691e-07L9.88746 8.77543e-07L4.94318 8.25Z" />
                  </svg>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal hover:bg-teal-dark transition-colors text-white font-medium text-base py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  Đặt lịch cho tôi
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M1 7.72656H15"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.27344 2L15.0007 7.72727L9.27344 13.4545"
                      stroke="white"
                      strokeWidth="1.27273"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <p className="text-white/80 text-sm italic text-center px-4">
                  (*) Chúng tôi sẽ liên hệ với bạn để đặt lịch tư vấn trong vòng
                  24 giờ tiếp theo
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <PaymentModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}
