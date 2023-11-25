"use client"
import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useTodoStore = create(
    devtools((set) => ({
        todos: [],
        setTodos: (todos) => set({ todos }),
        fetchTodos: async () => {
            try {
                const response = await fetch('https://dummyjson.com/todos');
                if (!response.ok) {
                    throw new Error('Failed to fetch todos');
                }
                const fetchedTodos = await response.json();
                set({ todos: fetchedTodos });
            } catch (error) {
                console.error(error);
            }
        },
        addTodo: async (newTodo) => {
            try {
                const response = await fetch('https://dummyjson.com/todos/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                    body: JSON.stringify(newTodo),
                });

                if (response.ok) {
                    const addedTodo = await response.json();
                    set((state) => ({ todos: [...state.todos, addedTodo] }));
                }
            } catch (error) {
                console.error(error);
            }
        },
        updateTodo: async (id, updates) => {
            try {
                const response = await fetch(`https://dummyjson.com/todos/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                    body: JSON.stringify(updates),
                });

                if (response.ok) {
                    set((state) => ({
                        todos: state.todos.map((todo) => (todo.id === id ? { ...todo, ...updates } : todo)),
                    }));
                }
            } catch (error) {
                console.error(error);
            }
        },
        deleteTodo: async (id) => {
            try {
                const response = await fetch(`https://dummyjson.com/todos/${id}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                });

                if (response.ok) {
                    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }));
                }
            } catch (error) {
                console.error(error);
            }
        },
    }))
);
