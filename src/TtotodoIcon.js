import React from 'react'
import { ImCheckmark } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";



const iconTypes = {
    "check": (color)=><ImCheckmark className="Icon-svg" fill={color} />,
    "delete": (color)=><AiFillDelete className="Icon-svg" fill={color} />,
};

function TtotodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`icon-container icon-container-${type}`}
      onClick={onClick}
    >
        {iconTypes[type](color)}
    </span>
  )
}

export { TtotodoIcon } 