import {useState} from 'react'
import ModalStyle from './AddPost.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useModal from './useModal';

const ModalEditPost = ({setShowModal, datas, setDatas, currentId, setCurrentId, currentUser}) => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { addNewPost } = useModal({title, body, setDatas, setCurrentId, setShowModal, currentId, currentUser, datas});

  return (
    <div className={ModalStyle.modalWrapp}>
        <div className={ModalStyle.modalWrappClose} onClick={()=>setShowModal(false)}></div>
         
         <Box className={ModalStyle.formWrapp} sx={{  width: 500, maxWidth: '100%', minHeight: 300}}>
               <h2>Add New Post</h2>
              <TextField fullWidth label="Title" id="title" className={ModalStyle.textField} onChange={(e)=> setTitle(e.target.value)} value={title} />
              <p></p>
              <TextField fullWidth label="Body" id="body" className={ModalStyle.textField} onChange={(e)=> setBody(e.target.value)} value={body} /><br/>

              <Button variant="contained" onClick={addNewPost}> Save Post </Button>
        </Box>
    </div>
  )
}

export default ModalEditPost