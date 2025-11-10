export default function ProblemsSection() {
  const problems = [
    {
      title: "Khao khát an cư, nhưng sức mình có hạn",
      description:
        "Bạn làm việc chăm chỉ, nhưng giá nhà cứ luôn tăng nhanh hơn tốc độ tăng lương của bạn",
    },
    {
      title: "Sắp đón thành viên mới, nỗi lo nhân đôi",
      description:
        "Niềm vui lập gia đình, sinh con cũng đi kèm nỗi lo, bạn khao khát một tổ ấm cho mình và người thân yêu",
    },
    {
      title: "Áp lực vô hình từ bạn bè, gia đình",
      description:
        'Những bài viết khoe sổ đỏ, những câu hỏi "Đã có nhà chưa" khiến bạn cảm thấy vô cùng nặng nề',
    },
    {
      title: "Bế tắc trước ma trận thông tin",
      description:
        'Bạn sợ vay nợ quá sức, sợ mua phải căn nhà pháp lý không rõ ràng, sợ bị môi giới "dắt mũi"...',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-[1349px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D0F2C] -tracking-wider mb-2">
            Bạn muốn{" "}
            <span className="bg-gradient-teal bg-clip-text text-transparent">
              mua nhà
            </span>
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold -tracking-wider">
            <span className="text-[#0D0F2C]">nhưng gặp không ít </span>
            <span className="bg-gradient-teal bg-clip-text text-transparent">
              trở ngại
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/53d2763067ef7b1a0b5ab33ef34d24bddd15364f?width=1208"
              alt="Illustration"
              className="w-full max-w-xl mx-auto"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-5">
            {problems.map((problem, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-16 h-16 lg:w-[66px] lg:h-[66px] rounded-full bg-teal shadow-md flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/eca7eab528a92559bc491907c3f5a6abf0ee00e3?width=74"
                    alt=""
                    className="w-9 h-9"
                  />
                </div>
                <div className="flex-1 bg-[#F4FBFB] border border-[#E6E7E9] rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-[#333] mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-[15px] text-[#616265]">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
