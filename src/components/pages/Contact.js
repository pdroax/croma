import ProjectForm from '../project/ProjectForm'
import styles from './Contact.module.css'

function Contact () {

    return (
        <div className={styles.newproject_container}>
            <h1>Contato</h1>
            <p>Deixe sua mensagem e um de nossos colaboradores irá retornar</p>
            <ProjectForm/>
        </div>
    )
}
export default Contact