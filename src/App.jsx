import { css, Link } from 'flexium'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'

const styles = {
    container: css({
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    }),
    main: css({
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    }),
}

export function App({ children }) {
    return (
        <div class={styles.container}>
            <Header />
            <main class={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}
