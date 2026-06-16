"use client"

import { useState } from "react"

export default function Page() {
    const [name, setName] = useState<string>("Vanra");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h2 className="text-2xl font-bold">Name:{name}</h2>
            <button className="border px-5 py-2 rounded"
                onClick={() => setName("Ly sovanra")}>Change name</button>

        </div>
    )
}