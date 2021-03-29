import React from 'react'

const Header = ({ onClick, loggedIn }) => {
    return (
        <div>
            <div class="logo" style={{display: "inline"}}>InternShippings  </div>
            <i class="fas fa-anchor" style={{display: "inline"}}></i>
            <div id="menu">
                {loggedIn && <div class='button' onClick={onClick} style={{fontSize: 20}}>Log Out</div>}
            </div>
        </div>
    )
}

export default Header
