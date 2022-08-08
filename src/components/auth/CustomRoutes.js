import Main from '../Main';
import Login from './Login';
import { Routes, Route, Navigate} from "react-router-dom";
import NotFoundPage from '../error/NotFoundPage';

const CustomRouter = ({ isLogged, setIsLogged}) => {
    
  if(!isLogged){
      return (
        <Routes>
          <Route path="/"  element={<Navigate to='/login' />}  />
          <Route path="/login" element={ <Login setIsLogged={setIsLogged} />} />
          <Route path="*" element={ <Login setIsLogged={setIsLogged} />} />
        </Routes> 
      )
    }

     return (
        <Routes>
            <Route path="/"  element={<Navigate to='/home' />}  />
            <Route path="/login"  element={<Navigate to='/home' />}  />
            <Route  path="/home" element={ <Main isLogged={isLogged} setIsLogged={setIsLogged} />} />
            <Route path="*" element={ <NotFoundPage />} />
        </Routes>
     )  
}

export default CustomRouter