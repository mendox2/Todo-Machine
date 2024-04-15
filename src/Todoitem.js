import {CompleteIcon} from './CompleteIcon';
import {DeleteIcon} from './DeleteIcon';
import { RiDeleteBin7Line } from "react-icons/ri";


function TodoItem(props) {
    return(
      <div className="iten">
        <li>
        <CompleteIcon 
          completed={props.completed}
          onComplete={props.onComplete}
        />

         <p className={`prop TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.txt}</p>
         
         <DeleteIcon
          onDelete={props.onDelete}
         />
        </li>
      </div>
    );
  }

export {TodoItem}