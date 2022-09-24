import React from 'react';

import styles from '../styles/Header.module.css';
import menu from '../assets/menu.png';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import pleca from '../assets/pleca.png';

const Header = () => {
  return (
    <div className={styles.container}>

      <section className={styles.menu}>
        <img src={menu} alt='menu' />
      </section>

      <section className={styles.logo}>
        <img src={logo} alt='logo' />
      </section>

      <section className={styles.userContainer}>

        <section className={styles.names}>
        <h6>Arantxa Sara <br></br>Castañeda Dorantes <br></br>Administrador</h6>
        </section>

      <section className={styles.pleca}>
        <img src={user} alt='user' className={styles.img1}/>
        <img src={pleca} alt='pleca' className={styles.img2} />
      </section>

      <section className={styles.date}>
        <p>16/Mar/2022 <br></br>12:00 hrs</p>
      </section>
      
      </section>

    </div>
  )
}

export default Header