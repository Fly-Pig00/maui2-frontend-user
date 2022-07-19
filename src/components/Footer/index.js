import { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";

function Footer(props) {
  const { location } = props;
  const history = useHistory();

  const [mouseEntered, setMouseEntered] = useState(false);
  const handlePrivacyClick = () => {
    history.push("/privacy");
  };
  const handleTermsClick = () => {
    history.push("/terms");
  };
  if (location.pathname === "/splash" || location.pathname === "/login")
    return null;
  return (
    <div className="relative md:w-full md:h-[818px] bg-[#001535]">
      <div className="md:px-[14.62%] md:pt-[160px] text-[32px] text-[#FFFFFF] font-[500] leading-[38px]">
        Get updates on Maui Finance
      </div>
      <div
        className={`md:mt-[26px] md:mx-[14.62%] ${
          mouseEntered ? "md:h-[79px]" : "md:h-[59px]"
        } flex items-center transition-all duration-1000`}
        onMouseEnter={() => setMouseEntered(true)}
        onMouseLeave={() => setMouseEntered(false)}
      >
        <input
          className="md:w-[76.92%] h-[59px] md:pl-[19px] bg-transparent md:border-l-[1px] md:border-t-[1px] md:border-b-[1px] text-[16px] text-[#FFFFFF]"
          placeholder="Enter your email address"
        />
        <div
          className={`md:w-[23.08%] h-full leading-[33px] text-[28px] font-[400] flex items-center justify-center ${
            mouseEntered ? "bg-[#1199FA]" : "bg-[#FFFFFF]"
          } cursor-pointer transition-all duration-1000`}
        >
          Subscribe
        </div>
      </div>
      <div className="absolute md:left-[42.3%] md:top-[350px] md:w-[39%] flex justify-between">
        <div className="">
          <div className="md:mb-[13.9px] leading-[33px] text-[28px] text-[#FFFFFF] font-[500]">
            Quick Links
          </div>
          <div className="text-[24px] text-[#707070] font-[300] leading-[29px]">
            Maui
          </div>
          <div className="text-[24px] text-[#707070] font-[300] leading-[29px]">
            Cards
          </div>
          <div className="text-[24px] text-[#707070] font-[300] leading-[29px]">
            Start now
          </div>
        </div>
        <div className="">
          <div className="md:mb-[13.9px] leading-[33px] text-[28px] text-[#FFFFFF] font-[500]">
            Developers
          </div>
          <div className="text-[24px] text-[#707070] font-[300] leading-[29px]">
            Team
          </div>
        </div>
        <div className="">
          <div className="md:mb-[13.9px] leading-[33px] text-[28px] text-[#FFFFFF] font-[500]">
            Learn
          </div>
          <div className="text-[24px] text-[#707070] font-[300] leading-[29px]">
            Earn
          </div>
          <div className="text-[24px] text-[#707070] font-[300] leading-[29px]">
            Borrow
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col md:flex-row items-center justify-between w-[360px] md:w-[65.22%] bottom-[104px] left-[calc(50%-180px)] md:left-[17.39%]">
        <div className="mb-[5px] text-[12px] md:text-[14px] dark:text-[#F9D3B4] text-[#ffffff70]">
          Copyright © 2022 Maui Finance. All rights reserved. Privacy Policy
          Terms and Conditions Legal
        </div>
        <div className="mb-[5px] flex items-center text-[12px] md:text-[14px] dark:text-[#F9D3B4] text-[#ffffff70]">
          <span
            onClick={handlePrivacyClick}
            className="cursor-pointer mr-[2px] pr-[2px]"
          >
            Privacy Policy /
          </span>
          <span
            onClick={handleTermsClick}
            className="cursor-pointer mr-[2px] pr-[2px]"
          >
            Terms and Conditions /
          </span>
          <span onClick={handleTermsClick} className="cursor-pointer">
            Legal
          </span>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Footer);
