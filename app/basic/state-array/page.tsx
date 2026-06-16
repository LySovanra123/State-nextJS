'use client'

import { useState } from "react"

const TodoList = () => {
    const listTodo: string[] = ['Learn NextJS', 'Practice TypeScript']

    const [todos, setTodos] = useState<string[]>(listTodo);

    const addTodo = () => {
        setTodos([...todos, "Build a project"])
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-5">
            <button className="border py-2 px-5 rounded"
                onClick={addTodo}>Add Todo</button>
            <ul>
                {
                    todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList