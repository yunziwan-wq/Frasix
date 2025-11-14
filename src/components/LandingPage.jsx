import React, { useState } from 'react';

export function LandingPage(props) {
  const { onClickStatement, onClickQuestion } = props
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
    <h1 style={{color: '#243E54'}}> 🧠 Frasix✏️ </h1>
      <div style={boxesStyle}>
        <button style={statementButton} onClick={onClickStatement}>
          {"Statement Sentence Challenge >"}
        </button>
      </div>
      <div> 
        <button style={questionButton} onClick={onClickQuestion}> 
          {"Question Sentence Challenge >"}
        </button>
      </div>
    </div>
  );
}



const boxesStyle = {
  display: 'flex',
  gap: '10px',
  justifyContent: 'center',
  marginBottom: '30px',
};

const statementButton = {
  backgroundColor: '#FFFFFF',
  padding: '10px',
  border: '4px solid #2B4E6E ',
  borderRadius: '8px',
  flexWrap: 'wrap',
  cursor: 'pointer',
  fontSize: '20px',
  color: '#2B4E6E',
  fontWeight: 'bold',
}

const questionButton = {
  backgroundColor: '#2B4E6E',
  padding: '10px',
  border: '4px solid #FFFFFF',
  borderRadius: '8px',
  flexWrap: 'wrap',
  cursor: 'pointer',
  fontSize: '20px',
  color: '#FFFFFF',
  fontWeight: 'bold',
}