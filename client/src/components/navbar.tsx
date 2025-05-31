import { Code, Github, Linkedin, Search, Twitter } from "lucide-react"
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  
    return (
        <>
          {/* Professional Header */}
      <header className="bg-background-color shadow-sm fixed top-0 left-0 right-0 z-50 bg-opacity-100 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-text-color">Sudipto Das</h1>
                <p className="text-sm text-text-color">Tech Blog</p>
              </div>
            </div>
          
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-color h-4 w-4" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border border-border-color rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent bg-background-color"
              />
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-primary-color text-white"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <div className="hidden md:flex items-center space-x-2">
              <a href="#" className="p-2 text-gray-600 hover:text-slate-900 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 text-gray-600 hover:text-slate-900 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 text-gray-600 hover:text-slate-900 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
    )
}
export default Navbar;