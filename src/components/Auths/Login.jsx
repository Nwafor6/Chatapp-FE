import { Link } from "react-router-dom"
export const Login =()=>{
    return(
        <div className="container auth">
            <div className="title text-center"><h3>Login</h3></div>
            <form className="row_ ">
            <div className="col-md-6_">
                <label  htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            <div className="col-md-6_">
                <label  htmlFor="inputPassword4" className="form-label">Username</label>
                <input type="text" className="form-control" id="inputPassword4"/>
            </div>
            <div className="col-12 mt-3">
                <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
         </form>
         <div><p>Don't have an account? <Link to="/signup">Signup</Link></p></div>
        </div>
    )
}