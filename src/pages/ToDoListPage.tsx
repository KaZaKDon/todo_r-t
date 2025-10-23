//import { useState } from "react"
import { Form } from "../components/form/Form"
import { ToDo } from "../components/models/todo-items"
import { ToDoList } from "../components/toDoList/ToDoList"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { createAction, deleteAction, updateAction } from "../feature/todoList"

export const ToDoListPage = () => {
    //const [todos, setTodos] = useState<ToDo[]>([])
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const dispatch = useDispatch()

        const createNewToDo = (text: string) => {
            dispatch(createAction(text))
        }

        const updateToDo = (toDoItem: ToDo) => {
            dispatch(updateAction(toDoItem))
        }

        const deleteToDo = (toDoItem: ToDo) => {
            dispatch(deleteAction(toDoItem))
        }

    return(
        <>
            <Form createNewToDo={createNewToDo}/>
            <ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
        </>
    )
}