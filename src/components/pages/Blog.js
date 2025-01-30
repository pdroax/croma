import styles from './Blog.module.css'
import Contact from './Contact'

function Blog () {
    return (
        <section className={styles.blog_container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Nossa parceria começa <span>aqui</span></h1>
            </div>
            <div id='contato'>
                <Contact/>
            </div>
        </section>
    )
}

export default Blog