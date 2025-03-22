import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="backdrop-blur-xl bg-gradient-to-br from-[#0f172a]/80 to-[#1e293b]/90 text-gray-300 py-12 px-10 mt-20 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-gray-600/30"
    >
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#9333ea] drop-shadow-[0_0_15px_rgba(147,51,234,0.4)]">
            SmartPark
          </h1>
          <p className="text-gray-400 leading-relaxed text-lg">
            Revolutionizing parking with real-time availability, automated billing, and seamless convenience.
          </p>
          <button className="bg-gradient-to-r from-[#38bdf8] to-[#9333ea] hover:from-[#0ea5e9] hover:to-[#7c3aed] text-white px-8 py-3 rounded-full shadow-lg font-semibold mt-4 transform hover:scale-110 transition-all duration-300">
            Join the Revolution 🚀
          </button>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#9333ea]">
            Quick Links
          </h2>
          <ul className="space-y-4 text-lg">
            <li>
              <a
                href="#"
                className="hover:text-[#38bdf8] hover:translate-x-2 transition-all duration-300"
              >
                🏠 Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#38bdf8] hover:translate-x-2 transition-all duration-300"
              >
                ⚙️ Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#38bdf8] hover:translate-x-2 transition-all duration-300"
              >
                💰 Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#38bdf8] hover:translate-x-2 transition-all duration-300"
              >
                📞 Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#9333ea] to-[#facc15]">
            Get in Touch
          </h2>
          <div className="space-y-4 text-lg">
            <div className="flex items-center space-x-4">
              <Phone className="text-[#38bdf8] animate-pulse" size={25} />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-[#9333ea] animate-pulse" size={25} />
              <span>support@smartpark.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-[#facc15] animate-pulse" size={25} />
              <span>North Campus, IIT Mandi</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:scale-125 transition-all duration-300">
              <Facebook className="text-blue-500 drop-shadow-lg hover:text-white" size={40} />
            </a>
            <a href="#" className="hover:scale-125 transition-all duration-300">
              <Twitter className="text-sky-400 drop-shadow-lg hover:text-white" size={40} />
            </a>
            <a href="#" className="hover:scale-125 transition-all duration-300">
              <Instagram className="text-pink-400 drop-shadow-lg hover:text-white" size={40} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-400 text-sm pt-4">
        <span className="text-[#38bdf8] font-semibold">© {new Date().getFullYear()} SmartPark</span>. All rights reserved.
        <br />
        <a
          href="#"
          className="underline hover:text-[#9333ea] transition-all duration-300"
        >
          Privacy Policy
        </a>{" "}
        •{" "}
        <a
          href="#"
          className="underline hover:text-[#38bdf8] transition-all duration-300"
        >
          Terms of Service
        </a>
      </div>
    </motion.footer>
  );
}
