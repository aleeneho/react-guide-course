import { useState } from 'react';
import QUESTION from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer';

export default function Quiz() {
  // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;
  const quizIsComplete = activeQuestionIndex === QUESTION.length

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswer((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  if (quizIsComplete) {
    return (
      <div id='summary'>
        <img src={quizCompleteImg} alt='Trophy icon'/>
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledAnswer = [...QUESTION[activeQuestionIndex].answers].sort(() => Math.random() - 0.5);

  return (
    <div id='quiz'>
      <div id='question'>
        <QuestionTimer timeout={10000} onTimeout={() => handleSelectAnswer(null)} />
        <h2>{QUESTION[activeQuestionIndex].text}</h2>
        <ul id='answers'>
          {shuffledAnswer.map((answer)=>(
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
