import { useState, useCallback } from 'react';

import QUESTION from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer';

export default function Quiz() {
  const [answerState, setAnswerState] = useState('');
  // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex =
  asnwer === '' ? userAnswer.length: userAnswer.length - 1;

  const quizIsComplete = activeQuestionIndex === QUESTION.length

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer

  ) {
    setAnswerState('answered')

    setUserAnswer((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });

    setTimeout(() => {
      if (selectedAnswer === QUESTION[activeQuestionIndex].answers[0]) {
        setAnswerState('correct');
      } else {
        setAnswerState('wrong');
      }

      setTimeout(() => {
        setAnswerState
      }, 2000)
    }, 1000);
  }, [activeQuestionIndex]);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null), [handleSelectAnswer]
  );

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
        <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
        <h2>{QUESTION[activeQuestionIndex].text}</h2>
        <ul id='answers'>
          {shuffledAnswer.map((answer)=> {
            const isSelected = userAnswer[userAnswer.length - 1] === answer;
            let cssClasses = '';

            if (answerState === 'answered' && isSelected) {
              cssClass = 'selected';
            }

            if (answerState === 'correct' || answerState === 'wrong') && isSelected {
              cssClasses = answerState;
            }

            return (
            <li key={answer} className='answer'>
              <button onClick={() => handleSelectAnswer(answer)} className={cssClasses}>
                {answer}
              </button>
            </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
