import { Link,  useNavigate } from "react-router-dom";
import { BASE_URL } from "../appConfig"
import {useState} from "react"

export const Signup =()=>{
    const navigate = useNavigate();
    const [email, setemail]=useState("");
    const [password, setpassword]=useState("");
    const [username, setusername]=useState("");
    const [response_msg, setresponse_msg]=useState("");

    localStorage.removeItem("user_data")
    localStorage.removeItem("user")
    localStorage.removeItem("myPics")
    async function handleUserRegister(e){
        e.preventDefault();
        // document.querySelector("#sbtBtn").style.display="none"
        // document.querySelector("#resbtn").style.display="inline-block"
        const response = await fetch(`${BASE_URL}/signup`,{
            method:"POST",
            body: JSON.stringify({email:email, password:password, username:username}),
            headers:{
                // Authorization: `Bearer ${user.access}`,
                "Content-Type":"application/json"
            }
        })
        const data = await response.json()
        if (response.ok){
            // document.querySelector("#sbtBtn").style.display="block"
            // document.querySelector("#resbtn").style.display="none"
            console.log(response, "data is ok")
            setresponse_msg(data.message)
            console.log(data)
            document.querySelector(".success_msg").style.display="block"
            setTimeout(()=>{
                document.querySelector(".success_msg").style.display="none"
                navigate("/login")
            }, 2000)
        }else{
            // document.querySelector("#sbtBtn").style.display="block"
            // document.querySelector("#resbtn").style.display="none"
            console.log(response, "data is bad")
            setresponse_msg(data.message)
            console.log(data.message)
            document.querySelector(".error_msg").style.display="block"
            setTimeout(()=>{
                document.querySelector(".error_msg").style.display="none"
            }, 3000)
        }
        
    }
    return(
        <div className="container auth">
            <div className="title text-center"><h3>Signup</h3></div>
            <div className="error_msg text-center mb-3">
                <div className="alert alert-danger" role="alert">
                { response_msg}
                </div>
            </div>
            <div className="success_msg text-center mb-3">
                <div className="alert alert-success" role="alert">
                { response_msg}
                </div>
            </div>
            <form className="row_ " onSubmit={handleUserRegister}>
            <div className="col-md-6_">
                <label  htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="your email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            </div>
            <div className="col-md-6_">
                <label  htmlFor="inputPassword4" className="form-label">Username</label>
                <input type="text" className="form-control" id="inputPassword4"  placeholder="your username" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
            </div>
            <div className="col-md-6_">
                <label  htmlFor="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id=""  placeholder="your password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
            </div>
            <div className="col-12 mt-3">
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
         </form>
         <div><p>Already have an account? <Link to="/login">Login</Link></p></div>
        </div>
    )
}