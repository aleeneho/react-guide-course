import { useState, useCallback } from 'react';

import quizCompleteImg from '../assets/quiz-complete.png'
import QUESTION from '../questions';
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';

export default function Quiz() {

  const [answerState, setAnswerState] = useState('');
  // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  // const [shuffledAnswer, setShuffledAnswer] = useState([]);

  const activeQuestionIndex =
  answerState === '' ? userAnswer.length: userAnswer.length - 1;

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



  return (
    <div id='quiz'>
      <div id='question'>
        <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
        <h2>{QUESTION[activeQuestionIndex].text}</h2>
        <Answers
          key = {activeQuestionIndex}
          answers={QUESTION[activeQuestionIndex].answers}
          selectedAnswer={userAnswer[userAnswers.length - 1]}
          answersState={answerState}
          onSelect = {handleSelectAnswer}
         />
      </div>
    </div>
  )
}
