'use client'

import { UserType } from "@/types/UserType";
import { useState } from "react";

const Profile = () => {
    const [user, setUser] = useState<UserType>({
        id: 1,
        name: "vanra"
    })

    const updateName = () => {
        setUser(
            {
                ...user,
                name: "Ly Sovanra"
            }
        )
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen gap-5">
            <h1>ID:{user.id}</h1>
            <h3>Name:{user.name}</h3>
            <br />
            <button className="border py-2 px-5 rounded" onClick={updateName}>Change Name</button>
        </div>
    )
}

export default Profile