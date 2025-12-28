import { css } from 'flexium'

const styles = {
    container: css({
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '4rem 2rem',
        maxWidth: '800px',
        margin: '0 auto',
    }),
    title: css({
        fontSize: '2.5rem',
        fontWeight: 700,
        marginBottom: '1rem',
        letterSpacing: '-0.02em',
    }),
    subtitle: css({
        fontSize: '1.125rem',
        color: 'rgba(255, 255, 255, 0.6)',
        marginBottom: '3rem',
        textAlign: 'center',
        lineHeight: 1.6,
    }),
    section: css({
        width: '100%',
        marginBottom: '3rem',
    }),
    sectionTitle: css({
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '1rem',
        color: '#a5b4fc',
    }),
    code: css({
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '0.75rem',
        padding: '1.5rem',
        fontFamily: 'monospace',
        fontSize: '0.9rem',
        overflowX: 'auto',
        lineHeight: 1.6,
    }),
    list: css({
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
    }),
    listItem: css({
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        color: 'rgba(255, 255, 255, 0.8)',
        lineHeight: 1.6,
    }),
    check: css({
        color: '#22c55e',
        fontWeight: 600,
    }),
}

export function About() {
    return (
        <div class={styles.container}>
            <h1 class={styles.title}>About Flexium</h1>
            <p class={styles.subtitle}>
                Flexium is a modern, fine-grained reactive UI framework designed
                for developers who want simplicity without sacrificing power.
            </p>

            <div class={styles.section}>
                <h2 class={styles.sectionTitle}>✨ Why Flexium?</h2>
                <ul class={styles.list}>
                    <li class={styles.listItem}>
                        <span class={styles.check}>✓</span>
                        <span>Signal-based reactivity for precise, efficient updates</span>
                    </li>
                    <li class={styles.listItem}>
                        <span class={styles.check}>✓</span>
                        <span>No virtual DOM - direct, surgical DOM manipulations</span>
                    </li>
                    <li class={styles.listItem}>
                        <span class={styles.check}>✓</span>
                        <span>Built-in router with nested routes support</span>
                    </li>
                    <li class={styles.listItem}>
                        <span class={styles.check}>✓</span>
                        <span>CSS-in-JS with zero runtime cost</span>
                    </li>
                    <li class={styles.listItem}>
                        <span class={styles.check}>✓</span>
                        <span>Tiny bundle size - under 10KB gzipped</span>
                    </li>
                </ul>
            </div>

            <div class={styles.section}>
                <h2 class={styles.sectionTitle}>🚀 Quick Example</h2>
                <pre class={styles.code}>{`import { use, render, f } from 'flexium'

function Counter() {
  const [count, setCount] = use(0)
  
  return (
    <button onclick={() => setCount(prev => prev + 1)}>
      Count: {count}
    </button>
  )
}

render(<Counter />, document.getElementById('app'))`}</pre>
            </div>
        </div>
    )
}
