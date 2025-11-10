export default function RoadmapSection() {
  const sessions = [
    {
      number: "BUỔI 1",
      title: "VƯỢT RÀO CẢN TÂM LÝ, XÂY NỀN TẢNG VỮNG CHẮC",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/86b8ce5807224bb4460cfd4d8c014fe3d29fca45?width=802",
      points: [
        "Phân tích tổng quan về thị trường BĐS, đưa ra một số dự báo về diễn biến tương lai dựa trên chu kỳ kinh tế và chu kỳ BĐS",
        "Khai vấn để hiểu về những rào cản tâm lý, những niềm tin giới hạn của bạn, qua đó đưa ra góc nhìn để kiểm soát nỗi lo đó",
        "Lập checklist đầy đủ cho lộ trình mua nhà từ A-Z"
      ]
    },
    {
      number: "BUỔI 2",
      title: "THIẾT KẾ LỘ TRÌNH HÀNH ĐỘNG CÁ NHÂN HOÁ",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1c31b7ac79957e72130ad76dcdde7189334fd7c1?width=802",
      points: [
        "Hiểu về căn nhà mơ ước và khả năng tài chính, tiềm năng tài chính của bạn",
        "Xây dựng kế hoạch tích luỹ tài chính, bao gồm đầy đủ dự phòng, bảo vệ, tích luỹ an toàn và tích luỹ tăng trưởng",
        "Giải mã các bẫy pháp lý, bẫy vay nợ, bẫy tư vấn bất động sản thường gặp trong quá trình mua nhà"
      ]
    },
    {
      number: "BUỔI 3",
      title: "TỐI ƯU TÍCH LUỸ VÀ GIẢI ĐÁP CÁ NHÂN",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/717182a17d7330495933557a5714bcfd03f2a841?width=802",
      points: [
        "Điều chỉnh kế hoạch tích luỹ dựa trên sự thay đổi tình hình tài chính của riêng bạn (nếu có)",
        "Đề xuất phân bố danh mục đầu tư để phù hợp với tình hình thị trư���ng tài chính, đảm bảo tối đa hiệu suất sinh lời",
        "Cá nhân hoá tư vấn, giải đáp các thắc mắc của bạn về hành trình mua nhà"
      ]
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex flex-wrap justify-center items-center gap-3 mb-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D0F2C] -tracking-wider">
              Lộ trình
            </h2>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold -tracking-wider bg-gradient-teal bg-clip-text text-transparent">
              3 buổi tư vấn 1:1
            </h2>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D0F2C] -tracking-wider">
            an tâm mua nhà
          </h2>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="bg-teal rounded-xl p-6 lg:p-8"
            >
              <div className="grid lg:grid-cols-[400px_1fr] gap-6 lg:gap-10 items-center">
                <img
                  src={session.image}
                  alt={session.title}
                  className="w-full rounded-lg"
                />

                <div className="space-y-6 lg:space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-3xl lg:text-5xl font-semibold text-white -tracking-wider">
                      {session.number}
                    </h3>
                    <h4 className="text-xl lg:text-2xl font-semibold text-white">
                      {session.title}
                    </h4>
                  </div>

                  <div className="border-2 border-white rounded-xl p-5 lg:p-6 space-y-4">
                    {session.points.map((point, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <img
                          src="https://api.builder.io/api/v1/image/assets/TEMP/5d89cb08ac8973c725a43d053fd6e940ec6a12c7?width=56"
                          alt=""
                          className="w-6 h-6 lg:w-7 lg:h-7 flex-shrink-0 mt-0.5"
                        />
                        <p className="text-base lg:text-xl text-white leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
