import React, { useState } from 'react';
import { LandingPage } from './LandingPage.jsx';
import { Statement } from './Statement.jsx';
import { Question } from './Question.jsx';


export function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  const renderCurrentPage = () => {
      switch (currentPage) {
        case 'landing':
          return <LandingPage onClickStatement={handleStatement} onClickQuestion={handleQuestion}/>
        case 'statement':
          return <Statement onReturn={handleLanding}/>
        case 'question':
          return <Question onReturn={handleLanding}/>
        default:
      }
  }

  const handleStatement = () => {
    setCurrentPage('statement')
  }

  const handleQuestion = () => {
    setCurrentPage('question')
  }

  const handleLanding = () => {
    setCurrentPage('landing')
  }

   return (
    <div>
      {renderCurrentPage()}
    </div>
  )
}

      // index (props)
      //   |
      //  App - currentPage handleStatement/handleQuestion
      //   |                             | (props)
      //   LP            
      //   / \
      //   S Q