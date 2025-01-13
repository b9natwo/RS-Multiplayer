import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './styles.css';
import guides from './guides';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <nav>
          <h1>Real Steel Guide</h1>
          <div>
            <Link to="/">Home</Link>
            <Link to="/gameplay">Gameplay</Link>
            <Link to="/characters">Characters</Link>
            <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          {Object.keys(guides).map((key) => (
            <Route
              key={key}
              path={`/${key}`}
              element={<Guide content={guides[key]} />}
            />
          ))}
        </Routes>
        <footer>
          <p>© 2025 Real Steel Guide. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="content">
      <h2>Welcome to the Real Steel Guide</h2>
      <p>Choose a category to begin:</p>
      <ul>
        <li><Link to="/gameplay">Gameplay</Link></li>
        <li><Link to="/characters">Characters</Link></li>
      </ul>
    </div>
  );
}

function Guide({ content }) {
  return (
    <div className="content">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

export default App;
