import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { gsap } from 'gsap';

function Main(props) {
  const history = useHistory();
  function handleClick(){
    history.push('/splash');
  }

  useEffect(() => {
    if (props.state === 'entering') {
      gsap.timeline().fromTo("#main-righttop", 1, {opacity: 0, scale: 0}, {opacity: 1, scale: 1, transformOrigin:"right top"});
    }
    if (props.state === 'exiting') {
      gsap.timeline().fromTo("#main-righttop", 1, {opacity: 1, scale: 1}, {opacity: 1, scale: 0, transformOrigin:"right top"});
    }
    return function unmount() {}
  }, [props.state]);
  return (
    <div className='fixed bg-main-background dark:bg-main-background-dark bg-center bg-cover w-full h-full transition-all duration-1000' onClick={handleClick}>
      this is the main screen
      <div className='bg-main-lefttop dark:bg-main-lefttop-dark bg-center bg-cover fixed top-[210px] left-[200px] w-[464px] h-[260px] transition-all duration-1000'></div>
      <div className='bg-main-leftbottom dark:bg-main-leftbottom-dark bg-center bg-cover fixed top-[620px] left-[91px] w-[672px] h-[633px] transition-all duration-1000'></div>
      <div id='main-righttop' className='bg-main-righttop dark:bg-main-righttop-dark bg-center bg-cover fixed top-[71px] right-[12px] w-[750px] h-[797px]'></div>
      <div className='bg-main-center dark:bg-main-center-dark bg-center bg-cover fixed left-[calc(50%-180px)] top-[calc(50%-215px)]  w-[360px] h-[430px] transition-all duration-1000'></div>
    </div>
  )
}

export default Main;