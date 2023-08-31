import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'
import './StyleSheet.css'

function Home() {
    const navigate = useNavigate();
    const navigateToHooks = () => {
        navigate('/hooks')
    }

    const navigateToHookContext = () => {
        navigate('/hookContext')
    }

    const navigateToHookRef = () => {
        navigate('/hookRef')
    }

    return (<>
        <div className='center-align'>
            <label>Sample React POC</label>
            <button onClick={navigateToHooks}>Hooks</button>
            <button onClick={navigateToHookContext}>HookContext</button>
            <button onClick={navigateToHookRef}>HookRef</button>
        </div>
    </>)
}

export default Home
