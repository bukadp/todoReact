import React, {useState} from "react";
import {addTodo} from "../redux/reducerTodo";
import {useDispatch} from "react-redux";


function AddToDo(props) {
    const [value, setValue] = useState('')
    const dispatch = useDispatch();


    const handlerSubmit = (e) => {
        e.preventDefault()

        if (value.trim()){
            dispatch(addTodo(value))
            setValue('')
        }
        else (alert("Type something"))
    }


    return (
        <div>
            <div className="high">
                <div className="title">high</div>
                <form className="todo__add"
                      onSubmit={handlerSubmit}
                >
                    <input className="task"
                           type="text"
                           placeholder="Добавить важных дел"
                           value={value}
                           onChange={(e) => setValue(e.target.value)}
                    />
                    <button className="add__btn">+</button>
                </form>
            </div>
        </div>
    )
}

export default AddToDo;
