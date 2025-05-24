import './App.css'
import BlogPage from './pages/blogPage'
import { ThemeProvider, useTheme } from './context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-primary-color text-white"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background-color text-text-color">
        <ThemeToggle />
        <BlogPage />
      </div>
    </ThemeProvider>
  )
}

export default App
