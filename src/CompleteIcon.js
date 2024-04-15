import React from 'react'
import { TtotodoIcon } from './TtotodoIcon';


function CompleteIcon({ completed, onComplete }){
    return (
      <TtotodoIcon 
       type="check"
       color={completed ? 'green' : 'black'}
       onClick={onComplete}
      />
    )
}

export {CompleteIcon };