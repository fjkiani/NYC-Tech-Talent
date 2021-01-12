import React, { Component } from 'react';

class StarterForm extends Component {
   constructor() {
       super ()
       this.state = {
           firstName: "",
           lastName: ""

       } 
       //2 
       this.handleChange = this.handleChange.bind(this) 



    }  

    //3 now we define what will happen on handleChange
    //this will store its value
    
    //since we do not care about about the previous value, we just provide an object

    //4 we want to capture each change as it happens
    handleChange(event) {

       //5 
        this.setState({

            // firstName: ""

            //event is what we are changing and gets it's value 
            // firstName: event.target.value,
            //what have we done now?: Each time a character is typed into the input box, run onChange function and that changes the state  firstName  

            //6 we also want it to output our lastName 
            // lastName: event.target.value,
        
            // 7 output first and last name without declaring each
                //since name is a string, we close in an array

            [event.target.name]: event.target.value 
            
        })
        // console.log(this.state.firstName)
    }

    // //using destructing to prevent bugs 
    // handleChange(event) {
    //     //we understand that event.target gives us name and it gives us value 
    //     const  {name, value}  = event.target
    //         this.setState({
    //             [name] : value
    //         })              
    // }

    

    render () {
        return (
            <form>
             <br/>

            {/* //1 */}
             <input 
             type = "text" 
             placeholder = "First Name"  
             onChange = {this.handleChange} 
             name = "firstName" >
             </input>   

             <br></br>

            {/* 7 but what if we also want to see our last name?? */}
             <input 
             type = "text" 
             placeholder = "Last Name"  
             onChange = {this.handleChange} 
             name = "lastName" >
             </input> 

        

             {/* //6  */}
             <h1>{this.state.firstName}</h1>

              {/* //7 output the lastName */}
              <h1>{this.state.lastName}</h1>

             {/* //In react we want to capture each input change, React onChange method */}

            </form>
        )
    }
 }

export default StarterForm