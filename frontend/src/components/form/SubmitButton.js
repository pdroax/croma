import styles from './SubmitButton.module.css'

function SubmitButton() {
    return (
        <div>
            <button className={styles.btn}>
                Enviar mensagem
            </button>
        </div>
    )
} 

export default SubmitButton