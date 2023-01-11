import { Link } from "react-router-dom";

const UserNavbar = () => {
    return ( 
        <div className="userNavbar">
        <div className="logo">
              <h1>UserPortal</h1>
       </div>
          <div className="user_links">
          <ul>
            <li><Link to="/user/*">Dashboard</Link></li>      
           <li><Link to="/user/book-list">Book List</Link></li>
           <li><Link to="/">Logout</Link></li>
          </ul>
    </div>
    </div>
     );
}
 
export default UserNavbar;