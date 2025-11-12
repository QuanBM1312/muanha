import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function RegistrationSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Vé thường (1 buổi)",
  });

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfmTWM0DS_BKl3-piwNc2HVc_GF4rZTya-GuSzBj5_fN-F75w/formResponse";
    const formDataUrl = new URLSearchParams();

    formDataUrl.append("entry.890595491", formData.name); // Họ và tên
    formDataUrl.append("entry.792977596", formData.phone); // Số điện thoại
    formDataUrl.append("entry.1205721405", formData.service); // Dịch vụ muốn đăng ký

    try {
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataUrl.toString(),
      });
      alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ lại sớm.");
      setFormData({
        name: "",
        phone: "",
        service: "Vé thường (1 buổi)",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  return (
    <section id="dang-ky" className="w-full py-16 lg:py-24 bg-cyan-bg">
      <div className="max-w-[1349px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Payment Info */}
          <div
            className="bg-cover bg-center rounded-lg p-8 lg:p-12"
            style={{
              backgroundImage:
                "url('https://api.builder.io/api/v1/image/assets/TEMP/4c0fbe6861e7a9c325a2c313538259c0acf70158?width=1040')",
            }}
          >
            <div className="space-y-8">
              <div className="space-y-6">
                <img
                  src="/image 8.png"
                  alt="QR Code"
                  className="w-48 h-56 object-contain"
                />
                <div className="space-y-1.5 text-white">
                  <p className="text-lg">
                    Nhân hàng:{" "}
                    <span className="font-medium">Ngân hàng Quân đội (MB)</span>
                  </p>
                  <p className="text-lg">
                    Chủ tài khoản:{" "}
                    <span className="font-medium">CONG TY CO PHAN FINFUL</span>
                  </p>
                  <p className="text-lg">
                    Số tài khoản:{" "}
                    <span className="font-medium">9602345678</span>
                  </p>
                  <p className="text-lg">
                    Nội dung:{" "}
                    <span className="font-medium">
                      Loại vé - Họ tên - Số điện thoại
                    </span>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-px bg-white"></div>
                <div className="flex gap-2 items-start">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b3040a99b384853933bb9c49730cc00e33d0da5d?width=38"
                    alt=""
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                  />
                  <p className="text-[15px] text-white">
                    Mọi thông tin cá nhân của Quý khách đều được bảo mật bởi
                    Finful. Tham khảo Điều khoản bảo mật thông tin tại đây.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Registration Form */}
          <div className="bg-white border border-[#D8D8D8] rounded-lg p-8 lg:p-12">
            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl lg:text-3xl font-semibold text-[#333] -tracking-tight">
                  Thông tin đăng ký
                </h3>
                <p className="text-base text-[#616265]">
                  Vui lòng hoàn tất các thông tin dưới đây. Chúng tôi sẽ liên hệ
                  để đặt lịch với Quý khách trong vòng 24 giờ tiếp theo.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="space-y-2">
                  <label className="text-base font-semibold text-[#5B5B5B]">
                    Họ tên*
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập họ tên"
                    className="w-full px-3 py-2.5 rounded-md bg-[#FAFAFA] border border-[#F2F2F2] text-[#333] placeholder-[#B0B0B0] font-medium"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-base font-semibold text-[#5B5B5B]">
                    Số điện thoại*
                  </label>
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
                </div>

                <div className="space-y-2">
                  <label className="text-base font-semibold text-[#5B5B5B]">
                    Dịch vụ bạn muốn đăng ký*
                  </label>
                  <div className="relative">
                    <select className="w-full px-3 py-2.5 rounded-md bg-[#FAFAFA] border border-[#F2F2F2] text-[#333] font-medium appearance-none"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                    >
                      <option>Vé thường (1 buổi)</option>
                      <option>Vé VIP (3 buổi)</option>
                    </select>
                    <svg
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 fill-[#333] pointer-events-none"
                      viewBox="0 0 10 9"
                    >
                      <path d="M4.94318 8.25L-0.00110563 -1.06691e-07L9.88746 8.77543e-07L4.94318 8.25Z" />
                    </svg>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-52 bg-teal hover:bg-teal-dark transition-colors text-white text-lg font-medium py-3 rounded-lg"
                >
                  Gửi thông tin
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
