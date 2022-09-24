import React from 'react'

const ReadRows = ({ item, handleEditClick }) => {

 
  return (
    <>
       <tr key={item.id}> 
        <td>{item.name}</td>
        <td>{item.lastname}</td>
        <td>{item.surename}</td>
        <td>{item.age}</td>
        <td>{item.sex}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td >
          <button onClick={(e) => handleEditClick(e,item)} type='button'> Editar</button>
        </td>
        </tr>
    </>
  )
}

export default ReadRows