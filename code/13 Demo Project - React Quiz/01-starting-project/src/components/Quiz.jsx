import { useState } from 'react';
import QUESTION from '../questions';

export default function Quiz() {
  // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswer((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  return (
    <div id='quiz'>
      <div id='question'>
        <h2>{QUESTION[activeQuestionIndex].text}</h2>
        <ul id='answers'>
          {QUESTION[activeQuestionIndex].answers.map((answer)=>(
            <li key={answer} className='answer'>
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
