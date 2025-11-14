import React, { useState } from 'react';
import { EnglishSentence } from './EnglishSentence.jsx';

const questionBank = [
  {
    english: 'What is your name?',
    rightAnswers: ['¿Cómo', 'te', 'llamas', '?'],
    choices: ['¿Cómo', 'te', 'llamas', 'soy', 'estás', '?', 'él'],
  },
  {
    english: 'Where do you live?',
    rightAnswers: ['¿Dónde', 'vives', '?'],
    choices: ['¿Dónde', 'vives', 'vives', 'está', 'tú', '?', 'soy'],
  },
  {
    english: 'Where is the school?',
    rightAnswers: ['¿Dónde', 'está', 'la', 'escuela', '?'],
    choices: ['¿Dónde', 'está', 'la', 'escuela', 'soy', 'tú', '?'],
  },
  {
    english: 'What do you eat?',
    rightAnswers: ['¿Qué', 'comes', '?'],
    choices: ['¿Qué', 'comes', 'tú', 'soy', 'vas', '?', 'ella'],
  },
  {
    english: 'What do you want?',
    rightAnswers: ['¿Qué', 'quieres', '?'],
    choices: ['¿Qué', 'quieres', 'tú', 'soy', '?', 'vas', 'ella'],
  },
  {
    english: 'What do you do?',
    rightAnswers: ['¿Qué', 'haces', '?'],
    choices: ['¿Qué', 'haces', 'tú', 'soy', '?', 'vas', 'ella'],
  },
  {
    english: 'Who are you?',
    rightAnswers: ['¿Quién', 'eres', 'tú', '?'],
    choices: ['¿Quién', 'eres', 'tú', 'soy', '?', 'estás', 'ella'],
  },
  {
    english: 'What is this?',
    rightAnswers: ['¿Qué', 'es', 'esto', '?'],
    choices: ['¿Qué', 'es', 'esto', 'soy', 'estás', '?', 'tú'],
  },
  {
    english: 'What do you study?',
    rightAnswers: ['¿Qué', 'estudias', '?'],
    choices: ['¿Qué', 'estudias', 'tú', 'soy', 'vas', '?', 'ella'],
  },
];

// ...existing styles...
const boxesStyle = {
  display: 'flex',
  gap: '10px',
  justifyContent: 'center',
  marginBottom: '30px',
};

const boxStyle = {
  width: '120px',
  height: '50px',
  border: '2px solid #2B4E6E',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const buttonStyle = {
  backgroundColor: '#FFFFE0',
  padding: '10px',
  border: '1.5px solid #FFD580',
  borderRadius: '8px',
  flexWrap: 'wrap',
  cursor: 'pointer',
  fontSize: '18px',
  color: '#ff5733',
  fontWeight: 'bold',
};

const resetButton = {
  backgroundColor: '#FFA07A',
  padding: '10px',
  border: '2px solid #FF6F61',
  borderRadius: '8px',
  flexWrap: 'wrap',
  cursor: 'pointer',
  fontSize: '16px',
  color: '#8B0000',
  fontWeight: 'bold',
};

const checkButton = {
  backgroundColor: '#FFD580',
  padding: '10px',
  border: '2px solid #E6BF73',
  borderRadius: '8px',
  flexWrap: 'wrap',
  cursor: 'pointer',
  fontSize: '16px',
  color: '#B27300',
  fontWeight: 'bold',
};

const nextButton = {
  backgroundColor: '#90EE90',
  padding: '10px',
  border: '2px solid #76C776',
  borderRadius: '8px',
  flexWrap: 'wrap',
  cursor: 'pointer',
  fontSize: '16px',
  color: '#155724',
  fontWeight: 'bold',
};

const returnButton = {
  backgroundColor: '#2B4E6E',
  padding: '8px',
  border: '3px solid #2B4E6E ',
  borderRadius: '8px',
  flexWrap: 'wrap',
  cursor: 'pointer',
  fontSize: '14px',
  color: '#FFFFFF',
  fontWeight: 'bold',
  position: 'fixed',
  top: '72px',
  left: '72px',
  zIndex: 1000,
};

function getRandomQuestion(excludeEnglish) {
  const others = questionBank.filter(s => s.english !== excludeEnglish);
  if (others.length === 0) return questionBank[Math.floor(Math.random() * questionBank.length)];
  return others[Math.floor(Math.random() * others.length)];
}

export function Question(props) {
  const { onReturn } = props;
  const initial = getRandomQuestion();
  const [currentQuestion, setCurrentQuestion] = useState(initial);
  const [userInput, setUserInput] = useState(initial.rightAnswers.map(() => ''));
  const [isFull, setIsFull] = useState(false);

  const handlePickWord = (word) => {
    if (userInput.indexOf('') !== -1) {
      const id = userInput.indexOf('');
      const newInput = [
        ...userInput.slice(0, id),
        word,
        ...userInput.slice(id + 1),
      ];
      setUserInput(newInput);
      setIsFull(newInput.indexOf('') === -1);
    }
  };

  const handleClearSlot = (index) => {
    const newInput = [...userInput];
    newInput[index] = '';
    setUserInput(newInput);
    setIsFull(newInput.indexOf('') === -1);
  };

  const handleReset = () => {
    setUserInput(currentQuestion.rightAnswers.map(() => ''));
    setIsFull(false);
  };

  const handleCheck = () => {
    setIsFull(userInput.indexOf('') === -1);
  };

  const handleNext = () => {
    const next = getRandomQuestion(currentQuestion.english);
    setCurrentQuestion(next);
    setUserInput(next.rightAnswers.map(() => ''));
    setIsFull(false);
  };

  return (
    <div>
      <button style={returnButton} onClick={onReturn}> ⬅ </button>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h3
          style={{
            color: isFull
              ? userInput.every((val, index) => val === currentQuestion.rightAnswers[index])
                ? '#28A745'
                : '#DC3545'
              : 'inherit',
            whiteSpace: 'pre-line',
          }}
        >
          {isFull
            ? userInput.every((val, index) => val === currentQuestion.rightAnswers[index])
              ? '🎉Great job! You nailed it! \n Grammar Point: Interrogative + verb + rest.'
              : "🔄Almost there. Please click ‘Reset’ and give it another shot. \n Grammar Point: Interrogative + verb + rest."
            : ''}
        </h3>
        <EnglishSentence sentence={currentQuestion.english} />
        <div style={ boxesStyle }>
          {userInput.map((input, index) => (
            <div
              style={boxStyle}
              key={index}
              onClick={() => handleClearSlot(index)}
            >
              {input}
            </div>
          ))}
        </div>
        <div style={boxesStyle}>
          {currentQuestion.choices.map((word, index) => (
            <button
              key={index}
              style={buttonStyle}
              onClick={() => handlePickWord(word)}
            >
              {word}
            </button>
          ))}
        </div>
        <div style={boxesStyle}>
          <button style={resetButton} onClick={handleReset}>
            Reset
          </button>
          <button style={checkButton} onClick={handleCheck}> Check </button>
          <button style={nextButton} onClick={handleNext}> Next </button>
        </div>
      </div>
    </div>
  );
}
