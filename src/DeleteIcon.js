import React from 'react'
import { TtotodoIcon } from './TtotodoIcon';

function DeleteIcon({ onDelete }){
    return (
        <TtotodoIcon 
       type="delete"
       color="black"
       onClick={onDelete}
      />
      )
}

export {DeleteIcon };