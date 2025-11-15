import React, { useState } from 'react';
import { EnglishSentence } from './EnglishSentence.jsx';

const sentenceBank = [
  {
    english: 'You drink milk.',
    rightAnswers: ['Tú', 'bebes', 'leche'],
    choices: ['Tú', 'bebes', 'leche', 'soy', 'estás', 'agua'],
    grammarPoint: 'Beber + noun = to drink something.',
  },
  {
    english: 'She studies Spanish.',
    rightAnswers: ['Ella', 'estudia', 'español'],
    choices: ['Ella', 'estudia', 'español', 'soy', 'bebes', 'voy'],
    grammarPoint: 'Estudiar + subject = to study a subject.',
  },
  {
    english: 'You go to the park.',
    rightAnswers: ['Tú', 'vas', 'al', 'parque'],
    choices: ['Tú', 'vas', 'al', 'parque', 'soy', 'bebes', 'ella'],
    grammarPoint: 'Ir + a + (article) + lugar = going to a place.',
  },
  {
    english: 'He lives in Madrid.',
    rightAnswers: ['Él', 'vive', 'en', 'Madrid'],
    choices: ['Él', 'vive', 'en', 'Madrid', 'tú', 'voy', 'somos'],
    grammarPoint: 'Vivir + en + lugar = to live in a place.',
  },
  {
    english: 'You are tired.',
    rightAnswers: ['Tú', 'estás', 'cansado'],
    choices: ['Tú', 'estás', 'cansado', 'soy', 'ella', 'bebes'],
    grammarPoint: 'Estar + adjective = to describe a temporary state or condition.',
  },
  {
    english: 'He is happy.',
    rightAnswers: ['Él', 'está', 'feliz'],
    choices: ['Él', 'está', 'feliz', 'soy', 'vas', 'tú'],
    grammarPoint: 'Estar + adjective = to express emotion or temporary feeling.',
  },
  {
    english: 'I want water.',
    rightAnswers: ['Yo', 'quiero', 'agua'],
    choices: ['Yo', 'quiero', 'agua', 'vas', 'tú', 'somos'],
    grammarPoint: 'Querer + noun = to want something.',
  },
  {
    english: 'She goes to the beach.',
    rightAnswers: ['Ella', 'va', 'a', 'la', 'playa'],
    choices: ['Ella', 'va', 'a', 'la', 'playa', 'soy', 'bebes', 'tú'],
    grammarPoint: 'Ir + a + (article) + lugar = going to a place.',
  },
  {
    english: 'She cooks rice.',
    rightAnswers: ['Ella', 'cocina', 'arroz'],
    choices: ['Ella', 'cocina', 'arroz', 'tú', 'soy', 'vamos'],
    grammarPoint: 'Cocinar + noun = to cook something.',
  },
];

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

// arr[0]
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

function getRandomSentence(excludeEnglish) {
  const others = sentenceBank.filter(s => s.english !== excludeEnglish);
  if (others.length === 0) return sentenceBank[Math.floor(Math.random() * sentenceBank.length)];
  return others[Math.floor(Math.random() * others.length)];
}

export function Statement(props) {
  const { onReturn } = props;
  const initial = getRandomSentence();
  const [currentSentence, setCurrentSentence] = useState(initial);
  const [userInput, setUserInput] = useState(initial.rightAnswers.map(() => ''));
  const [showFeedback, setShowFeedback] = useState(false);

  const handlePickWord = (word) => {
    if (userInput.indexOf('') !== -1) {
      const id = userInput.indexOf('');
      const newInput = [
        ...userInput.slice(0, id),
        word,
        ...userInput.slice(id + 1),
      ];
      setUserInput(newInput);
      // do not show feedback automatically when slots fill
      setShowFeedback(false);
    }
  };

  const handleClearSlot = (index) => {
    const newInput = [...userInput];
    newInput[index] = '';
    setUserInput(newInput);
    setShowFeedback(false);
  };

  const handleReset = () => {
    setUserInput(currentSentence.rightAnswers.map(() => ''));
    setShowFeedback(false);
  };

  const handleCheck = () => {
    // show feedback only after user explicitly clicks Check
    setShowFeedback(true);
  };

  const handleNext = () => {
    const next = getRandomSentence(currentSentence.english);
    setCurrentSentence(next);
    setUserInput(next.rightAnswers.map(() => ''));
    setShowFeedback(false);
  };

  return (
    <div>
      <button style={returnButton} onClick={onReturn}> ⬅ </button>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h3
          style={{
            color: showFeedback
              ? userInput.every((val, index) => val === currentSentence.rightAnswers[index])
                ? '#28A745'
                : '#DC3545'
              : 'inherit',
            whiteSpace: 'pre-line',
          }}
        >
          {showFeedback
            ? userInput.every((val, index) => val === currentSentence.rightAnswers[index])
              ? ('🎉Great job! You nailed it! \n Grammar point: ' + currentSentence.grammarPoint)
              : ("🔄Almost there. Please click ‘Reset’ and give it another shot. \n Grammar Point: " + currentSentence.grammarPoint)
            : ''}
        </h3>
        <EnglishSentence sentence={currentSentence.english} />
        <div style={boxesStyle}>
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
          {currentSentence.choices.map((word, index) => (
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

// setUserInput([word, ...userInput.slice(wordCount + 1)])

// <div>
//   <h1> {counter} </h1>
//   <button onClick={() => {setCounter(counter + 1)}}> add </button>
// </div>
