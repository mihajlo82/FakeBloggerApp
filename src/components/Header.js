import React from 'react';
import HeadStyle from './Main.module.css';
import Button from '@mui/material/Button';
import { storage } from '../storage/Storage';
import { useNavigate} from "react-router-dom";

const Header = ({setIsLogged, currentUser}) => {
  const nav = useNavigate();
    const onLogout = () => {
        storage.remove('data');
        setIsLogged(false);
        nav('/login')
    }

  return (
    <header className={HeadStyle.headerWrapp}>
        <Button variant="contained" color="error" onClick={onLogout}>  Log Out </Button>
        <h3><i>Hello, {currentUser.username} </i></h3>
        <h1>Fake Blogger App</h1>
    </header>
  )
}
export default React.memo(Header);