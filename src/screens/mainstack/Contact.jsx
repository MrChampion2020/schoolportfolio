import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import API_URL from "./config";
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(null);
  const [openReflection, setOpenReflection] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsProcessing(true);

    try {
      const response = await axios.post(`${API_URL}/api/contact`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsProcessing(false);
    }
  };

  const services = [
    {
      id: 1,
      question: `  
      Briefly describe three trending technologies (theme) used in the education setting, then provide a recent example of a trending educational technology solution (specific application/software) that explains the benefits, as well as any drawbacks that could occur from implementation in the classroom.  
      Comments: Reflect on the given solution to determine if you would/have used it, including your justify reason explaining your rationale.`,
      answer: `  
      Final Response with Citation  
      Kahoot! aligns with contemporary research on game-based learning and formative assessment. Its interactive quiz format supports active recall and immediate feedback, which are known to improve memory retention and motivation (Plump & LaRosa, 2017). In primary education, tools like Kahoot! enhance classroom energy, promote participation, and create low-stakes testing environments. However, it’s important to moderate use to maintain focus on deeper learning outcomes. As noted by Wang (2015), excessive gamification may shift attention from content mastery to winning, so it should complement not replace—pedagogical strategies.  
      Citation:  
      Plump, C. M., & LaRosa, J. (2017). Using Kahoot! in the classroom to create engagement and active learning: A game-based technology solution for eLearning novices. Management Teaching Review, 2(2), 151–158.  
      Wang, A. I. (2015). The wear out effect of a game-based student response system. Computers & Education, 82, 217–227.`,
    },
    {
      id: 2,
      question: ` 
      Create a table that assesses the benefits and drawbacks of the following types of technology for communicating with parents: Emailing, Newsletters, Phone Blasts (Mass Recorded Phone Calls), Mail Merging Letters, Parent Video Conferences, and Social Media. (Your references will be made towards specific technologies as examples.) Provide two [2] learning management systems (Google Classroom, Classcraft, Edmodo, Schoology, IO Classroom, etc.) in your response that illustrate their parent engagement features.  
      Comments: Share a communication tool that you use to communicate, be specific about the technology`,
      answer: ` 
      Communication With Parents  
      Final Response with Citation  
      | Technology             | Benefits                          | Drawbacks                          |  
      |------------------------|------------------------------------|-------------------------------------|  
      | Emailing (e.g., Gmail) | Flexible, asynchronous, cost-effective | Low open rates, requires follow-ups |  
      | Newsletters (e.g., Mailchimp) | Informative, visually appealing | Time-intensive to create, may be ignored |  
      | Phone Blasts (e.g., SchoolMessenger) | Direct, urgent communication | Privacy concerns, potential annoyance |  
      | Mail Merging Letters   | Personalized, formal              | Slow delivery, high cost            |  
      | Parent Video Conferences (e.g., Zoom) | Interactive, personal | Scheduling challenges, tech issues  |  
      | Social Media (e.g., Facebook Groups) | Real-time engagement, community building | Privacy risks, requires moderation  |  

      The use of digital communication tools like Gmail and Google Classroom supports Epstein’s framework for school-family partnerships by fostering regular and accessible communication (Epstein, 2011). Google Classroom’s Guardian Summaries provide non-intrusive updates, while ClassDojo’s messaging and portfolio features enhance engagement with real-time feedback. I use Google Classroom to share updates, as its integration with Gmail ensures efficient communication.  
      Citation:  
      Epstein, J. L. (2011). School, family, and community partnerships: Preparing educators and improving schools. Routledge.  
      Thompson, B., Mazer, J. P., & Grady, E. F. (2015). The changing nature of parent–teacher communication: Mode selection in the smartphone era. Communication Education, 64(2), 187–207.`,
    },
    {
      id: 3,
      question: ` 
      Option 1: Explain how your students may use a creative tool, such as Canva, to complete an activity.  
      Option 2: Discuss a specific manner in which your students can use a collaborative solution, such as Google Docs, to foster teamwork in your classroom.  
      Comments: Propose an enhancement to the provided idea to elevate it to the next level and/or highlight any process questions you have to make that method successful.`,
      answer: `  
      Using Google Docs for collaborative writing encourages social constructivist learning, where knowledge is built through dialogue and peer interaction (Vygotsky, 1978). Version history and commenting tools make it ideal for tracking individual contributions and promoting equitable participation. Chu, et al. (2019) confirmed that using Google Docs improves writing skills, collaboration, and engagement among primary students. Enhancing this with voice typing supports Universal Design for Learning (UDL), making the task more accessible for students with motor or writing difficulties (CAST, 2018). A process question: How can we ensure all students contribute equally without over-relying on dominant voices?  
      Citation:  
      CAST. (2018). Universal Design for Learning Guidelines version 2.2. http://udlguidelines.cast.org  
      Chu, S. K. W., Capio, C. M., van Aalst, J., & Cheng, E. W. L. (2019). Evaluating the use of Google Docs in collaborative writing activities for primary school students. Computers & Education, 128, 98–113. https://doi.org/10.1016/j.compedu.2018.09.013  
      Vygotsky, L. S. (1978). Mind in society: The development of higher psychological processes. Harvard University Press.`,
    },
  ];

  const reflectionQuestions = [
    {
      id: 1,
      question: "Establish a set of five professional learning goals for yourself that relate to using technology effectively in your practice. Two [2] Short Term Goals (1-11 Months) Two [2] Medium Term Goals (1-2 Years) One [1] Long Term Goal (3+ Years)",
      answer: `
        My Five (5) Professional Learning Goals
        Short-Term Goals: 
        (1) I will like to integrate one new interactive EdTech tool each term to boost student engagement. 
        (2) I would like to attend at least two EdTech workshops/webinars this school year for practical classroom strategies.
        Medium-Term Goals: 
        (3) Design differentiated digital lesson plans using adaptive tools like Seesaw or Google Classroom. 
        (4) Collaborate with colleagues to create a shared resource bank of technology-integrated lessons.
        Long-Term Goal: 
        (5) Lead professional development sessions in my school or district on effective EdTech implementation, becoming a mentor and advocate for technology-driven instruction.
      `
    },
    {
      id: 2,
      question: "How would you use a technological solution to create, adapt, and personalize learning experiences that foster independent learning and accommodate learner differences and needs?",
      answer: `
        Personalizing Learning with Technology
        To accommodate diverse learner needs, I use technology like Seesaw, which allows students to respond in writing, drawing, or audio. Platforms such as Epic! and Khan Academy provide personalized reading and math experiences, adjusting content based on performance. I create learning paths using Google Slides and assign digital tasks at varied levels. This fosters independent learning and supports students’ unique strengths and challenges. Students work at their own pace while receiving real-time feedback. These personalized digital experiences increase confidence, engagement, and academic growth across varying ability levels in my Grade 3 classroom.
      `
    },
    {
      id: 3,
      question: "How would you use a technological solution to foster a culture where students take ownership of their learning goals/outcomes in independent/group settings?",
      answer: `
        Building a Culture of Ownership in Learning
        I encourage student ownership by using digital goal-setting and reflection tools like ClassDojo portfolios and Google Forms. Students track their own progress and reflect weekly on learning goals. In group settings, tools like Padlet or Google Jamboard allow collaborative brainstorming and project planning. This cultivates shared accountability and teamwork. I establish clear expectations for group roles and teach digital collaboration skills early in the year. Through consistent practice and feedback, students learn to self-monitor, set realistic goals, and celebrate progress—laying the foundation for lifelong independent and collaborative learning habits.
      `
    },
    {
      id: 4,
      question: "How do you manage the use of technology and student learning strategies in digital platforms, virtual environments, and hands-on maker spaces?",
      answer: `
        Managing Technology in Learning Environments
        Managing student learning across physical and digital spaces requires routine and structure. I set clear expectations for device use, digital behavior, and transitions. I use platforms like Google Classroom to organize materials, schedules, and submissions. In virtual environments, I assign breakout tasks using Google Meet features. In hands-on maker spaces, students rotate through tech stations with specific roles. I also use timers, visual aids, and peer helpers to manage group work effectively. Regular tech check-ins and modeling keep students on track and ensure purposeful, responsible engagement in any learning environment.
      `
    },
    {
      id: 5,
      question: "What learning opportunities challenge students to use a design process and computational thinking to innovate and solve problems?",
      answer: `
        Design Process and Computational Thinking
        I incorporate design thinking through STEM projects where students brainstorm, prototype, test, and improve solutions using both digital and physical tools. For example, using Tinkercad or paper models, students design solutions to real-world problems—like building a rain shelter for a pet. I introduce basic coding with ScratchJr, teaching sequencing and logic. Students learn to debug and iterate, developing persistence and problem-solving skills. These activities integrate math, science, and creativity while building computational thinking and confidence in innovation. They also encourage collaboration, critical thinking, and hands-on exploration that are essential at the primary level.
      `
    },
    {
      id: 6,
      question: "How do you model and nurture creativity and creative expression to communicate ideas, knowledge, or connections using technology?",
      answer: `
        Creativity and Interdisciplinary Connections
        I nurture creativity by encouraging students to express understanding through digital storytelling, art, and presentations. Using tools like Book Creator and Canva, students write illustrated stories that connect literacy with social studies or science content. During project-based learning, they create multimedia presentations to explain concepts like plant life cycles or community helpers. I model brainstorming, planning, and editing processes, and allow choice in how students show what they know. This flexibility encourages deeper learning, personal connection, and pride in their work—while also building their digital communication and visual design skills.
      `
    },
    {
      id: 7,
      question: "What methods do you implement to enable the use of technology to collaborate with peers and students?",
      answer: `
        Collaboration with Peers and Students
        Technology supports classroom and professional collaboration in many ways. With students, I use shared Google Docs or Slides for group assignments and discussion forums like Flipgrid for exchanging ideas. For peer collaboration, I co-plan with colleagues using shared drives and communication tools like Microsoft Teams. I also participate in online professional learning communities where we share EdTech resources and lesson plans. This promotes a growth mindset, builds collective capacity, and ensures that my teaching evolves through the power of shared knowledge and digital cooperation.
      `
    },
    {
      id: 8,
      question: "How does your work ensure that good digital citizens contribute responsibility to the digital world?",
      answer: `
        Promoting Digital Citizenship and Fluency
        Teaching digital citizenship is woven into my classroom routines. I use Common Sense Education lessons to discuss topics like online safety, respecting others' work, and understanding digital footprints. Students practice secure login habits, citing digital sources, and using kind language in comments. We discuss real-life scenarios to build empathy and decision-making skills online. I also model how to verify credible information and use age-appropriate search tools. These habits help students become respectful, informed, and responsible users of technology—skills that are essential as they grow in a connected digital world.
      `
    },
    {
      id: 9,
      question: "How do you use data to inform the use of educational technology in practice?",
      answer: `
        Using Data for Technology Integration
        I regularly use data from platforms like Quizizz, and Google Forms to inform instructional decisions. These tools provide real-time insights into student understanding and highlight gaps that may need reteaching. Based on performance, I adjust digital assignments to better meet individual needs. Data also informs small group formations and intervention planning. I track progress over time using class dashboards and share data with students to help them set goals. This data-driven approach ensures that my use of EdTech is strategic, responsive, and always focused on improving student outcomes.
      `
    },
    {
      id: 10,
      question: "How will you be a leader in the field of education or educational technology?",
      answer: `
        Leadership in Education Technology
        I aspire to lead by example in integrating EdTech meaningfully in primary education. I will continue building expertise by participating in advanced training, earning certifications, and sharing successful practices with colleagues. I aim to mentor new teachers and facilitate school-wide training sessions. Long-term, I envision collaborating with district leaders to shape tech policy and curriculum design. My leadership will be rooted in reflection, innovation, and collaboration, ensuring that EdTech serves as a tool for equity, engagement, and empowerment in the 21st-century classroom.
      `
    }
  ];

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
          Contact Us
        </motion.h1>

        {/* Q&A Section */}
        <motion.div
          variants={itemVariants}
          style={{
            marginTop: "60px",
            maxWidth: "800px",
            margin: "60px auto 0",
          }}
        >
          

          
        </motion.div>

        {/* Reflection Q&A Section */}
        <motion.div
          variants={itemVariants}
          style={{
            marginTop: "60px",
            maxWidth: "800px",
            margin: "60px auto 0",
          }}
        >
         
         <h2
            className="sm:text-5xl font-extrabold text-white-900 dark:text-white lg:text-6xl text-center mt-20 mb-12"
          >
            My Reflections
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {reflectionQuestions.map((reflection, index) => (
              <div
                key={reflection.id}
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "#1C2526",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                }}
              >
                <button
                  onClick={() => setOpenReflection(openReflection === index ? null : index)}
                  style={{
                    width: "100%",
                    padding: "15px",
                    textAlign: "left",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#F0F4F8",
                    backgroundColor: "",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Question {reflection.id}: {reflection.question}</span>
                  <span style={{fontSize: '40px', backgroundColor: 'black', borderRadius: "5%", padding: 5}}>{openReflection === index ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {openReflection === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        padding: "15px",
                        color: "#F0F4F8",
                        fontSize: "14px",
                        backgroundColor: "#1C2526",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {reflection.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div variants={itemVariants}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginTop: "70px",
              color: "#0000FF",
              textAlign: "center",
            }}
          >
            Get in Touch
          </h2>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "600px",
              margin: "0 auto",
              padding: "30px",
              background: "rgba(28, 37, 38, 0.8)",
              backdropFilter: "blur(10px)",
              borderRadius: "15px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
            }}
          >
            {["name", "email", "subject", "message"].map((field) => (
              <div key={field} className="relative">
                <input
                  type={field === "email" ? "email" : field === "message" ? "textarea" : "text"}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  placeholder={field === "name" ? "Enter your name" : 
                             field === "email" ? "Enter your email" : 
                             field === "subject" ? "Enter the subject" : 
                             "Enter your message"}
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: "#191970",
                    color: "#F0F4F8",
                    outline: "none",
                    transition: "all 0.3s ease",
                    position: "relative",
                    zIndex: 1,
                  }}
                  className={`peer ${errors[field] ? "border-red-500" : formData[field] ? "border-green-500" : ""}`}
                />
                <label
                  htmlFor={field}
                  style={{
                    position: "absolute",
                    left: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#A0AEC0",
                    fontWeight: "bold",
                    pointerEvents: "none",
                    transition: "all 0.3s ease",
                    zIndex: 0,
                  }}
                  className="peer-focus:text-xs peer-focus:-top-5 peer-focus:text-blue-400 peer-valid:text-xs peer-valid:-top-5 peer-valid:text-green-400"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}:
                </label>
                {errors[field] && (
                  <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                    {errors[field]}
                  </p>
                )}
              </div>
            ))}

            <button
              type="submit"
              style={{
                background: "linear-gradient(90deg, #0000FF, #8A2BE2)",
                color: "white",
                padding: "12px 24px",
                fontSize: "16px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "8px",
                cursor: isProcessing ? "not-allowed" : "pointer",
                transition: "opacity 0.3s ease",
                alignSelf: "center",
                minWidth: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
              disabled={isProcessing}
            >
              {isProcessing && <FaSpinner className="animate-spin" />}
              {isProcessing ? "Sending..." : "Send Message"}
            </button>
          </form>

          {submitStatus === "success" && (
            <p
              style={{
                color: "green",
                marginTop: "20px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Message sent successfully!
            </p>
          )}

          {submitStatus === "error" && (
            <p
              style={{
                color: "red",
                marginTop: "20px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              There was an error sending your message. Please try again.
            </p>
          )}
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
}
