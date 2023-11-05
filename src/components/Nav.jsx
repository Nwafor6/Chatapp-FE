import React from "react"
import { Link, useNavigate} from "react-router-dom"

const NavBar= ()=>{
    const navigate=useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem("myPics");
        localStorage.removeItem("user");
        localStorage.removeItem("user_data");
        navigate("/login")
    }
    return (
        <div className="nav-section">
            <div className="left-nav-section">
                <div className="logo"><i className="bi bi-bootstrap-fill text-primary"></i></div>
            </div>
            <div className="right-nav-section">
                <div className="people"><Link to='/add-friends' ><i className="bi bi-people-fill"></i></Link></div>
                <div className="notification" onClick={handleLogout}><i className="bi bi-box-arrow-left"></i></div>
                <div className="message"><Link to="/chats"><i className="bi bi-chat-square-dots"></i></Link></div>
            </div>
        </div>
    )
}

export default NavBar