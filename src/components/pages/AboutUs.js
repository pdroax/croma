import styles from './AboutUs.module.css'
import Contact from './Contact'
// import LinkButton from '../layout/LinkButton'
// import Contact from '../pages/Contact'

function AboutUs () {
    return (
        <section>
            {/* Vídeo estático */}
            <div className={styles.about_us}>
                <h1>Sobre nós</h1>
                <br></br>
                <p>Os melhores insulfims para sua residencia ou comercio estão aqui</p>
                
            </div>
            <div>
                <Contact/>
            </div>
        </section>
    )
}
export default AboutUs