import {useState} from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import { storage } from '../../storage/Storage';
import CustomRoutes from './CustomRoutes';

const Auth = () => {
  let checkIsAlereadyLogged = storage.load('data') || false;
  const [isLogged, setIsLogged] = useState(checkIsAlereadyLogged);

  return (
    <Router>
        <CustomRoutes isLogged={isLogged} setIsLogged={setIsLogged} />
    </Router>
  )
}
export default Auth