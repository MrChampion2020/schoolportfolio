import React, { useState, useEffect } from 'react';
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
        height: isMobile ? "120vh" : "82vh",
        width: "90vw",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20
      }}
    >
      <div
        style={{
          padding: "0px 15px",
          color: "white",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          margin: "auto",
          gap: "10px",
          width: "100%",
        }}
      >

        {/* Column 1: Logo and Organization Name */}
        <div
          style={{
            flex: "0 0 30%",
            textAlign: "left",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: isMobile ? "100%" : "30%",
          }}
        >
          <a href="/" style={{ textDecoration: "none", color: 'white', fontWeight: 900 }}
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
            flex: "0 0 30%",
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
        </div>

        {/* Column 3: External Links */}
        <div
          style={{
            flex: "0 0 30%",
            textAlign: "left",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "25px" : "15px", // Increased gap on mobile
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
          marginTop: isMobile ? "70px" : "0px",
          color: "white",
          width: "100%",
          gap: "20px",
          marginBottom: 20
        }}
      >
        {/* Social Media Links */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "center",
            margin: "auto",
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
            margin: "auto",
          }}
        >
          <p style={{ fontSize: "14px" }}>
            &copy; {new Date().getFullYear()} Juliet Avent | All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;











// import React, { useState, useEffect } from 'react';
// import { 
//   FaMapMarkerAlt, 
//   FaPhoneAlt, 
//   FaEnvelope, 
//   FaGlobe, 
//   FaFacebook, 
//   FaYoutube, 
//   FaInstagram, 
//   FaTwitter 
// } from 'react-icons/fa';
// import blue from "../assets/blue.jpg";
// import { useMediaQuery } from "react-responsive";

// const Footer = ({ navigation }) => {
//   const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

//   return (
//     <div
//       style={{
//         position: "relative",
//         backgroundImage: `url(${blue})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//         height: isMobile ? "120vh" : "82vh", // Adjusted height for mobile view
//         width: "90vw",
//         padding: "20px",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: 20
//       }}
//     >
//       <div
//         style={{
//           padding: "0px 15px",
//           color: "white",
//           display: "flex",
//           flexDirection: isMobile ? "column" : "row",
//           margin: "auto",
//           gap: "10px",
//           width: "100%",
//         }}
//       >

//         {/* Column 1: Logo and Organization Name */}
//         <div
//           style={{
//             flex: "0 0 30%",
//             textAlign: "left",
//             padding: "10px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "10px",
//             width: isMobile ? "100%" : "30%",
//           }}
//         >
//           <a href="/" style={{ textDecoration: "none", color: 'white', fontWeight: 900 }}
//             onClick={() => navigation("/")}
//           >
//             SA
//           </a>
//           <p style={{ fontSize: "16px", fontWeight: "bold" }}>
//             Susan Agho
//           </p>
//         </div>

//         {/* Column 2: Useful Links */}
//         <div
//           style={{
//             flex: "0 0 30%",
//             textAlign: "left",
//             padding: "10px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "15px",
//             width: isMobile ? "100%" : "30%",
//           }}
//         >
//           <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>
//             <b
//               style={{
//                 paddingBottom: "8px",
//                 borderBottom: "0.5px solid #0000FF", // Customized border-bottom color
//                 background: "linear-gradient(to right, transparent 50%, transparent 50%)",
//                 backgroundPosition: "0 100%",
//                 backgroundRepeat: "no-repeat",
//                 backgroundSize: "80% 1px",
//               }}
//             >
//               Useful
//             </b>
//             <b> Links</b>
//           </h2>
//           <a href="/" style={{ textDecoration: "none", color: "white" }}>
//             Home
//           </a>
//           <a href="/about" style={{ textDecoration: "none", color: "white" }}>
//             About Me
//           </a>
//           <a href="/projects" style={{ textDecoration: "none", color: "white" }}>
//             Projects
//           </a>
//            <a href="/services" style={{ textDecoration: "none", color: "white" }}>
//           Discussion Board
//           </a>
//           <a href="/contact" style={{ textDecoration: "none", color: "white" }}>
//           My Reflections
//           </a>
         
          
//         </div>

//         {/* Column 3: External Links */}
//         <div
//           style={{
//             flex: "0 0 30%",
//             textAlign: "left",
//             padding: "10px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "15px",
//             width: isMobile ? "100%" : "30%",
//           }}
//         >
//           <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>
//             <b
//               style={{
//                 paddingBottom: "8px",
//                 borderBottom: "0.5px solid #0000FF", // Customized border-bottom color
//                 background: "linear-gradient(to right, transparent 50%, transparent 50%)",
//                 backgroundPosition: "0 100%",
//                 backgroundRepeat: "no-repeat",
//                 backgroundSize: "80% 1px",
//               }}
//             >
//               External
//             </b>
//             <b> Links</b>
//           </h2>
//           <a
//             href="https://www.understood.org/en/articles/assistive-technology-tools-that-can-help-with-learning-disabilities"
//             style={{
//               textDecoration: "none",
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//               color: "white",
//               fontSize: "16px",
//             }}
//           >
//             <FaGlobe style={{ fontSize: "18px" }} />
//             Assistive Technology Tools That Can Help With Learning Disabilities
//           </a>
//           <a
//             href="https://www.understood.org/en/articles/5-assistive-technology-tools-that-are-making-a-difference"
//             style={{
//               textDecoration: "none",
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//               color: "white",
//               fontSize: "16px",
//             }}
//           >
//             <FaGlobe style={{ fontSize: "18px" }} />
//             5 Assistive Technology Tools That Are Making a Difference
//           </a>
//           <a
//             href="https://www.understood.org/en/articles/a-teachers-take-on-assistive-technology"
//             style={{
//               textDecoration: "none",
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//               color: "white",
//               fontSize: "16px",
//             }}
//           >
//             <FaGlobe style={{ fontSize: "18px" }} />
//             A Teacher's Take on Assistive Technology
//           </a>
//           <a
//             href="https://www.edutopia.org/article/gamify-your-classroom-5-ways"
//             style={{
//               textDecoration: "none",
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//               color: "white",
//               fontSize: "16px",
//             }}
//           >
//             <FaGlobe style={{ fontSize: "18px" }} />
//             Gamify Your Classroom: 5 Ways
//           </a>
//           <a
//             href="https://www.edutopia.org/article/technology-expands-creativity-innovation"
//             style={{
//               textDecoration: "none",
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//               color: "white",
//               fontSize: "16px",
//             }}
//           >
//             <FaGlobe style={{ fontSize: "18px" }} />
//             Technology Expands Creativity & Innovation
//           </a>
         
//         </div>
//       </div>

//       {/* Footer */}
//       <footer
//         style={{
//           display: "flex",
//           flexDirection: isMobile ? "column" : "row",
//           justifyContent: "center",
//           marginTop: isMobile ? "70px" : "0px",
//           color: "white",
//           width: "100%",
//           gap: "20px",
//           marginBottom: 20
//         }}
//       >
//         {/* Social Media Links */}
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             gap: "20px",
//             justifyContent: "center",
//             margin: "auto",
//           }}
//         >
//           <a
//             href="https://www.linkedin.com/feed/"
//             style={{
//               textDecoration: "none",
//               display: "flex",
//               alignItems: "center",
//               gap: "10px",
//               color: "white",
//               fontSize: "16px",
//             }}
//           >
//             <FaGlobe style={{ fontSize: "18px" }} />
//             LinkedIn
//           </a>
          
         
//         </div>

//         {/* Copyright */}
//         <div
//           style={{
//             textAlign: "center",
//             margin: "auto",
//           }}
//         >
//           <p style={{ fontSize: "14px" }}>
//             &copy; {new Date().getFullYear()} Juliet Avent | All rights reserved
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;



// // import React, { useState, useEffect } from 'react';
// // import { 
// //   FaMapMarkerAlt, 
// //   FaPhoneAlt, 
// //   FaEnvelope, 
// //   FaGlobe, 
// //   FaFacebook, 
// //   FaYoutube, 
// //   FaInstagram, 
// //   FaTwitter 
// // } from 'react-icons/fa';
// // import blue from "../assets/blue.jpg";
// // import { useMediaQuery } from "react-responsive";


// // const Footer = ({ navigation }) => {
// //   const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

// //   return (
// //     <div
// //       style={{
// //         position: "relative",
// //         backgroundImage: `url(${blue})`,
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //         backgroundAttachment: "fixed",
// //         height: isMobile ? "120vh" : "82vh", // Adjusted height for mobile view
// //         width: "90vw",
// //         padding: "20px",
// //         display: "flex",
// //         flexDirection: "column",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         gap: 20
// //       }}
// //     >
// //       <div
// //         style={{
// //           padding: "0px 15px",
// //           color: "white",
// //           display: "flex",
// //           flexDirection: isMobile ? "column" : "row",
// //           margin: "auto",
// //           gap: "10px",
// //           width: "100%",
// //         }}
// //       >

// //         {/* Column 1: Logo and Organization Name */}
// //         <div
// //           style={{
// //             flex: "0 0 30%",
// //             textAlign: "left",
// //             padding: "10px",
// //             display: "flex",
// //             flexDirection: "column",
// //             gap: "10px",
// //             width: isMobile ? "100%" : "30%",
// //           }}
// //         >
// //           <a href="/" style={{ textDecoration: "none", color: 'white', fontWeight: 900 }}
// //             onClick={() => navigation("/")}
// //           >
// //             CA
        
// //           </a>
// //           <p style={{ fontSize: "16px", fontWeight: "bold" }}>
// //             Champion Aden 
// //           </p>
// //         </div>

// //         {/* Column 2: Useful Links */}
// //         <div
// //           style={{
// //             flex: "0 0 30%",
// //             textAlign: "left",
// //             padding: "10px",
// //             display: "flex",
// //             flexDirection: "column",
// //             gap: "15px",
// //             width: isMobile ? "100%" : "30%",
// //           }}
// //         >
// //           <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>
// //             <b
// //               style={{
// //                 paddingBottom: "8px",
// //                 borderBottom: "0.5px solid #0000FF", // Customized border-bottom color
// //                 background: "linear-gradient(to right, transparent 50%, transparent 50%)",
// //                 backgroundPosition: "0 100%",
// //                 backgroundRepeat: "no-repeat",
// //                 backgroundSize: "80% 1px",
// //               }}
// //             >
// //               Useful
// //             </b>
// //             <b> Links</b>
// //           </h2>
// //           <a href="/projects" style={{ textDecoration: "none", color: "white" }}>
// //             Projects
// //           </a>
// //           <a href="/about" style={{ textDecoration: "none", color: "white" }}>
// //             About Me
// //           </a>
// //           <a href="/contact" style={{ textDecoration: "none", color: "white" }}>
// //             Contact
// //           </a>
// //           <a href="/portfolio" style={{ textDecoration: "none", color: "white" }}>
// //             Portfolio
// //           </a>
// //           <a href="/blog" style={{ textDecoration: "none", color: "white" }}>
// //             Blog
// //           </a>
// //         </div>

// //         {/* Column 3: Contact Information */}
// //         <div
// //           style={{
// //             flex: "0 0 30%",
// //             textAlign: "left",
// //             padding: "10px",
// //             display: "flex",
// //             flexDirection: "column",
// //             gap: "15px",
// //             width: isMobile ? "100%" : "30%",
// //           }}
// //         >
// //           <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "10px" }}>
// //             <b
// //               style={{
// //                 paddingBottom: "8px",
// //                 borderBottom: "0.5px solid #0000FF", // Customized border-bottom color
// //                 background: "linear-gradient(to right, transparent 50%, transparent 50%)",
// //                 backgroundPosition: "0 100%",
// //                 backgroundRepeat: "no-repeat",
// //                 backgroundSize: "80% 1px",
// //               }}
// //             >
// //               Contact
// //             </b>
// //             <b> Information</b>
// //           </h2>
// //           <a
// //             style={{
// //               textDecoration: "none",
// //               display: "flex",
// //               alignItems: "center",
// //               gap: "10px",
// //               color: "white",
// //               fontSize: "16px",
// //             }}
// //           >
// //             <FaMapMarkerAlt style={{ fontSize: "18px" }} />
// //             Lagos, Nigeria
// //           </a>
// //           <a
// //             href="tel:+234000000000"
// //             style={{
// //               textDecoration: "none",
// //               display: "flex",
// //               alignItems: "center",
// //               gap: "10px",
// //               color: "white",
// //               fontSize: "16px",
// //             }}
// //           >
// //             <FaPhoneAlt style={{ fontSize: "18px" }} />
// //             +234 champion
// //           </a>
// //           <a
// //             href="mailto:info@ceibz1.com"
// //             style={{
// //               textDecoration: "none",
// //               display: "flex",
// //               alignItems: "center",
// //               gap: "10px",
// //               color: "white",
// //               fontSize: "16px",
// //             }}
// //           >
// //             <FaEnvelope style={{ fontSize: "18px" }} />
// //             championaden.ca@gmail.com
// //           </a>
// //           <a
// //             href="https://www.ceibz1.com"
// //             style={{
// //               textDecoration: "none",
// //               display: "flex",
// //               alignItems: "center",
// //               gap: "10px",
// //               color: "white",
// //               fontSize: "16px",
// //             }}
// //           >
// //             <FaGlobe style={{ fontSize: "18px" }} />
// //             www.championaden.online
// //           </a>
// //         </div>
// //       </div>

// //       {/* Footer */}
// //       <footer
// //         style={{
// //           display: "flex",
// //           flexDirection: isMobile ? "column" : "row",
// //           justifyContent: "center",
// //           marginTop: isMobile ? "70px" : "0px",
// //           color: "white",
// //           width: "100%",
// //           gap: "20px",
// //           marginBottom: 20

// //         }}
// //       >
// //         {/* Social Media Links */}
// //         <div
// //           style={{
// //             display: "flex",
// //             flexDirection: "row",
// //             gap: "20px",
// //             justifyContent: "center",
// //             margin: "auto",
// //           }}
// //         >
// //           <a href="https://www.facebook.com/championaden" style={{ textDecoration: "none" }}>
// //             <FaFacebook size={24} />
// //           </a>
// //           <a
// //             href="https://www.youtube.com/@ChristEmbassyibz1"
// //             style={{ textDecoration: "none" }}
// //           >
// //             <FaYoutube size={24} />
// //           </a>
// //           <a href="https://instagram.com" style={{ textDecoration: "none" }}>
// //             <FaInstagram size={24} />
// //           </a>
// //           <a href="https://twitter.com" style={{ textDecoration: "none" }}>
// //             <FaTwitter size={24} />
// //           </a>
// //         </div>

// //         {/* Copyright */}
// //         <div
// //           style={{
// //             textAlign: "center",
// //             margin: "auto",
// //           }}
// //         >
// //           <p style={{ fontSize: "14px" }}>
// //             &copy; {new Date().getFullYear()} Champion Aden | All rights reserved
// //           </p>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default Footer;