import { RootState } from "../store";

export const saveToLocalStorage = (state: RootState) => {
    try {
        const appState = JSON.stringify(state);
        localStorage.setItem('appState', appState);
    } catch (e) {
        console.warn("Ошибка сохранения:", e);
    }
};

export const loadFromLocalStorage = () => {
    try {
        const appState = localStorage.getItem('appState');
        if (!appState) return undefined;

        const parsed = JSON.parse(appState);

        // ✅ Гарантируем правильную структуру
        if (parsed && parsed.todoList && Array.isArray(parsed.todoList.todos)) {
            return parsed; 
        }

        // ✅ Восстанавливаем структуру, если что-то не так
        return {
            todoList: {
                todos: []
            }
        };
    } catch (e) {
        console.warn("Ошибка загрузки:", e);
        return undefined;
    }
};