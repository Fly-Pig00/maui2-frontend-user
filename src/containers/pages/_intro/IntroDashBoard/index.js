import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useWindowSize from "../../../../utils/useWindowSize";

function IntroDashBoard() {
  let history = useHistory();
  const size = useWindowSize();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (size.width <= 768) setIsMobile(true);
    else setIsMobile(false);
  }, [size]);

  return (
    <div>
      <div className="relative w-full h-[100vh] bg-[#000]">
        <div className="invisible md:visible md:pt-[26vh] md:mx-[14.61%] md:text-[24px] text-[#FFFFFF] md:leading-[29px] md:font-[400]">
          Get in the Banking Revolution with
        </div>
        <div className="mt-[30vh] h-[12vh] md:w-full md:h-[30vh] flex items-center justify-center md:mt-[22px]">
          <div className="h-[12vh] bg-introdashboard-logoimage bg-contain bg-center bg-no-repeat w-[653px] md:h-[30vh]"></div>
        </div>
        <div className="absolute bottom-[9vh] w-full md:h-[104px] flex items-center justify-center">
          <div className="md:w-[653px] md:h-[100%] flex flex-col md:flex-row items-center">
            <div className="flex justify-center items-center w-[169px] pb-[16px] md:pb-0 md:w-[284px] md:h-[72px] md:mr-[37px] text-[#FFF] text-[14px] md:text-[24px] leading-[16px] md:leading-[29px] md:font-[500] border-b-[1px] md:border-[1px] border-[#F6F8FA]">
              {isMobile ? "Welcome to Maui" : "Start your journey"}
            </div>
            <div className="md:w-0 md:h-[104px] border-l-[1px] border-[#FFF]"></div>
            <div className="flex justify-between mt-[20px] md:mt-0 md:ml-[37px] w-[160px] md:w-[257px] md:h-[56px]">
              <div className="flex items-center text-[14px] md:text-[24px] md:font-[400] text-[#FFF]">
                {isMobile ? "Watch Fullscreen" : "Watch the Film"}
              </div>
              <div className="w-[31.5px] h-[31.5px] md:w-[56px] md:h-[56px] bg-introdashboard-fullscreenimage bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:leading-[116px] bg-indigo-900">
        <div className="pt-[14vh] md:pt-[30vh] px-[20px] md:px-0 text-[45px] md:text-[96px] drop-shadow-[0_4px_17px_rgba(0,0,0,0.58)] text-[#1199FA] md:font-[600] text-left md:text-center">
          <span>Welcome to MAUI, you are</span>
          {!isMobile && <br />}
          <span>now the bank.</span>
          {!isMobile && <br />}
          <span> Banking </span>
          <span className="text-[#FFF]">Reinvented.</span>
        </div>
        <div
          className="md:mt-[20px] md:w-[800px] px-[20px] md:px-0 text-[#FFF] text-left md:text-justify text-[18px] md:text-[24px] md:leading-[29px] font-[400] md:font-[500] md:mx-auto"
          style={{ textAlignLast: isMobile ? "left" : "center" }}
        >
          Banking accesible for everyone on the planet, from institutional money
          looking for higher yields to those unbanked in developing countries.
          With Maui you are the bank.
        </div>
        {isMobile&&<div className="px-[20px] mt-[20px] text-[#1199FA] text-[18px] font-[400]">With Maui you are the bank</div>}
      </div>
    </div>
  );
}

export default IntroDashBoard;
