import { useState } from "react"
import { Form } from "../components/form/Form"
import { Header } from "../components/header/Header"
import { ToDo } from "../components/models/todo-items"
import { ToDoList } from "../components/toDoList/ToDoList"

export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([])

        const createNewToDo = (text: string) => {
            const newToDo: ToDo = {
                id: todos.length,
                text: text,
                isDone: false
            }
            setTodos([...todos, newToDo])
        }

        const updateToDo = (toDoItem: ToDo) => {
            const newToDos = todos.map((item) => {
                if (item.id === toDoItem.id) {
                    item.isDone = !item.isDone;
                }
                return item
            })
            setTodos(newToDos)
        }

        const deleteToDo = (toDoItem: ToDo) => {
            const newToDos = todos.filter((item) => item.id !== toDoItem.id)
            setTodos(newToDos)
        }

    return(
        <>
            <Header/>
            <Form createNewToDo={createNewToDo}/>
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
        </>
    )
}