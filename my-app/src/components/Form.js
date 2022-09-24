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
      [event.target.name]: event.target.value
    })
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
        phone: userInfo.phone,
      })
    };
    fetch('http://localhost:5000/userInfo', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result));

  };

  return (
    <>
      <section className={styles.reactivo}>
        <h6>Inicio/Formulario Ractivo</h6>
        <h3>Formulario Reactivo</h3>
      </section>

      <main className={styles.formContainer}>
        <p>Favor de completar los siguientes campos. Los campos con  *  son obligatorios</p>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">*Nombre(s):</label>
            <input
              type='text'
              name='name'
              minLength="3"
              maxLength="45"
              onChange={handleInputChange}
              required></input>
          </div>
          <div>
            <label htmlFor="name">*Apellido paterno:</label>
            <input
              type='text'
              name='lastname'
              minLength="3"
              maxLength="45"
              onChange={handleInputChange}
              required></input>
          </div>
          <div>
            <label htmlFor="name">*Apellido materno:</label>
            <input
              type='text'
              name='surename'
              minLength="3"
              maxLength="45"
              onChange={handleInputChange}
              required></input>
          </div>
          <div>
            <label htmlFor="name">*Edad:</label>
            <input
              type='number'
              name='age'
              maxLength='2'
              onChange={handleInputChange}
              required></input>
          </div>
          <div className={styles.sexo}>
            <label className={styles.labelSex}>*Sexo:</label>
            <div className={styles.buttons}>
              <input
                type="radio"
                id="femenino"
                name="sex"
                value="femenino"
                onChange={handleInputChange}
                checked={userInfo.sex === 'femenino'}
              />
              <label htmlFor="name">Femenino</label>
              <input
                type="radio"
                id="masculino"
                name="sex"
                value='masculino'
                onChange={handleInputChange}
                checked={userInfo.sex === 'masculino'}
              />
              <label htmlFor="name">Masculino</label>
            </div>
          </div>
          <div>
            <label>Correo electrónico:</label>
            <input
              type='email'
              name='email'
              onChange={handleInputChange}
            ></input>
          </div>
          <div>
            <label htmlFor="name">Teléfono:</label>
            <input
              type='number'
              name='phone'
              minLength="10"
              onChange={handleInputChange}
            ></input>
          </div>
        </form>
        <div className={styles.buttonContainer}>
          <button className={styles.cancelar}>Cancelar</button>
          <button className={styles.enviar} type='submit'>Guardar</button>
        </div>
      </main>
    </>
  )
}

export default Form