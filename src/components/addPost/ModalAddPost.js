import {useState} from 'react'
import ModalStyle from './AddPost.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useModal from './useModal';

const ModalAddPost = ({editUser, setShowModal, datas, setDatas, currentId, setCurrentId, currentUser, isEdit, setShowEditModal}) => {

  const [title, setTitle] = useState(isEdit ? editUser.title : '');
  const [body, setBody] = useState(isEdit ? editUser.body : '');
  const { addNewPost } = useModal({title, body, setDatas, setCurrentId, setShowModal, currentId, currentUser, datas, editUser, setShowEditModal, isEdit});

  return (
    <div className={ModalStyle.modalWrapp}>
        <div className={ModalStyle.modalWrappClose} onClick={()=>setShowModal(false)}></div>
         
         <Box className={ModalStyle.formWrapp} sx={{  width: 500, maxWidth: '100%', minHeight: 300}}>
               <h2>{isEdit ? 'Edit Post' : 'Add New Post'}</h2>
              <TextField fullWidth label="Title" id="title" className={ModalStyle.textField} onChange={(e)=> setTitle(e.target.value)} value={title} />
              <p></p>
              <TextField fullWidth label="Body" id="body" className={ModalStyle.textField} onChange={(e)=> setBody(e.target.value)} value={body} /><br/>

              <Button variant="contained" onClick={addNewPost}> {isEdit ? 'Save changes' : 'Add Post'} </Button>
        </Box>
    </div>
  )
}

export default ModalAddPost