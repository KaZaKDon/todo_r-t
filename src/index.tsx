import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/style.scss';
import '../src/assets/css/normalize.scss';
import { ToDoListPage } from './pages/ToDoListPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToDoListPage/>
  </React.StrictMode>
);
