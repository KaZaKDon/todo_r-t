import { ToDoListItem } from "./toDoListItem/ToDoListItem"
import "./ToDoList.scss"
import { ToDo } from "../models/todo-items"

export const ToDoList = (props: {todos: ToDo[], updateToDo: Function, deleteToDo: Function}) => {

    const checkedList = () => {
        return props.todos
            .filter((item) => item.isDone)
            .map((item, index) => {
                return (
                    <ToDoListItem 
                    toDoItem={item} 
                    key={index}
                    updateToDo={props.updateToDo}
                    deleteToDo={props.deleteToDo}/>
                )
            })
    }

    const unCheckedList = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item, index) => {
                return (
                    <ToDoListItem 
                        toDoItem={item} 
                        key={index}
                        updateToDo={props.updateToDo}
                        deleteToDo={props.deleteToDo}/>
                )
            })
    }

    return(
        <div className="todo-container">
            <ul className="todo-list failed">
                {checkedList()}
            </ul>
            <ul className="todo-list failed">
                {unCheckedList()}
            </ul>
        </div>
    )
}