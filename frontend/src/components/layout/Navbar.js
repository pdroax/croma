import { NavLink } from "react-router-dom"
import { useState } from "react";
import styles from './Navbar.module.css'
import logo from '../../img/croma-logo.png'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    const toTop = () => {
        // Rola até o topo da página
        window.scrollTo(0, 0);
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.ajust_navbar}>

                <ul className={`${styles.list} ${isMenuOpen ? styles.activeMenu : ''}`}>
                    <li className={styles.item}>
                        <NavLink to='/install' onClick={() => { toTop(); closeMenu(); }} className={({ isActive }) => isActive ? styles.active : ''}>Instalação</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to='/sales' onClick={() => { toTop(); closeMenu(); }} className={({ isActive }) => isActive ? styles.active : ''}>Revendas</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to='/blog' onClick={() => { toTop(); closeMenu(); }} className={({ isActive }) => isActive ? styles.active : ''}>Blog</NavLink>
                    </li>
                    <div className={styles.logo}>
                        <NavLink to='/' onClick={toTop}>
                            <img className={styles.img} src={logo} alt='Croma films'/>
                        </NavLink>
                    </div>
                    <li className={styles.item}>
                        <NavLink to='/' onClick={() => { toTop(); closeMenu(); }} className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to='/aboutus' onClick={() => { toTop(); closeMenu(); }} className={({ isActive }) => isActive ? styles.active : ''}>Sobre nós</NavLink>
                    </li>
                    <li className={styles.item}>
                        <a onClick={closeMenu} style={{cursor: "pointer"}} href="#contact">Contato</a>
                    </li>
                </ul>

                <div className={styles.hamburger} onClick={toggleMenu}>
                    <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></div>
                    <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></div>
                    <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></div>
                </div>
            </div>
            <div className={styles.logoMobile}>
                <NavLink to='/' onClick={() => { toTop(); closeMenu(); }}>
                    <img className={styles.imgMob} src={logo} alt='Croma films'/>
                </NavLink>
            </div>

        </nav>
    )
}

export default Navbar