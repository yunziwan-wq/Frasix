import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App.jsx';


const root = createRoot(document.getElementById('root'));

root.render(
  <App />
);

// 1. find HTML file for id="root" element
// 2. return HTML root element to React
// 3. create React root
// 4. Give it to a "root" variable in React

// JSX
// 1. Self-closing elements

// ternary 三元运算符
// let num = 1 === 2 ? 0 : 1;
// console.log(num)

// // <===>
// let num1;
// if (true) {
//   num1 = 0;
// } else {
//   num1 = 1;
// }

// const ele1 = <h1 style={{ color: "green" }}> Correct </h1>
// const ele2 = <h1 style={{ color: "red" }}> Wrong </h1>
// const expr = 1 !== 2;

// function FruitSelector() {
//   const [selectedFruit, setSelectedFruit] = useState('');

//   const handleChange = (event) => {
//     setSelectedFruit(event.target.value);
//   };

//   return (
//     <div>
//       <h2>Select your favorite fruit:</h2>
//       <select value={selectedFruit} onChange={handleChange}>
//         <option value="">-- Please choose --</option>
//         <option value="Statementle">🍎 Statementle</option>
//         <option value="banana">🍌 Banana</option>
//         <option value="orange">🍊 Orange</option>
//         <option value="grape">🍇 Grape</option>
//       </select>

//       {selectedFruit && (
//         <p>You selected: <strong>{selectedFruit}</strong></p>
//       )}
//     </div>
//   );
// }
// JSX custom tag

// component

// state variable (dynamic)
