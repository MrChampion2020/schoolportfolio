import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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

const resources = [
  {
    id: 1,
    title: "Assistive Technology Tools That Can Help With Learning Disabilities",
    link: "https://www.understood.org/en/articles/assistive-technology-tools-that-can-help-with-learning-disabilities",
  },
  {
    id: 2,
    title: "5 Assistive Technology Tools That Are Making a Difference",
    link: "https://www.edutopia.org/article/5-assistive-technology-tools-making-difference",
  },
  {
    id: 3,
    title: "A Teacher's Take on Assistive Technology",
    link: "https://www.teachthought.com/education/a-teachers-take-on-assistive-technology/",
  },
  {
    id: 4,
    title: "Gamify Your Classroom: 5 Ways",
    link: "https://www.commonsense.org/education/articles/gamify-your-classroom-5-ways",
  },
  {
    id: 5,
    title: "Technology Expands Creativity & Innovation",
    link: "https://www.edweek.org/technology/technology-expands-creativity-innovation/2023/01",
  },
];

export default function Resources() {
  return (
    <div style={{ width: "100%", backgroundColor: "black", color: "#F0F4F8" }}>
      <Navbar />
      <motion.div
        style={{
          fontFamily: "Arial, sans-serif",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "40px",
            color: "#8A2BE2",
          }}
        >
          Educational Resources
        </motion.h1>

        <motion.div
          variants={itemVariants}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {resources.map((resource) => (
            <motion.a
              key={resource.id}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              style={{
                display: "block",
                padding: "15px 20px",
                background: "rgba(28, 37, 38, 0.8)",
                backdropFilter: "blur(10px)",
                borderRadius: "8px",
                color: "#F0F4F8",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: "bold",
                transition: "background 0.3s ease",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              }}
              whileHover={{
                background: "rgba(28, 37, 38, 1)",
                color: "#0000FF",
              }}
            >
              {resource.title}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}