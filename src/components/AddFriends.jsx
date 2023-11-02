import NavBar from "./Nav"


export const AddFriends =()=>{
    return (
        <div className="main-body">
            {<NavBar/>}
            <div className="add-friend-title mt-3 text-center"><h4>Add friends</h4></div>
            <div className="filter-bar text-center">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <span className="input-group-text" id="basic-addon2"><i className="bi bi-search"></i></span>
                </div>
            </div>
            <div className="chat-list mt-5 ">
                <div className="chat-user">
                    <div className="user">
                        <h6><i className="bi bi-person-circle"></i> Glory <i className="bi bi-dot"></i></h6>
                        <div className="status"><small>Online</small></div>
                    </div>
                    <div className="add-btn">
                        <button className="btn btn-primary"><i className="bi bi-plus-square"></i></button>
                    </div>
                </div><hr />
                <div className="chat-user">
                    <div className="user">
                        <h6><i className="bi bi-person-circle"></i> Glory <i className="bi bi-dot"></i></h6>
                        <div className="status"><small>Online</small></div>
                    </div>
                    <div className="add-btn">
                        <button className="btn btn-primary"><i className="bi bi-plus-square"></i></button>
                    </div>
                </div><hr />
            </div>
        </div>
    )
}