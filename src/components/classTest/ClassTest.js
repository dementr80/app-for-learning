import { queries } from '@testing-library/react';
import React    from 'react';
import styles   from './ClassTest.scss';

import {ContextTest}	from '../contextTest/ContextTest'

class ClassTest extends React.Component {
	constructor(props) {
		super(props);

		this.fieldOne = "fieldOne";

		this.state = {
			h1Phrases : {
				first : "print from state",
			},
			pPhrases : {
				first : "print from class",
			},
			printFromState : function printFromState () {
				console.log("print from state ");
				console.dir(this) // undefined. has prototype property
			},
			a() {
				console.log("a")
				console.dir(this)
			},
		}

	}

	testFieldAssign = "testFieldAssign";

	print = function () {
		console.log("print")
		console.dir(this)
	};
	// has prototype property 
	// inside constructor f
	// as a property of classTest print : f()

	printTwo() {
		console.log("printTwo")
		console.dir(this)
		console.log("print context ")
		console.dir(this.context)
		this.context.testMethod();
	};
	// gets from __proto__ of classTest
	// mozilla dev write this one
	
	printFromClass = () => {
		console.log("print from class " + this.fieldOne)
		this.print()
		this.printTwo()
		this.state.a()
		console.log("class field is " + this.testFieldAssign)
	};
	// as a property of classTest printFromClass : () => {...}
	
	render() {
  		return (
			<div className={styles.flexContainer}>
				<div>
		  			<h1 onClick = {this.state.printFromState}>{this.state.h1Phrases.first}</h1>
				</div>
				<div>
		  			<p onClick = {this.printFromClass}>{this.state.pPhrases.first}</p>
				</div>
				<div onClick = {printOutOfClass}>
					Out of class
				</div>
				{/* <div onClick = {this.testContextMethod}>
					context test method
				</div> */}
			</div>
		);
 	}
}

ClassTest.contextType = ContextTest;

export default ClassTest;

function printOutOfClass() {
	console.log("print Out Of Class")
}