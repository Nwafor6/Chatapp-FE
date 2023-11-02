import React from "react"
import { Link } from "react-router-dom"

const NavBar= ()=>{
    return (
        <div className="nav-section">
            <div className="left-nav-section">
                <div className="logo"><i className="bi bi-bootstrap-fill text-primary"></i></div>
                {/* <div className="filter-bar">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <span className="input-group-text" id="basic-addon2"><i className="bi bi-search"></i></span>
                    </div>
                </div> */}
            </div>
            <div className="right-nav-section">
                <div className="people"><Link to='/add-friends' ><i class="bi bi-people-fill"></i></Link></div>
                <div className="notification"><i className="bi bi-bell"></i></div>
                <div className="message"><Link to="/chats"><i className="bi bi-chat-square-dots"></i></Link></div>
            </div>
        </div>
    )
}

export default NavBar