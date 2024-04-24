import './index.css';

function CreateTodoButton(){
    return(
        <div className="dBoton">
        <button
            className="mBoton"
            onClick={
              (event) => {
                console.log("le dite click")
                console.log(event)
                console.log(event.target)
            } 
        }
        >†</button>
        </div>
    );
}

export {CreateTodoButton}