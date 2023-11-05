import NavBar from "./Nav"
import { BASE_URL } from "./appConfig"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export const AddFriends =()=>{
    const navigate =useNavigate()
    const [people, setPeople]=useState([])
    async function fetchUsers(){
        const resp= await fetch(`${BASE_URL}/all-users`,{
            headers:{
                // "Content-Type" : "application/json",
                "Authorization": `Bearer ${localStorage.getItem("user_data")}`
            },
        }) 
        const data= await resp.json();
        if (resp.ok){
            console.log(data)
            setPeople(data)
        }else{
            console.log(data, "error")
        }
    }
    async function handleAddFriend(userId){
        console.log(userId, "user_id")
        const resp= await fetch(`${BASE_URL}/add-friend`,{
            method:"POST",
            headers:{
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${localStorage.getItem("user_data")}`
            },
            body: JSON.stringify({friendID:`${userId}`}),
        }) 
        const data= await resp.json();
        if (resp.ok){
            console.log(data)
            // setPeople(data)
            alert(data.detail)
        }else{
            console.log(data, "error")
            alert(data.detail)
        }
    }
    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem("user"))
        if (!user){
            navigate("/login")
        }
        
    },[])
    useEffect(()=>{
        fetchUsers();
    },[])
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
                {people.map(person=>{
                    return (
                        <div key={person._id}>
                            <div className="chat-user">
                                <div className="user" >
                                    <h6><i className="bi bi-person-circle"></i> {person.username} <i className="bi bi-dot"></i></h6>
                                </div>
                                <div className="add-btn">
                                    <button className="btn btn-primary" onClick={()=>(handleAddFriend(person._id))}><i className="bi bi-plus-square"></i></button>
                                </div>
                            </div><hr />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}