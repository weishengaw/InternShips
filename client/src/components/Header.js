import React from 'react'

const Header = ({ onClick }) => {
    return (
        <div className="header">
            <h1>InternShips</h1>
            <button>Account</button>
            <button onClick={onClick}>Log Out</button>
        </div>
    )
}

export default Header
