import { use, css } from 'flexium'

const styles = {
    container: css({
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
    }),
    title: css({
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: '0.5rem',
        letterSpacing: '-0.02em',
    }),
    subtitle: css({
        fontSize: '1rem',
        color: 'rgba(255, 255, 255, 0.5)',
        marginBottom: '3rem',
    }),
    card: css({
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '1.5rem',
        padding: '3rem',
        textAlign: 'center',
        minWidth: '320px',
    }),
    count: css({
        fontSize: '5rem',
        fontWeight: 700,
        background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '2rem',
        lineHeight: 1,
    }),
    buttons: css({
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
    }),
    btn: css({
        width: '3.5rem',
        height: '3.5rem',
        fontSize: '1.5rem',
        fontWeight: 600,
        background: 'rgba(255, 255, 255, 0.05)',
        color: '#fff',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '1rem',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    resetBtn: css({
        marginTop: '1.5rem',
        padding: '0.75rem 1.5rem',
        fontSize: '0.875rem',
        background: 'transparent',
        color: 'rgba(255, 255, 255, 0.5)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        transition: 'color 0.2s ease',
    }),
    hint: css({
        marginTop: '3rem',
        padding: '1rem 1.5rem',
        background: 'rgba(99, 102, 241, 0.1)',
        border: '1px solid rgba(99, 102, 241, 0.2)',
        borderRadius: '0.75rem',
        fontSize: '0.875rem',
        color: 'rgba(255, 255, 255, 0.7)',
        maxWidth: '400px',
        lineHeight: 1.6,
    }),
    code: css({
        fontFamily: 'monospace',
        background: 'rgba(0, 0, 0, 0.3)',
        padding: '0.125rem 0.375rem',
        borderRadius: '0.25rem',
        color: '#a5b4fc',
    }),
}

export function Counter() {
    const [count, setCount] = use(0)

    return (
        <div class={styles.container}>
            <h1 class={styles.title}>Interactive Counter</h1>
            <p class={styles.subtitle}>Experience fine-grained reactivity in action</p>

            <div class={styles.card}>
                <div class={styles.count}>
                    {count}
                </div>

                <div class={styles.buttons}>
                    <button
                        class={styles.btn}
                        onclick={() => setCount(prev => prev - 1)}
                    >
                        −
                    </button>
                    <button
                        class={styles.btn}
                        onclick={() => setCount(prev => prev + 1)}
                    >
                        +
                    </button>
                </div>

                <button
                    class={styles.resetBtn}
                    onclick={() => setCount(0)}
                >
                    Reset
                </button>
            </div>

            <div class={styles.hint}>
                💡 This counter uses <code class={styles.code}>use()</code> for
                reactive state. Only the count text updates - no re-renders!
            </div>
        </div>
    )
}
