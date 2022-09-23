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

      <section className={styles.grupoS}>
        <img src={logo} alt='logo' />
      </section>

      <section className={styles.user}>
        {/* <section className={styles.names}> */}
        <h5>Arantxa Sara <br></br>Castañeda Dorantes <br></br>Administrador</h5>
        {/* </section> */}
      <section className={styles.pleca}>
        <img src={user} alt='user' />
        <img src={pleca} alt='pleca' />
      </section>
      </section>

    </div>
  )
}

export default Header