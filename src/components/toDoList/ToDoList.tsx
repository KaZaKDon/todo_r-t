import { ToDoListItem } from "./toDoListItem/ToDoListItem"
import "./ToDoList.scss"

export const ToDoList = () => {
    return(
        <div className="todo-container">
            <ul className="todo-list failed">
                <ToDoListItem />
                <li className="todo-list-item__wrapper">
                    <span>Вторая задача</span>
                    <div className="todo-list-item__buttons">
                        <button className="btn-trash"></button>
                        <button className="btn-check"></button>
                    </div>
                </li>
                <li className="todo-list-item__wrapper">
                    <span>Третья задача</span>
                    <div className="todo-list-item__buttons">
                        <button className="btn-trash"></button>
                        <button className="btn-check"></button>
                    </div>
                </li>
            </ul>
        </div>
    )
}