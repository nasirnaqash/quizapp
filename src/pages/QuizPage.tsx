import { useState } from "react";
import QuizData from "../db.json";
import { shuffle } from "../utils/helpers";
import QuizMenu from "../components/QuizMenu";

const shuffledQuizes = shuffle(QuizData);

const QuizPage = () => {
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);

  const getNextQuiz = () => {
    setQuizIndex((prev) => {
      const nextIndex = prev + 1;
      if (nextIndex <= shuffledQuizes.length - 1) {
        return nextIndex;
      }
      return prev;
    });
  };

  const currentQuiz = shuffledQuizes[quizIndex];
  const isLastItem = quizIndex === shuffledQuizes.length - 1;

  const onAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 10);
    }
    getNextQuiz();
  };

  return (
    <section>
      <h2>Quizes </h2>
      {!isLastItem ? <QuizMenu {...currentQuiz} onAnswer={onAnswer} /> : score}
    </section>
  );
};

export default QuizPage;
