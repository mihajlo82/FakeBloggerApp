import React from 'react'
import './table.css';
import TableHead from './TableHead';
import SingleRow from './SingleRow';
import useCustomTable from './useCustomTable';

const CustomTable = ({data, setData, editPost, currentUser}) => {
  const {deletePost} = useCustomTable({data, setData})

  return (
     <article id='tableArticleWrapp'>
         {data.length <= 0 && <div className='noData'>No data</div>}

         {data.length > 0 &&
           <table id='uniquetable'>
            <TableHead currentUser={currentUser} />
            <tbody>{data.length > 0 && data.map((item, ind) => <SingleRow key={item.id} item={item} ind={ind} deletePost={deletePost} editPost={editPost} currentUser={currentUser} />)}</tbody>
        </table>}
     </article>
  )
}

export default CustomTable