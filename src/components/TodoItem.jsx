import React from "react";

function TodoItem(props) {
    const classes = ["todo__text"]
    if (props.toDo.done) {
        classes.push("done")
    }

    const classesTime = ["todo__text-time"]
    if (props.toDo.done) {
        classesTime.push("done")
    }

    return (
        <div>
            <div className="todo__checkbox">
                <div className="todo__checkbox-box">
                    <input type="checkbox"
                           className="todo__checkbox-input"
                           checked={props.toDo.done}
                           onChange={()=>props.onChangeCheck(props.toDo.id)}/>
                    <span className={classes.join(' ')}>{props.toDo.title}
                    </span>
                    <span className={classesTime.join(' ')}>Time...</span>
                    <button className="delete__btn"
                    onClick={()=>props.deleteItem(props.toDo.id)}>x</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem
