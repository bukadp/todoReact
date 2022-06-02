import './App.css';
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import {useSelector} from "react-redux";

function App(props) {
    const toDos = useSelector(state => state.todo.toDos);

    return (
        <div>
            <AddToDo/>
            {toDos.length > 0
                ? <ToDoList/>
                : <p>do nothing</p>}

        </div>

    );
}



export default App;
