import _ from 'lodash';
import React, { useState } from 'react';

function Tab(props) {
  const totalSpace = 10; // 10%, sum of spaces between tabs
  const oneBlock = (100 - totalSpace) / props.count;
  const space = totalSpace / (props.count - 1);
  const calcLeft = (oneBlock + space) * props.newIndex;
  return (
    <div
      className={`absolute cursor-pointer rounded-[7px] tracking-[-1px] md:tracking-normal pt-2 pb-2 pl-0 md:p-2 text-center text-[11px] md:text-[16px] ${props.isSelected ? 'drop-shadow-[0_0px_4px_#745FF2] bg-[#F3F3FB] dark:bg-[#271B2D] text-[#745FF2]' : 'bg-[#EFEFFB] dark:bg-[#32283C] text-[#7887A0B0]'}  transition-all duration-[1500ms]`}
      style={{left: calcLeft + '%', width: oneBlock + '%'}}
      onClick={props.handleClick.bind(this, props.newIndex)}
    >
      {props.name}
    </div>
  )
}

function AnimatedTab(props) {
  let defaultPositions = [];
  for (let i = 0; i < props.tabs.length; i++) {
    defaultPositions.push(i);
  }
  const [ currentSelected, setCurrentSelected ] = useState(0);
  const [ positions, setPositions ] = useState(defaultPositions);

  const handleClick=(dest) => {
    if (dest !== currentSelected) { // reset position
      let newPositions = [];
      for (let i = 0; i < positions.length; i++) {
        let newPos = positions[i];
        if (newPos === currentSelected) {
          newPos = dest;
        } else {
          if (dest < currentSelected) {
            if (newPos >= dest && newPos < currentSelected) {
              newPos++;
            }
          } else {
            if (newPos > currentSelected && newPos <= dest) {
              newPos--;
            }
          }
        }
        newPositions.push(newPos);
      }
      setCurrentSelected(dest);
      setPositions(newPositions);      
    }
  }

  return (
    <div className='w-full h-[50px] md:h-[74px] p-[6px] md:p-4 rounded-[14px] bg-[#E5E9ED] dark:bg-[#2A1B31] drop-shadow-[0_0px_7px_rgba(116,95,242,0.28)] border-2 dark:border-transparent'>
      <div className='w-full relative'>
        {_.map(props.tabs, (name, index) => {
          return <Tab key={index} count={props.tabs.length} name={props.tabs[positions[index]]} newIndex={positions[index]} handleClick={handleClick} isSelected={positions[index] === currentSelected}/>
        })}
      </div>
    </div>
  );

}

export default AnimatedTab;