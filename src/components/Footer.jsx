import { css } from 'flexium'

const styles = {
    footer: css({
        padding: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center',
    }),
    text: css({
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '0.875rem',
    }),
    heart: css({
        color: '#ef4444',
    }),
    link: css({
        color: '#a855f7',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    }),
}

export function Footer() {
    return (
        <footer class={styles.footer}>
            <p class={styles.text}>
                Built with <span class={styles.heart}>♥</span> using{' '}
                <a href="https://github.com/nicepkg/flexium" class={styles.link} target="_blank" rel="noopener">
                    Flexium
                </a>
            </p>
        </footer>
    )
}
