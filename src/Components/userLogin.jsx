import { useNavigate } from "react-router-dom";
import '../styles/userLogin.css';
const UserLogin = () => {
    let Navigate = useNavigate()
    let login = () =>{
        Navigate('/user')
    }
    return ( 
        <div className="userLogin">
            <div className="form container card">
                <h1>Login as User</h1>
                <div className="form_inputs">
                    <form action="" onSubmit={login}>
                        <div className="email">
                            <input type="email" required  placeholder="email address" />
                        </div>
                        <div className="password">
                            <input type="password" required  placeholder="enter password" />
                        </div>
                        <button className="Login">Login</button>
                        
                    </form>

                </div>

            </div>

        </div>
     );
}
 
export default UserLogin;