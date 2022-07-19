import { withRouter, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import _ from "lodash";

import { signOut, updateBalance } from "../../saga/actions/workflow";
import useWindowSize from "../../utils/useWindowSize";

const MENU = [
  { title: "Earn", url: "/introearn" },
  { title: "Borrow", url: "/introborrow" },
  { title: "Cards", url: "/introcards" },
  { title: "Team", url: "/introteam" },
];

function Logo(props) {
  let history = useHistory();
  const handleClick = () => {
    if (props.pathname !== "/introdashboard") {
      history.push("/introdashboard");
    }
  };
  return (
    <div
      className="bg-introheader-logoimage w-[83px] h-[34px] md:h-[40px] md:w-[100px] bg-center bg-cover drop-shadow-[0_0px_1px_rgba(116,95,242,0.5)] cursor-pointer"
      onClick={handleClick}
    ></div>
  );
}

function NavItem(props) {
  return (
    <div
      className={`text-[#ffffffad] text-[18px] ${
        props.isSelected
          ? "drop-shadow-[0_0px_5px_#FFFFFF] !text-[#FFFFFF]"
          : ""
      } cursor-pointer`}
      onClick={props.handleClick.bind(this, props.newIndex)}
    >
      {props.title}
    </div>
  );
}

const NavBar = withRouter((props) => {
  let history = useHistory();
  const [currentSelected, setCurrentSelected] = useState(0);
  const size = useWindowSize();
  const isMobile = size.width < 768;

  const handleClick = (dest) => {
    setCurrentSelected(dest);
    history.push(props.tabs[dest].url);
  };

  if (isMobile)
    return <div className="w-[56px] h-[54px] bg-introheader-mobiletab bg-cover bg-center"></div>;
  return (
    <div className={"w-[46.82%] h-[40px] flex items-center justify-between"}>
      {_.map(props.tabs, (tab, index) => {
        return (
          <NavItem
            key={index}
            newIndex={index}
            title={props.tabs[index].title}
            handleClick={handleClick}
            isSelected={index === currentSelected}
          />
        );
      })}
      <div
        className="w-[120px] h-[30px] bg-[#1199FA] rounded-[18px] flex justify-center items-center text-[#FFFFFF] text-[16px] cursor-pointer"
        onClick={() => history.push("/dashboard")}
      >
        Start Now
      </div>
    </div>
  );
});

function IntroHeader(props) {
  // console.log('header network', props.workflow.network);
  const { location } = props;

  if (
    location.pathname === "/splash" ||
    location.pathname === "/login" ||
    location.pathname === "/dashboard"
  )
    return null;

  return (
    <div className="absolute top-0 w-full h-[56px] md:h-[82px] md:top-[62px] bg-[#061121] z-30">
      <div className="px-[31px] py-[1px] md:px-[14.62%] md:py-[21px] flex items-center justify-between">
        <Logo pathname={location.pathname} />
        <NavBar tabs={MENU} />
      </div>
    </div>
  );
}

export default compose(
  withRouter,
  connect(
    (state) => ({
      workflow: state.workflow,
    }),
    {
      signOut,
      updateBalance,
    }
  )
)(IntroHeader);
