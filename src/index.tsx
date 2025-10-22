import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/style.scss';
import '../src/assets/css/normalize.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//BrowserRouter, Routes, Route, 
import { HomePage } from './pages/HomePage';
//import { Header } from './components/header/Header';
import { ToDo } from './components/models/todo-items';
//import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';
import { Layout } from './layouts/Layout';
import { NotFound } from './pages/404';

const todos : ToDo[] = [
  {
    id: 0,
    text: 'Первое действие',
    isDone: false
  },
  {
    id: 1,
    text: 'Второе действте',
    isDone: true
  },
  {
    id: 2,
    text: 'Третье действие',
    isDone: false
  },
  {
    id: 3,
    text: 'Четвертое действие',
    isDone: true
  },
]

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage todos={todos}/>
      },
      {
        path: '/todo',
        element: <ToDoListPage/>
      },
      {
        path: '/list/:id',
        element: <ItemDescription todos={todos}/>
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />,
  }
], { basename: '/app/' })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/*<BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage todos={todos}/>}></Route>
        <Route path='/list/:id' element={<ItemDescription todos={todos}/>}></Route>
        <Route path='/todo' element={<ToDoListPage/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>*/}
  </React.StrictMode>
);
