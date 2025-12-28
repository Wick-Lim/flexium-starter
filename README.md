<p align="center">
  <img src="public/logo.svg" alt="Flexium Logo" width="80" height="80">
</p>

<h1 align="center">Flexium Starter Template</h1>

<p align="center">
A minimal, beautiful starter template for <a href="https://github.com/nicepkg/flexium">Flexium</a> - a fine-grained reactive UI framework.
</p>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FWick-Lim%2Fflexium-starter&project-name=my-flexium-app&repository-name=my-flexium-app)

![Flexium Starter Preview](https://raw.githubusercontent.com/Wick-Lim/flexium-starter/main/public/preview.png)

## ✨ Features

- ⚡ **Fine-Grained Reactivity** - Signal-based state management with surgical DOM updates
- 🪶 **Lightweight** - Tiny runtime, no virtual DOM overhead
- 🛣️ **Built-in Routing** - Client-side router included out of the box
- 🎨 **CSS-in-JS** - Scoped styles with zero runtime cost
- 📦 **Vite Powered** - Lightning-fast development experience

## 🚀 Quick Start

### Using Vercel (Recommended)

Click the "Deploy with Vercel" button above to instantly deploy your own copy.

### Local Development

```bash
# Clone the repository
git clone https://github.com/Wick-Lim/flexium-starter.git my-app
cd my-app

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📁 Project Structure

```
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
├── vercel.json         # Vercel SPA routing config
├── src/
│   ├── main.jsx        # App entry point with routing
│   ├── App.jsx         # Root layout component
│   ├── components/
│   │   ├── Header.jsx  # Navigation header
│   │   └── Footer.jsx  # Page footer
│   └── pages/
│       ├── Home.jsx    # Landing page
│       ├── About.jsx   # About page
│       └── Counter.jsx # Interactive counter demo
```

## 🧩 Core Concepts

### Reactive State with `use()`

```jsx
import { use } from 'flexium'

function Counter() {
  const [count, setCount] = use(0)
  
  return (
    <button onclick={() => setCount(prev => prev + 1)}>
      Count: {count}
    </button>
  )
}
```

### Client-Side Routing

```jsx
import { Routes, Route, Link } from 'flexium'

<Routes>
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
</Routes>

<Link to="/about">Go to About</Link>
```

### CSS-in-JS

```jsx
import { css } from 'flexium'

const styles = {
  button: css({
    background: 'linear-gradient(135deg, #6366f1, #a855f7)',
    padding: '1rem 2rem',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  })
}

<button class={styles.button}>Click me</button>
```

## 📚 Learn More

- [Flexium Documentation](https://flexium.dev)
- [Flexium GitHub](https://github.com/nicepkg/flexium)
- [Vite Documentation](https://vitejs.dev)

## 📄 License

MIT License - feel free to use this template for any project!
