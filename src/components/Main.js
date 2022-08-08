import {useState, useContext} from 'react';
import CustomTable from './tableData/CustomTable'
import MainStyle from './Main.module.css'
import './tableData/table.css'
import AddPost from './addPost/AddPost';
import ModalAddPost from './addPost/ModalAddPost';
import { MyBloggerContext } from '../context/BloggerContext';
import Header from './Header';

const Main = ({isLogged, setIsLogged}) => {

  const {data, currId, currUser, load, peristData} = useContext(MyBloggerContext);
  const [datas, setDatas] = data;
  const [datasPersistent, setDatasPersistent] = peristData;
  const isLoading = load;
  const [currentUser, setCurrentUser] = currUser;
  const [currentId, setCurrentId]  = currId;
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editUser, setEditUser] = useState({});

  const editPost = item =>{
    setEditUser(item);
    setShowEditModal(true)
  }

  return (
    <div className={MainStyle.mainWrapp}>
      <Header isLogged={isLogged} setIsLogged={setIsLogged} currentUser={currentUser}  />
       {currentUser.role === 'admin' && <AddPost setShowModal={setShowModal} setData={setDatas}  datasPersistent={datasPersistent} /> }
       {isLoading && <p className={MainStyle.loading} ><i>Loading...</i></p> }
       {!isLoading && <CustomTable data={datas} setData={setDatas} editPost={editPost} currentUser={currentUser} /> }
       {showModal && <ModalAddPost editUser={editUser} setShowModal={setShowModal} datas={datas} setDatas={setDatas} currentId={currentId} setCurrentId={setCurrentId} currentUser={currentUser} isEdit={false} /> }
       {showEditModal && <ModalAddPost setShowEditModal={setShowEditModal} editUser={editUser} setShowModal={setShowModal} datas={datas} setDatas={setDatas} currentId={currentId} setCurrentId={setCurrentId} currentUser={currentUser} isEdit={true} /> }
    </div>
  )
}

export default Main