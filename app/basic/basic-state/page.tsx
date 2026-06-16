"use client"

import { useState } from "react"

const Page = () => {

    const [count, setCounter] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h2 className="text-2xl font-bold">Count: {count}</h2>

            <button
                className="border px-5 py-2 rounded"
                onClick={() => setCounter(count + 1)}
            >
                Increment
            </button>

            <button
                className="border px-4 py-2 rounded"
                onClick={() => setCounter(count - 1)}
            >
                Decrement
            </button>
        </div>
    )
}

export default Page