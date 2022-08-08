import { deletePostSpec } from '../../users/useUsers';
import { useToasts } from 'react-toast-notifications';

const useCustomTable = ({data, setData}) => {
    const { addToast } = useToasts();

    const deletePost = id => {
  
        if(id !== null || id !== undefined)
        {
           let updData = deletePostSpec(data, id);
           setData(updData);
           addToast('Successfully deleted!', { appearance: 'success', autoDismiss: true, autoDismissTimeout :1750 });
        }
        else
        {
           addToast('Deleting failed!', { appearance: 'error', autoDismiss: true, autoDismissTimeout :1750 });
        }
     }

  return {deletePost};
}

export default useCustomTable