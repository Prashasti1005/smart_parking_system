import { motion } from "framer-motion";
import { MapPin, CreditCard, Clock, ShieldCheck, CalendarDays, Wifi } from "lucide-react";

const features = [
  { icon: <MapPin size={50} className="text-blue-500" />, title: "Real-Time Availability", desc: "Check available parking spots instantly." },
  { icon: <CreditCard size={50} className="text-green-500" />, title: "Automated Billing", desc: "Seamless and secure payment options." },
  { icon: <Clock size={50} className="text-yellow-500" />, title: "Fast & Convenient", desc: "Save time with quick and easy booking." },
  { icon: <ShieldCheck size={50} className="text-red-500" />, title: "Secure Parking", desc: "Top-notch security with 24/7 surveillance." },
  { icon: <CalendarDays size={50} className="text-purple-500" />, title: "Flexible Booking", desc: "Reserve spots in advance with ease." },
  { icon: <Wifi size={50} className="text-teal-500" />, title: "Smart Integration", desc: "Connect with smart devices for hands-free parking." },
];

export default function Features({ darkMode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto px-4">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          className={`
            ${darkMode ? "bg-gray-900" : "bg-white shadow-lg"} 
            p-8 rounded-2xl flex flex-col items-center 
            hover:shadow-2xl transform transition-all duration-300 
            border border-transparent hover:border-2 hover:border-gradient-to-r from-blue-500 to-purple-500
          `}
        >
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full mb-4 shadow-md">
            {feature.icon}
          </div>
          <h2 className="text-2xl font-bold mt-2 text-center text-gray-800 dark:text-white">
            {feature.title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mt-3 leading-relaxed">
            {feature.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
