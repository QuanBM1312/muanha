export default function ExpertsSection() {
  const experts = [
    {
      name: "ThS. Nguyễn Thu Giang",
      role: "Cố vấn Tài chính",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/020f2a34a587dede0ea359e52e63ac689604eb46?width=706",
      experience: [
        "8+ năm kinh nghiệm trong lĩnh vực tư vấn tài chính, bảo hiểm",
        "Đã tư vấn 200+ khách hàng cá nhân, giúp họ đạt mục tiêu tài chính",
        "Chuyên gia cộng tác các chuyên mục tài chính cho VnExpress, báo Phụ nữ Việt Nam, báo Lao Động, báo Dân trí,...",
      ],
      education: [
        "Thành viên Hiệp hội Tư vấn Tài chính Việt Nam (VFCA)",
        "Thạc sĩ Kinh tế Quốc tế Đại học Ceram Sophia Antipolis, Cộng hoà Pháp",
        "Chứng chỉ Hoạch định tài chính cá nhân Đại học kinh tế - ĐH quốc gia HN",
      ],
    },
    {
      name: "ThS. Đỗ Thu Hồng",
      role: "Cố vấn Tài chính cá nhân & Quản lý gia sản",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/87ce71b81a6d0c09540617a0c52a7041e71a1f92?width=636",
      experience: [
        "10+ năm kinh nghiệm trong lĩnh vực ngân hàng",
        "5+ năm kinh nghiệm tư vấn lĩnh vực tài chính, bảo hiểm",
        "Đã tư vấn 200+ khách hàng cá nhân, giúp họ đạt mục tiêu tài chính",
      ],
      education: [
        "Thành viên Hiệp hội Tư vấn Tài chính Việt Nam (VFCA)",
        "Giảng viên Giáo dục Tài chính (CFEI) được chứng nhận bởi NFEC (Mỹ)",
        "Chứng nhận Nhà hoạch định Tài chính cá nhân Việt Nam (VFCA)",
      ],
    },
    {
      name: "ThS. Nguyễn Minh Đạt",
      role: "Cố vấn Tài chính",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/607833d58a13edb1dce331c80fa4adec37a79664?width=942",
      experience: [
        "10 năm kinh nghiệm trong lĩnh vực Tài chính công, đa số tại các vị trí quản lý",
        "Hoạch định tài chính cá nhân, xây dựng kế hoạch tài chính dài hạn và hoạch định tài sản",
      ],
      education: [
        "Thạc sỹ Tài chính - Ngân hàng",
        "Chứng nhận Nhà hoạch định tài chính cá nhân Việt Nam (VFCA)",
      ],
    },
    {
      name: "Lê Bảo Long",
      role: "Chuyên gia Bất động sản",
      image: "/BaoLong.png",
      experience: [
        "Giám đốc Chiến lược và Marketing tại Batdongsan.com.vn",
        "11+ năm kinh nghiệm làm chiến lược, quản trị dự án và bán hàng tại các công ty tư vấn và công nghệ đầu ngành",
        "Thiết kế và giảng dạy khoá học Bất Động Sản 101 và Mua Nhà 101 với 1,000+ học viên",
      ],
      education: [],
    },
    {
      name: "Nguyễn Lưu Anh Tuấn",
      role: "Chuyên gia Công nghệ Tài chính",
      image: "/tuan.png",
      experience: [
        "Làm việc trực tiếp và điều phối các chuyên gia đầu ngành về đầu tư, tài chính, bất động sản, bảo hiểm",
        "Sáng lập công ty Công nghệ tài chính Finful - Nền tảng hàng đầu về Giáo dục tài chính tại Việt Nam",
        "Xây dựng và đào tạo các chương trình tài chính cá nhân cho các tổ chức tài chính hàng đầu: Techcombank, MoMo, Mastercard, Shinhan Finance,...",
      ],
      education: [],
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-[50px] font-bold text-finful-text-dark mb-5 tracking-tight">
            Sự hỗ trợ của các chuyên gia
          </h2>
          <p className="text-md lg:text-lg text-finful-text max-w-3xl mx-auto">
            Chúng tôi làm việc cùng các chuyên gia dày dặn kinh nghiệm trong ngành tài chính, đã thành công tư vấn và đồng hành cùng hàng ngàn người dùng          
          </p>
        </div>

        <div className="flex overflow-x-auto gap-8 pb-4 -mx-6 px-6 snap-x snap-mandatory">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[560px] snap-start bg-white rounded-lg border border-finful-border overflow-hidden shadow-sm flex"
            >
              <div className="p-6 w-3/5">
                <h3 className="text-2xl font-bold text-finful-text-dark">
                  {expert.name}
                </h3>
                <p className="text-finful-text-muted mb-4">{expert.role}</p>
                <div className="border-t border-finful-border my-4" />

                <div className="text-left space-y-4">
                  {
                    expert.experience.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-teal uppercase tracking-widest mb-2">
                          Kinh nghiệm
                        </h4>
                        <ul className="text-sm text-finful-text space-y-1 list-disc list-inside">
                          {expert.experience.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )
                  }

                  {
                    expert.education.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-teal uppercase tracking-widest mb-2">
                          Trình độ chuyên môn
                        </h4>
                        <ul className="text-sm text-finful-text space-y-1 list-disc list-inside">
                          {expert.education.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )
                  }
                </div>
              </div>
              <div className="w-2/5 bg-teal">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-contain object-bottom"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
