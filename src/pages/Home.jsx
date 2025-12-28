import { css } from 'flexium'

const styles = {
    container: css({
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        textAlign: 'center',
    }),
    badge: css({
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 1rem',
        background: 'rgba(99, 102, 241, 0.1)',
        border: '1px solid rgba(99, 102, 241, 0.3)',
        borderRadius: '9999px',
        fontSize: '0.875rem',
        color: '#a5b4fc',
        marginBottom: '2rem',
    }),
    title: css({
        fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
        fontWeight: 700,
        lineHeight: 1.1,
        marginBottom: '1.5rem',
        letterSpacing: '-0.03em',
    }),
    gradient: css({
        background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    }),
    subtitle: css({
        fontSize: '1.25rem',
        color: 'rgba(255, 255, 255, 0.6)',
        maxWidth: '600px',
        lineHeight: 1.6,
        marginBottom: '3rem',
    }),
    buttons: css({
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }),
    primaryBtn: css({
        padding: '0.875rem 2rem',
        fontSize: '1rem',
        fontWeight: 600,
        background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
        color: '#fff',
        border: 'none',
        borderRadius: '0.75rem',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)',
        },
    }),
    secondaryBtn: css({
        padding: '0.875rem 2rem',
        fontSize: '1rem',
        fontWeight: 600,
        background: 'rgba(255, 255, 255, 0.05)',
        color: '#fff',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '0.75rem',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'background 0.2s ease, border-color 0.2s ease',
        '&:hover': {
            background: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(255, 255, 255, 0.4)',
        },
    }),
    features: css({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        maxWidth: '900px',
        marginTop: '5rem',
        padding: '0 1rem',
    }),
    card: css({
        padding: '1.5rem',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '1rem',
        textAlign: 'left',
        transition: 'border-color 0.3s ease, background 0.3s ease',
        '&:hover': {
            borderColor: 'rgba(99, 102, 241, 0.5)',
            background: 'rgba(99, 102, 241, 0.05)',
        },
    }),
    cardIcon: css({
        fontSize: '2rem',
        marginBottom: '1rem',
    }),
    cardTitle: css({
        fontSize: '1.125rem',
        fontWeight: 600,
        marginBottom: '0.5rem',
        color: '#fff',
    }),
    cardDesc: css({
        fontSize: '0.9rem',
        color: 'rgba(255, 255, 255, 0.5)',
        lineHeight: 1.6,
    }),
}

const features = [
    {
        icon: '⚡',
        title: 'Fine-Grained Reactivity',
        desc: 'Built on signals for surgical DOM updates. Only what changes gets updated.',
    },
    {
        icon: '🪶',
        title: 'Lightweight',
        desc: 'Tiny runtime with no virtual DOM overhead. Fast by default.',
    },
    {
        icon: '🛣️',
        title: 'Built-in Routing',
        desc: 'Client-side routing included. No extra dependencies needed.',
    },
]

export function Home() {
    return (
        <div class={styles.container}>
            <span class={styles.badge}>
                ✨ Welcome to the future
            </span>

            <h1 class={styles.title}>
                Build reactive apps with{' '}
                <span class={styles.gradient}>Flexium</span>
            </h1>

            <p class={styles.subtitle}>
                A fine-grained reactive UI framework that makes building
                modern web applications simple, fast, and enjoyable.
            </p>

            <div class={styles.buttons}>
                <a
                    href="https://github.com/nicepkg/flexium"
                    class={styles.primaryBtn}
                    target="_blank"
                    rel="noopener"
                >
                    Get Started
                </a>
                <a
                    href="/counter"
                    class={styles.secondaryBtn}
                >
                    See Demo →
                </a>
            </div>

            <div class={styles.features}>
                {features.map(feature => (
                    <div class={styles.card}>
                        <div class={styles.cardIcon}>{feature.icon}</div>
                        <h3 class={styles.cardTitle}>{feature.title}</h3>
                        <p class={styles.cardDesc}>{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
