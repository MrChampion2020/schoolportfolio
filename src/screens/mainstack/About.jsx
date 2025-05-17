
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import me from "../../assets/me.png";
import bg from "../../assets/bgmid.png";

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

const stats = [
  { value: "13+", label: "Years in Healthcare" },
  { value: "30+", label: "Children Impacted" },
  { value: "2", label: "Advanced Degrees" },
  { value: "25%", label: "Growth in Education Annually" },
];

export default function About() {
  return (
    <div
      className="min-h-screen text-white font-[Poppins] bg-black overflow-hidden"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
    >
      <Navbar />

      {/* Hero */}
      <header className="relative h-[75vh] flex items-center justify-center bg-black/70 backdrop-blur-sm">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold text-blue-400 text-center z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
           My Story. My Purpose.
        </motion.h1>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-24 space-y-24">
        {/* Profile Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src={me}
            alt="My Portrait"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-300">
              Educator. Healer. Visionary.
            </h2>
            <p className="text-lg text-gray-300">
              I’m deeply passionate about creating a channel to help children enhance their language arts abilities, especially in a world where it’s a struggle to grab anyone’s attention for more than 60 seconds. This challenge has become even more apparent in my classroom experience.
            </p>
            <p className="text-lg text-gray-400">
              I hold a Master’s in Epidemiology, a Doctorate in Educational Leadership, and spent 13 years in hospital settings, focusing on Infectious Disease. My work monitoring HIV spread in NYC required both medical insight and social understanding.
            </p>
          </div>
        </motion.div>

        {/* Full Narrative */}
        <motion.section
          className="bg-[#0f1f21] p-10 rounded-2xl shadow-xl space-y-6 border border-blue-900"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-blue-300 mb-2">My Journey in Detail</h3>
          <p className="text-gray-300 leading-relaxed">
            My role in healthcare extended beyond diagnosis. I connected underserved communities to services like dental, surgical, and optical care. With a Bachelor’s in Business Administration, I also ensured administrative efficiency.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Though my path began in hospitals, education was always my heart. Initially hesitant, I found joy in teaching. Children’s unfiltered nature taught me more about psychology and authenticity than any textbook could.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Working with special needs students has been especially transformative. Inclusion is a necessity, not a luxury. Only through full exposure can we discover what they’re truly capable of. I remain committed to this cause.
          </p>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          className="grid md:grid-cols-4 gap-6 text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-[#1a2526] p-8 rounded-xl shadow-lg border border-blue-800 transition-all"
            >
              <p className="text-5xl font-bold text-blue-400">{stat.value}</p>
              <p className="text-sm mt-2 text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
