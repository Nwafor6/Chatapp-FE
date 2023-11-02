import React, {useState, useEffect} from "react"
import NavBar from "./Nav"


const Chat =()=>{
    return (
        <>
            <div className="main-body">
                {<NavBar/>}
                <div className="chat-main-body row mt-3">
                    <div className="chat-left-bar col-md-2 col-sm-12 shadow-sm">
                        <div className="title"><h4>Chats</h4></div><hr />
                        <div className="chat-list">
                            <div className="chat-user-name">
                                <h6><i class="bi bi-person-circle"></i> Glory <i class="bi bi-dot"></i></h6>
                                <div className="status"><small>Online</small></div>
                            </div><hr />
                            <div className="chat-user-name">
                                <h6><i class="bi bi-person-circle"></i> Prince <i class="bi bi-dot"></i></h6>
                                <div className="status"><small>Online</small></div>
                            </div><hr />
                            <div className="chat-user-name">
                                <h6><i class="bi bi-person-circle"></i> David <i class="bi bi-dot"></i></h6>
                                <div className="status"><small>Offline</small></div>
                            </div><hr />
                        </div>
                    </div>
                    <div className="chat-right-bar4-messaging col-md-10 col-sm-12 shadow-sm">
                        <div className="top-section mt-3"><i class="bi bi-person-circle"></i></div><hr />
                        <div className="body-section-for-chats"></div>
                        <div className="messaging-section ">
                            <div className="add-photo"><i class="bi bi-plus-square"></i></div>
                            <div className="message-box">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Text" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                </div>
                            </div>
                            <div className="message-emoji"><i class="bi bi-emoji-smile"></i></div>
                            <div className="send-button"><button className="btn btn-primary border-0">Send</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat