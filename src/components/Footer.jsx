import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaGlobe, 
  FaFacebook, 
  FaYoutube, 
  FaInstagram, 
  FaTwitter 
} from 'react-icons/fa';
import blue from "../assets/blue.jpg";
import { useMediaQuery } from "react-responsive";

const Footer = ({ navigation }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${blue})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: isMobile ? "auto" : "82vh", // Use min-height for mobile to allow content to expand
        width: "100vw", // Full width for consistency
        padding: isMobile ? "40px 20px" : "40px 20px", // Adjusted padding for better spacing
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 20,
        boxSizing: "border-box", // Ensure padding doesn't cause overflow
      }}
    >
      <div
        style={{
          padding: "0 15px",
          color: "white",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          margin: "0 auto",
          gap: "20px", // Increased gap for better separation
          width: "100%",
          maxWidth: "1200px", // Constrain content width
        }}
      >
        {/* Column 1: Logo and Organization Name */}
        <div
          style={{
            flex: isMobile ? "none" : "0 0 30%",
            textAlign: "left",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: isMobile ? "100%" : "30%",
            marginTop: isMobile ? "0" : "auto",
          }}
        >
          <a
            href="/"
            style={{ textDecoration: "none", color: 'white', fontWeight: 900 }}
            onClick={() => navigation("/")}
          >
            SA
          </a>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>
            Susan Agho
          </p>
        </div>

        {/* Column 2: Useful Links */}
        <div
          style={{
            flex: isMobile ? "none" : "0 0 30%",
            textAlign: "left",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            width: isMobile ? "100%" : "30%",
          }}
        >
          <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>
            <b
              style={{
                paddingBottom: "8px",
                borderBottom: "0.5px solid #0000FF",
                background: "linear-gradient(to right, transparent 50%, transparent 50%)",
                backgroundPosition: "0 100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "80% 1px",
              }}
            >
              Useful
            </b>
            <b> Links</b>
          </h2>
          <a href="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </a>
          <a href="/about" style={{ textDecoration: "none", color: "white" }}>
            About Me
          </a>
          <a href="/projects" style={{ textDecoration: "none", color: "white" }}>
            Projects
          </a>
          <a href="/services" style={{ textDecoration: "none", color: "white" }}>
            Discussion Board
          </a>
          <a href="/contact" style={{ textDecoration: "none", color: "white" }}>
            My Reflections
          </a>
          <a href="/resources" style={{ textDecoration: "none", color: "white" }}>
            Resources
          </a>
        </div>

        {/* Column 3: External Links */}
        <div
          style={{
            flex: isMobile ? "none" : "0 0 30%",
            textAlign: "left",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            width: isMobile ? "100%" : "30%",
          }}
        >
          <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>
            <b
              style={{
                paddingBottom: "8px",
                borderBottom: "0.5px solid #0000FF",
                background: "linear-gradient(to right, transparent 50%, transparent 50%)",
                backgroundPosition: "0 100%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "80% 1px",
              }}
            >
              External
            </b>
            <b> Links</b>
          </h2>
          <a
            href="https://www.understood.org/en/articles/assistive-technology-tools-that-can-help-with-learning-disabilities"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "white",
              fontSize: "16px",
            }}
          >
            <FaGlobe style={{ fontSize: "18px" }} />
            Assistive Technology Tools That Can Help With Learning Disabilities
          </a>
          <a
            href="https://www.understood.org/en/articles/5-assistive-technology-tools-that-are-making-a-difference"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "white",
              fontSize: "16px",
            }}
          >
            <FaGlobe style={{ fontSize: "18px" }} />
            5 Assistive Technology Tools That Are Making a Difference
          </a>
          <a
            href="https://www.understood.org/en/articles/a-teachers-take-on-assistive-technology"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "white",
              fontSize: "16px",
            }}
          >
            <FaGlobe style={{ fontSize: "18px" }} />
            A Teacher's Take on Assistive Technology
          </a>
          <a
            href="https://www.edutopia.org/article/gamify-your-classroom-5-ways"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "white",
              fontSize: "16px",
            }}
          >
            <FaGlobe style={{ fontSize: "18px" }} />
            Gamify Your Classroom: 5 Ways
          </a>
          <a
            href="https://www.edutopia.org/article/technology-expands-creativity-innovation"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "white",
              fontSize: "16px",
            }}
          >
            <FaGlobe style={{ fontSize: "18px" }} />
            Technology Expands Creativity & Innovation
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          marginTop: isMobile ? "20px" : "20px",
          color: "white",
          width: "100%",
          maxWidth: "1200px",
          gap: "20px",
          paddingBottom: "20px",
        }}
      >
        {/* Social Media Links */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <a
            href="https://www.linkedin.com/feed/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "white",
              fontSize: "16px",
            }}
          >
            <FaGlobe style={{ fontSize: "18px" }} />
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <div
          style={{
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          <p style={{ fontSize: "14px" }}>
            &copy; {new Date().getFullYear()} Susan Agho | All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

