function TodoList({children}) {
    return(
        <div className="list">
            <ul className="lis">
                {children}
            </ul>
        </div>
    );
}

export {TodoList};