import React from 'react'

const EditForm = ({item, handleEditInputChange, editUserData}) => {
  return (
    <>
     <tr key={item.id}>
        <td>
          <input
            type='text'
            name='name'
            value={editUserData.name}
            onChange={handleEditInputChange}
            minLength="3"
            maxLength="45"
            placeholder='Ingrese nombre'
            required />
        </td>
        <td>
          <input
         onChange={handleEditInputChange}
            type='text'
            value={editUserData.lastname}
            name='lastname'
            minLength="3"
            maxLength="45"
            placeholder='Ingrese apellido paterno'
            required />
        </td>
        <td >
          <input
         onChange={handleEditInputChange}
            type='text'
            value={editUserData.surename}
            name='surename'
            minLength="3"
            maxLength="45"
            placeholder='Ingrese apellido materno'
            required />
        </td>
        <td >
          <input
        onChange={handleEditInputChange}
            type='number'
            name='age'
            value={editUserData.age}
            maxLength='2'
            placeholder='Ingrese edad'
            required />

        </td>
        <td >
          <input
          onChange={handleEditInputChange}
            type="text"
            name="sex"
            placeholder='Ingrese sexo'
            value={editUserData.sex}
          />
        </td>
        <td >
          <input
         onChange={handleEditInputChange}
            type='email'
            name='email'
            placeholder='Ingrese email'
            value={editUserData.email}
          />
        </td>
        <td>
          <input
          onChange={handleEditInputChange}
            type='number'
            name='phone'
            minLength="10"
            placeholder='Ingrese teléfono'
            value={editUserData.phone}
          />
        </td>
        <td >
          <button type='submit'>Guardar</button>
        </td>
        </tr>
    </>
  )
}

export default EditForm