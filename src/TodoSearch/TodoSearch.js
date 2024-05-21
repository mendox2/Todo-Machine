import './TodoSearch.css';
import { TodoContext } from '../TodoContext/TodoContext';
import React from 'react';

function TodoSearch() {

    const {
        searchValue,
        setsearchValue,
    } = React.useContext(TodoContext);  
    
    return(
        <div className="sech">
            <input
                placeholder="Cortar cebolla"
                className="input"
                value={searchValue}
                onChange={
                    (event)=>{
                        setsearchValue(event.target.value);
                    }
                }    
            />
        </div>
    );
}

export {TodoSearch};