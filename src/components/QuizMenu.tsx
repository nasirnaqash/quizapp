import { IQuiz } from "../types";

type Props = IQuiz & {
  onAnswer: (isCorrectAnswer: boolean) => void;
};

const QuizMenu = ({ question, answer, options, onAnswer }: Props) => {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option) => {
          const selectOption = () => onAnswer(option === answer);
          return (
            <button key={option} onClick={selectOption}>
              {option}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default QuizMenu;
