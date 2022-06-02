const ADD_TODO = "ADD_TODO"
const CHANGE_STATUS = "CHANGE_STATUS"
const DELETE_TODO = "DELETE_TODO"

const initialState = {
    toDos: [
        {
            id: 1,
            title: "learn js",
            done: true
        },
        {
            id: 2,
            title: "find job",
            done: false
        },
        {
            id: 3,
            title: "earn some money",
            done: false
        },
    ]
}
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            let newTodo = {
                id: Date.now(),
                title: action.payload,
                done: false
            };
            return {
                ...state,
                toDos: [...state.toDos, newTodo],

            };
        }
        case CHANGE_STATUS: {
            return {
                ...state,
                toDos: state.toDos.map(todo => {
                    if (todo.id === action.payload) {
                        todo.done = !todo.done
                    }
                    return todo
                })
            }
        }
        case DELETE_TODO: {
            return {
                ...state,
                toDos: state.toDos.filter(todo => todo.id !== action.payload)
            }
        }
        default:
            return state;
    }
}

export const changeStatus = (id) => ({
    type: CHANGE_STATUS,
    payload: id,
})

export const deleteItem = (id) => ({
    type: DELETE_TODO,
    payload: id,
})

export const addTodo = (title) => ({
    type: ADD_TODO,
    payload: title,
})

export default todoReducer;
