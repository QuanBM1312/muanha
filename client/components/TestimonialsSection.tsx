export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Gia đình Việt Trần & Mai Anh",
      occupation: "Kinh doanh tự do",
      title: "Mua nhà thành công sau buổi tư vấn 1-1",
      quote:
        "Gia đình có một số khúc mắc, phân vân chưa biết nên mua nhà luôn chưa, sau buổi nói chuyện tư vấn riêng với Finful thì đã tự tin mua luôn rồi. Sổ đỏ trao tay rồi nhé, rất hài lòng về ngôi nhà đầu tiên của gia đình.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/c101cc113c7fca035be2a8172909991bc255fe75?width=134",
    },
    {
      name: "Chị Thắm Bin",
      occupation: "Nhân viên văn phòng",
      title: "Mua nhà thành công sau buổi chia sẻ kiến thức",
      quote:
        "Chương trình chia sẻ rất hay, chị sẽ chia sẻ cho bạn bè cần nhé. Sau buổi gặp gỡ chia sẻ kiến thức thì chị cũng quyết định cọc mua nhà luôn.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/6f0ec1fb7654b4a2f4d3f16d52c0214df062b601?width=134",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-[1349px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D0F2C] -tracking-tight mb-2">
            Khách hàng của chúng tôi đã
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold -tracking-tight bg-gradient-teal bg-clip-text text-transparent">
            thành công "an cư lạc nghiệp"
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-[#CFCFD1] rounded-md p-6 lg:p-8 space-y-6 lg:space-y-8"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 lg:w-[67px] lg:h-[67px] rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-[#333]">
                      {testimonial.name}
                    </h3>
                    <p className="text-base text-[#525252]">
                      {testimonial.occupation}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-base font-semibold text-[#525252]">
                    {testimonial.title}
                  </h4>
                  <div className="space-y-2">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M7.01278 10.5168C6.56072 10.5183 6.11666 10.6362 5.72333 10.859C6.27709 9.42567 7.19554 8.16176 8.38778 7.19236C8.45599 7.13618 8.51247 7.06712 8.554 6.98912C8.59552 6.91111 8.62127 6.82569 8.62979 6.73773C8.6383 6.64978 8.6294 6.561 8.60361 6.47648C8.57781 6.39196 8.53562 6.31335 8.47944 6.24514C8.42327 6.17692 8.35421 6.12044 8.2762 6.07892C8.1982 6.03739 8.11278 6.01164 8.02482 6.00313C7.93686 5.99462 7.84809 6.00351 7.76357 6.02931C7.67905 6.0551 7.60044 6.0973 7.53222 6.15347C5.08778 8.13958 4 10.8896 4 12.5946C4.00421 13.1974 4.18387 13.786 4.51702 14.2885C4.85018 14.7909 5.32243 15.1855 5.87611 15.424C6.23444 15.5976 6.62685 15.6895 7.025 15.6929C7.37545 15.71 7.7257 15.6556 8.05453 15.5333C8.38336 15.4109 8.68391 15.223 8.93796 14.981C9.19201 14.739 9.39426 14.4479 9.53246 14.1254C9.67065 13.8029 9.74191 13.4557 9.74191 13.1049C9.74191 12.754 9.67065 12.4068 9.53246 12.0843C9.39426 11.7618 9.19201 11.4707 8.93796 11.2287C8.68391 10.9867 8.38336 10.7988 8.05453 10.6765C7.7257 10.5541 7.37545 10.4998 7.025 10.5168H7.01278Z"
                        fill="#00ACB8"
                      />
                      <path
                        d="M14.0128 10.542C13.5606 10.543 13.1164 10.6609 12.7233 10.8842C13.2769 9.45235 14.1929 8.18886 15.3817 7.21754C15.4561 7.16391 15.5187 7.09562 15.5657 7.01687C15.6128 6.93812 15.6432 6.85058 15.6551 6.75964C15.667 6.6687 15.6602 6.57628 15.6351 6.48807C15.61 6.39986 15.5671 6.31772 15.509 6.24671C15.4509 6.17571 15.379 6.11733 15.2975 6.07518C15.216 6.03303 15.1268 6.008 15.0353 6.00163C14.9438 5.99525 14.852 6.00767 14.7655 6.03811C14.6789 6.06856 14.5996 6.11639 14.5322 6.17865C12.0878 8.16477 11 10.9148 11 12.6198C11.0029 13.2158 11.1773 13.7984 11.5024 14.298C11.8275 14.7975 12.2895 15.1929 12.8333 15.437C13.2007 15.6157 13.6042 15.7076 14.0128 15.7059C14.3632 15.7229 14.7135 15.6686 15.0423 15.5462C15.3711 15.4238 15.6717 15.236 15.9257 14.994C16.1798 14.752 16.382 14.4609 16.5202 14.1384C16.6584 13.8159 16.7297 13.4687 16.7297 13.1178C16.7297 12.767 16.6584 12.4198 16.5202 12.0973C16.382 11.7748 16.1798 11.4837 15.9257 11.2417C15.6717 10.9997 15.3711 10.8118 15.0423 10.6894C14.7135 10.567 14.3632 10.5127 14.0128 10.5298V10.542Z"
                        fill="#00ACB8"
                      />
                    </svg>
                    <p className="text-[15px] text-[#525252] leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
