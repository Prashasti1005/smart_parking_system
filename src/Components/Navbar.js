

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`p-6 flex justify-between items-center transition-all duration-500 ${darkMode ? "bg-gradient-to-r from-gray-900 to-black shadow-2xl" : "bg-gradient-to-r from-white to-gray-100 shadow-lg"}`}>
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 animate-pulse">SmartPark</h1>
      <div className="flex items-center space-x-6">
        <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 text-lg font-semibold">Login</button>
        <button className="bg-gradient-to-r from-green-400 to-teal-400 hover:from-green-500 hover:to-teal-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 text-lg font-semibold">Sign Up</button>
      </div>
    </nav>
  );
}