import React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Dribbble,
  Figma,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Background from "../../components/Background";
import me from "../../assets/me.png"; // Placeholder for Juliet's image
import me2 from "../../assets/me.png"; // Placeholder for About Me image
import blog from "../../assets/pj1.png"; // Placeholder for EdTech blog image
import ecomm from "../../assets/pj2.png"; // Placeholder for classroom tool image
import dating from "../../assets/pj3.png"; // Placeholder for collaborative app image
import bg from "../../assets/bgs.jpg"; // Educational background image
import bgs from "../../assets/me.png"; // Mid-tone educational background image
import { useMediaQuery } from "react-responsive";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// Array of project details: images, titles, descriptions
const projects = [
  {
    image: blog,
    title: "Project 1: Item Analysis",
    description:
      "Conduct an item analysis using a multiple-choice assessment with at least five questions and ten respondents to analyze data related to your subject area.",
    link: "/projects",
  },
  {
    image: ecomm,
    title: "Project 2: Video Tutorial - Planting a Seed",
    description:
      "Create a 3-4 minute video tutorial demonstrating a small skill from your subject area, including an intention statement for student learning benefits.",
    link: "/projects",
  },
  {
    image: dating,
    title: "Project 3: Tech-Enhanced Lesson Plan",
    description:
      "Modify or create a lesson plan to enhance learning with technology, including a teacher reflection on considerations and cost analysis.",
    link: "/projects",
  },
];

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const currentTime = new Date();
  const greeting = currentTime.getHours() < 12 ? "Good Morning" : "Good Day";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <Navbar />
      <section
        className="py-20 lg:py-32 flex flex-col justify-center min-h-screen bg-gray-50 dark:bg-gray-800"
        style={{
          position: "relative",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          backgroundColor: "rgba(222, 222, 222, 1)",
          backgroundBlendMode: "overlay",
        }}
      >
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{marginTop: '40px'}}
        >
          <div className="lg:flex lg:items-center lg:justify-between">
            <motion.div
              variants={itemVariants}
              className="space-y-8 lg:space-y-10"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl gothic-font"
              style={{padding: '20px auto'}}
              >
                <span className="block" style={{ color: "black", margin: "20px auto" }}>
                  {greeting}, I am
                </span>
                <span className="block text-[blue]">Susan Agho</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-black-600 dark:text-black-300 gothic-font max-w-3xl"
              >
                This site is dedicated to sharing EdTech resources, insights, and tools to empower educators and parents in creating inclusive, engaging learning environments for all children, especially in language arts and special education.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-xl text-black-600 dark:text-black-300 gothic-font max-w-3xl"
              >
                Educator and innovator with a passion for enhancing language arts skills in a fast-paced world, driven by 13 years in healthcare and a deep commitment to inclusive education.
              </motion.p>
              <motion.div variants={itemVariants} className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-[blue] dark:hover:text-[blue]"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[black] hover:bg-[blue] dark:bg-[blue] dark:hover:bg-[black] md:text-lg gothic-font"
                  style={{ width: isMobile ? "40%" : "auto" }}
                >
                  Contact
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="mt-10 lg:mt-0 lg:ml-10"
            >
              <img
                src={me}
                alt="Juliet Avin Peace"
                className="w-64 h-64 rounded-full shadow-lg object-cover"
                style={{ backgroundColor: "black" }}
              />
            </motion.div>
          </div>
        </motion.div>
        <Background />
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-6xl gothic-font text-center mb-12"
          >
            About Me
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <img
                src={me2}
                alt="About Juliet Avin Peace"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 gothic-font">
               I’m deeply passionate about creating a channel to help children enhance their language arts abilities, especially in a world where it’s a struggle to grab anyone’s attention for more than 60 seconds. In fact, this challenge has become even more apparent in my classroom experience. It’s one thing to keep kids engaged for a few moments, but quite another to maintain their interest in today’s fast-paced world.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 gothic-font">
               Teaching children has always brought me joy, and I continued to do so even after entering hospital work. Now, as I return to education, especially working with special needs students, I see it as a blessing. Giving these children the opportunity to be included in mainstream education is incredibly important. We cannot know their limitations unless we expose them to the full range of experiences. I am excited to be a part of this movement, providing inclusive education that helps all students thrive.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 gothic-font">
                  Language Arts
                </span>
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 gothic-font">
                  Inclusive Education
                </span>
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 gothic-font">
                  EdTech
                </span>
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 gothic-font">
                  Special Needs
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gray-50 dark:bg-gray-900"
        style={{
          position: "relative",
          backgroundImage: `url(${bgs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          color: "#4A90E2",
          backgroundColor: "rgba(222, 222, 222, 1)",
          backgroundBlendMode: "overlay",
        }}
      >
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl gothic-font text-center mb-12"
            style={{ color: "black" }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 gothic-font mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 gothic-font mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="text-[#2E7D32] dark:text-[#4A90E2] hover:text-[#1B5E20] dark:hover:text-[#4A90E2] font-medium gothic-font"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>


<section id="cv" className="py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
  <motion.div
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <motion.h2
      variants={itemVariants}
      className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl gothic-font text-center mb-16 tracking-tight"
      style={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
    >
      Curriculum Vitae
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div
        variants={itemVariants}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 gothic-font mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Education
        </h3>
        <ul className="text-gray-600 dark:text-gray-300 gothic-font space-y-3 text-sm">
          <li className="flex items-start">
            <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
            PhD, Educational Administration – University of Benin, Nigeria
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
            MS, Public Health Epidemiology – University of Benin, Nigeria
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
            BS, Business Administration – University of Benin, Nigeria
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
            High School Diploma, Music – Talent Unlimited H.S., NYC
          </li>
        </ul>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 gothic-font mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Professional Experience
        </h3>
        <ul className="text-gray-600 dark:text-gray-300 gothic-font space-y-3 text-sm">
          <li>
            <strong className="text-gray-800 dark:text-gray-200">Teacher, B.R.I.C.K Peshine Newark Public School (2016–Present)</strong>
            <p>Led Science/ELA/ESL instruction, excelling in inclusive education.</p>
          </li>
          <li>
            <strong className="text-gray-800 dark:text-gray-200">Supervisor, Youth & Consultation Services (2014–2024)</strong>
            <p>Managed care for children with mental challenges using evidence-based methods.</p>
          </li>
          <li>
            <strong className="text-gray-800 dark:text-gray-200">Associate Director, Metro Plus HIV Services (2012–2016)</strong>
            <p>Ensured compliance and developed quality management tools.</p>
          </li>
          <li>
            <strong className="text-gray-800 dark:text-gray-200">Assistant Director, Harlem Hospital (2009–2012)</strong>
            <p>Oversaw infectious disease services and community health education.</p>
          </li>
        </ul>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 gothic-font mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Skills
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Leadership & Management",
            "Inclusive Education",
            "Training & Development",
            "Data Analysis",
            "Applied Behavioral Analysis",
          ].map((skill, index) => (
            <motion.span
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 gothic-font"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 gothic-font mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Contact
        </h3>
        <ul className="text-gray-600 dark:text-gray-300 gothic-font space-y-3 text-sm">
          <li className="flex items-center">
            <span className="text-blue-500 dark:text-blue-400 mr-2">✉️</span>
            susanagho@gmail.com
          </li>
          
        </ul>
      </motion.div>
    </div>
  </motion.div>
</section>
     

      <Footer />
    </div>
  );
};

export default Home;