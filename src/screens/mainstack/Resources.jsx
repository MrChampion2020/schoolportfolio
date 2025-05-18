
import React, { useState } from "react";
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
    title: "Teachers' View of Assistive Technology",
    links: ["https://www.youtube.com/watch?v=jMKNiGhudBg"],
  },
  {
    id: 2,
    title: "Four Ways to Gamify Your Classroom",
    links: [
      "https://kahoot.com/",
      "https://www.classdojo.com/",
      "https://www.blooket.com/",
      "https://quizizz.com/?lng=en",
    ],
  },
  {
    id: 3,
    title: "Technology Expands Creativity & Innovation",
    links: ["https://www.forbes.com/sites/davidhenkin/2024/04/04/7-steps-to-navigate-innovation-and-creativity-with-emerging-technology/"],
  },
  {
    id: 4,
    title: "Assistive Tech that can help with learning disabilities",
    links: [
      "https://www.ldatschool.ca/assistive-technology/",
      "https://www.youtube.com/watch?v=NUjWnf7Pj-E",
    ],
  },
  {
    id: 5,
    title: "Two Assistive Techs that are making a difference",
    links: [
      "https://glassouse.com/",
      "https://www.assistiveware.com/products/proloquo2go",
    ],
  },
];

export default function Resources() {
  const [activeResource, setActiveResource] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleHoverStart = (resourceId) => {
    if (!isMobile) {
      setActiveResource(resourceId);
    }
  };

  const handleHoverEnd = () => {
    if (!isMobile) {
      setActiveResource(null);
    }
  };

  const handleClick = (resourceId) => {
    if (isMobile) {
      setActiveResource(activeResource === resourceId ? null : resourceId);
    }
  };

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

        <motion.p
          variants={itemVariants}
          style={{
            textAlign: "center",
            fontSize: "16px",
            marginBottom: "20px",
            color: "#F0F4F8",
          }}
        >
          {isMobile
            ? "Click titles to view links"
            : "Hover over titles to view links"}
        </motion.p>

        <motion.div
          variants={itemVariants}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {resources.map((resource) => (
            <motion.div
              key={resource.id}
              variants={itemVariants}
              onMouseEnter={() => handleHoverStart(resource.id)}
              onMouseLeave={handleHoverEnd}
            >
              <motion.div
                onClick={() => handleClick(resource.id)}
                style={{
                  padding: "15px 20px",
                  background: "rgba(28, 37, 38, 0.8)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "8px",
                  color: "#F0F4F8",
                  fontSize: "18px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "background 0.3s ease",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                }}
                whileHover={{
                  background: "rgba(28, 37, 38, 1)",
                  color: "#0000FF",
                }}
              >
                {resource.title}
              </motion.div>
              {activeResource === resource.id && (
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    padding: "10px 20px",
                    color: "#F0F4F8",
                    fontSize: "16px",
                  }}
                >
                  {resource.links.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      style={{
                        display: "block",
                        color: "#1E90FF",
                        textDecoration: "none",
                        margin: "5px 0",
                      }}
                      whileHover={{ color: "#0000FF" }}
                    >
                      {link}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}