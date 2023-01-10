
import './App.css';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import AdminLogin from './Components/adminLogin';
import UserLogin from './Components/userLogin';
import AdminHome from './Components/AdminHome';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<LandingPage/>}/>
         <Route path='/AdminLogin' element={<AdminLogin/>} />
         <Route path='/UserLogin' element={<UserLogin/>} />
         <Route path='/Admin/*' element={<AdminHome/>} />
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
