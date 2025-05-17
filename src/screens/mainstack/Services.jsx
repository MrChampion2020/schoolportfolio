import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const services = [
  {
    id: 1,
    icon: <BookOpen size={40} />,
    title: "Analyzing an EdTech Solution",
    prompt: `
     
      Briefly describe three trending technologies (theme) used in the education setting, then provide a recent example of a trending educational technology solution (specific application/software) that explains the benefits, as well as any drawbacks that could occur from implementation in the classroom.  
      Comments: Reflect on the given solution to determine if you would/have used it, including your justify reason explaining your rationale.
    `,
    reflection: `
       
      Final Response with Citation  
      Kahoot! aligns with contemporary research on game-based learning and formative assessment. Its interactive quiz format supports active recall and immediate feedback, which are known to improve memory retention and motivation (Plump & LaRosa, 2017). In primary education, tools like Kahoot! enhance classroom energy, promote participation, and create low-stakes testing environments. However, it’s important to moderate use to maintain focus on deeper learning outcomes. As noted by Wang (2015), excessive gamification may shift attention from content mastery to winning, so it should complement not replace—pedagogical strategies.  
      Citation:  
      Plump, C. M., & LaRosa, J. (2017). Using Kahoot! in the classroom to create engagement and active learning: A game-based technology solution for eLearning novices. Management Teaching Review, 2(2), 151–158.  
      Wang, A. I. (2015). The wear out effect of a game-based student response system. Computers & Education, 82, 217–227.
    `,
    details: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h1 style="font-size: 24px; font-weight: bold; text-decoration: underline;">Discussion Board 1: Analyzing an EdTech Solution</h1>
        
        <h2 style="font-size: 18px; font-style: italic;">Introduction</h2>
        <p>There is no doubt that technology has indeed transformed the education sector. It has actually helped to improve how teachers deliver their lessons and how students engage with learning materials. The integration of digital tools in classrooms has therefore made learning more interactive, accessible, and personalized. However, certain technologies have gained prominence due to their ability to enhance student engagement and improve learning outcomes.</p>
        <p>This brief analysis describes three (3) trending technologies in education, followed by a brief review of a specific educational technology solution, stating its benefits and potential drawbacks in the classroom. It should be noted that “Trends are themes that EdTech attempts to address/solve” (EDT621, Lesson 1 Slide, Page 9).</p>
        
        <h2 style="font-size: 18px; font-weight: bold; text-decoration: underline;">Three Trending Technologies in Education</h2>
        <ol style="margin-left: 20px;">
          <li><strong>Gamification & Game-Based Learning:</strong> Gamification integrates game elements such as leaderboards, points, and badges to motivate students. Game-based learning platforms enhance engagement and make learning interactive through problem-solving and competition.</li>
          <li><strong>Personalized Learning:</strong> Personalized learning leverages technology to design educational experiences to individual student needs, pace, and learning styles. AI-driven platforms and adaptive learning software help educators provide customized content, ensuring that each student progresses at their own level of understanding.</li>
          <li><strong>Augmented Reality (AR) & Virtual Reality (VR):</strong> AR and VR create immersive learning experiences by bringing abstract concepts to life. These technologies are widely used in science, history, and medical education to provide hands-on, engaging experiences.</li>
        </ol>
        
        <h2 style="font-size: 18px; font-weight: bold; text-decoration: underline;">Trending Educational Technology Solution: Kahoot!</h2>
        <p>Kahoot! is a game-based learning platform that allows teachers to create quizzes, discussions, and interactive lessons. Students can participate in real time using their devices, and it makes learning competitive and engaging.</p>
        
        <h2 style="font-size: 18px; font-weight: bold; text-decoration: underline;">Benefits of Kahoot as Trending Educational Technology Solution</h2>
        <ul style="margin-left: 20px; list-style-type: disc;">
          <li>It enhances increased student engagements as the game-like format encourages participation.</li>
          <li>This tech solution provides immediate feedback as students receive instant results, which helps them track their progress.</li>
          <li>Kahoot promotes teamwork through group challenges which enhances collaboration.</li>
        </ul>
        
        <h2 style="font-size: 18px; font-weight: bold; text-decoration: underline;">Drawbacks of Kahoot as Trending Educational Technology Solution</h2>
        <ul style="margin-left: 20px; list-style-type: disc;">
          <li>The competitive nature may overshadow actual learning, thereby leading to distraction.</li>
          <li>It is internet dependent; and as such, it requires a stable connection, which may be a limitation in some schools and student homes.</li>
          <li>Kahoot appears to have limited depth as it may not be effective for deep conceptual learning compared to traditional discussions.</li>
        </ul>
        
        <h2 style="font-size: 18px; font-weight: bold; text-decoration: underline;">Personal Reflection</h2>
        <p>I would use Kahoot! in my classroom because it enhances student participation and makes learning fun. The ability to track progress in real time helps with formative assessment and allows me to adjust my teaching strategies accordingly. However, I would ensure it is used as a supplement rather than a replacement for in-depth discussions and critical thinking activities.</p>
      </div>
    `
  },
  {
    id: 2,
    icon: <BookOpen size={40} />,
    title: "Communication With Parents",
    prompt: `
      
      Create a table that assesses the benefits and drawbacks of the following types of technology for communicating with parents: Emailing, Newsletters, Phone Blasts (Mass Recorded Phone Calls), Mail Merging Letters, Parent Video Conferences, and Social Media. (Your references will be made towards specific technologies as examples.) Provide two [2] learning management systems (Google Classroom, Classcraft, Edmodo, Schoology, IO Classroom, etc.) in your response that illustrate their parent engagement features.  
      Comments: Share a communication tool that you use to communicate, be specific about the technology  
    `,
    reflection: `
       
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
      Thompson, B., Mazer, J. P., & Grady, E. F. (2015). The changing nature of parent–teacher communication: Mode selection in the smartphone era. Communication Education, 64(2), 187–207.
    `,
    details: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h1 style="font-size: 24px; font-weight: bold; text-decoration: underline;">Discussion Board 2: Communication With Parents</h1>
        
        <h2 style="font-size: 18px; font-style: italic;">Introduction</h2>
        <p>Effective communication between schools and parents is essential for promoting student success. With advancements in technology, educators have multiple platforms to keep parents informed, engaged, and involved in their children's academic journey. However, each method of communication appears to come with its own set of advantages and drawbacks.</p>
        <p>The table below assesses the benefits and drawbacks of six commonly used technologies for parent communication namely: Emailing, Newsletters, Phone Blasts (Mass Recorded Phone Calls), Mail Merging Letters, Parent Video Conferences, and Social Media. Further, two Learning Management Systems (LMS), Google Classroom and Classcraft, are also briefly highlighted for their parent engagement features, and thus, demonstrating how digital platforms can enhance school-parent collaboration.</p>
        
        <h2 style="font-size: 18px; font-weight: bold; text-decoration: underline;">Table 1: Evaluating Communication Technologies for Parent-Teacher Engagement</h2>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">S/N</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Technology</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Benefits</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Drawbacks</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Examples</th>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">1</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Emailing</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Quick, cost-effective, and allows attachments</td>
            <td style="border: 1px solid #ddd; padding: 8px;">May be ignored, can end up in spam, and some parents may lack access</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Gmail, Outlook</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">2</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Newsletters</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Provides detailed information, can be digital or printed</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Requires regular updates, may not be read</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Canva (for designing), Smore</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">3</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Phone Blasts (Mass Recorded Phone Calls)</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Reaches all parents instantly, useful for urgent messages</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Can be intrusive, limited to brief messages</td>
            <td style="border: 1px solid #ddd; padding: 8px;">CallHub, One Call Now</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">4</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Mail Merging Letters</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Personalized communication, useful for official documents</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Time-consuming, may not reach parents promptly</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Microsoft Word (Mail Merge), Google Docs</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">5</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Parent Video Conferences</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Allows real-time interaction, useful for meetings</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Requires internet access and scheduling</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Zoom, Google Meet</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">6</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Social Media</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Engages parents in an informal setting, quick updates</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Privacy concerns, not all parents use social media</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Facebook Groups, ClassDojo</td>
          </tr>
        </table>
        
        <h2 style="font-size: 18px; font-weight: bold; text-decoration: underline;">Learning Management Systems (LMS) with Parent Engagement Features</h2>
        <ol style="margin-left: 20px;">
          <li><strong>Google Classroom:</strong> Provides a “Guardian Summaries” feature, allowing parents to receive email updates about their child’s assignments, due dates, and class activities. This helps parents stay informed without needing direct access to the classroom.</li>
          <li><strong>Classcraft:</strong> Uses “gamification” to track student behavior and academic performance. Parents can log in to monitor their child’s progress, view teacher feedback, and encourage positive learning habits.</li>
        </ol>
        
        <h2 style="font-size: 18px; font-weight: bold; text-decoration: underline;">Comments:</h2>
        <p>I use Emailing (Gmail) as my communication tool. Emailing (Gmail) is an effective way to communicate with parents because it allows teachers to send detailed messages, attach important documents (such as progress reports or newsletters), and maintain a professional record of conversations. It also enables two-way communication and gives parents the opportunity to respond at their convenience. But, one major challenge is that emails may sometimes be ignored or even end up in the spam folder.</p>
      </div>
    `
  },
  {
    id: 3,
    icon: <BookOpen size={40} />,
    title: "Designing Creative & Collaborative Activities",
    prompt: `
      
      Option 1: Explain how your students may use a creative tool, such as Canva, to complete an activity.  
      Option 2: Discuss a specific manner in which your students can use a collaborative solution, such as Google Docs, to foster teamwork in your classroom.  
      Comments: Propose an enhancement to the provided idea to elevate it to the next level and/or highlight any process questions you have to make that method successful.
    `,
    reflection: `
       
      Using Google Docs for collaborative writing encourages social constructivist learning, where knowledge is built through dialogue and peer interaction (Vygotsky, 1978). Version history and commenting tools make it ideal for tracking individual contributions and promoting equitable participation. Chu, et al. (2019) confirmed that using Google Docs improves writing skills, collaboration, and engagement among primary students. Enhancing this with voice typing supports Universal Design for Learning (UDL), making the task more accessible for students with motor or writing difficulties (CAST, 2018). A process question: How can we ensure all students contribute equally without over-relying on dominant voices?  
      Citation:  
      CAST. (2018). Universal Design for Learning Guidelines version 2.2. http://udlguidelines.cast.org  
      Chu, S. K. W., Capio, C. M., van Aalst, J., & Cheng, E. W. L. (2019). Evaluating the use of Google Docs in collaborative writing activities for primary school students. Computers & Education, 128, 98–113. https://doi.org/10.1016/j.compedu.2018.09.013  
      Vygotsky, L. S. (1978). Mind in society: The development of higher psychological processes. Harvard University Press.
    `,
    details: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h1 style="font-size: 24px; font-weight: bold; text-decoration: underline;">Discussion Board 3: Designing Creative & Collaborative Activities Using Technology</h1>
        
        <h2 style="font-size: 18px; font-style: italic;">Introduction</h2>
        <p>There is no doubt that technology has revolutionized the way students engage with learning activities, making education more interactive, collaborative, and dynamic. According to Wang and Hwang (2021), the integration of digital tools in classrooms will foster creativity, enhances engagement, and promotes teamwork among students and one of the most effective ways to achieve this is by using <strong>collaborative digital platforms</strong>, which allow students to work together seamlessly.</p>
        <p>One powerful tool for digital collaboration in classrooms is Google Docs, which allows students to write, edit, and provide real-time feedback on shared documents. This tool supports student-centered learning by encouraging teamwork, creativity, and peer interaction (Chu, et al., 2019).</p>
        <p>I hereunder present a Collaborative Story Writing activity using Google Docs to illustrate how technology can be leveraged to enhance teamwork and creativity among my Grade 3 students.</p>
        
        <h2 style="font-size: 18px; font-weight: bold; text-decoration: underline;">Collaborative Story Writing with Google Docs</h2>
        <p><strong>Activity:</strong></p>
        <p>Students in Grade 3 will work in small groups (3-4 students per group) to create a short story collaboratively using Google Docs. Each group will receive a story prompt or an opening sentence to guide their writing.</p>
        
        <ol style="margin-left: 20px;">
          <li><strong>Setup:</strong> The teacher creates a shared Google Doc for each group and assigns roles:
            <ol style="margin-left: 20px;">
              <li>Writer 1: Starts the story (introducing characters and the setting).</li>
              <li>Writer 2: Develops the plot (introduces a problem).</li>
              <li>Writer 3: Adds a resolution (resolves the problem and concludes the story).</li>
              <li>Writer 4: Edits and enhances details (fixing grammar and adding descriptions).</li>
            </ol>
          </li>
          <li><strong>Collaboration:</strong> Students take turns to write, and use the “comments feature” to give feedback on each other’s ideas. They may also use the “suggesting mode” to make non-destructive edits.</li>
          <li><strong>Final Review and Sharing:</strong>
            <ol style="margin-left: 20px;">
              <li>Groups read their completed stories aloud.</li>
              <li>The class provides constructive feedback.</li>
              <li>Stories are compiled into a digital class storybook.</li>
            </ol>
          </li>
        </ol>
        
        <h2 style="font-size: 18px; font-weight: bold; text-decoration: underline;">Enhancement Suggestion:</h2>
        <p>To therefore elevate this activity, I will need to integrate voice typing in “Google Docs” to enable students who struggle with typing. Further, I will introduce “images/drawings” (using Google Drawings) to illustrate their stories, in order to make it more meaningful and engaging.</p>
        
        <h2 style="font-size: 18px; font-weight: bold; text-decoration: underline;">Process Question to ask?:</h2>
        <p>How can I ensure that all the students actively participate and contribute equally without one student dominating or attempting to dominate the activity?</p>
        <p>To provide answers to the above “Process Question” I will follow the suggestions made by experts like Wang and Hwang, (2021) and Chu, et al., (2019) as listed.</p>
        
        <ol style="margin-left: 20px;">
          <li><strong>Role Rotation:</strong> I could assign specific roles (Writer, Editor, Idea Contributor, Illustrator) and rotate them in the different story-writing sessions so that each student gets a chance to contribute in multiple ways (Wang & Hwang, 2021).</li>
          <li><strong>Participation Tracker:</strong> I will use the “version history” in Google Docs to monitor individual contributions and ensure that each student adds meaningful input (Chu, et al., 2019).</li>
          <li><strong>Time-Limited Contributions:</strong> I will set a timer for each student’s turn to write or edit so as to ensure that everyone has an equal opportunity to participate without one student taking over (Chu, et al., 2019).</li>
          <li><strong>Use a Checklist for Fair Participation:</strong> I will provide each group with a simple checklist to track their roles and contributions. This will ensure that every student completes their assigned task before moving on (Wang and Hwang, 2021).</li>
          <li><strong>Introduce a ‘Pass-the-Story’ Method:</strong> Instead of letting one student dominate, I will set a rule that each student can only write one or two sentences at a time before passing control to the next group member. This will encourage equal participation (Chu, et al., 2019).</li>
          <li><strong>Teacher-Led Check-ins:</strong> I will periodically check in with each group, asking different students to summarize their progress. This will go a long way to helps identify and support students who may be less engaged in any activity (Chu, et al., 2019).</li>
        </ol>
        
        <h2 style="font-size: 18px; font-weight: bold; text-decoration: underline;">References</h2>
        <p>Chu, S. K. W., Capio, C. M., van Aalst, J., & Cheng, E. W. L. (2019). Evaluating the use of Google Docs in collaborative writing activities for primary school students. <em>Computers & Education</em>, 128, 98–113. <a href="https://doi.org/10.1016/j.compedu.2018.09.013" style="color: blue; text-decoration: none;">https://doi.org/10.1016/j.compedu.2018.09.013</a></p>
        <p>Wang, S. & Hwang, G. J. (2021). Effects of collaborative learning and technology-enhanced scaffolding on digital storytelling engagement and writing skills. <em>Educational Technology & Society</em>, 24(1), 132–144. Retrieved from <a href="https://www.j-ets.net/" style="color: blue; text-decoration: none;">https://www.j-ets.net/</a></p>
      </div>
    `
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [viewDetails, setViewDetails] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const reflectionQuestions = [
    {
      id: 1,
      question: "Establish a set of five professional learning goals for yourself that relate to using technology effectively in your practice. Two [2] Short Term Goals (1-11 Months) Two [2] Medium Term Goals (1-2 Years) One [1] Long Term Goal (3+ Years)",
      answer: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p><strong>My Five (5) Professional Learning Goals</strong></p>
          <p><strong>Short-Term Goals:</strong></p>
          <ol style="margin-left: 20px;">
            <li>I will like to integrate one new interactive EdTech tool each term to boost student engagement.</li>
            <li>I would like to attend at least two EdTech workshops/webinars this school year for practical classroom strategies.</li>
          </ol>
          <p><strong>Medium-Term Goals:</strong></p>
          <ol style="margin-left: 20px;" start="3">
            <li>Design differentiated digital lesson plans using adaptive tools like Seesaw or Google Classroom.</li>
            <li>Collaborate with colleagues to create a shared resource bank of technology-integrated lessons.</li>
          </ol>
          <p><strong>Long-Term Goal:</strong></p>
          <ol style="margin-left: 20px;" start="5">
            <li>Lead professional development sessions in my school or district on effective EdTech implementation, becoming a mentor and advocate for technology-driven instruction.</li>
          </ol>
        </div>
      `
    },
    {
      id: 2,
      question: "How would you use a technological solution to create, adapt, and personalize learning experiences that foster independent learning and accommodate learner differences and needs?",
      answer: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p><strong>Personalizing Learning with Technology</strong></p>
          <p>To accommodate diverse learner needs, I use technology like Seesaw, which allows students to respond in writing, drawing, or audio. Platforms such as Epic! and Khan Academy provide personalized reading and math experiences, adjusting content based on performance. I create learning paths using Google Slides and assign digital tasks at varied levels. This fosters independent learning and supports students’ unique strengths and challenges. Students work at their own pace while receiving real-time feedback. These personalized digital experiences increase confidence, engagement, and academic growth across varying ability levels in my Grade 3 classroom.</p>
        </div>
      `
    },
    {
      id: 3,
      question: "How would you use a technological solution to foster a culture where students take ownership of their learning goals/outcomes in independent/group settings?",
      answer: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p><strong>Building a Culture of Ownership in Learning</strong></p>
          <p>I encourage student ownership by using digital goal-setting and reflection tools like ClassDojo portfolios and Google Forms. Students track their own progress and reflect weekly on learning goals. In group settings, tools like Padlet or Google Jamboard allow collaborative brainstorming and project planning. This cultivates shared accountability and teamwork. I establish clear expectations for group roles and teach digital collaboration skills early in the year. Through consistent practice and feedback, students learn to self-monitor, set realistic goals, and celebrate progress—laying the foundation for lifelong independent and collaborative learning habits.</p>
        </div>
      `
    },
    {
      id: 4,
      question: "How do you manage the use of technology and student learning strategies in digital platforms, virtual environments, and hands-on maker spaces?",
      answer: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p><strong>Managing Technology in Learning Environments</strong></p>
          <p>Managing student learning across physical and digital spaces requires routine and structure. I set clear expectations for device use, digital behavior, and transitions. I use platforms like Google Classroom to organize materials, schedules, and submissions. In virtual environments, I assign breakout tasks using Google Meet features. In hands-on maker spaces, students rotate through tech stations with specific roles. I also use timers, visual aids, and peer helpers to manage group work effectively. Regular tech check-ins and modeling keep students on track and ensure purposeful, responsible engagement in any learning environment.</p>
        </div>
      `
    },
    {
      id: 5,
      question: "What learning opportunities challenge students to use a design process and computational thinking to innovate and solve problems?",
      answer: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p><strong>Design Process and Computational Thinking</strong></p>
          <p>I incorporate design thinking through STEM projects where students brainstorm, prototype, test, and improve solutions using both digital and physical tools. For example, using Tinkercad or paper models, students design solutions to real-world problems—like building a rain shelter for a pet. I introduce basic coding with ScratchJr, teaching sequencing and logic. Students learn to debug and iterate, developing persistence and problem-solving skills. These activities integrate math, science, and creativity while building computational thinking and confidence in innovation. They also encourage collaboration, critical thinking, and hands-on exploration that are essential at the primary level.</p>
        </div>
      `
    },
    {
      id: 6,
      question: "How do you model and nurture creativity and creative expression to communicate ideas, knowledge, or connections using technology?",
      answer: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p><strong>Creativity and Interdisciplinary Connections</strong></p>
          <p>I nurture creativity by encouraging students to express understanding through digital storytelling, art, and presentations. Using tools like Book Creator and Canva, students write illustrated stories that connect literacy with social studies or science content. During project-based learning, they create multimedia presentations to explain concepts like plant life cycles or community helpers. I model brainstorming, planning, and editing processes, and allow choice in how students show what they know. This flexibility encourages deeper learning, personal connection, and pride in their work—while also building their digital communication and visual design skills.</p>
        </div>
      `
    },
    {
      id: 7,
      question: "What methods do you implement to enable the use of technology to collaborate with peers and students?",
      answer: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p><strong>Collaboration with Peers and Students</strong></p>
          <p>Technology supports classroom and professional collaboration in many ways. With students, I use shared Google Docs or Slides for group assignments and discussion forums like Flipgrid for exchanging ideas. For peer collaboration, I co-plan with colleagues using shared drives and communication tools like Microsoft Teams. I also participate in online professional learning communities where we share EdTech resources and lesson plans. This promotes a growth mindset, builds collective capacity, and ensures that my teaching evolves through the power of shared knowledge and digital cooperation.</p>
        </div>
      `
    },
    {
      id: 8,
      question: "How does your work ensure that good digital citizens contribute responsibility to the digital world?",
      answer: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p><strong>Promoting Digital Citizenship and Fluency</strong></p>
          <p>Teaching digital citizenship is woven into my classroom routines. I use Common Sense Education lessons to discuss topics like online safety, respecting others' work, and understanding digital footprints. Students practice secure login habits, citing digital sources, and using kind language in comments. We discuss real-life scenarios to build empathy and decision-making skills online. I also model how to verify credible information and use age-appropriate search tools. These habits help students become respectful, informed, and responsible users of technology—skills that are essential as they grow in a connected digital world.</p>
        </div>
      `
    },
    {
      id: 9,
      question: "How do you use data to inform the use of educational technology in practice?",
      answer: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p><strong>Using Data for Technology Integration</strong></p>
          <p>I regularly use data from platforms like Quizizz, and Google Forms to inform instructional decisions. These tools provide real-time insights into student understanding and highlight gaps that may need reteaching. Based on performance, I adjust digital assignments to better meet individual needs. Data also informs small group formations and intervention planning. I track progress over time using class dashboards and share data with students to help them set goals. This data-driven approach ensures that my use of EdTech is strategic, responsive, and always focused on improving student outcomes.</p>
        </div>
      `
    },
    {
      id: 10,
      question: "How will you be a leader in the field of education or educational technology?",
      answer: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p><strong>Leadership in Education Technology</strong></p>
          <p>I aspire to lead by example in integrating EdTech meaningfully in primary education. I will continue building expertise by participating in advanced training, earning certifications, and sharing successful practices with colleagues. I aim to mentor new teachers and facilitate school-wide training sessions. Long-term, I envision collaborating with district leaders to shape tech policy and curriculum design. My leadership will be rooted in reflection, innovation, and collaboration, ensuring that EdTech serves as a tool for equity, engagement, and empowerment in the 21st-century classroom.</p>
        </div>
      `
    }
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-20" style={{ marginTop: 20 }}>
      <Navbar />
      {/* Services Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 variants={itemVariants} className="sm:text-5xl font-extrabold text-gray-900 dark:text-white lg:text-6xl text-center mt-20 mb-12">
          Discussion Board
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ padding: 20 }}>
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg cursor-pointer"
              onClick={() => {
                setSelectedService(service);
                setViewDetails(false);
              }}
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">{service.prompt}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedService(service);
                }}
                className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                View My Reflection Details
              </button>
            </motion.div>
          ))}
        </div>

        {/* Reflection Q&A Section */}
        <motion.div variants={itemVariants} className="mt-12">
          <h2 className=" font-bold text-gray-900 dark:text-white text-center mb-6" style={{ textDecoration: 'none', fontSize: '30px' }}>
            Reflection Questions and Answers
          </h2>
          <div className="space-y-4">
            {reflectionQuestions.map((q) => (
              <div key={q.id}>
                <button
                  onClick={() => setSelectedQuestion(selectedQuestion === q.id ? null : q.id)}
                  className="w-full text-left p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <span>Question {q.id}: {q.question}</span>
                </button>
                <AnimatePresence>
                  {selectedQuestion === q.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="p-4 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        dangerouslySetInnerHTML={{ __html: q.answer }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Reflection/Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ zIndex: 1001 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 w-full max-w-[95%] md:max-w-[95%] max-h-[90vh] p-8 rounded-xl relative overflow-y-auto"
              style={{ paddingTop: "80px" }}
            >
              <button
                onClick={() => {
                  setSelectedService(null);
                  setViewDetails(false);
                }}
                className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 p-2 rounded-full z-10"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{selectedService.title}</h3>
              {viewDetails ? (
                <div
                  className="text-gray-700 dark:text-gray-300"
                  dangerouslySetInnerHTML={{ __html: selectedService.details }}
                />
              ) : (
                <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                  {selectedService.reflection}
                </div>
              )}
              <button
                onClick={() => setViewDetails(!viewDetails)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {viewDetails ? "Back to Reflection" : "View Details"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}