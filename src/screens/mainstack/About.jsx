
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
  { value: "1000+", label: "Children Inspired" },
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
      <main className="max-w-6xl mx-auto px-6 py-2 space-y-2">
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
             Hello, I’m Dr. Susan Agho — an educator, health advocate, and lifelong learner with a calling to serve children who are often left behind by traditional systems.
            </p>
            <p className="text-lg text-gray-400">
           Born in New York City to two incredible immigrant parents, I’ve lived both the struggle and the strength of navigating two worlds. I witnessed firsthand how difficult school can be when English isn’t your first language and when proper supports don’t exist. My parents never had the opportunity to benefit from ESL programs, and their journey inspired mine — to ensure no child feels lost or left behind because of language, disability, or circumstance.
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
          
          In 1997, I began my educational journey abroad in Nigeria, earning my Bachelor’s in Business Administration, Master’s in Public Health (Epidemiology), and ultimately my Ph.D. in Educational Administration through the University of Benin’s International Student Program. The academic rigor and emphasis on accountability and critical thinking laid the foundation for everything I do. I intentionally chose that path because it shaped me to think deeper, care harder, and serve more intentionally.
          </p>
          <p className="text-gray-300 leading-relaxed">
           
           I’ve worked across diverse professional settings — from teaching in early childhood education right after graduating to leading family-centered HIV care services at Harlem Hospital back to teaching this time in a middle school setting, 8th grade ELA in Newark to now supporting children with multiple disabilities. At Harlem Hospital, my innovative approach to identifying billable services helped recover over $1 million in revenue within a single year — all while strengthening care for families affected by HIV/AIDS. At Peshine Avenue School, I prepared 40+ middle schoolers for the New Jersey state exams (NJSLA), with 13 students placing in the top 3 statewide — a proud milestone that still fuels my passion.

          </p>
          <p className="text-gray-300 leading-relaxed">
          Today, I serve students with multiple disabilities (MDMI population) at Belmont Runyon Elementary, creating inclusive learning environments where every child, regardless of ability or background, is seen, heard, and empowered.


          </p>

          <p className="text-gray-300 leading-relaxed">
          
          
          This website is the beginning of a dream — a digital space for children who are learning English, who struggle with reading, or who live with physical or cognitive disabilities. I want to give them tools to learn at their own pace, in their own space, whether at home with a parent or in the classroom with a teacher. I believe technology is the bridge that can connect children across the world to a future filled with hope, language, and literacy.

          
          </p>

<p className="text-gray-300 leading-relaxed">
          
          
I am here to create accessible, engaging, and joyful learning materials — rooted in compassion, driven by data, and powered by purpose. My heart is in every lesson, every video, and every tool you’ll find here. Because when a child finds their voice — whether spoken, written, or signed — the world becomes just a little brighter.

          
          </p>

          
<p className="text-gray-300 leading-relaxed">
          
          
Let’s make learning inclusive, one child at a time.
          
          </p>






          
        </motion.section>


        {/* Full Narrative */}
        <motion.section
          className="bg-[#0f1f21] p-10 rounded-2xl shadow-xl space-y-6 border border-blue-900"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-blue-300 mb-2">Professional Tagline</h3>
          <p className="text-gray-300 leading-relaxed">
          
         "Empowering Every Child to Learn, Thrive, and Belong—No Matter the Barrier."
          </p>
      
         
          
        </motion.section>

{/* Full Narrative */}
        <motion.section
          className="bg-[#0f1f21] p-10 rounded-2xl shadow-xl space-y-6 border border-blue-900"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-blue-300 mb-2">Mission Statement</h3>
          <p className="text-gray-300 leading-relaxed">
          
         At the heart of my work is a deep and unwavering commitment to inclusive, accessible, and transformative education. My mission is to create engaging, technology-driven learning experiences for children learning English as a second language, children with reading challenges, and children with physical or cognitive disabilities. Through culturally responsive content, critical thinking strategies, and compassionate teaching, I aim to bridge learning gaps and build confidence in every child—at home, in the classroom, and beyond.
          </p>
      
          <p className="text-gray-300 leading-relaxed">
          
         Rooted in both personal and professional experience, I believe that language is liberation, literacy is empowerment, and equity in education is a right, not a privilege. This platform exists to serve children of all backgrounds, making learning joyful, personalized, and truly inclusive.
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
