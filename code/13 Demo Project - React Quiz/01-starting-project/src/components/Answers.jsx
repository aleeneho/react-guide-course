import { useRef } from 'react';

export default function Answers({answers, selectedAnswer, answerState, onSelect }) {
  const shuffledAnswers = useRef()

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...QUESTION[activeQuestionIndex].answers].sort(() => Math.random() - 0.5);
    };

  return (
    <ul id='answers'>
    {shuffledAnswers.current.map((answer)=> {
      const isSelected = userAnswer[userAnswer.length - 1] === answer;
      let cssClasses = '';

      if (answerState === 'answered' && isSelected) {
        cssClasses = 'selected';
      }

      if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
        cssClasses = answerState;
      }

      return (
      <li key={answer} className='answer'>
        <button onClick={() => onSelect(answer)} className={cssClasses}>
          {answer}
        </button>
      </li>
      )
    })}
  </ul>
  )
}
