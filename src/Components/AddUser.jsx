import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    let navigate = useNavigate()
    let [name,setname] = useState("")
    let [age,setage] = useState("")
    let [email,setemail] = useState("")
    let [phoneNumber,setphoneNumber] = useState("")

    let handleSubmit = (e) =>{
        e.preventDefault();
        let userData = {name,age,email,phoneNumber}     

        //posting to server
        fetch('http://localhost:3007/users' ,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(userData)
          })
          alert('users added successfully')
          navigate('/admin/user-list')
        }



    return ( 
        <div className="addUser">
            <h1>Add a New User</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="name">
                        <input  type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="enter name of the user" />
                    </div>
                    <div className="age">
                        <input type="number" min='1' value={age} onChange={(e)=>setage(e.target.value)} placeholder="enter age of  the user"/>
                    </div>
                    <div className="email">
                        <input type="email" minLength='10' maxLength='10' value={email} onChange={(e)=>setemail(e.target.value)} placeholder="enter the email address"/>
                    </div>
                    <div className="phoneNumber">
                        <input type="number" value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)} placeholder="enter phoneNumber of the user"/>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default AddUser;