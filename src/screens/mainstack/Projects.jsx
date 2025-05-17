
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import project1Img from "../../assets/pj1.png";
import project2Img from "../../assets/pj2.png";
import project3Img from "../../assets/pj3.png";


// Project 1 Table Component
const Project1DetailsTable = () => {
  const assessmentData = [
    { questionNo: 1, question: "Which word is a verb?", optionA: "Cat", optionB: "Run", optionC: "Cup", optionD: "Sky", correctAnswer: "B", pValue: 0.9, wrongAnswers: 1 },
    { questionNo: 2, question: "Identify the action word.", optionA: "Run", optionB: "House", optionC: "Boy", optionD: "Beautiful", correctAnswer: "A", pValue: 0.7, wrongAnswers: 3 },
    { questionNo: 3, question: "What is the verb in this sentence?", optionA: "Table", optionB: "Dance", optionC: "Book", optionD: "Door", correctAnswer: "B", pValue: 0.7, wrongAnswers: 3 },
    { questionNo: 4, question: "Pick the correct verb.", optionA: "Sing", optionB: "New", optionC: "Bell", optionD: "Ball", correctAnswer: "A", pValue: 0.8, wrongAnswers: 2 },
    { questionNo: 5, question: "Which of these is an action?", optionA: "Jump", optionB: "Tree", optionC: "Car", optionD: "Sun", correctAnswer: "A", pValue: 0.8, wrongAnswers: 2 },
  ];

  const studentResponses = [
    { questionNo: 1, student1: "B", student2: "B", student3: "B", student4: "B", student5: "B", student6: "B", student7: "D", student8: "B", student9: "B", student10: "B", correctAnswer: "B", totalCorrect: 9, totalIncorrect: 1, mostChosenIncorrect: "D", analysis: "Some students may not recognize 'run' as a verb.", pedagogicalFollowUp: "Reinforce action words through interactive activities." },
    { questionNo: 2, student1: "B", student2: "A", student3: "C", student4: "A", student5: "A", student6: "A", student7: "A", student8: "B", student9: "A", student10: "A", correctAnswer: "A", totalCorrect: 7, totalIncorrect: 3, mostChosenIncorrect: "B", analysis: "Some students may confuse nouns with action words.", pedagogicalFollowUp: "Use real-life examples to differentiate between nouns and verbs." },
    { questionNo: 3, student1: "A", student2: "B", student3: "B", student4: "D", student5: "B", student6: "B", student7: "A", student8: "B", student9: "B", student10: "B", correctAnswer: "B", totalCorrect: 7, totalIncorrect: 3, mostChosenIncorrect: "A", analysis: "Students may not understand verb tense properly.", pedagogicalFollowUp: "Practice verb tense using sentence completion exercises." },
    { questionNo: 4, student1: "A", student2: "A", student3: "A", student4: "B", student5: "A", student6: "A", student7: "B", student8: "A", student9: "A", student10: "A", correctAnswer: "A", totalCorrect: 8, totalIncorrect: 2, mostChosenIncorrect: "B", analysis: "Some students may confuse adjectives with action words.", pedagogicalFollowUp: "Teach sentence structure and highlight action words." },
    { questionNo: 5, student1: "A", student2: "A", student3: "A", student4: "A", student5: "A", student6: "A", student7: "A", student8: "A", student9: "C", student10: "C", correctAnswer: "A", totalCorrect: 8, totalIncorrect: 2, mostChosenIncorrect: "C", analysis: "Some students might confuse nouns with verbs (action words).", pedagogicalFollowUp: "Use fill-in-the-blank exercises to reinforce verb usage." },
  ];

  const reflectionQuestions = [
    { question: "Trends noticed in student responses:", response: "Most students correctly identified action words, but there were consistent errors in recognizing verb tenses and sentence structure." },
    { question: "Common misconceptions students have:", response: "Students often confused nouns with verbs and struggled with selecting the correct verb tense." },
    { question: "How I would adjust my teaching to address these misconceptions:", response: "Future lessons will include more interactive activities, sentence completion exercises, and visual aids to reinforce action words and verb tenses." },
    { question: "How effective the item analysis was understanding student learning outcome:", response: "The item analysis provided good and very clear insights into students' strengths and weaknesses, and helps to target areas that need improvement." },
    { question: "Changes I would like to make to improve the assessment or the analysis process:", response: "I would include open-ended questions as this could provide deeper meaning to students' thought processes, in addition, a larger sample size would improve data generalization." },
  ];

  const benefits = [
    "It allows for a systematic evaluation of student responses",
    "It helps educators identify common misconceptions and areas that need improvement",
    "it provides clear visual data that can inform teaching strategies"
  ];

  const drawbacks = [
    "It relies solely on quantitative data for assessment of students.",
    "Qualitative aspect such as to why students choose certain incorrect answers",
    "Minor data entry could significantly skew the results obtained."
  ];

  const pValues = [
    { questionNo: 1, pValue: 0.9 },
    { questionNo: 2, pValue: 0.7 },
    { questionNo: 3, pValue: 0.7 },
    { questionNo: 4, pValue: 0.8 },
    { questionNo: 5, pValue: 0.8 },
  ];

  return (
    <div className="text-gray-800 dark:text-gray-300 whitespace-pre-line leading-relaxed">
      <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4">Project 1: Item Analysis Details</h3>
      <h4 className="text-lg font-semibold mb-2">Overview</h4>
      <p className="mb-4">
        This project involved conducting an item analysis using a multiple-choice assessment focused on identifying verbs, with five questions and ten respondents. The goal was to analyze student responses to understand the effectiveness of each question.
      </p>

      <h4 className="text-lg font-semibold mb-2">Assessment Data</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mb-4">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Question No.</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Question</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Option A</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Option B</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Option C</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Option D</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Correct Answer</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Item Difficulty (P-Value)</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Wrong Answers</th>
            </tr>
          </thead>
          <tbody>
            {assessmentData.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.questionNo}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.question}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.optionA}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.optionB}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.optionC}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.optionD}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.correctAnswer}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.pValue}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.wrongAnswers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h4 className="text-lg font-semibold mb-2">Student Responses</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mb-4">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Question No.</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Student 1</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Student 2</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Student 3</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Student 4</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Student 5</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Student 6</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Student 7</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Student 8</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Student 9</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Student 10</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Correct Answer</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Total Correct</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Total Incorrect</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Most Chosen Incorrect Answer</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Analysis and Potential Misconceptions</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Pedagogical Follow-up Steps</th>
            </tr>
          </thead>
          <tbody>
            {studentResponses.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.questionNo}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.student1}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.student2}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.student3}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.student4}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.student5}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.student6}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.student7}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.student8}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.student9}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.student10}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.correctAnswer}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.totalCorrect}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.totalIncorrect}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.mostChosenIncorrect}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.analysis}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.pedagogicalFollowUp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h4 className="text-lg font-semibold mb-2">Reflection Questions My Responses</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mb-4">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Reflection Questions</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">My Responses</th>
            </tr>
          </thead>
          <tbody>
            {reflectionQuestions.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.question}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.response}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h4 className="text-lg font-semibold mb-2">Benefits of the analysis spreadsheet:</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mb-4">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Benefits</th>
            </tr>
          </thead>
          <tbody>
            {benefits.map((benefit, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-2">{`${idx + 1}. ${benefit}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h4 className="text-lg font-semibold mb-2">Drawbacks of the Analysis Spreadsheet:</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mb-4">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Drawbacks</th>
            </tr>
          </thead>
          <tbody>
            {drawbacks.map((drawback, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-2">{`${String.fromCharCode(97 + idx)}. ${drawback}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h4 className="text-lg font-semibold mb-2">Concerns:</h4>
      <p className="mb-4">
        The data is limited to a small sample size, meaning trends may not be entirely representative of the larger student population. Variations in individual learning styles, prior knowledge, and external factors affecting student performance are not accounted for. Thus, conclusions should be interpreted cautiously.
      </p>

      <h4 className="text-lg font-semibold mb-2">Use of the analysis for future purposes:</h4>
      <p className="mb-4">
        This analysis can guide future lesson planning and thus allows teachers to reinforce weak areas and to introduce corrective measures for common misconceptions. It can also be used for longitudinal tracking of student progress and curriculum adjustments.
      </p>

      <h4 className="text-lg font-semibold mb-2">Item Difficulty (P-Value)</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mb-4">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Question No.</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Item Difficulty (P-Value)</th>
            </tr>
          </thead>
          <tbody>
            {pValues.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.questionNo}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.pValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Project 3 Table Component
const Project3DetailsTable = () => {
  const costAnalysis = [
    { sn: 1, technology: "Smartboard/Projector", estimatedCost: "$500–$2,000", justification: "Enhances visual learning" },
    { sn: 2, technology: "Tablets/Laptops", estimatedCost: "$100–$300 per device", justification: "Provides interactive learning" },
    { sn: 3, technology: "Kahoot!", estimatedCost: "Free (basic) or $3–$10/month (premium)", justification: "Engaging assessments" },
    { sn: 4, technology: "Printed Worksheets", estimatedCost: "$10–$20 per term", justification: "Alternative for students without access to tech" },
  ];

  const peerReviewRubric = [
    { criteria: "Use of Digital Tools", excellent: "Effectively integrates multiple tech tools", good: "Uses some digital tools effectively", needsImprovement: "Uses minimal digital tools", notAttempted: "No tech integration" },
    { criteria: "Student Engagement", excellent: "Actively participates using technology", good: "Participates with some guidance", needsImprovement: "Minimal participation", notAttempted: "No student engagement" },
    { criteria: "Accessibility Considerations", excellent: "Provides alternatives for students with limited access", good: "Mentions accessibility but lacks clear solutions", needsImprovement: "Limited or no consideration of accessibility", notAttempted: "No accessibility considerations" },
    { criteria: "Assessment Using Technology", excellent: "Uses digital assessments effectively", good: "Uses some tech-based assessments", needsImprovement: "Minimal tech-based assessment", notAttempted: "No tech-based assessment" },
  ];

  return (
    <div className="text-gray-800 dark:text-gray-300 whitespace-pre-line leading-relaxed">
      <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4">Project 3: Tech-Enhanced Lesson Plan</h3>

      <h4 className="text-lg font-semibold mb-2">Lesson Plan: Enhancing Instructional Environments Using Technology</h4>
      <p className="mb-2"><strong>Subject:</strong> Science</p>
      <p className="mb-2"><strong>Unit:</strong> Understanding How Plants Grow and Survive</p>
      <p className="mb-2"><strong>Class:</strong> Grade 3</p>
      <p className="mb-4"><strong>Topic:</strong> Identifying the Basic Parts of a Plant and Their Functions</p>

      <h4 className="text-lg font-semibold mb-2">Objective</h4>
      <p className="mb-4">
        By the end of the lesson, students will be able to:<br/>
        1. Identify the basic parts of a plant (root, stem, leaves, flowers).<br/>
        2. Explain the function of each part.<br/>
        3. Engage with digital tools to enhance their understanding of plant structures.
      </p>

      <h4 className="text-lg font-semibold mb-2">Technology Integration in the Lesson</h4>
      <p className="mb-2"><strong>Materials/Technology/Equipment:</strong></p>
      <ul className="list-disc list-inside mb-4">
        <li>Kahoot! For online quizzes.</li>
        <li>Smartboard or Projector for interactive presentations.</li>
        <li>Tablets or Laptops for plant simulation activities</li>
      </ul>

      <p className="mb-2"><strong>Anticipatory Set (Engagement-10 mins)</strong></p>
      <ul className="list-disc list-inside mb-4">
        <li>The teacher uses a Smartboard/Projector to display high-quality images and animations of plants.</li>
        <li>The teacher plays a short interactive video (from YouTube/educational app) showing time-lapse growth of a plant.</li>
        <li>The teacher asks students: What do you notice about these plants?</li>
      </ul>

      <p className="mb-2"><strong>Tailored Instruction (Exploration 15 mins)</strong></p>
      <ol className="list-decimal list-inside mb-4">
        <li><strong>Digital Learning:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>The teacher uses a tablet/laptop with a virtual plant model (through an interactive drag-and-drop activity) to match plant parts and their functions.</li>
          </ul>
        </li>
        <li><strong>Small Group Activity – Digital Quiz:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Each group uses Kahoot! to answer questions about plant parts.</li>
            <li>The teacher encourages students to discuss their answers before submitting.</li>
          </ul>
        </li>
      </ol>

      <p className="mb-2"><strong>Misconceptions (Clarification – 5 mins)</strong></p>
      <ul className="list-disc list-inside mb-4">
        <li>The teacher guides students through an online simulation where they can explore plant parts at different growth stages.</li>
      </ul>

      <p className="mb-2"><strong>Checks for Understanding (Formative Assessment -5 mins)</strong></p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Digital Matching Game:</strong> Students take a self-paced online quiz to test knowledge using Kahoot.</li>
        <li>Students use Google Classroom to submit a digital drawing or labeled image of a plant.</li>
        <li><strong>Alternative:</strong> Draw on paper and take a photo to upload.</li>
      </ul>

      <p className="mb-2"><strong>Homework</strong></p>
      <ul className="list-disc list-inside mb-4">
        <li>Students take a photo of a plant at home, upload it to Google Classroom, and record a short explanation of its parts</li>
      </ul>

      <h4 className="text-lg font-semibold mb-2">Teacher Reflection: Considerations and Cost Analysis</h4>
      <p className="mb-2"><strong>Considerations for Technology Use:</strong></p>
      <ol className="list-decimal list-inside mb-4">
        <li><strong>Student Access:</strong> Some students may not have access to digital devices or internet at home.<br/>
          Solution: Teacher should provide printed worksheets as alternatives.</li>
        <li><strong>Engagement & Effectiveness:</strong> Interactive tools like Kahoot! make learning more engaging, but tech failures can occur.<br/>
          Solution: The teacher should have a backup plan (using real plants & charts).</li>
        <li><strong>Teacher Readiness:</strong> The teacher must be familiar with the technology to ensure smooth implementation.</li>
      </ol>

      <p className="mb-2"><strong>Cost Analysis of Technology Tools:</strong></p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mb-4">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 p-2">S/N</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Technology</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Estimated Cost</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Justification</th>
            </tr>
          </thead>
          <tbody>
            {costAnalysis.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.sn}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.technology}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.estimatedCost}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.justification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h4 className="text-lg font-semibold mb-2">Final Thoughts</h4>
      <p className="mb-4">
        There is an urgent need to integrate technology into the lesson in order to learning more engaging and effective. However, a teacher should have balanced approach mindset by using both digital and traditional methods to ensure that all students can participate, regardless of their access to technology. Further, while technology enhances engagement and understanding, it requires proper planning and backup options for students with limited access. Free or low-cost tools can be used to minimize expenses.
      </p>

      <h4 className="text-lg font-semibold mb-2">Peer Review Rubric: Evaluating Technology Integration</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mb-4">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Criteria</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Excellent (4)</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Good (3)</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Needs Improvement (2)</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Not Attempted (1)</th>
            </tr>
          </thead>
          <tbody>
            {peerReviewRubric.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.criteria}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.excellent}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.good}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.needsImprovement}</td>
                <td className="border border-gray-300 dark:border-gray-600 p-2">{row.notAttempted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Project 1: Item Analysis",
    cover: project1Img,
    prompt: `
      
      Conduct an item analysis by using a pre-existing or self-generated multiple-choice assessment (limit to four [4] answer choices) related to your subject area. You should ensure you have at least five (5) questions and ten (10) respondents, in order to analyze the data.
    `,
    reflection: `
      
      My Reflections on Project 1
      Carrying out the item analysis was an insightful exercise that deepened my understanding of how assessments function beyond just scoring. By analyzing student responses to the multiple-choice questions, I was able to identify which questions were effective in distinguishing between high-performing and low-performing students. This process emphasized the importance of crafting clear and purposeful assessment items that align well with learning objectives.
      Further, the exercise shed light on distractor effectiveness. Through analyzing the incorrect answer choices selected by the respondents, I noticed patterns in students’ misconceptions. This is particularly useful for informing future instruction, as it highlights areas where learners struggle and may need further clarification or reinforcement. For example, questions with distractors that no respondent selected suggest those options may not be plausible and need revision. From a data perspective, organizing responses and calculating difficulty and discrimination indices helped me appreciate the value of quantitative tools in education. Using Excel not only made it easier to tabulate and analyze the data but also helped me visualize trends that might not have been evident otherwise. This step brought a more scientific and data-driven approach to classroom assessment.
      In addition, the task also reinforced the importance of fairness and reliability in assessments. Some questions that were either too easy or too hard did not help in measuring student ability effectively. This realization calls for a balanced level of difficulty across items to ensure that the test serves as a true reflection of what students know and can do.
    `,
    detailsComponent: <Project1DetailsTable />
  },
  {
    title: "Project 2: Video Tutorial - Planting a Seed",
    cover: project2Img,
    prompt: `
      
      Create a maximum four-minute or less (but more than three minutes) video tutorial that demonstrates the instructions/process from your subject area so that a viewer can learn a small skill. Include a text-based “Intention” statement that explains the goal of the product and the benefit it will have for student learning.
    `,
     video: "https://youtu.be/Oamfs71uk9E",
    reflection: `
      
      My Reflections on Project 2
      Creating the video titled "Planting a Seed" was an enriching experience that combined visual storytelling with educational content. The hands-on demonstration offered students a relatable and concrete way to understand the process of planting and nurturing a seed, which is fundamental to the Science curriculum at the primary level. Through this audiovisual format, abstract concepts were brought to life, making the learning process more engaging and memorable for young learners. The use of real-life materials and step-by-step actions in the video helped to bridge the gap between theoretical instruction and practical application. Children were able to see not just the "what" but the "how" of planting, which supports experiential learning. By showing the sequence clearly—from preparing the soil to planting and watering the seed—the video provided a model that students could replicate at home or in school, reinforcing independent learning. Integrating video into instruction also fostered technological engagement. 
      Further, visual learning is particularly effective for children in Grade 2-3, as it caters to their developmental stage and attention span. The pacing of the video and the clarity of the actions made it easy to follow, and the calm tone helped sustain focus. This resource can be paused, replayed, and used repeatedly for revision, which gives it strong value as a learning aid. 
      Finally, the video highlighted the role of digital tools in extending learning beyond the classroom. For students who may not have access to a garden or live demonstrations, this resource serves as a substitute experience. Moreover, the flexibility of using video content allows for inclusive teaching—students can learn at their own pace and in their own environment, regardless of location.
    `
  },
  {
    title: "Project 3: Tech-Enhanced Lesson Plan",
    cover: project3Img,
    prompt: `
      
      Modify an existing lesson plan (or create a new one) to enhance the learning experience using technology that is aligned with your subject area. Include a teacher-oriented reflection that addresses the considerations and “cost analysis” of the technology for the lesson, as well as peer review another classmate’s lesson plan relating to the “Technology” rubric domain.
    `,
    reflection: `
      
      My Reflections on Project 3
      This project offered a practical opportunity to integrate technology into a real classroom setting, specifically tailored to a Grade 3 Science lesson on plant parts and their functions. Developing the lesson plan made me reflect on how digital tools can support learning objectives more interactively and meaningfully. Incorporating devices such as Smartboards, tablets, and applications like Kahoot!, the lesson was designed to engage students visually and kinesthetically, promoting active participation and better retention of concepts.
      A major highlight of the task was the thoughtful inclusion of anticipatory and exploratory activities. The use of time-lapse videos and virtual plant models not only captured student attention but also provided opportunities for differentiated learning. These tools made abstract concepts more concrete and accessible, particularly for visual and tactile learners. Additionally, the digital quiz and simulation reinforced learning while fostering collaboration and discussion among students.
      Another significant part of this task was addressing potential challenges related to access and equity. By acknowledging that some students may lack digital devices or internet access at home, and proposing printed worksheets as alternatives, the lesson demonstrated inclusivity. This consideration reflects an important principle in technology integration—ensuring that no student is left behind regardless of their socioeconomic background or technological resources.
      The cost analysis section added a layer of realism and professional planning to the task. Evaluating the financial implications of using specific tools (e.g., Smartboards, laptops, Kahoot! subscriptions) helped me understand the budgeting and sustainability concerns schools often face. It also highlighted the value of free or low-cost digital resources and the need for practical backup plans in case of technical issues during lessons.
    `,
    detailsComponent: <Project3DetailsTable />
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewDetails, setViewDetails] = useState(false);

  return (
    <div className="bg-[#f9f9f9] dark:bg-[#0f0f0f] min-h-screen relative">
      <Navbar />
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:text-6xl sm:text-5x1 font-extrabold text-center text-[#0a2540] dark:text-white mt-20 mb-16"
        >
          My   Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group rounded-xl overflow-hidden bg-white dark:bg-[#1a1a1a] shadow-xl cursor-pointer relative"
              whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                setSelectedProject(project);
                setViewDetails(false);
              }}
            >
              <img src={project.cover} alt={project.title} className="w-full h-60 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0a2540] dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm whitespace-pre-line leading-relaxed">
                  {project.prompt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reflection Modal */}
        <AnimatePresence>
          {selectedProject && !viewDetails && (
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
                className="bg-white dark:bg-[#1a1a1a] w-full max-w-[95%] md:max-w-[95%] max-h-[90vh] p-8 rounded-xl relative overflow-y-auto"
                style={{ paddingTop: "80px" }}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 p-2 rounded-full z-10"
                >
                  ✕
                </button>
                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-800 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                  {selectedProject.reflection}
                </p>
                <button
                  onClick={() => setViewDetails(true)}
                  className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
                >
                  View Details
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && viewDetails && (
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
                className="bg-white dark:bg-[#1a1a1a] w-full max-w-[95%] md:max-w-[95%] max-h-[90vh] p-8 rounded-xl overflow-y-auto relative"
                style={{ paddingTop: "80px" }}
              >
                <button
                  onClick={() => setViewDetails(false)}
                  className="absolute top-4 left-4 text-white bg-black hover:bg-gray-800 p-2 rounded-full z-10"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 p-2 rounded-full z-10"
                >
                  ✕
                </button>
                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                  {selectedProject.title} – Full View
                </h3>
                {selectedProject.video ? (
                  <iframe
                    src="https://www.youtube.com/embed/Oamfs71uk9E?controls=0&modestbranding=1&rel=0&showinfo=0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full rounded-xl mb-6"
                    style={{ height: "auto", aspectRatio: "16/9" }}
                  />
                ) : selectedProject.detailsComponent ? (
                  selectedProject.detailsComponent
                ) : (
                  <img
                    src={selectedProject.cover}
                    alt={selectedProject.title}
                    className="rounded-xl w-full mb-6"
                  />
                )}
                {!selectedProject.detailsComponent && (
                  <p className="text-gray-800 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                    {selectedProject.reflection}
                  </p>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <Footer />
    </div>
  );
}