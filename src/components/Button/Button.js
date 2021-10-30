import React from "react";
// import Counter from "../Counter/Counter";
import "../Button/Button.scss";

function Button() {
	//run a function
	return <button onClick="submit" className="button"></button>;
}

export default Button;

// //initialize state
// class Btn extends React.Component {
//     constructor(){
//         super();
//         //setting state to track the
//         //private data of the class
//         //based component
//         this.state = {
//             // create function for comment and upload.
//         }
//     }
// }

// //boiler plate
// // class based component for state based components boiler plate
// // anything that needs to be modified or dynamic, requires class based components
// export default App;

// export default class App extends Component {
// // set state before render
// state = {

// //key value pairs of object 'state'
// commentsChanged: 0,
// };
// //retrieve data from API
// };
//	//declare function
// handleClick = ()=> {
//	//clg('this was clicked');
// //method setState
//this.setState({commentsChanged: this.state.commentsChanged + 1}),
// console.log(this.state.commentsChanged) //comment later
// //second arg to set state
//() => {
// console.log(this.state.commentsChanged);
// }

// }

// //render onto screen
// 	render() {
// 		return (
// //Apply JSX
// <button onClick={this.handleClick}>Comment</button>
// <p>Comments: {this.state.commentsChanged}
// 		);
// 	}
// }
