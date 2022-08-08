import StyleAddPost from './AddPost.module.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {useEffect, useState} from 'react';
import { filterList } from '../../users/useUsers';

const AddPost = ({setShowModal, setData, datasPersistent}) => {
  const [searchStr, setSearchStr] = useState('');

  const filtPost = () => {
    
    let trimmString = searchStr.trim();
    
    if(trimmString.length > 0){
        let filteredData = filterList(datasPersistent,trimmString);
        setData(filteredData)
      }else{
        setData(datasPersistent);
      } 
  }

  useEffect(()=>{
    filtPost();
  }, [searchStr])

  return (
    <section className={StyleAddPost.addPostWrapp}>
        <aside className={StyleAddPost.addBtnWrapp}>
            <input type='text' placeholder='Search...' className={StyleAddPost.searchInp} onChange={(e)=>setSearchStr(e.target.value)} />
            <AddCircleOutlineIcon className={StyleAddPost.addBtn} style={{fontSize:'40px', color:'white'}} onClick={()=> setShowModal(true)} />
        </aside>
    </section>
  )
}
export default AddPost