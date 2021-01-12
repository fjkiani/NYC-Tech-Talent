// import React, { Component } from 'react';


// class FinishedForm1 extends Component {
//     constructor() {
//         super()
//         //the state is currently empty which has no way to store any change 
//         this.state = {
          
//          //4 the goal is that if each time someone types in the handleChange, it updates it in the state 
//          //state is currently empty 
//          firstName: "",
//          //now each time the handle change function runs, firstName can be updated
  
//          //9 initialize last name
//          lastName: ""
//          //10 problem now is that when typing lastName, replaces everything from firstName 
           
//         }
  
//         //8 anytime we have a class method that is calling setState we need to bind it inside the constructor
//         this.handleChange = this.handleChange.bind(this)
//     }
    
//     //3 we need a place that updates each time handleChange runs and stores its value
//     handleChange() {
  
//       //6 we know based on our DOM property that each time events are fired, they pass a pre-determined parameter into our function 
  
//       handleChange(event) {
  
//       //5 to update we will use this.setState, and since we don't care about the previous value, we will provide an object
//       this.setState({
//         // firstName: "??"
  
//         //7 the event being fired lets us get the value of the input box
//         firstName: event.target.value
//         //what we have done is that each single time a character is typed into the input box, run the handleChange function and that changes the state where the firstName property changes to what the first name is
  
//         //11 ^ we have hard coded to update the firstName property 
//         //one approach to get around this would be to create a:
            // handleLastNameChange(){}
//             //but this approach will not work for scaling  
//             //to fix this we will update the firstName property above
  
  
//          //12 we can input of any value of the input, not just value but also the name property 
//          //since name is a string, this must be inside an array
  
//          [event.target.name]: event.target.value
//       })
//     }

//     // Good practice to prevent bugs by destructuring  
//     // handleChange(event) {
//     //     const {name, value} = event.target
//     //     this.setState({
//     //         [name]: value
//     //     })
//     // }

    
//     render() {
//         return (
//             <form>
  
              
//                 {/* 1 <input type="text" placeholder="First Name"/> ) */}
//                 {/* //in React we want to capture each input change. React has onChange method */}
  
//                 {/* <input type="text" placeholder="First Name" onChange={this.handleChange} /> */}
//                 {/* //2 the goal is now to capture each change as it happens and update the state  */}
//                 {/* An onChange event is triggered when values are entered in the input. This calls a function — handleChange() */}
  
//                 {/* // 8 this allows you to see the state */}
//                  <h1>{this.state.firstName}
//                  {/* //however this will throw an unexpected error  */}      
//                 {/* 12 add the lastName to handlechange  */}
//                 {this.state.lastName}
                 
//                  </h1>
           
  
  
//                  {/* 9 what if we now want to create another input for our last name? */}
//                  {/* <input type="text" placeholder="Last Name" onChange={this.handleChange} /> */}
  
//                  {/* 12 to fix the firstName and lastName  */}
//                  <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
//                   <br />
//                   <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />


//                   {/* 13 intro to controlled form 
//                     //display what is in the forms to match what is in the state    
//                     //state is reactive currently
//                     //as the input changes, state updates
//                     //with controlled forms, state directs what is inside the inside box      
                    
//                     add a value property
//                     https://www.youtube.com/watch?v=7FQS6_fOgR8

//                 */}

//                 <input 
//                 type="text" 
//                 value={this.state.firstName}
//                 name="lastName" 
//                 placeholder="Last Name" 
//                 onChange={this.handleChange} 
//                 />
  
  
//             </form>
//         )
//     }
//   }
  
//   export default FinishedForm1

// //   resources for this lecture 
// // https://scrimba.com/learn/learnreact/react-forms-part-1-cW8Jdfy