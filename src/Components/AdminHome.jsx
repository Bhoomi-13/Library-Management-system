import AdminNavbar from './AdminNavbar';
import {Routes,Route} from 'react-router-dom'
import AdminDashBoard from "./AdminDashboard";
import UserList from './UserList';
import BookList from './bookList';
import ReadBook from './ReadBook';
import AddBook from './AddBook';
import AddUser from './AddUser';
const AdminHome = () => {
    return ( 
        <div className="adminHome">
             <AdminNavbar/>
             <Routes>
                 <Route path='/' element={<AdminDashBoard/>} />
                 <Route path='/book-list' element={<BookList/>}/>
                 <Route path='/user-list' element={<UserList/>}/>
                 <Route path='/add-book' element={<AddBook/>}/>
                 <Route path='/book-list/:id' element={<ReadBook/>}/>
                 <Route path='/add-user' element={<AddUser/>}/>
             </Routes>
        </div>
     );
}
 
export default AdminHome;