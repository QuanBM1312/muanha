export default function FreeGiftSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-dark">
      <div className="max-w-[1349px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-[40px] font-medium text-white/90 -tracking-tight">
              Vẫn chưa an tâm để trả phí?
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-5">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white -tracking-wider">
                NHẬN TRƯỚC
              </h3>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold -tracking-wider bg-gradient-teal bg-clip-text text-transparent">
                QUÀ TẶNG ƯU TIÊN
              </h3>
            </div>
          </div>

          <p className="text-lg text-white/90 max-w-4xl mx-auto">
            Đây là cơ hội để bạn tự mình kiểm chứng năng lực và tư duy phân tích thị trường của các chuyên gia Finful trước khi đưa ra bất kỳ quyết định nào. Chúng tôi tin rằng giá trị bạn nhận được sẽ là câu trả lời rõ ràng nhất.
          </p>

          <button className="px-12 lg:px-16 py-4 lg:py-5 bg-teal hover:bg-teal-dark transition-colors text-white text-xl lg:text-2xl font-medium rounded-full">
            Nhận quà miễn phí
          </button>
        </div>
      </div>
    </section>
  );
}
