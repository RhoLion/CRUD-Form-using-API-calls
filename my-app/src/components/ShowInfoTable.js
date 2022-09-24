import React, { useState } from 'react';

import TableHeader from './commons/TableHeader';
import EditForm from './EditForm';
import ReadRows from './ReadRows';
import styles from './styles/ShowInfoTable.module.css';

const ShowInfoTable = ({ dataInfo }) => {

  const [editUserId, setEditUserId] = useState(null);
  const [editUserData, setEditUserData] =useState({
    name: '',
    lastname: '',
    surename: '',
    age: '',
    sex: '',
    email: '',
    phone: ''
  })

  const handleEditInputChange = (event) => {
    setEditUserData({
      ...editUserData,
      [event.target.name]: event.target.value
    })
  }
  const handleEditClick = (e, item) => {
    e.preventDefault()
    setEditUserId(item.id)
  }

const handleEditForm = (editUserData) => {

  fetch(`http://localhost:5000/userInfo/${editUserData.id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      name: editUserData.name,
      lastname: editUserData.lastname,
      surename: editUserData.surename,
      age: editUserData.age,
      sex: editUserData.sex,
      email: editUserData.email,
      phone: editUserData.phone,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      console.log('Success:', response);
    });
    console.log(editUserData)
  return [editUserData];
};

  return (
    <>
      <form onSubmit={handleEditForm(editUserData)} className={styles.tableContainer} >
      <table>
          <TableHeader />
          <tbody> 
            {dataInfo &&
              dataInfo.map((item) => {
                return (
                  <>
                     {editUserId === item.id ? <EditForm item={item} handleEditInputChange={handleEditInputChange} editUserData={editUserData} /> : <ReadRows item={item} handleEditClick={handleEditClick} />}
                   </>
                );
              })}
          </tbody>
        </table>
      </form>
    </>
  )
}

export default ShowInfoTable