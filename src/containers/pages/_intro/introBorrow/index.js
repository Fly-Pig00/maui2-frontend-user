import React, { useState, useEffect } from "react";
import useWindowSize from "../../../../utils/useWindowSize";

function IntroBorrow() {
  const size = useWindowSize();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (size.width <= 768) setIsMobile(true);
    else setIsMobile(false);
  }, [size]);

  return (
    <div className="bg-[#10213f] md:pb-[70px]">
      <div className="relative w-full h-[100vh] bg-[#10213f] bg-introearn-starsstart bg-cover bg-left  overflow-hidden">
        <div className="absolute  bg-introearn-earth bg-cover bg-center left-[60vw] md:left-[70vw] bottom-[calc(100vh-60vw)] md:bottom-[60vh] w-[100vw] md:w-[120vh] h-[100vw] md:h-[120vh]"></div>
        <div className="w-full mt-[26vh]"></div>
        <div className="text-[20px] md:text-[40px] leading-[24px] md:leading-[48px] font-[500] md:font-[600] text-[#FFF] text-center">
          BORROW UPTO
        </div>
        <div className="text-[150px] md:text-[250px] leading-[179px] md:leading-[298px] font-[600] text-[#00FF99] text-center">
          50%
        </div>
        <div className="w-[70%] mx-auto md:text-[18px] md:leading-[21px] md:font-[500] text-[#FFF] text-center">
          Welcome to the future of banking, where you are the bank. A system
          designed to serve you, and not the other way around.{" "}
          {!isMobile && (
            <span>
              Let's say you deposit $10,000, you then can borrow $5,000 on your
              deposit instantly and not only you don't have to pay interest, but
              you get pay zero money per month. Your collateral gets locked, and
              the yield generated pays off your loan. You have to re imagine the
              way you see finance. Maui brings you the future of people's new
              way of banking where everyone os their own bank and profit from
              themselves.
            </span>
          )}
        </div>
      </div>
      <div className="relative w-full h-[100vh] md:h-[calc(100vw*963/1512)] flex justify-center items-center bg-[#10213f] bg-introborrow-section2mobile md:bg-introborrow-section2 bg-cover bg-center  overflow-hidden">
        <div className="mt-[70px] md:mt-0 w-[85%] mx-auto md:w-[70%] flex flex-col items-center">
          <div className="text-[32px] md:text-[64px] md:text-[52px] leading-[109%] md:leading-[57px] md:leading-[57px] font-[600] text-[#043189] text-center">
            BORROW up to 50% of your deposit instantly and permissionless. No
            repayments.
          </div>
          {!isMobile && (
            <div className="w-[75%] md:mt-[50px] text-[16px] md:text-[20px] leading-[19px] md:leading-[24px] font-[400] md:font-[500] text-[#FFF] text-left md:text-center">
              <div>
                Maui Banking revolutionary services come when you borrow. No
                applications, no forms, no risk management. It’s your money, you
                are the bank.
              </div>
              <br />{" "}
              <div>
                No repayments. The loan repays itself with the yields generated
                by your collateral.
              </div>
            </div>
          )}
          <div className="mt-[50px] md:mt-[80px] md:mx-auto py-[12px] md:py-[15px] px-[28px] md:px-[32px] text-[#FFF] text-center text-[16px] md:text-[32px] leading-[19px] md:leading-[38px] font-[500] border-[1px] md:border-0 border-[#FFF] rounded-[4px] bg-[#0C3E9F] md:bg-[#10213f] cursor-pointer">
            Calculate Your Credit
          </div>
        </div>
      </div>
      <div className="md:w-full  md:pb-[150px] md:bg-introearn-star-group2 bg-contain bg-center bg-no-repeat">
        <div className="mt-[100px] md:mt-[160px] w-[96%] mx-auto md:w-[100%] text-[45px] md:text-[74px] leading-[57px] md:leading-[88px] md:font-[600] text-[#FFF] text-center">
          Calculate Your Credit
          <span className="text-[#18e5a3] md:text-[#FFF]">.</span>
        </div>
        <div className="relative mt-[20px] md:mt-[80px] w-[90%] md:w-[55%] mx-auto text-[20px] md:text-[32px] leading-[24px] md:leading-[38px] font-[500] text-[#ffffffde] text-center">
          <div className="absolute left-[-4px] md:left-0 top-[calc(0px-20vw*128/441)] md:top-[-100px] w-[20vw] md:w-[28vw] h-[calc(20vw*128/441)] md:h-[calc(28vw*128/441)] bg-introearn-linegroup bg-cover bg-center"></div>
          {isMobile && (
            <div className="mb-[100px] text-[14px] leading-[17px] text-[rgba(255,255,255,0.87)]">
              Make a deposit in any currency from anywhere in the world, now you
              are earning 8% fixed rate p.a. on your deposit. You can access it
              anytime.
            </div>
          )}
          <div>How much would you like to Deposit?</div>
        </div>
        <div className="w-[310px] md:w-[60%] mx-auto mt-[30px] md:mt-[40px] px-[5px] md:px-[18px] h-[44px] md:h-[138px] bg-[#0B1B32] rounded-[1000px] flex items-center justify-between text-[#6F6F6F] text-[20px] md:text-[48px] leading-[24px] md:leading-[57px] font-[600] shadow-[-9px_-1px_28px_#000000,inset_-4px_2px_6px_rgba(0,0,0,0.25),inset_5px_2px_6px_rgba(0,0,0,0.25)]">
          <div className="w-[33.33px] md:w-[100px] h-[33.33px] text-[#FFF] md:h-[100px] flex items-center justify-center bg-[#102544] shadow-[1px_1px_6px_rgba(0,0,0,0.25)] rounded-[100px]">
            +
          </div>
          <div>$14,420</div>
          <div className="w-[33.33px] md:w-[100px] h-[33.33px] text-[#FFF] md:h-[100px] flex items-center justify-center bg-[#102544] shadow-[1px_1px_6px_rgba(0,0,0,0.25)] rounded-[100px]">
            -
          </div>
        </div>
        <div className="relative mt-[20px] mt-[60px] w-[90%] md:w-[55%] mx-auto text-[32px] md:text-[32px] leading-[17px] md:leading-[38px] font-[500] text-[#ffffffde] text-center">
          You would get
        </div>
        <div className="w-[310px] md:w-[60%] mx-auto mt-[30px] md:mt-[20px] md:mt-[40px] px-[5px] md:px-[18px] h-[44px] md:h-[138px] bg-[#0B1B32] rounded-[1000px] flex items-center justify-center text-[#6F6F6F] md:text-[48px] md:leading-[57px] md:font-[600] shadow-[-9px_-1px_28px_#000000,inset_-4px_2px_6px_rgba(0,0,0,0.25),inset_5px_2px_6px_rgba(0,0,0,0.25)]">
          <div className="text-[24px] md:text-[64px] leading-[29px] md:leading-[76px] md:font-[600] text-transparent bg-introborrow-calculate-gradient bg-clip-text">
            $20,500
          </div>
        </div>
        <div className="mt-[60px] mx-auto w-[94%] md:w-[500px] flex items-center justify-between">
          <div className="w-[60px] md:w-[90px] h-[60px] md:h-[90px] bg-introborrow-switchcolor bg-cover bg-center"></div>
          <div className="md:h-[70px] flex flex-col justify-between">
            <div className="text-[14.5px] md:text-[21px] leading-[17px] md:leading-[26px] font-[400] text-[#6f6f6f]">
              With $40,000 or more of staked CRO
            </div>
            <div className="bg-introearn-currenty bg-cover bg-center w-[78px] h-[33px]"></div>
          </div>
        </div>
        <div className="mt-[200px] md:mt-[300px] md:w-[55%] mx-auto md:min-w-[750px] flex flex-col md:flex-row justify-between">
          <div>
            <div className="text-[16px] md:text-[20.5px] leading-[19px] md:leading-[24px] font-[500] text-[#FFF] text-center">
              UPTO
            </div>
            <div className="text-[91px] md:text-[96px] leading-[118px] md:leading-[125px] font-[700] text-[#00FF99] text-center">
              8%
            </div>
            <div className="text-[19px] md:text-[20px] leading-[23px] md:leading-[24px] font-[500] text-[#FFF] text-center">
              p.a.
            </div>
          </div>
          <div className="mt-[150px] md:mt-0">
            <div className="text-[16px] md:text-[20.5px] leading-[19px] md:leading-[24px] font-[500] text-[#FFF] text-center">
              UPTO
            </div>
            <div className="text-[91px] md:text-[96px] leading-[118px] md:leading-[125px] font-[700] text-[#00FF99] text-center">
              $50.00 USD
            </div>
            <div className="text-[19px] md:text-[20px] leading-[23px] md:leading-[24px] font-[500] text-[#FFF] text-center">
              Interest per month
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[60px] md:mt-[50px] mx-auto pt-[30px] md:pt-[70px] w-[96%] md:w-[80%] md:border-[1px] md:border-[rgba(0,0,0,0.21)]">
        <div className="flex flex-row justify-between px-[2%]">
          <div className="text-[32px] md:text-[64px] leading-[38px] md:leading-[76px] font-[500] text-[#FFF]">
            Credit Analysis
          </div>
          {!isMobile && (
            <div className="md:text-[24px] md:leading-[29px] md:font-[500] text-[rgba(255,255,255,0.94)]">
              <div>
                Your yield{" "}
                <span className="text-transparent md:bg-introborrow-calculate-gradient md:bg-clip-text">
                  self Repays
                </span>{" "}
                your loan
              </div>
              <div className="md:mt-[20px] mx-auto flex flex-col justify-between md:w-[228px] md:h-[140px] md:rounded-[6px] border-[1px] border-[rgba(255,255,255,0.62)] md:px-[16px] md:py-[24px]">
                <div className="flex justify-between">
                  <div className="md:text-[16px] md:leading-[24px] md:max-w-[48%] md:font-[400] text-[#fff] flex items-end">
                    Duration:{" "}
                  </div>
                  <div className="md:text-[16px] md:leading-[24px] md:font-[400] text-[#1BA9EA] flex items-end">
                    365 Days{" "}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="md:text-[16px] md:leading-[24px] md:max-w-[48%] md:font-[400] text-[#fff] flex items-end">
                    Maturity Date:
                  </div>
                  <div className="md:text-[16px] md:leading-[24px] md:font-[400] text-[#1BA9EA] flex items-end">
                    03.12.2023
                  </div>
                </div>
              </div>
            </div>
          )}
          {isMobile && (
            <div className="w-[31.5px] h-[31.5px] bg-introdashboard-fullscreenimage bg-cover bg-center"></div>
          )}
        </div>
        {!isMobile && (
          <div className="md:mt-[12px] md:text-[32px] md:leading-[38px] md:font-[500] text-[#F9D3B4] md:ml-[3%]">
            Remaining Debt
          </div>
        )}
        <div className="mt-[50px] w-[96vw] md:w-[80vw] h-[calc(96vw*343/1168)] md:h-[calc(80vw*343/1168)] mx-auto bg-introborrow-chart bg-cover bg-center"></div>
        <div className="mt-[40px] md:mt-[60px] pb-[50px] md:pb-0 md:mb-[70px] text-[#707070] text-[5.6px] md:text-[14px] leading-[7px] md:leading-[17px] font-[600] text-center">
          Copyright © 2022 Maui Finance. All rights reserved.Privacy Policy
          Terms and Conditions Legal
        </div>
      </div>
    </div>
  );
}

export default IntroBorrow;
