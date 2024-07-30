import './App.css';
import MathOperation from './MathOperation';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOperation(operations) {
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
}

function MathSumGenerator(config) {
  const {
    firstNumber: { start: firstStart, end: firstEnd },
    secondNumber: { start: secondStart, end: secondEnd },
    operation,
    count
  } = config;

  const generatedMathSums = [];

  for (let i = 0; i < count; i++) {
    const firstNumber = getRandomNumber(firstStart, firstEnd);
    const secondNumber = getRandomNumber(secondStart, secondEnd);
    const selectedOperation = getRandomOperation(operation);

    generatedMathSums.push({
      firstNumber,
      operation: selectedOperation,
      secondNumber
    });
  }

  return generatedMathSums;
}

function App() {
  return (
    <div
      style={{
        gap: 100,
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      {MathSumGenerator({
        firstNumber: { start: 2, end: 6 },
        secondNumber: { start: 2, end: 6 },
        operation: ['+'],
        count: 40 // Adjust the count as needed
      }).map((v, i) => {
        return <MathOperation key={i} {...v}></MathOperation>;
      })}

      {MathSumGenerator({
        firstNumber: { start: 5, end: 9 },
        secondNumber: { start: 5, end: 9 },
        operation: ['+'],
        count: 100 // Adjust the count as needed
      }).map((v, i) => {
        return <MathOperation key={i} {...v}></MathOperation>;
      })}

      {MathSumGenerator({
        firstNumber: { start: 11, end: 99 },
        secondNumber: { start: 10, end: 10 },
        operation: ['+'],
        count: 20 // Adjust the count as needed
      }).map((v, i) => {
        return <MathOperation key={i} {...v}></MathOperation>;
      })}
      {MathSumGenerator({
        firstNumber: { start: 11, end: 99 },
        secondNumber: { start: 20, end: 20 },
        operation: ['+'],
        count: 20 // Adjust the count as needed
      }).map((v, i) => {
        return <MathOperation key={i} {...v}></MathOperation>;
      })}

      {MathSumGenerator({
        firstNumber: { start: 10, end: 99 },
        secondNumber: { start: 10, end: 99 },
        operation: ['+'],
        count: 200 // Adjust the count as needed
      }).map((v, i) => {
        return <MathOperation key={i} {...v}></MathOperation>;
      })}

      {MathSumGenerator({
        firstNumber: { start: 11, end: 19 },
        secondNumber: { start: 2, end: 9 },
        operation: ['-'],
        count: 50 // Adjust the count as needed
      }).map((v, i) => {
        return <MathOperation key={i} {...v}></MathOperation>;
      })}

      {MathSumGenerator({
        firstNumber: { start: 51, end: 99 },
        secondNumber: { start: 10, end: 50 },
        operation: ['-'],
        count: 200 // Adjust the count as needed
      }).map((v, i) => {
        return <MathOperation key={i} {...v}></MathOperation>;
      })}
    </div>
  );
}

export default App;
