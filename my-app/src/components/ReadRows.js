import React from 'react'

const ReadRows = ({ item }) => {
  return (
    <>
      {/* <tr key={item.id}> */}
        <td >{item.name}</td>
        <td >{item.lastname}</td>
        <td >{item.surename}</td>
        <td >{item.age}</td>
        <td >{item.sex}</td>
        <td >{item.email}</td>
        <td >{item.phone}</td>
        <td >
          <button type='submit'> Editar</button>
        </td>
      {/* </tr> */}
     </>
  )
}

export default ReadRows