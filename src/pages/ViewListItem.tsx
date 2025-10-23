import { useEffect, useState } from "react"
import { ToDo } from "../components/models/todo-items"
import { useNavigate, useParams } from "react-router-dom"
import { RootState } from "../store"
import { useSelector } from "react-redux"



export const ViewListItem = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const { id } = useParams()
    const navigate = useNavigate()
    const [todo, setTodo] = useState<ToDo>()

    useEffect(() => {
        const searchTodo = todoList.find((todo) => String(todo.id) === id)

        if (searchTodo) {
            setTodo(searchTodo)
        } else {
            navigate('/404')
        }
    }, [todoList, id, navigate])
    return (
        <div className="container">
            <h1>{todo?.text}</h1>
        </div>
        
    )
}