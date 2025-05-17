
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
          className=" font-extrabold text-blue-400 text-center z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
           style={{fontSize: '30px'}}
        >
           My Story. My Purpose.
        </motion.h1>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
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
            <h2 className="text-4xl md:text-3xl font-bold text-blue-300">
              Educator. Visionary.
            </h2>
            <p className="text-lg text-gray-300">
              I’m deeply passionate about creating a channel to help children enhance their language arts abilities, especially in a world where it’s a struggle to grab anyone’s attention for more than 60 seconds. In fact, this challenge has become even more apparent in my classroom experience. It’s one thing to keep kids engaged for a few moments, but quite another to maintain their interest in today’s fast-paced world.
            </p>
            <p className="text-lg text-gray-400">
            I hold a Master’s in Epidemiology, a Doctorate in Educational Leadership, and have spent 13 years working in a hospital setting, with most of my experience concentrated in Infectious Disease. My role involved monitoring the spread of HIV throughout New York City, ensuring patients received proper medical care and working to limit the transmission of the virus. 
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
           My background also includes a Bachelor’s in Business Administration, which helped me navigate my administrative responsibilities at the hospital. I was responsible for ensuring that our operations ran smoothly, making sure our patients had access to a broad spectrum of services beyond just primary care.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Though my career took me into the healthcare field, education was my first love. I was initially reluctant to teach, as I envisioned myself following in my mother’s footsteps and working in a hospital. But working with children opened up a whole new world for me. I learned more about psychology and how humans think and develop—especially children, whose raw, unfiltered nature gives them an authenticity that we lose as we grow older. This understanding of human nature and behavior has been crucial not just in my professional life, but also in navigating the complexities of the corporate world.
          </p>
          <p className="text-gray-300 leading-relaxed">
          Teaching children has always brought me joy, and I continued to do so even after entering hospital work. Now, as I return to education, especially working with special needs students, I see it as a blessing. Giving these children the opportunity to be included in mainstream education is incredibly important. We cannot know their limitations unless we expose them to the full range of experiences. I am excited to be a part of this movement, providing inclusive education that helps all students thrive.
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
