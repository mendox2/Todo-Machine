import React from 'react';

function TodoSearch({
    searchValue,
    setsearchValue
}) {
    
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