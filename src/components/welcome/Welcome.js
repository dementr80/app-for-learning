import React, { useState, useEffect } from 'react';
import { Link }             		  from 'react-router-dom';
import './Welcome.scss';

function Welcome() {
	const [count, setCount] = useState(0);
	useEffect(() => {
	  document.title = `You clicked ${count} times`;
	  console.log("useEffect from count");
	});
  
	const [word, setWord] = useState("Ы, новый стэйт");
	useEffect(() => {
	  console.log("useEffect from word");
	});
  
	return (
	  <div className="App">
		<header className="App-header">
		  <div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>
			  Click me
			</button>
			<p>The word is here {word}</p>
			<Link to='/ClassTest'>ClassTest</Link>
		  </div>
		</header>
	  </div>
	);
  }

  export default Welcome;