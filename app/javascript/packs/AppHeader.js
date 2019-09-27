import React from 'react'
import { Link } from 'react-router-dom'

const AppHeader = () => {
    return (
        <div>
            <Link to={{pathname: "/", state: "desiredState"}} >
                <h1>React Calendar</h1>
            </Link>
            <br />
        </div>
    )
}

export default AppHeader