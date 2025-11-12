export default function Footer() {
  const companyLinks = [
    { text: "Về chúng tôi", href: "#" },
    { text: "Blog", href: "#" },
    { text: "Liên hệ", href: "#" },
  ];
  const individualLinks = [
    { text: "Đồng hành và Tư vấn Mua nhà", href: "#" },
    { text: "Đồng hành và Tư vấn Đầu tư", href: "https://tuvandautu.finful.co/" },
    { text: "Thư viện tài chính cá nhân", href: "https://app.finful.co/sign-in?redirect_url=https%3A%2F%2Fapp.finful.co%2Fcourse%2F65fb0e91feebb569c2191340%3Ffbclid%3DIwY2xjawGXuQ9leHRuA2FlbQIxMAABHQz4oKhOcoGY-vfIIYNQ0Bi8Grznu_ZpfIf_M0V_mZ5CF8qkodGIA2rAcQ_aem_ZUu0TxwVY7QuOmaOqMPvDA" },
    { text: "Thư viện phân tích chứng khoán", href: "https://global.finful.co/sign-in?redirect_url=https%3A%2F%2Fglobal.finful.co%2Fcourse%2F654b4b6c919baafbb5c4e975%3Ffbclid%3DIwY2xjawGXuPtleHRuA2FlbQIxMAABHVmJVUh1h6PjYXMWcGrc4Rk4_QmPn22qZimfZLo3aj_a-POutj-ma8d90w_aem_j78gg5nee3mqU6GYcU4ItA" },
  ];
  const organizationLinks = [
    { text: "Thiết kế nội dung giáo dục tài chính", href: "#" },
  ];

  const partnerLogos = [
    "https://api.builder.io/api/v1/image/assets/TEMP/f5d1447d7223c864db34e3d50adcb583643f4e00?width=694",
    "https://api.builder.io/api/v1/image/assets/TEMP/ee76bae5c419c4dab88d5660ee0d1382cdae48fa?width=140",
    "https://api.builder.io/api/v1/image/assets/TEMP/6fe487fdb381d7e8bb8a89d590b3100bcefc00e3?width=796",
    "https://api.builder.io/api/v1/image/assets/TEMP/18fb354d253629bdc75cc1e06adafc5b91895df3?width=176",
    "https://api.builder.io/api/v1/image/assets/TEMP/43554eaa52abafdda503c401a53db18ae381d05b?width=140",
    "https://api.builder.io/api/v1/image/assets/TEMP/259ee83e382e78b873732e1e75a1890e8d55d42f?width=644",
    "https://api.builder.io/api/v1/image/assets/TEMP/e23d3b793ab38f00278a9090597e2b9d1ff69b3a?width=354",
  ];

  return (
    <footer className="w-full bg-dark-footer text-white">
      {/* Partners Section */}
      <div className="border-b border-white/10 py-12 lg:py-16">
        <div className="max-w-[1349px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="relative mb-8">
            <h3 className="text-2xl lg:text-3xl font-semibold text-[#B0B0B0] text-center -tracking-tight">
              TIN TƯỞNG BỞI CÁC TỔ CHỨC LỚN
            </h3>
            <div className="absolute top-1/2 left-0 w-[20%] h-px bg-[#B0B0B0]"></div>
            <div className="absolute top-1/2 right-0 w-[20%] h-px bg-[#B0B0B0]"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {partnerLogos.slice(0, 3).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-10 lg:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 mt-8">
            {partnerLogos.slice(3).map((logo, index) => (
              <img
                key={index + 3}
                src={logo}
                alt={`Partner ${index + 4}`}
                className="h-10 lg:h-14 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 lg:py-16">
        <div className="max-w-[1349px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
            {/* Company Info */}
            <div className="space-y-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/99907c7262a3878b061f5b274fb9f4dbeb82d46c?width=320"
                alt="Finful Logo"
                className="h-10 lg:h-12"
              />
              <p className="text-[15px] text-white/70">
                © 2025 Finful, Inc. All rights reserved.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/db8bfd14369d9eb929b094c09b5aa978fee34bb2?width=56"
                    alt="Facebook"
                    className="w-7 h-7"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/acba98170790077f72c74e3dde0cf0c0af6e9f52?width=56"
                    alt="LinkedIn"
                    className="w-7 h-7"
                  />
                </div>
                <p className="text-[15px] font-medium">hello@finful.co</p>
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="text-[15px] font-bold text-white/70">CÔNG TY</h4>
              <ul className="space-y-2.5">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-teal transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Individual Services */}
            <div className="space-y-4">
              <h4 className="text-[15px] font-bold text-white/70">
                DÀNH CHO CÁ NHÂN
              </h4>
              <ul className="space-y-2.5">
                {individualLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-teal transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Organization Services */}
            <div className="space-y-4">
              <h4 className="text-[15px] font-bold text-white/70">
                DÀNH CHO TỔ CHỨC
              </h4>
              <ul className="space-y-2">
                {organizationLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-teal transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
