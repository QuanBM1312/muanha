export default function RegistrationSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-cyan-bg">
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
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8752e0cddcd2163508fa9b036ca8cfa6d85d2f78?width=398"
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

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-base font-semibold text-[#5B5B5B]">
                    Họ tên*
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập họ tên"
                    className="w-full px-3 py-2.5 rounded-md bg-[#FAFAFA] border border-[#F2F2F2] text-[#B0B0B0] placeholder-[#B0B0B0] font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-base font-semibold text-[#5B5B5B]">
                    Số điện thoại*
                  </label>
                  <input
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    className="w-full px-3 py-2.5 rounded-md bg-[#FAFAFA] border border-[#F2F2F2] text-[#B0B0B0] placeholder-[#B0B0B0] font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-base font-semibold text-[#5B5B5B]">
                    Gói đăng ký bạn quan tâm*
                  </label>
                  <div className="relative">
                    <select className="w-full px-3 py-2.5 rounded-md bg-[#FAFAFA] border border-[#F2F2F2] text-[#333] font-medium appearance-none">
                      <option>Vé miễn phí</option>
                      <option>Vé thường</option>
                      <option>Vé VIP</option>
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
