"use client"
import React, { useState, useEffect } from 'react';
import { useTodoStore } from './store';
import "./styles.scss"

const TodoList = () => {
    const todos = useTodoStore((state) => state.todos);
    const fetchTodos = useTodoStore((state) => state.fetchTodos);
    const addTodo = useTodoStore((state) => state.addTodo);
    const updateTodo = useTodoStore((state) => state.updateTodo);
    const deleteTodo = useTodoStore((state) => state.deleteTodo);

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = async () => {
        if (newTodo.trim() !== '') {
            await addTodo({
                todo: newTodo,
                completed: false,
                userId: 1,
            });
            setNewTodo('');
            fetchTodos();
        }
    };

    const handleUpdateTodo = async (id: number, updates: string) => {
        await updateTodo(id, updates);
        fetchTodos();
    };

    const handleDeleteTodo = async (id: number) => {
        await deleteTodo(id);
        fetchTodos();
    };

    return (
        <div className='todosWrapper'>
            <h1>Todo List</h1>
            <div className='input-container'>
                <input
                    className='input-todo'
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="New Todo"
                />
                <button className='add-btn' onClick={handleAddTodo}>Add Todo</button>
            </div>
            <div className='list'>
                {todos?.todos?.map((todo: any) => (
                    <div key={todo.id} className='todo-container'>
                        <p className='todo-title'>{todo.todo} </p>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
