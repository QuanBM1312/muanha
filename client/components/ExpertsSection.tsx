export default function ExpertsSection() {
  const experts = [
    {
      name: "ThS. Nguyễn Thu Giang",
      role: "Cố vấn Tài chính",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/72abc51dd8c05389c504819085c58948dafee9ef?width=706",
      experience: [
        "8+ năm kinh nghiệm trong lĩnh vực tư vấn tài chính, bảo hiểm",
        "Đã tư vấn 200+ khách hàng cá nhân, giúp họ đạt mục tiêu tài chính",
        "Chuyên gia cộng tác các chuyên mục tài chính cho VnExpress, báo Phụ nữ Việt Nam, báo Lao Động, báo Dân trí,..."
      ],
      qualifications: [
        "Thành viên Hiệp hội Tư vấn Tài chính Việt Nam (VFCA)",
        "Thạc sĩ Kinh tế Quốc tế Đại học Ceram Sophia Antipolis, Cộng hoà Pháp",
        "Chứng chỉ Hoạch định tài chính cá nhân Đại học kinh tế - ĐH quốc gia HN"
      ]
    },
    {
      name: "ThS. Đỗ Thu Hồng",
      role: "Cố vấn Tài chính cá nhân & Quản lý gia sản",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1b089b3f5bd71555bd6468232d9b7bfc1a25a063?width=636",
      experience: [
        "10+ năm kinh nghiệm trong lĩnh vực ngân hàng",
        "5+ năm kinh nghiệm tư vấn lĩnh vực tài chính, bảo hiểm",
        "Đã tư vấn 200+ khách hàng cá nhân, giúp họ đạt mục tiêu tài chính"
      ],
      qualifications: [
        "Thành viên Hiệp hội Tư vấn Tài chính Việt Nam (VFCA)",
        "Giảng viên Giáo dục Tài chính (CFEI) được chứng nhận bởi NFEC (Mỹ)",
        "Chứng nhận Nhà hoạch định Tài chính cá nhân Việt Nam (VFCA)"
      ]
    }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-[1349px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D0F2C] leading-tight -tracking-wider mb-4">
            Sự hỗ trợ của các chuyên gia
          </h2>
          <p className="text-lg font-medium text-[#333] max-w-3xl mx-auto">
            Chúng tôi làm việc cùng các chuyên gia dày dặn kinh nghiệm trong ngành tài chính, đã thành công tư vấn và đồng hành cùng hàng ngàn người dùng
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-8">
          {experts.map((expert, index) => (
            <div key={index} className="relative border border-[#E6E7E9] rounded-md overflow-hidden">
              <div className="absolute top-0 right-0 w-[40%] h-full bg-teal rounded-md">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="absolute -left-8 top-8 w-auto h-[90%] object-cover"
                />
              </div>

              <div className="relative bg-white w-[65%] p-6 space-y-6">
                <div>
                  <h3 className="text-xl lg:text-[23px] font-semibold text-black mb-1">
                    {expert.name}
                  </h3>
                  <p className="text-sm text-black">{expert.role}</p>
                </div>

                <div className="h-px bg-[#E6E7E9]"></div>

                <div className="space-y-2">
                  <h4 className="text-[15px] font-semibold text-teal">KINH NGHIỆM</h4>
                  <ul className="space-y-1">
                    {expert.experience.map((item, idx) => (
                      <li key={idx} className="text-sm text-black">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-px bg-[#E6E7E9]"></div>

                <div className="space-y-2">
                  <h4 className="text-[15px] font-semibold text-teal">TRÌNH ĐỘ CHUYÊN MÔN</h4>
                  <ul className="space-y-1">
                    {expert.qualifications.map((item, idx) => (
                      <li key={idx} className="text-sm text-black">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4">
          <div className="w-2.5 h-2.5 rounded-full bg-teal"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#C7C7C7]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#C7C7C7]"></div>
        </div>
      </div>
    </section>
  );
}
