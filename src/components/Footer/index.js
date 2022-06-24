import { withRouter, useHistory } from "react-router-dom";

function Footer(props) {
  const { location } = props;
  const history = useHistory();
  const handlePrivacyClick = () => {
    history.push("/privacy");
  };
  const handleTermsClick = () => {
    history.push("/terms");
  };
  if (location.pathname === "/splash" || location.pathname === "/login")
    return null;
  return (
    <div className="absolute flex flex-col md:flex-row items-center justify-between w-[360px] md:w-[900px] bottom-[30px] left-[calc(50%-180px)] md:left-[calc(50%-450px)]">
      <div className="mb-[5px] text-[12px] md:text-[14px] dark:text-[#F9D3B4] text-[#273855]">
        Copyright © 2022 Maui Finance. All rights reserved.
      </div>
      <div className="mb-[5px] flex items-center text-[12px] md:text-[14px] dark:text-[#F9D3B4] text-[#515154]">
        <span
          onClick={handlePrivacyClick}
          className="cursor-pointer mr-[10px] pr-[10px] border-r-[1px] border-r-[#515154]"
        >
          Privacy Policy
        </span>
        <span
          onClick={handleTermsClick}
          className="cursor-pointer mr-[10px] pr-[10px] border-r-[1px] border-r-[#515154]"
        >
          Terms and Conditions
        </span>
        <span onClick={handleTermsClick} className="cursor-pointer">
          Legal
        </span>
      </div>
    </div>
  );
}

export default withRouter(Footer);
