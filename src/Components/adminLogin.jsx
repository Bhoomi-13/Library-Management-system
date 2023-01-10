import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import '../styles/adminLogin.css';
const AdminLogin =() =>{
    let[email,setemail]=useState('')
    let[password,setpassword]=useState('')
    let Navigate=useNavigate()
    let login = (e) =>{
        e.preventDefault();
        let data={email,password}
        console.log(data);
        if ( email=="admin@gmail.com" && password == "1234"){
            Navigate('/Admin/')     
        } else{
            alert('Invalid credentials')
        }     

    }
    return(
        <div className="AdminLogin">
            <div className="form container">
                <h1>Login as Admin</h1>
                <div className="form_inputs">
                    <form action="" onSubmit={login}>
                        <div className="email">
                            <input type="email" required value={email} onChange={(e)=>setemail(e.target.value)} placeholder="email address" />
                        </div>
                        <div className="password">
                            <input type="password" required value={password} onChange={(e)=>setpassword (e.target.value)} placeholder="enter password" />
                        </div>
                        <button className="Login">Login</button>
                        
                    </form>

                </div>

            </div>

        </div>
    )
}
export default AdminLogin;