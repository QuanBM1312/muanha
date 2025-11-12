export default function WhatYouSeekSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-cyan-bg">
      <div className="max-w-[1349px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#0D0F2C] -tracking-tight mb-1">
                Chúng tôi hiểu
              </h2>
              <h2 className="text-3xl lg:text-4xl font-semibold -tracking-tight bg-gradient-teal bg-clip-text text-transparent">
                điều bạn thực sự tìm kiếm
              </h2>
            </div>
            <p className="text-lg font-medium text-[#333] pr-12">
              Bạn không chỉ tìm kiếm “một căn nhà”, bạn tìm:
            </p>
            <div className="mt-12">
              <a href="#dang-ky" className="bg-teal px-5 hover:bg-teal-dark transition-colors text-white font-semibold text-lg lg:text-[23px] py-4 lg:py-4 rounded-full flex items-center justify-center gap-3 shadow-lg">
                Nhận ngay →
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 lg:col-span-2">
            {/* Card 1 - Full Width */}
            <div
              className="md:col-span-2 bg-cover bg-center rounded-lg overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://api.builder.io/api/v1/image/assets/TEMP/60d2e6b1fe3dd8ee551e69c91fecf4406791c9b6?width=1466)",
              }}
            >
              <div className="bg-gradient-to-r from-primary-500/90 to-primary-400/80 p-8 md:p-12">
                <span className="text-white text-4xl md:text-5xl font-semibold block mb-4">
                  01
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">
                  Nền tảng vững chắc cho gia đình
                </h3>
                <p className="text-white text-lg max-w-xl">
                  Nơi bạn tự tin xây dựng gia đình, mang lại cho con cái một môi trường phát triển ổn định mà không còn phải nơm nớp lo chuyện dọn nhà, chuyển trọ.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="bg-cover bg-center rounded-lg overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://api.builder.io/api/v1/image/assets/TEMP/ee9c0e7920de01788610ebb9b290e0cf2b749dcc?width=718)",
              }}
            >
              <div className="bg-gradient-to-br from-primary-500/90 to-primary-400/80 p-8 h-full">
                <span className="text-white text-4xl md:text-5xl font-semibold block mb-4">
                  02
                </span>
                <h3 className="text-white text-2xl font-semibold mb-4">
                  Lời khẳng định bản thân
                </h3>
                <p className="text-white text-base">
                  Câu trả lời đanh thép cho những năm tháng nỗ lực, sự công nhận xứng đáng trong mắt bạn bè, người thân.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="bg-cover bg-center rounded-lg overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://cdn.builder.io/api/v1/image/assets/TEMP/32a2da75aa24f0bb7051fe9af3650035ed8cb79d?width=718)",
              }}
            >
              <div className="bg-gradient-to-r from-primary-500/90 to-primary-400/80 p-8 h-full">
                <span className="text-white text-4xl md:text-5xl font-semibold block mb-4">
                  03
                </span>
                <h3 className="text-white text-2xl font-semibold mb-4">
                  Cảm giác an toàn
                </h3>
                <p className="text-white text-base max-w-md">
                  Biết rằng mình đang trả tiền cho tài sản của chính mình, chứ không phải "đốt tiền" thuê nhà hàng tháng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
