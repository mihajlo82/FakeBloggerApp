import { validate } from '../../validation/Validate';
import { useToasts } from 'react-toast-notifications';

const useModal = ({title, body, setDatas, setCurrentId, setShowModal, currentId, currentUser, datas, isEdit, setShowEditModal, editUser}) => {
    const { addToast } = useToasts();

    const addNewPost = () => {
        let isValidPost = validate.checkPostInputs(title, body);
  
        if(!isValidPost)
        {
          addToast('Please, check your data length!', { appearance: 'error', autoDismiss: true,autoDismissTimeout :1750 });
          return;
        }
        else if(!isEdit)
        {
          let dataNew = 
          {
            title:isValidPost.stitle,
            body: isValidPost.sbody,
            id: currentId,
            userId: currentUser.id
          }
           setDatas([...datas, dataNew])
           setCurrentId(prev => prev + 1);
           setShowModal(false);
           addToast('Successfully added!', { appearance: 'success', autoDismiss: true, autoDismissTimeout :1750 });
        }
        else if(isEdit)
        {
          editUser.title = title;
          editUser.body = body;
          setShowEditModal(false);
          addToast('Successfully updated!', { appearance: 'success', autoDismiss: true, autoDismissTimeout :1750 });
        }
      }

  return {addNewPost}
}

export default useModal