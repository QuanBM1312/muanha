export default function PricingSection() {
  const packages = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/eca7eab528a92559bc491907c3f5a6abf0ee00e3?width=74",
      title: "Vé thường",
      originalPrice: "1,000,000 đ",
      price: "399.000 đ",
      features: [
        {
          text: "1 buổi",
          highlight: true,
          description: "trải nghiệm tư vấn mua nhà 1:1 với chuyên gia",
        },
        {
          text: "Tài liệu phân tích tổng quan thị trường và các kênh đầu tư năm 2025 trị giá 5.000.000",
          highlight: false,
        },
        {
          text: "Tài liệu phân thích về bản thân - yếu tố quyết định 90% thành công trong tích luỹ và chinh phục mục tiêu tài chính",
          highlight: false,
        },
      ],
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/eca7eab528a92559bc491907c3f5a6abf0ee00e3?width=74",
      title: "Vé VIP",
      originalPrice: "3,000,000 đ",
      price: "999.000 đ",
      features: [
        {
          text: "Lộ trình 3 buổi",
          highlight: true,
          description: "trải nghiệm tư vấn mua nhà 1:1 với chuyên gia",
        },
        {
          text: "Tài liệu phân tích tổng quan thị trường và các kênh đầu tư năm 2025 trị giá 5.000.000",
          highlight: false,
        },
        {
          text: "Tài liệu phân thích về bản thân - yếu tố quyết định 90% thành công trong tích luỹ và chinh phục mục tiêu tài chính",
          highlight: false,
        },
      ],
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-cyan-bg">
      <div className="max-w-[1349px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D0F2C]/70 -tracking-wider mb-4">
            ƯU ĐÃI CÓ HẠN
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-3 text-3xl sm:text-4xl lg:text-6xl font-semibold -tracking-wider">
            <span className="text-[#0D0F2C]">Lựa chọn</span>
            <span className="bg-gradient-teal bg-clip-text text-transparent">
              gói trải nghiệm
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white border border-teal rounded-[26px] shadow-xl p-8 lg:p-10 space-y-8"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-teal rounded-2xl">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  {index === 0 ? (
                    <path
                      d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4M22.6667 16C22.6667 19.6819 19.6819 22.6667 16 22.6667C12.3181 22.6667 9.33333 19.6819 9.33333 16C9.33333 12.3181 12.3181 9.33333 16 9.33333M19.6772 12.4688L24.9558 13.0232L27.8172 9.01723L24.3835 7.87266L23.239 4.43895L19.233 7.30038L19.6772 12.4688ZM19.6772 12.4688L16 15.9999"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ) : (
                    <path
                      d="M4.14882 12.0002H27.8487M9.39698 4.06753L15.9988 12.0003L22.6117 4.07309M27.5801 11.3723L22.9821 4.47521C22.8663 4.30155 22.8084 4.21472 22.7319 4.15186C22.6642 4.09621 22.5862 4.05446 22.5024 4.02899C22.4076 4.00022 22.3033 4.00022 22.0946 4.00022H9.90296C9.69425 4.00022 9.58989 4.00022 9.49516 4.02899C9.4113 4.05446 9.33329 4.09621 9.26558 4.15186C9.1891 4.21472 9.13121 4.30155 9.01544 4.47521L4.41739 11.3723C4.26667 11.5984 4.1913 11.7114 4.1643 11.833C4.14044 11.9404 4.14354 12.0521 4.17332 12.158C4.20703 12.2779 4.28854 12.3866 4.45157 12.604L15.1454 26.8624C15.4349 27.2484 15.5797 27.4414 15.7571 27.5104C15.9125 27.5709 16.085 27.5709 16.2404 27.5104C16.4179 27.4414 16.5626 27.2484 16.8521 26.8624L27.546 12.604C27.709 12.3866 27.7905 12.2779 27.8242 12.158C27.854 12.0521 27.8571 11.9404 27.8332 11.833C27.8062 11.7114 27.7309 11.5984 27.5801 11.3723Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}
                </svg>
              </div>

              <div>
                <h3 className="text-3xl lg:text-[44px] font-medium text-[#1B223C] -tracking-tight mb-2">
                  {pkg.title}
                </h3>
                <p className="text-xl lg:text-2xl font-light text-[#797878]">
                  Giá gốc: {pkg.originalPrice}
                </p>
              </div>

              <div className="text-4xl lg:text-6xl font-semibold text-teal -tracking-tight">
                {pkg.price}
              </div>

              <div className="h-px bg-teal"></div>

              <div className="space-y-5">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/a5f08c3fbdb40f7bf5bfc0bfedbffe1e71c5b4e4?width=54"
                      alt=""
                      className="w-6 h-6 lg:w-7 lg:h-7 flex-shrink-0 mt-1"
                    />
                    <p className="text-lg lg:text-[22px] text-[#1B223C] leading-relaxed">
                      {feature.highlight ? (
                        <>
                          <span className="font-bold text-teal">
                            {feature.text}
                          </span>
                          {feature.description && ` ${feature.description}`}
                        </>
                      ) : (
                        feature.text
                      )}
                    </p>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 lg:py-5 border border-teal rounded-xl text-[#1B223C] text-xl lg:text-2xl hover:bg-teal hover:text-white transition-colors">
                Đăng ký
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
