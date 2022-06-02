import React from "react";
import TodoItem from "./TodoItem";
import {connect} from "react-redux";
import {compose} from "redux";
import {changeStatus, deleteItem} from "../redux/reducerTodo";

function TodoList(props) {

    return (
        <div>

            {props.toDos.map(toDo => {
                    return <TodoItem
                        key={toDo.id}
                        toDo={toDo}
                        onChangeCheck={props.changeStatus}
                        deleteItem={props.deleteItem}
                    />
                }
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        toDos: state.todo.toDos,
    }
}

export default compose(
    connect(mapStateToProps, {changeStatus, deleteItem})
)(TodoList)

