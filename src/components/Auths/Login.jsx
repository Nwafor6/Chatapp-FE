import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../appConfig"
import { useState, useEffect } from "react"
export const Login =()=>{
    const [response_msg, setresponse_msg]=useState("");
    const navigate = useNavigate();
    const [UserDataJson, setUserDataJson] = useState(null);
    const [email, setemail]=useState("");
    const [password, setpassword]=useState("");
    async function handleLogin(e){
        // document.querySelector("#sbtBtn").style.display="none"
        // document.querySelector("#resbtn").style.display="inline-block"
    
        e.preventDefault();
        console.log(password, "Jellll")
        const response = await fetch(`${BASE_URL}/login`,{
            method:"POST",
            body: JSON.stringify({email:email, password:password}),
            headers:{
                // Authorization: `Bearer ${user.access}`,
                "Content-Type":"application/json"
            }
        })
        const data = await response.json()
        if (response.ok){
            console.log(response, "data is ok")
            localStorage.setItem("user_data", data.token)
            // document.querySelector("#sbtBtn").style.display="block"
            // document.querySelector("#resbtn").style.display="none"
            const user={
                email:data.user.email,
                username:data.user.username,
                id:data.user._id,
                profileImage:data.user.profileImage
            }
            const myPics=data.user.profileImage
            localStorage.setItem("myPics", JSON.stringify(myPics))
            localStorage.setItem("user", JSON.stringify(user))
            setresponse_msg(data.message)
            navigate("/chats")
            document.querySelector(".success_msg").style.display="block"
            setTimeout(()=>{
                // document.querySelector(".success_msg").style.display="none"
                navigate("/chats")
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
            <div className="title text-center"><h3>Login</h3></div>
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
            <form className="row_ " onSubmit={handleLogin}>
            <div className="col-md-6_">
                <label  htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Your email" value={email} onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div className="col-md-6_">
                <label  htmlFor="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4"  placeholder="Your password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            </div>
            <div className="col-12 mt-3">
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
         </form>
         <div><p>Don't have an account? <Link to="/signup">Signup</Link></p></div>
        </div>
    )
}