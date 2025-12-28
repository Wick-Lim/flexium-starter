import { render, Routes, Route } from 'flexium'
import { App } from './App.jsx'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Counter } from './pages/Counter.jsx'

// Mount the application
render(
    <App>
        <Routes>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/counter" component={Counter} />
        </Routes>
    </App>,
    document.getElementById('app')
)
