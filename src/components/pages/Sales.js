import styles from './Sales.module.css'
import Contact from './Contact'

function Sales () {
    return (
        <section className={styles.sales_container}>             
            <div className={styles.content}>
                <h1 className={styles.title}>Nossa parceria começa <span>aqui</span></h1>
            </div>
            <div id='contato'>
                <Contact/>
            </div>
        </section>
    )
}

export default Sales