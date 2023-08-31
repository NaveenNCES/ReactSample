import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const UserContext = createContext('');

function HookContext() {
    const [user, setContext] = useState("This is context");
    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component1 />
        </UserContext.Provider>
    )
}

function Component1() {
    return (
        <>
            <h1>Component2</h1>
            <Component2 />
        </>
    )
}

function Component2() {
    return (
        <>
            <h1>Component3</h1>
            <Component4 />
        </>
    )
}

function Component4() {
    const user = useContext(UserContext);
    return (
        <>
            <h1>Component 4</h1>
            <h2>{user}</h2>
        </>
    )
}

export default HookContext