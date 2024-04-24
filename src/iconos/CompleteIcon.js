import React from 'react'
import { TtotodoIcon } from '../TtotodoIcon/TtotoIcon';


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