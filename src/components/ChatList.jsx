
export const ChatList =({ friends, getUserByClick })=>{

    return (
        <div className="chat-list large-screen">
            {friends.map(friend=>{
                return(
                    <div key={friend._id}>
                        <div className="chat-user-name">
                            <h6 onClick={()=>{getUserByClick(friend._id, friend.username)}}><i className="bi bi-person-circle"></i> {friend.username} <i className="bi bi-dot"></i></h6>
                            <div className="status"><small>Online</small></div>
                        </div><hr />
                    </div>
                )
            })}
        </div>
    )
}