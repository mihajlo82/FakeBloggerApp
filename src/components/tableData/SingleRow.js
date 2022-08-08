import './table.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const SingleRow = ({item,ind, deletePost, editPost, currentUser}) => {

  if(currentUser.role === 'admin'){
      return (
        <tr className='tr' style={{ backgroundColor: ind % 2 === 0 ? 'white' : '#c5c6c7',  color: ind % 2 === 0 ? '#5b5c5e' : 'white', fontWeight:'bold'}}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
            <td><EditIcon onClick={()=>editPost(item)} /></td>
            <td><DeleteForeverIcon onClick={()=>deletePost(item.id)} /></td>
        </tr>
      )
  }else{
    return (
      <tr className='tr' style={{ backgroundColor: ind % 2 === 0 ? 'white' : '#c5c6c7',  color: ind % 2 === 0 ? '#5b5c5e' : 'white', fontWeight:'bold'}}>
          <td>{item.id}</td>
          <td style={{width:'30vw'}}>{item.title}</td>
          <td style={{width:'65vw'}}>{item.body}</td>
      </tr>
    )
  }
}

export default SingleRow