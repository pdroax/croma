import { NavLink } from "react-router-dom"
import { useState } from "react";
import styles from './Navbar.module.css'
import logo from '../../img/logo-croma-films.png'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.ajust_navbar}>

                <ul className={`${styles.list} ${isMenuOpen ? styles.activeMenu : ''}`}>
                    <li className={styles.item}>
                        <NavLink to='/install' className={({ isActive }) => isActive ? styles.active : ''}>Instalação</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to='/sales' className={({ isActive }) => isActive ? styles.active : ''}>Revendas</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to='/blog' className={({ isActive }) => isActive ? styles.active : ''}>Blog</NavLink>
                    </li>
                    <div className={styles.logo}>
                        <NavLink to='/'>
                            <img className={styles.img} src={logo} alt='Croma films' style={{ width: 200 }} />
                        </NavLink>
                    </div>
                    <li className={styles.item}>
                        <NavLink to='/' className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to='/aboutus' className={({ isActive }) => isActive ? styles.active : ''}>Sobre nós</NavLink>
                    </li>
                    <li className={styles.item}>
                        <a style={{cursor: "pointer"}} href="#contact">Contato</a>
                    </li>
                </ul>

                <div className={styles.hamburger} onClick={toggleMenu}>
                    <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></div>
                    <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></div>
                    <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar