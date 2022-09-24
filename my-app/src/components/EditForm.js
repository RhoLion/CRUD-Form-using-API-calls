import React from 'react'

const EditForm = () => {
  return (
    <>
        <td >
          <input
            type='text'
            name='name'
            minLength="3"
            maxLength="45"
            required />
        </td>
        <td >
          <input
            type='text'
            name='lastname'
            minLength="3"
            maxLength="45"
            required />
        </td>
        <td>
          <input
            type='text'
            name='surename'
            minLength="3"
            maxLength="45"
            required />
        </td>
        <td>
          <input
            type='number'
            name='age'
            maxLength='2'
            required />
        </td>
        <td>
          <input
            type="text"
            id="sex"
            name="sex"
            value='masculino'
          />
        </td>
        <td>
          <input
            type='email'
            name='email'
          />
        </td>
        <td>
          <input
            type='number'
            name='phone'
            minLength="10"
          />
        </td>
    </>
  )
}

export default EditForm