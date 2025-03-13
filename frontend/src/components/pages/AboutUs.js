import styles from './AboutUs.module.css'
import Contact from './Contact'
// import LinkButton from '../layout/LinkButton'
// import Contact from '../pages/Contact'
// import imgBg from '../../img/window-pic.jpg'

function AboutUs () {
    
    return (
        <section className={styles.about_container}>
            <div className={styles.about_us}>
                <h1 className={styles.title}>Sobre nós</h1>
                <br></br>
                <div className={styles.textAbout}>
                    <p>
                        A Croma Films nasceu em 2008, partindo da 
                        necessidade de atendimento mais personalizado 
                        no mercado de películas solares. Oferecendo 
                        serviços de instalação de películas solares 
                        em Curitiba e região, garantimos aos nossos 
                        clientes, residenciais e empresariais, durabilidade 
                        e eficiência em nossos produtos. Além da instalação 
                        na região de Curitiba, a Croma Films oferece 
                        revenda de películas para todo o Brasil.
                    </p>
                    <br></br>
                    <p>
                        Compreendemos a necessidade dos nossos clientes 
                        de segurança, privacidade e autonomia dentro de 
                        suas residências e comércios, por isso, focamos 
                        em um atendimento rápido e único baseado em suas 
                        prioridades. Nossa missão é o seu conforto e segurança. 
                        Venha conhecer <a href='/sales'>nossas películas</a> e  
                        <a href='/install'> o que podemos fazer por você</a>. 
                    </p>

                </div>
            </div>

            <div className={styles.bgImg}>
            </div>

            <div id="contact">
                <Contact/>
            </div>
        </section>
    )
}
export default AboutUs