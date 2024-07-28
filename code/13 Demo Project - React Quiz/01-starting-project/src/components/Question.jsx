import { useState} from 'react';

import Answers from './Answers';
import QuestionTimer from './QuestionTimer';
import QUESTION from '../questions';

export default function Question({
  questionIndex,
  // questionText,
  // answers,
  onSelectAnswer,
  // selectedAnswer,
  // answerState,
  onSkipAnswer}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: null,
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer){
    setAnswer ({
      selectedAnswer: answer,
      isCorrect: null,
    })

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTION[questionIndex].answers[0] === answer,
      })

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = '';

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if ( answer.selectedAnswer) {
    answerState = 'answered';
  }

  return (
    <div id='question'>
        <QuestionTimer
          // key={activeQuestionIndex}
          key = {timer}
          timeout={timer}
          onTimeout={answer.selectedAnswer === null ? onSkipAnswer : null}
          mode ={answerState} />
        <h2>{QUESTION[questionIndex].text}</h2>
        <Answers
          // key = {activeQuestionIndex}
          answers={QUESTION[questionIndex].answers}
          selectedAnswer={answer.selectedAnswer}
          answerState={answerState}
          onSelect = {handleSelectAnswer}
         />
      </div>
  )
}
