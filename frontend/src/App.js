import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Footer from "./Components/Footer";



export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} flex flex-col`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Features darkMode={darkMode} />
    
      <Footer darkMode={darkMode} />
    </div>
  );
}
