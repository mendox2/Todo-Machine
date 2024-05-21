import './index.css';

function CreateTodoButton( { setOpenModal } ){
    return(
        <div className="dBoton">
        <button
            className="mBoton"
            onClick={
                () => {
                    setOpenModal(state => !state);
                }
            }
        >⋈</button>
        </div>
    );
}

export {CreateTodoButton}