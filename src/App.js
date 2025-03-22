import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, CreditCard, Clock } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-20"
      >
        <h1 className="text-5xl font-bold">Smart Parking Made Easy</h1>
        <p className="mt-4 text-lg text-gray-300">
          Real-time parking availability, automated billing, and seamless user experience.
        </p>
        <Button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
          Get Started
        </Button>
      </motion.div>
      
      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-800 p-6 rounded-xl flex flex-col items-center"
        >
          <MapPin size={40} className="text-blue-400" />
          <h2 className="text-xl font-semibold mt-4">Real-Time Availability</h2>
          <p className="text-gray-400 text-center mt-2">
            Instantly check available parking spots through our app.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-800 p-6 rounded-xl flex flex-col items-center"
        >
          <CreditCard size={40} className="text-green-400" />
          <h2 className="text-xl font-semibold mt-4">Automated Billing</h2>
          <p className="text-gray-400 text-center mt-2">
            Pay seamlessly through our app with multiple payment options.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-800 p-6 rounded-xl flex flex-col items-center"
        >
          <Clock size={40} className="text-yellow-400" />
          <h2 className="text-xl font-semibold mt-4">Fast & Convenient</h2>
          <p className="text-gray-400 text-center mt-2">
            Spend less time searching and more time where it matters.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
