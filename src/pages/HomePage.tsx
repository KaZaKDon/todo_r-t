import { ListItem } from "../components/listItem/ListItem"
import { ToDo } from "../components/models/todo-items"

interface ComponentProps {
    todos: ToDo[]
}

export const HomePage = ({ todos}: ComponentProps) => {
    return(
        <div className="container">
            {
                todos.map((todo: ToDo) => {
                    return (
                        <ListItem todo={todo} key={todo.id}/>
                    )
                })
            }
        </div>
    )
}