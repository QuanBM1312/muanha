import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="max-w-[1349px] mx-auto px-6 lg:px-12 py-6">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c0cf0fd5e9c193649e21960f626ad1c07d5d0222?width=230"
              alt="Finful Logo"
              className="h-8 lg:h-9"
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            <a href="#" className="text-[#656C86] text-sm lg:text-[15px] font-semibold hover:text-teal transition-colors">
              Tư vấn Đầu tư
            </a>
            <a href="#" className="text-[#656C86] text-sm lg:text-[15px] font-semibold hover:text-teal transition-colors">
              Tư vấn Mua nhà
            </a>
            <div className="relative group">
              <button className="flex items-center gap-1 text-[#656C86] text-sm lg:text-[15px] font-semibold hover:text-teal transition-colors">
                Giáo dục tài chính
                <svg width="9" height="6" viewBox="0 0 9 6" fill="none" className="mt-1">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.70899 0.336594C8.89916 0.545319 9 0.820537 9 1.10012C9 1.3797 8.89916 1.65492 8.70899 1.86365L5.24587 5.66345C5.05442 5.87345 4.78578 6 4.4963 6C4.20683 6 3.93823 5.8735 3.74678 5.6635L0.281168 1.86096L0.278722 1.85818C0.0943012 1.64867 -0.00215346 1.37564 3.61916e-05 1.09914C0.00222584 0.822638 0.103012 0.551121 0.291118 0.344728C0.480378 0.137068 0.745186 0.0108831 1.03134 0.00815449C1.31756 0.00542592 1.58477 0.12661 1.77774 0.331099L1.78028 0.3338L4.33793 3.1401C4.42292 3.23335 4.56969 3.23335 4.65468 3.1401L7.20982 0.336546C7.40127 0.126551 7.66991 -7.07934e-08 7.95938 -4.54868e-08C8.24886 -2.01802e-08 8.51754 0.126599 8.70899 0.336594Z" fill="#656C86"/>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
