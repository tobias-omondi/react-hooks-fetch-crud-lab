
// import React from "react";
// import React, { useState, useEffect } from "react";

// function QuestionItem({ question , onDelete }) {
//   const { id, prompt, answers, correctIndex } = question;

//   const options = answers.map((answer, index) => (
//     <option key={index} value={index}>
//       {answer}
//     </option>
//   ));

// const handleDelete = () => {
//   onDelete(id)
// }


//   return (
//     <li>
//       <h4>Question {id}</h4>
//       <h5>Prompt: {prompt}</h5>
//       <label>
//         Correct Answer:
//         <select defaultValue={correctIndex}>{options}</select>
//       </label>
//       <button onClick={handleDelete}>Delete Question</button>
//     </li>
//   );
// }
// function QuestionList() {
//   const [question , setQuestions] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:4000/questions")
//       .then((response) => response.json())
//       .then((data) => setQuestions(data))
//       .catch((error) => console.error("Error fetching questions:", error));
//   }, []); 
//  const response = await
// }

// export default QuestionItem;