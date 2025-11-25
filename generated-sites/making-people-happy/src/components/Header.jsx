function Header() {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Making People Happy</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>
          
          <a href="#contact" className="btn-primary">
            Get Started
          </a>
        </div>
      </nav>
    </header>
  )
}
export default Header