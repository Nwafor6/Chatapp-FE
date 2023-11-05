import React, {useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "./appConfig"
import NavBar from "./Nav"
import { ChatList } from "./ChatList"
import { ChatScroll } from "./ChatScroll"
import { socket } from "./appConfig"


const Chat =()=>{
    const navigate =useNavigate()
    const scroll = useRef();
    const [friends, setFriends]=useState([]);
    const[friendName, sefFriendName]=useState("")
    const[friendId, sefFriendId]=useState("")
    const [messages, setMessages]=useState([]);
    const[text, setText]= useState("")
    const[userId, setUserId]=useState("")
    const user=JSON.parse(localStorage.getItem("user"))
    async function fetchFriends(){
        const resp= await fetch(`${BASE_URL}/friends`,{
            headers:{
                    "Content-Type" : "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("user_data")}`
                },
        }) 
        const data= await resp.json();
        if (resp.ok){
            console.log(data)
            setFriends(data.friends)
        }else{
            console.log(data, "error")
        }
    }
    const getUserByClick = (friendID, username) => {
        console.log(`User ${friendID} ${username} clicked!`);
        sefFriendName(username)
        sefFriendId(friendID)
        setMessages([])
        handleGetMessages(friendID)
        // Implement your custom logic here
    };
    async function handleGetMessages(friendID){
        console.log(friendID, "user_id")
        const resp= await fetch(`${BASE_URL}/get-messages?friendID=${friendID}`,{
            headers:{
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${localStorage.getItem("user_data")}`
            },
            // body: JSON.stringify({friendID:`${friendID}`}),
        }) 
        const data= await resp.json();
        if (resp.ok){
            console.log(data)
            setMessages(data)
        }else{
            console.log(data, "error")
        }
    }
    async  function handleSendMessages (e){
        e.preventDefault();
        const resp= await fetch(`${BASE_URL}/send-message`,{
            method:"POST",
            headers:{
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${localStorage.getItem("user_data")}`
            },
            body: JSON.stringify({friendID:friendId, text:text}),
        }) 
        const data= await resp.json();
        if (resp.ok){
            console.log(data)
            // Send message to socket to =send it to the reciever
            socket.emit("private message",{friendId,data})
            const prevMessage=[...messages, data]
            setMessages(prevMessage)
            setText("")
        }else{
            console.log(data, "error")
        }


    }
    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem("user"))
        if (!user){
            navigate("/login")
        }else{
            console.log(user.id, "Heloo word")
            setUserId(user.id)
            fetchFriends();
        }
        
        
    },[])
    useEffect(() => {
        socket.on("private message", ({ data }) => {
            console.log(data, "from socket");
            const prevMessage = [...messages, data];
            setMessages(prevMessage);
            console.log(data, "new message");
        });
        scroll.current && scroll.current.scrollIntoView({ behavior: 'smooth' });

    }, [messages]); // Ensure to include dependencies, if any, for useEffect
    
    return (
        <>
            <div className="main-body">
                {<NavBar/>}
                <div className="chat-main-body row mt-3">
                    <div className="chat-left-bar col-md-2 col-sm-12 shadow-sm">
                        <div className="title"><h4>Chats</h4></div><hr />
                        {<ChatList friends={friends}  getUserByClick={getUserByClick}/>}
                        {<ChatScroll friends={friends}  getUserByClick={getUserByClick}/>}
                    </div>
                    <div className="chat-right-bar4-messaging col-md-10 col-sm-12 shadow-sm">
                        <div className="top-section mt-3"><i className="bi bi-person-circle"></i> {friendName}</div><hr />
                        <div className="body-section-for-chats">
                            {messages.map(message=>(
                                <div className="chat-item mb-5" key={message._id}>
                                    {message.senderId != userId ? (
                                        <div className="friends-message"><span id="friends-message">{message.text}</span></div>
                                    ):(
                                        <div>
                                            <div className="personal-message" style={{float:"right"}}><span id="personal-message">{message.text}</span></div> <br/>
                                        </div>
                                    )}   
                                </div>
                            ))}
                            
                        </div>
                        <div ref={scroll} >
                        {messages.length === 0 ? (
                                <div>Start a new chat</div>
                            ) : (
                                <form onSubmit={handleSendMessages}>
                                    <div className="messaging-section ">
                                        <div className="add-photo"><i className="bi bi-plus-square"></i></div>
                                        <div className="message-box">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Your message" name="text" value={text} onChange={(e) => { setText(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="message-emoji"><i className="bi bi-emoji-smile"></i></div>
                                        <div className="send-button"><button type="submit" className="btn btn-primary border-0">Send</button></div>
                                    </div>
                                </form>
                            )}
                            {/* <form onSubmit={handleSendMessages}>
                                <div className="messaging-section ">
                                    <div className="add-photo"><i className="bi bi-plus-square"></i></div>
                                    <div className="message-box">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Your message" name="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
                                        </div>
                                    </div>
                                    <div className="message-emoji"><i className="bi bi-emoji-smile" ></i></div>
                                    <div className="send-button"><button type="submit" className="btn btn-primary border-0">Send</button></div>
                                </div>
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat