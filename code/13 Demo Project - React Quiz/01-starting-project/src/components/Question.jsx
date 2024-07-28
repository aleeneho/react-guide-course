import Answers from './Answers';
import QuestionTimer from './QuestionTimer';

export default function Question({question, }) {
  return (
    <div id='question'>
        <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
        <h2>{QUESTION[activeQuestionIndex].text}</h2>
        <Answers
          key = {activeQuestionIndex}
          answers={QUESTION[activeQuestionIndex].answers}
          selectedAnswer={userAnswer[userAnswer.length - 1]}
          answersState={answerState}
          onSelect = {handleSelectAnswer}
         />
      </div>
  )
}
