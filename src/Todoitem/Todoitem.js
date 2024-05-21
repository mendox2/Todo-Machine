import {CompleteIcon} from '../iconos/CompleteIcon';
import {DeleteIcon} from '../iconos/DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {
    return(
      <div className="iten">
        <li>
          <div className='dItem'>
            <CompleteIcon 
                completed={props.completed}
                onComplete={props.onComplete}/>
              <p className={`prop TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                

                {props.txt}
                
                
              </p>
              <DeleteIcon
                onDelete={props.onDelete}
                />
            </div>
        </li>
      </div>
    );
  }

export {TodoItem}