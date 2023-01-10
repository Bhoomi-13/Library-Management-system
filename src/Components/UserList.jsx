import { useState,useEffect } from "react";
const UserList = () => {
    let [users,setUsers] = useState([])

    useEffect( () =>{
        let fetchData = async() =>{
            let response = await fetch('http://localhost:3007/users')
            let data = await response.json()
            setUsers(data)
        }
        fetchData()
    })
    let handleDelete = (id,title) =>{
        setUsers( users.filter( x=> x.id != id) )
        alert('$ {title} has been removed')
    }
    return ( 
        <div className="userList">
            <h1>User List</h1>
            <div className="users_section"></div>
            {users.map( data =>(
                <div className="users">
                    <h2>{data.name}</h2>
                    <h3>{data.age}</h3>
                    <h4>{data.email}</h4>
                    <h5>{data.phoneNumber}</h5>
                    <button onClick={ ()=> handleDelete(data.id,data.title)}>Delete</button>

                </div>

            ))}
        </div>
     );
}
 
export default UserList;
