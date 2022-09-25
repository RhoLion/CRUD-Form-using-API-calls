import React, { useState, useEffect } from 'react';

import TableHeader from './commons/TableHeader';
import EditForm from './EditForm';
import ReadRows from './ReadRows';
import styles from './styles/ShowInfoTable.module.css';


const ShowInfoTable = ({ dataInfo }) => {

  const [editedUserData, setEditedUserData] = useState(null);
  const [userData, setUserData] = useState({
    name: '',
    lastname: '',
    surename: '',
    age: '',
    sex: '',
    email: '',
    phone: ''
  })

  const handleEditInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
  }

  const handleEditClick = (e, item) => {
    e.preventDefault()
    setEditedUserData(item.id)

    const formValues = {
      id: item.id,
      name: item.name,
      lastname: item.lastname,
      surename: item.surename,
      age: item.age,
      sex: item.sex,
      email: item.email,
      phone: item.phone
    }
    setUserData(formValues)
  }

  const handleEditForm = (editedUserData) => {
    fetch(`http://localhost:5001/userInfo/${editedUserData.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: editedUserData.id,
        name: editedUserData.name,
        lastname: editedUserData.lastname,
        surename: editedUserData.surename,
        age: editedUserData.age,
        sex: editedUserData.sex,
        email: editedUserData.email,
        phone: editedUserData.phone,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        console.log('Success:', response);
      });
    console.log(editedUserData)
    return [editedUserData];
  };

  return (
    <>
      <form onSubmit={() => handleEditForm(userData)} className={styles.tableContainer} >
        <table>
          <TableHeader />
          <tbody>
            {dataInfo &&
              dataInfo.map((item) => {
                return (
                  <>
                    {editedUserData === item.id ?
                      <EditForm item={item} handleEditInputChange={handleEditInputChange} editUserData={userData} /> :
                      <ReadRows item={item} handleEditClick={handleEditClick} />}
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