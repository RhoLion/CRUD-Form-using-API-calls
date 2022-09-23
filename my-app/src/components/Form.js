import React, { useState } from 'react'

import styles from './styles/Form.module.css';

const Form = () => {

  const [userInfo, setUserInfo] = useState({
    name: '',
    lastname: '',
    surename: '',
    age: '',
    sex: '',
    email: '',
    phone: ''
  })
const handleInputChange = (event) => {
  setUserInfo({
    ...userInfo,
    [event.target.name] : event.target.value
  })
  console.log(event.target.name)
  console.log(event.target.value)
}


  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({  
           name: userInfo.name,
           lastname: userInfo.lastname,
           surename: userInfo.surename,
           age: userInfo.age,
           sex: userInfo.sex,
           email: userInfo.email, 
           phone: userInfo.phone,})
    };
    fetch('http://localhost:5000/userInfo', requestOptions)
        .then(response => response.json())
        .then(result => console.log(result) );

};




  return (
    <main>
      <h5>Favor de completar los siguientes campos. Los campos con * son obligatorios</h5>




      <form onSubmit={handleSubmit}>
        <div>
          <label>*Nombre(s):</label>
          <input
            type='text'
            name='name'
            onChange={handleInputChange}
            required></input>
        </div>
        <div>
          <label>*Apellido paterno:</label>
          <input type='text'
          name='lastname'
            onChange={handleInputChange}
    
            required></input>
        </div>
        <div>
          <label>*Apellido materno:</label>
          <input type='text'
          name='surename'
            onChange={handleInputChange}
           
            required></input>
        </div>
        <div>
          <label>*Edad:</label>
          <input type='number'
          name='age'
       onChange={handleInputChange}
        
            required></input>
        </div>
        <div className={styles.sexo}>
          <label for="sexo">*Sexo:</label><br></br>

          <div className={styles.buttons}>
            <input
              type="radio"
              id="femenino"
              name="sex"
              value="femenino"
              onChange={handleInputChange}
              checked={ userInfo.sex === 'femenino'}
            />
            <label for="femenino">Femenino</label>
            <input 
            type="radio" 
            id="masculino" 
            name="sex"
            value='masculino'
         onChange={handleInputChange}
         checked={ userInfo.sex === 'masculino'}
              />
            <label for="masculino">Masculino</label>
          </div>
        </div>
        <div>
          <label>Correo electrónico:</label>
          <input type='email'
          name='email'
          onChange={handleInputChange}
         ></input>
        </div>
        <div>
          <label>Teléfono:</label>
          <input type='number'
          name='phone'
          onChange={handleInputChange}
            ></input>
        </div>
      <div className={styles.buttonContainer}>
        <div>
          <button className={styles.cancelar}>Cancelar</button>
          <button className={styles.enviar} type='submit'>Guardar</button>
        </div>

      </div>
      </form>


    </main>
  )
}

export default Form