import { validate } from "../../validation/Validate";
import { findUser } from "../../users/useUsers";
import { storage } from "../../storage/Storage";
import { useToasts } from 'react-toast-notifications';
import { useNavigate} from "react-router-dom";

const useLogin = ({username, password, setCurrentUser, setIsLogged}) => {
    const { addToast } = useToasts();
    const nav = useNavigate();

    const handleSubmit = () => {
        const isValid = validate.checkLoginCredentials(username, password);

        if(!isValid) {
          addToast('Check Credentials Length!', { appearance: 'error', autoDismiss: true , autoDismissTimeout :1750});
          return;
        }
    
        const data = findUser(username, password);
    
        if(data.isValidUser)
        {
          setCurrentUser(data.userData);
          storage.saveData('data', data.userData);
          setIsLogged(true);
          nav('/home')
          addToast('Login Success!', { appearance: 'success', autoDismiss: true, autoDismissTimeout :1750 });
        }
        else
        {
          addToast('Wrong Credentials!', { appearance: 'error', autoDismiss: true, autoDismissTimeout :1750 });
        }
      };
      
  return {handleSubmit}
}

export default useLogin