import { css, Link } from 'flexium'

const styles = {
    header: css({
        padding: '1rem 2rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(10, 10, 10, 0.8)',
    }),
    nav: css({
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    logoLink: css({
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        textDecoration: 'none',
    }),
    logoImg: css({
        width: '32px',
        height: '32px',
    }),
    logoText: css({
        fontSize: '1.5rem',
        fontWeight: 700,
        background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '-0.02em',
    }),
    links: css({
        display: 'flex',
        gap: '2rem',
        listStyle: 'none',
    }),
    link: css({
        color: 'rgba(255, 255, 255, 0.7)',
        textDecoration: 'none',
        fontSize: '0.95rem',
        fontWeight: 500,
        transition: 'color 0.2s ease',
    }),
}

export function Header() {
    return (
        <header class={styles.header}>
            <nav class={styles.nav}>
                <Link to="/" class={styles.logoLink}>
                    <img src="/logo.svg" alt="Flexium" class={styles.logoImg} />
                    <span class={styles.logoText}>Flexium</span>
                </Link>
                <ul class={styles.links}>
                    <li><Link to="/" class={styles.link}>Home</Link></li>
                    <li><Link to="/about" class={styles.link}>About</Link></li>
                    <li><Link to="/counter" class={styles.link}>Counter</Link></li>
                </ul>
            </nav>
        </header>
    )
}
