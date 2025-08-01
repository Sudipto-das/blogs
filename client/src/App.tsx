import './App.css'
import BlogPage from './pages/blogPage'
import { ThemeProvider } from './context/ThemeContext'
import { BrowserRouter as Router, Route, Routes, Outlet, } from 'react-router-dom';
import Navbar from './components/navbar';
import BlogPostForm from './components/blog-post';
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<BlogPage />} />
            <Route path="/admin" element={<BlogPostForm />} />
          </Route>
        </Routes>
      </Router> 
    </ThemeProvider>
  )
}
const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};



export default App
