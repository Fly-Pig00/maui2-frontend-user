import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { gsap } from 'gsap';

function Cards() {
  let history = useHistory();
  function handleClick(){
    history.push('/splash');
    gsap.timeline().fromTo("#main-righttop", 1, {opacity: 1, scale: 1}, {opacity: 1, scale: 0.01, transformOrigin:"right top"});
  }

  useEffect(() => {
    gsap.timeline().fromTo("#main-righttop", 1, {opacity: 0, scale: 0.01}, {opacity: 1, scale: 1, transformOrigin:"right top"});
    return function unmount() {
      // console.log('unmount');
    }
  }, []);
  return (
    <div className='fixed bg-main-background dark:bg-main-background-dark bg-center bg-cover w-full h-full transition-all duration-1000' onClick={handleClick}>
      this is the Cards screen
      <div className='bg-main-lefttop dark:bg-main-lefttop-dark bg-center bg-cover fixed top-[210px] left-[200px] w-[464px] h-[260px] transition-all duration-1000'></div>
      <div className='bg-main-leftbottom dark:bg-main-leftbottom-dark bg-center bg-cover fixed top-[620px] left-[91px] w-[672px] h-[633px] transition-all duration-1000'></div>
      <div id='main-righttop' className='bg-main-righttop dark:bg-main-righttop-dark bg-center bg-cover fixed top-0 right-0 w-[750px] h-[797px]'></div>
      <div className='bg-main-center dark:bg-main-center-dark bg-center bg-cover fixed left-[calc(50%-180px)] top-[calc(50%-215px)]  w-[360px] h-[430px] transition-all duration-1000'></div>
    </div>
  )
}

export default Cards;