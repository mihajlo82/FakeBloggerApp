import React from 'react'

const TableHead = ({currentUser}) => {
  return (
    <thead>
      {currentUser.role === 'admin' ?
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
          <th></th>
          <th></th>
        </tr>
    :  
       <tr>
          <th>Id</th>
          <th style={{width:'30vw'}}>Title</th>
          <th style={{width:'65vw'}}>Body</th>
        </tr>
    }
    </thead>
  )
}

export default React.memo(TableHead)