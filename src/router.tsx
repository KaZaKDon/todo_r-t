import { ViewListItem } from './pages/ViewListItem';
import { Layout } from './layouts/Layout';
import { NotFound } from './pages/404';
import { ToDoListPage } from './pages/ToDoListPage';
import { createBrowserRouter,} from 'react-router-dom';
//BrowserRouter, Routes, Route, 
import { ViewList } from './pages/ViewList';



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <ToDoListPage />
            },
            {
                path: '/list',
                element: <ViewList />,
            },
            {
                path: '/list/:id',
                element: <ViewListItem />,
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />,
    }
], { basename: '/app/' })