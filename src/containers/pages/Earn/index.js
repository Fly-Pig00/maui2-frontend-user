import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

function Earn() {
  let history = useHistory();
  function handleClick(){
    history.push('/splash');
  }

  useEffect(() => {
    return function unmount() {
      // console.log('unmount');
    }
  }, []);
  return (
    <div className='fixed bg-main-background dark:bg-main-background-dark bg-center bg-cover w-full h-full transition-all duration-1000' onClick={handleClick}>
      this is the earn screen
    </div>
  )
}

export default Earn;