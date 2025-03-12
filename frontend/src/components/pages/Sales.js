import styles from './Sales.module.css'
import Contact from './Contact'
import Products from '../layout/Products'


function Sales () {

    return (
        <section className={styles.sales_container}>             
            <div className={styles.content}>
                <div className={styles.textIntro}>
                    <h1>Produtos</h1>
                    <h2>
                        Encontre aqui os modelos mais eficientes com as melhores negociações 
                    </h2>
            
                </div>
                <Products/>
            </div>
            <div className={styles.bg}>
            </div>
            <div id='contact'>
                <Contact/>
            </div>
        </section>
    )
}

export default Sales