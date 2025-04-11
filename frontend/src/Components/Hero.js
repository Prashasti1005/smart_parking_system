import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] shadow-2xl rounded-3xl mx-10 border border-gray-700"
    >
      <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#9333ea] drop-shadow-2xl">
        Smarter Parking,
        <br /> Smarter Living
      </h1>
      <p className="mt-6 text-2xl text-gray-300 max-w-3xl">
        Experience the future of parking with real-time availability, automated billing, and seamless user convenience.
      </p>
      <div className="mt-8 flex space-x-6">
        <Button className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-white px-10 py-4 rounded-full shadow-2xl text-lg font-semibold transform hover:scale-110 transition duration-300">
          Get Started
        </Button>
      </div>
      <div className="mt-12 grid grid-cols-3 gap-10">
        <div className="flex flex-col items-center">
          <span className="text-6xl font-extrabold text-[#38bdf8]">0</span>
          <span className="text-gray-400 mt-2 text-xl">Happy Users</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-6xl font-extrabold text-[#9333ea]">0</span>
          <span className="text-gray-400 mt-2 text-xl">Parking Spots</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-6xl font-extrabold text-[#facc15]">99.9%</span>
          <span className="text-gray-400 mt-2 text-xl">Uptime Guarantee</span>
        </div>
      </div>
    </motion.div>
  );
}
