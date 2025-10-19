import { Form } from "../components/form/Form"
import { Header } from "../components/header/Header"
import { ToDoList } from "../components/toDoList/ToDoList"

export const ToDoListPage = () => {
    return(
        <>
            <Header/>
            <Form />
            <ToDoList />
        </>
    )
}