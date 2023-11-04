


export const ChatScroll =({friends , getUserByClick})=>{
    return (
        <div className="chat-list table-responsive small-screen">
            <table className="table">
                <tbody>
                    <tr>
                        {friends.map(friend=>{
                            return(
                                <td key={friend._id}>
                                    <div className="chat-user-name">
                                        <h6 onClick={()=>{getUserByClick(friend._id, friend.username)}}><i className="bi bi-person-circle"></i> {friend.username} <i className="bi bi-dot"></i></h6>
                                        <div className="status"><small>Online</small></div>
                                    </div>
                                </td>
                            )
                        })}
                    </tr>
                </tbody>
                </table>
        </div>
    )
}