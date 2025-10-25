import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoReducer from './feature/todoList';
import themeReducer from './feature/themeList'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage';

const rootReducer = combineReducers({
    todoList: todoReducer,
    themeList: themeReducer
});

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadFromLocalStorage() as Partial<ReturnType<typeof rootReducer>>,
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;