import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useWindowSize from "../../../../utils/useWindowSize";

function IntroEarn() {
  let history = useHistory();
  const size = useWindowSize();

  const [isMobile, setIsMobile] = useState(false);
  const [isExplore, setIsExplore] = useState(false);

  useEffect(() => {
    if (size.width <= 768) setIsMobile(true);
    else setIsMobile(false);
  }, [size]);

  useEffect(() => {
    if (!isExplore) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isExplore]);

  if (!isExplore) {
    return (
      <div className="w-full h-[100vh] bg-[#10213f] bg-introearn-starsstart bg-contain bg-left bg-no-repeat  overflow-hidden">
        <div className="md:h-[35vh]"></div>
        <div className="flex justify-start md:ml-[17%] md:text-[250px] md:leading-[298px] md:font-[600]">
          <div className="relative text-transparent md:text-[250px] md:leading-[298px] md:font-[600] bg-introearn-title-gradient bg-clip-text">
            <div className="absolute md:right-[calc(55px-120vh)] md:top-[calc(149px-50vh)] md:w-[120vh] md:h-[120vh] bg-introearn-earth bg-contain bg-center"></div>
            EARN
          </div>
        </div>
        <div
          className="md:md-[30px] md:ml-[18%] md:w-[200px] md:h-[61px] flex items-center justify-center text-[#FFF] md:text-[30px] md:leading-[36px] md:font-[500] border-[1px] border-[#FFF] cursor-pointer"
          onClick={() => setIsExplore(true)}
        >
          Explore
          <div className="bg-introearn-down-arrow bg-cover bg-center md:w-[44.17px] md:h-[44.17px] md:ml-[10px]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#10213f]">
      <div className="relative w-full h-[100vh] bg-[#10213f] bg-introearn-starsstart bg-cover bg-left  overflow-hidden">
        <div className="absolute  bg-introearn-earth bg-cover bg-center md:left-[70vw] md:bottom-[60vh] md:w-[120vh] md:h-[120vh]"></div>
        <div className="md:h-[35vh]"></div>
        <div className="md:text-[48px] md:leading-[57px] md:font-[600] text-[#FFF] text-center">
          EARN
        </div>
        <div className="md:text-[250px] md:leading-[290px] md:font-[600] text-[#1199FA] text-center">
          8%
        </div>
        <div className="md:text-[32px] md:leading-[38px] md:font-[600] text-[#FFF] text-center">
          Earn on your deposits. Withdraw anytime.{" "}
        </div>
      </div>
      <div className="relative w-full h-[calc(100vw*963/1512)] flex justify-center items-center bg-[#10213f] bg-introearn-section2 bg-cover bg-left  overflow-hidden">
        <div className="md:w-[70%] flex flex-col items-center">
          <div className="md:text-[74px] md:leading-[88px] md:font-[600] md:text-[#1199FA] text-center">
            Earn 8% p.a. Fixed Interest with No Fees
          </div>
          <div className="md:w-[75%] md:mt-[50px] md:text-[20px] md:leading-[24px] md:font-[500] md:text-[#FFF] text-center">
            Since you are your own bank, you make money from your deposits and
            from your borrowing. No fees/No annual, foreign-transaction, or late
            fees. No financial institution will be able to match 8% APY per year
            on your deposit.
          </div>
          <div className="md:mt-[80px] md:py-[15px] md:px-[32px] text-[#FFF] md:text-[32px] md:leading-[38px] md:font-[500] md:rounded-[4px] bg-[#1199FA]">
            Calculate Your Rewards
          </div>
        </div>
      </div>
      <div className="md:w-full  md:pb-[150px] bg-introearn-star-group2 bg-contain bg-center bg-no-repeat">
        <div className="md:mt-[70px] md:text-[74px] md:leading-[88px] md:font-[600] text-[#FFF] text-center">
          Calculate Your Crypto Yield.
        </div>
        <div className="relative md:mt-[50px] md:w-[55%] mx-auto md:text-[20px] md:leading-[24px] md:font-[500] text-[#ffffffde] text-center">
          <div className="absolute md:left-[-10vw] md:top-[-70px] md:w-[28vw] md:h-[calc(28vw*128/441)] bg-introearn-linegroup bg-cover bg-center"></div>
          Make a deposit in any currency from anywhere in the world, now you are
          earning 8% fixed rate p.a. on your deposit. You can access it anytime.
        </div>
        <div className="md:mt-[150px] mx-auto md:pt-[70px] md:w-[80%] border-[1px] border-[#ffffff36]">
          <div className="flex flex-row justify-between md:px-[5%]">
            <div className="md:w-[45%] md:text-[24px] md:leadding-[29px] text-[#FFF]">
              <div>Select your asset</div>
              <div className="md:mt-[25px] md:w-[100%] md:h-[56px] rounded-[13px] md:bg-[#0D1E37]">
                <div className="md:h-[56px] flex justify-between items-center md:px-[20px]">
                  <div className="flex items-center">
                    <div className="w-[30px] h-[30px] bg-introearn-bitcoin bg-cover bg-center"></div>
                    <span className="text-[#767070] mx-[5px]">Bitcoin</span>{" "}
                    <span className="text-[#CCCDCD]">(BTC)</span>
                  </div>
                  <div className="w-[24px] h-[24px] bg-introearn-arrow2 bg-cover bg-center"></div>
                </div>
              </div>
              <div className="md:mt-[30px]">
                Amount would you like to deposit
              </div>
              <div className="md:mt-[25px] md:w-[100%] md:h-[56px] rounded-[13px] md:bg-[#0D1E37]">
                <div className="md:h-[56px] flex justify-between items-center md:px-[20px]">
                  <span className="text-[#767070] mx-[5px]">0.00</span>{" "}
                  <div className="bg-introearn-currenty bg-cover bg-center w-[78px] h-[33px]"></div>
                </div>
              </div>
            </div>
            <div className="md:w-[40%] md:text-[24px] md:leadding-[29px] text-[#FFF]">
              <div>Choose time period:</div>
              <div className="md:mt-[25px] p-[7px] flex justify-between md:w-[70%] md:h-[56px] rounded-[13px] border-[2px] border-[#000000] md:bg-[#0B1A2F]"></div>
              <div className="md:mt-[30px]">Expected Earnings</div>
              <div className="md:mt-[21px] flex items-center h-[64px] bg-[#00308D] border-[#0000002e] border-[1px] rounded-[13px] px-[22px]">
                <div className="bg-introearn-price-gradient md:text-[40px] md:leading-[48px] md:font-[600] bg-clip-text text-transparent">
                  $14,500
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[30px] px-[5%]">
          <div className="text-[#ffffffe3] md:text-[24px] md:leading-[29px] md:font-[400]">
            Expected APY based on your deposit
          </div>
          <div className="mt-[20px] bg-introearn-chart bg-cover bg-center md:w-[70vw] md:h-[calc(70vw*334/911)]"></div></div>
          <div className="md:mt-[38px] md:mb-[70px] text-[#707070] text-[14px] leading-[17px] font-[600] text-center">
            Copyright © 2022 Maui Finance. All rights reserved.Privacy Policy
            Terms and Conditions Legal
          </div>
        </div>
        <div className="md:w-[80%] md:mt-[20px] flex flex-row-reverse md:text-[16px] md:leading-[19px] md:font-[500] text-[#6F6F6F] tracking-[0.195em] mx-auto">
          USD, EUR, USDC, DAI*
        </div>
      </div>
    </div>
  );
}

export default IntroEarn;
