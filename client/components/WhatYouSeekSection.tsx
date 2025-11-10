export default function WhatYouSeekSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-cyan-bg">
      <div className="max-w-[1349px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#0D0F2C] -tracking-tight mb-1">
                Chúng tôi hiểu
              </h2>
              <h2 className="text-3xl lg:text-4xl font-semibold -tracking-tight bg-gradient-teal bg-clip-text text-transparent">
                điều bạn thực sự tìm kiếm
              </h2>
            </div>
            <p className="text-lg font-medium text-[#333]">
              Bạn không chỉ tìm ki���m "một căn nhà", bạn tìm:
            </p>
            <button className="px-12 py-4 bg-teal hover:bg-teal-dark transition-colors text-white text-lg font-medium rounded-2xl">
              Nhận ngay →
            </button>
          </div>

          <div className="space-y-3">
            <div className="relative h-64 rounded-md overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/60d2e6b1fe3dd8ee551e69c91fecf4406791c9b6?width=1466"
                alt="Nền tảng vững chắc"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 p-6 lg:p-8 flex flex-col justify-center">
                <div className="text-5xl lg:text-[45px] font-semibold text-white -tracking-wider mb-4">
                  01
                </div>
                <h3 className="text-2xl lg:text-[26px] font-semibold text-white mb-3 -tracking-tight">
                  Nền tảng vững chắc cho gia đình
                </h3>
                <p className="text-lg text-white -tracking-tight">
                  Nơi bạn tự tin xây dựng gia đình, mang lại cho con cái một môi
                  trường phát triển ổn định mà không còn phải nơm nớp lo chuyện
                  dọn nhà, chuyển trọ.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative h-64 rounded-md overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ee9c0e7920de01788610ebb9b290e0cf2b749dcc?width=718"
                  alt="Lời khẳng định"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 p-6 flex flex-col justify-center">
                  <div className="text-4xl lg:text-[45px] font-semibold text-white -tracking-wider mb-4">
                    02
                  </div>
                  <h3 className="text-xl lg:text-[26px] font-semibold text-white mb-3 -tracking-tight">
                    Lời khẳng định bản thân
                  </h3>
                  <p className="text-base lg:text-lg text-white -tracking-tight">
                    Câu trả lời đanh thép cho những năm tháng nỗ lực, sự công
                    nhận xứng đáng trong mắt bạn bè, người thân.
                  </p>
                </div>
              </div>

              <div className="relative h-64 rounded-md overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/32a2da75aa24f0bb7051fe9af3650035ed8cb79d?width=718"
                  alt="Cảm giác an toàn"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 p-6 flex flex-col justify-center">
                  <div className="text-4xl lg:text-[45px] font-semibold text-white -tracking-wider mb-4">
                    03
                  </div>
                  <h3 className="text-xl lg:text-[26px] font-semibold text-white mb-3 -tracking-tight">
                    Cảm giác an toàn
                  </h3>
                  <p className="text-base lg:text-lg text-white -tracking-tight">
                    Biết rằng mình đang trả tiền cho tài sản của chính mình, chứ
                    không phải "đốt tiền" thuê nhà hàng tháng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
