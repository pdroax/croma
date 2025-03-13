import styles from './Blog.module.css'
import Contact from './Contact'
import PostOne from '../content/PostOne'

function Blog () {


    return (
        <section className={styles.blog_container}>
            <div className={styles.content}>
                <PostOne />
            </div>
            <div id="contact">
                <Contact/>
            </div>
        </section>
    )
}

export default Blog