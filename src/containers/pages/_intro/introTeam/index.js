import React, { useState, useEffect } from "react";

function Avatar(props) {
  const [isClicked, setIsClicked] = useState(false);
  const className = `${isClicked ? "md:w-[250px]" : "md:w-[117px]"} ${
    isClicked ? "md:h-[250px]" : "md:h-[117px]"
  } bg-cover bg-center cursor-pointer transition-all duration-1000 ${
    props.className
  } ${props.isFounder && " translate-x-[-50%] translate-y-[-50%]"}`;

  return (
    <div
      className={className}
      onClick={() => setIsClicked(true)}
      onMouseLeave={() => {
        setIsClicked(false);
      }}
    ></div>
  );
}

function IntroTeam() {
  const [teamShow, setTeamShow] = useState(false);
  const [avatarClickable, setAvatarClickable] = useState(false);
  const [chunhuClicked, setChunhuClicked] = useState(false);
  const [devClicked, setDevClicked] = useState(false);
  const [ivanClicked, setIvanClicked] = useState(false);
  const [cofounderClicked, setCofounderClicked] = useState(false);
  const [williamClicked, setWilliamClicked] = useState(false);
  const [ericClicked, setEricClicked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // if (!teamShow)
  //   return (
  //     <div className="bg-[#10213f] w-full h-[100vh] flex justify-center items-center">
  //       <div
  //         className="w-[90%] md:w-[50%] flex flex-col items-center"
  //         onMouseEnter={() => setTeamShow(true)}
  //       >
  //         <div className="relative text-[14px] md:text-[24px] leading-[17px] md:leading-[29px] font-[400] text-[#FFF]">
  //           <div className="absolute left-[-5px] bg-introteam-starlight2 bg-cover bg-center w-[10px] h-[10px]"></div>
  //           <div className="absolute left-[-5px] bg-introteam-starlight1 bg-cover bg-center w-[10px] h-[10px]"></div>
  //           The Team
  //         </div>
  //         <div className="w-[88px] md:w-[162px] h-0 border-b-[3px] border-[#745FF2]"></div>
  //         <div className="text-[34.9px] md:text-[64px] leading-[42px] md:leading-[76px] md:font-[500] text-[#FFF] text-center">
  //           Meet our team in journey of Maui.{" "}
  //         </div>
  //       </div>
  //     </div>
  //   );

  return !teamShow ? (
    <div className="bg-[#10213f] w-full h-[100vh] flex justify-center items-center transition-all">
      <div
        className="w-[90%] md:w-[50%] flex flex-col items-center"
        onMouseEnter={() => setTeamShow(true)}
      >
        <div className="relative text-[14px] md:text-[24px] leading-[17px] md:leading-[29px] font-[400] text-[#FFF]">
          <div className="absolute left-[-5px] bg-introteam-starlight2 bg-cover bg-center w-[10px] h-[10px]"></div>
          <div className="absolute left-[-5px] bg-introteam-starlight1 bg-cover bg-center w-[10px] h-[10px]"></div>
          The Team
        </div>
        <div className="w-[88px] md:w-[162px] h-0 border-b-[3px] border-[#745FF2]"></div>
        <div className="text-[34.9px] md:text-[64px] leading-[42px] md:leading-[76px] md:font-[500] text-[#FFF] text-center">
          Meet our team in journey of Maui.{" "}
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-[#10213f] w-full">
      <div className="h-[20vh] md:h-[30vh]"></div>
      <div className="px-[3%] md:px-[14.62%] mx-auto">
        <div className="md:w-[50vw] flex flex-col items-left">
          <div className="relative text-[14px] md:text-[24px] leading-[17px] md:leading-[29px] md:font-[400] text-[#FFF]">
            <div className="absolute left-[-25px] top-[-22px] bg-introteam-starlight2 bg-cover bg-center w-[50px] h-[50px]"></div>
            <div className="absolute left-[-25px] top-[-22px] bg-introteam-starlight1 bg-cover bg-center w-[50px] h-[50px]"></div>
            The Team
          </div>
          <div className="w-[88px] md:w-[162px] h-0 border-b-[3px] border-[#745FF2]"></div>
          <div className="text-[36px] md:text-[64px] leading-[43px] md:leading-[76px] md:font-[500] text-[#FFF] text-left">
            Meet our team in journey of Maui.{" "}
          </div>
        </div>
        <div className="relative mt-[20px] md:w-[100%] h-[100vh] md:h-[140vh]">
          {!avatarClickable && (
            <div className="absolute left-[calc(33vw-200px)] top-[calc(39vh-110px)] bg-introteam-clickhere bg-cover bg-center md:w-[111px] md:h-[28px]"></div>
          )}
          {!avatarClickable && (
            <div className="absolute left-[calc(33vw-140px)] top-[calc(39vh-65px)] bg-introteam-arrowcurve bg-cover bg-center md:w-[111.5px] md:h-[130px]"></div>
          )}
          {/* <Avatar
            className="absolute left-[3vw] top-[16vh] bg-introteam-chunhu"
            isFounder={false}
          /> */}
          {!chunhuClicked ? (
            <div
              className="absolute  left-[3vw] top-[16vh] bg-introteam-chunhu bg-cover bg-center w-[117px] h-[117px] cursor-pointer transition-all duration-1000"
              onClick={() => avatarClickable && setChunhuClicked(true)}
            ></div>
          ) : (
            <div
              className="absolute  left-[3vw] top-[16vh] bg-introteam-chunhu2 bg-cover bg-center w-[250px] h-[250px] cursor-pointer transition-all duration-1000"
              onMouseLeave={() => setChunhuClicked(false)}
            ></div>
          )}
          {chunhuClicked ? (
            <div className="absolute left-[calc(3vw+200px)] top-[calc(16vh+180px)] md:text-[32px] md:leading-[38px] md:font-[600] text-[#FFF] transitiona-all duration-1000">
              Cui ChunHu
              <br />
            </div>
          ) : (
            <div></div>
          )}
          {chunhuClicked ? (
            <div className="absolute left-[calc(3vw+200px)] top-[calc(16vh+210px)] text-[#FFF] md:text-[24px] md:leading-[29px] font-[400] transition-all duration-1000">
              Core developer
            </div>
          ) : (
            <div></div>
          )}
          {/* <Avatar
            className="absolute right-[4vw] top-[2vh] bg-introteam-dev"
            isFounder={false}
          /> */}
          {!devClicked ? (
            <div
              className="absolute  right-[4vw] top-[2vh] bg-introteam-dev bg-cover bg-center w-[117px] h-[117px] cursor-pointer transition-all duration-1000"
              onClick={() => avatarClickable && setDevClicked(true)}
            ></div>
          ) : (
            <div
              className="absolute  right-[4vw] top-[2vh] bg-introteam-dev2 bg-cover bg-center w-[250px] h-[250px] cursor-pointer transition-all duration-1000"
              onMouseLeave={() => setDevClicked(false)}
            ></div>
          )}
          {devClicked ? (
            <div className="absolute right-[calc(4vw+200px)] top-[calc(2vh+180px)] md:text-[32px] md:leading-[38px] md:font-[600] text-[#FFF] transitiona-all duration-1000">
              Usama Malik
              <br />
            </div>
          ) : (
            <div></div>
          )}
          {devClicked ? (
            <div className="absolute right-[calc(4vw+200px)] top-[calc(2vh+210px)] text-[#FFF] md:text-[24px] md:leading-[29px] font-[400] transition-all duration-1000">
              Developer
            </div>
          ) : (
            <div></div>
          )}
          {/* <Avatar
            className="absolute left-[33vw] top-[39vh] bg-introteam-ivan"
            isFounder={true}
          /> */}
          {!ivanClicked ? (
            <div
              className="absolute  left-[33vw] top-[39vh] bg-introteam-ivan bg-cover bg-center w-[117px] h-[117px] cursor-pointer transition-all duration-1000"
              onClick={() => {
                setAvatarClickable(true);
                setIvanClicked(true);
              }}
            ></div>
          ) : (
            <div
              className="absolute  left-[33vw] top-[39vh] bg-introteam-ivan2 bg-cover bg-center w-[250px] h-[250px] cursor-pointer transition-all duration-1000 z-40"
              onMouseLeave={() => setIvanClicked(false)}
            ></div>
          )}
          {ivanClicked ? (
            <div className="absolute left-[calc(33vw+200px)] top-[calc(39vh+180px)] md:text-[32px] md:leading-[38px] md:font-[600] text-[#FFF] transitiona-all duration-1000 z-40">
              Ivan Gonzalez
              <br />
            </div>
          ) : (
            <div></div>
          )}
          {ivanClicked ? (
            <div className="absolute left-[calc(33vw+200px)] top-[calc(39vh+210px)] text-[#FFF] md:text-[24px] md:leading-[29px] font-[400] transition-all duration-1000 z-40">
              Co-founder
            </div>
          ) : (
            <div></div>
          )}
          {/* <Avatar
            className="absolute left-[10vw] top-[76vh] bg-introteam-cofounder"
            isFounder={true}
          /> */}
          {!cofounderClicked ? (
            <div
              className="absolute  left-[10vw] top-[76vh] bg-introteam-cofounder bg-cover bg-center w-[117px] h-[117px] cursor-pointer transition-all duration-1000"
              onClick={() => avatarClickable && setCofounderClicked(true)}
            ></div>
          ) : (
            <div
              className="absolute  left-[10vw] top-[76vh] bg-introteam-cofounder2 bg-cover bg-center w-[250px] h-[250px] cursor-pointer transition-all duration-1000 z-40"
              onMouseLeave={() => setCofounderClicked(false)}
            ></div>
          )}
          {cofounderClicked ? (
            <div className="absolute left-[10vw] top-[calc(76vh-50px)] md:text-[32px] md:leading-[38px] md:font-[600] text-[#FFF] transitiona-all duration-1000 z-40">
              Narciso Gonzalez
              <br />
            </div>
          ) : (
            <div></div>
          )}
          {cofounderClicked ? (
            <div className="absolute left-[10vw] top-[calc(76vh-20px)] text-[#FFF] md:text-[24px] md:leading-[29px] font-[400] transition-all duration-1000 z-40">
              Co-founder
            </div>
          ) : (
            <div></div>
          )}
          {/* <Avatar
            className="absolute right-0 top-[44vh] bg-introteam-william"
            isFounder={false}
          /> */}
          {!williamClicked ? (
            <div
              className="absolute  right-0 top-[44vh] bg-introteam-william bg-cover bg-center w-[117px] h-[117px] cursor-pointer transition-all duration-1000"
              onClick={() => avatarClickable && setWilliamClicked(true)}
            ></div>
          ) : (
            <div
              className="absolute  right-0 top-[44vh] bg-introteam-william2 bg-cover bg-center w-[250px] h-[250px] cursor-pointer transition-all duration-1000 z-40"
              onMouseLeave={() => setWilliamClicked(false)}
            ></div>
          )}
          {williamClicked ? (
            <div className="absolute right-[30px] top-[calc(44vh+220px)] md:text-[32px] md:leading-[38px] md:font-[600] text-[#FFF] transitiona-all duration-1000 z-40">
              William Yu
              <br />
            </div>
          ) : (
            <div></div>
          )}
          {williamClicked ? (
            <div className="absolute right-[30px] top-[calc(44vh+250px)] text-[#FFF] md:text-[24px] md:leading-[29px] font-[400] transition-all duration-1000 z-40">
              Core developer
            </div>
          ) : (
            <div></div>
          )}
          {/* <Avatar
            className="absolute right-[20vw] top-[66vh] bg-introteam-eric"
            isFounder={false}
          /> */}
          {!ericClicked ? (
            <div
              className="absolute  right-[20vw] top-[74vh] bg-introteam-eric bg-cover bg-center w-[117px] h-[117px] cursor-pointer transition-all duration-1000"
              onClick={() => avatarClickable && setEricClicked(true)}
            ></div>
          ) : (
            <div
              className="absolute  right-[20vw] top-[74vh] bg-introteam-eric2 bg-cover bg-center w-[250px] h-[250px] cursor-pointer transition-all duration-1000 z-40"
              onMouseLeave={() => setEricClicked(false)}
            ></div>
          )}
          {ericClicked ? (
            <div className="absolute right-[calc(20vw-160px)] top-[calc(74vh+190px)] md:text-[32px] md:leading-[38px] md:font-[600] text-[#FFF] transitiona-all duration-1000 z-40">
              Eric Liu
              <br />
            </div>
          ) : (
            <div></div>
          )}
          {ericClicked ? (
            <div className="absolute right-[calc(20vw-160px)] top-[calc(74vh+220px)] text-[#FFF] md:text-[24px] md:leading-[29px] font-[400] transition-all duration-1000 z-40">
              Core developer
            </div>
          ) : (
            <div></div>
          )}
          <div className="md:w-[70%] md:text-[24px] md:leading-[29px] md:font-[400] text-[#FFF]">
            To be the company our customers want us to be, it takes an eclectic
            group of passionate operators. Get to know the people leading the
            way at MAUI.
          </div>
        </div>
        <div className="md:mt-[60px] text-[#FFF] text-[48px] md:text-[82px] font-[600] leading-[57px] md:leading-[98px] text-center">
          We are built for you<span className="text-[#FF7262]">.</span>
        </div>
        <div className="mt-[40px] md:mt-[60px] text-[rgba(255,255,255,0.93)] md:w-[50%] mx-auto text-[14px] md:text-[18px] leading-[17px] md:leading-[21px] font-[400] text-center">
          Banking accesible everyone on this planet, from institutional money
          looking for higher to those unbanked in developing counteries.{" "}
        </div>
        <br />
        <div className="text-[rgba(255,255,255,0.93)] mx-auto text-[15px] md:text-[24px] leading-[18px] md:leading-[28px] md:font-[400] text-center">
          With Maui you are the bank.
        </div>
        <div className="md:mt-[50px] w-[70%] md:w-[100%] mx-auto flex flex-col md:flex-row md:justify-between text-[#FFF]">
          <div className="md:w-[30%] flex flex-col">
            <div className="relative flex md:flex-row">
              <div className="w-[100%] text-[128px] md:text-[150px] leading-[153px] md:leading-[179px] font-[600] text-[#00FF99] text-center">
                1
              </div>
              <div className="absolute left-[56%] bottom-[3px] md:bottom-[8px] w-[45%] text-[9px] md:text-[16px] leading-[11px] md-leading-[19px] font-[500] flex flex-col-reverse pb-[25px]">
                Number of banks
              </div>
            </div>
            <div className="text-[16px] md:text-[24px] leading-[19px] md:leading-[29px] font-[400] text-center">
              Number of Banks with digital assets as a their core business.
            </div>
          </div>
          <div className="md:w-[30%] flex flex-col">
            <div className="relative flex md:flex-row">
              <div className="w-[100%] text-[128px] md:text-[150px] leading-[153px] md:leading-[179px] font-[600] text-[#00FF99] text-center">
                1
              </div>
              <div className="absolute left-[56%] bottom-[3px] md:bottom-[8px] w-[45%] text-[9px] md:text-[16px] leading-[11px] md-leading-[19px] font-[500] flex flex-col-reverse pb-[25px]">
                Minute
              </div>
            </div>
            <div className="text-[16px] md:text-[24px] leading-[19px] md:leading-[29px] font-[400] text-center">
              Account Opening Under 1 Minute.
            </div>
          </div>
          <div className="md:w-[30%] flex flex-col">
            <div className="relative flex md:flex-row">
              <div className="w-[100%] text-[128px] md:text-[150px] leading-[153px] md:leading-[179px] font-[600] text-[#00FF99] text-center">
                7
              </div>
              <div className="absolute left-[56%] bottom-[3px] md:bottom-[8px] w-[45%] text-[9px] md:text-[16px] leading-[11px] md-leading-[19px] font-[500] flex flex-col-reverse pb-[25px]">
                Seconds
              </div>
            </div>
            <div className="text-[16px] md:text-[24px] leading-[19px] md:leading-[29px] font-[400] text-center">
              Card Provisioning Under 7 SECONDS.
            </div>
          </div>
        </div>
        <div className="w-full h-[90vh] flex flex-col justify-center items-center">
          <div className="text-[48px] md:text-[82px] leading-[57px] md:leading-[98px] font-[600] text-[#00FF99] md:text-transparent md:bg-clip-text md:bg-introteam-title-gradient text-center drop-shadow-[0_4px_17px_rgba(0,0,0,0.25)]">
            Be part of Maui Banking Revolution.
          </div>
          <div className="mt-[30px] md:mt-[10px] w-[80%] text-[16px] md:text-[18px] leading-[19px] md:leading-[21px] font-[300] text-[#FFF] text-center">
            Get access to unmatched high yields on your money impossible for
            your legacy bank. A new banking system to serve YOU.*
          </div>
          <div className="mt-[60px] md:mt-[90px] w-[202px] md:w-[251px] h-[68px] md:h-[69px] rounded-[4px] md:rounded-[29.3px] flex justify-center items-center text-[#FFF] md:text-[35.2px] md:leading-[42px] bg-[#00FF99]">
            Start Now
          </div>
        </div>
        <div className="h-[10vh] md:w-[80%] mx-auto text-[#6F6F6F] text-[8px] md:text-[14px] leading-[10px] md:leading-[17px] text-center">
          Copyright © 2022 Maui Finance. All rights reserved.Privacy Policy
          Terms and Conditions Legal
        </div>
      </div>
    </div>
  );
}

export default IntroTeam;
