import styles from './Install.module.css'
import Contact from './Contact'
import Products from '../layout/Products'


function Install () {
    return (
        <section className={styles.install_container}>
            {/* Vídeo estático */}               
            <div className={styles.content}>
                <div className={styles.textIntro}>
                    <h1>Instalação</h1>
                    <h2>
                        Sua próxima película com consultoria especializada e equipe altamente qualificada 
                    </h2>
                            
                </div>
                <Products/>
            </div>
            <div id='contact'>
                <Contact/>
            </div>
        </section>
    )
}

export default Install