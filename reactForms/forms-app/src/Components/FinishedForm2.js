import React, {Component} from "react"

class FinishedForm2 extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
           
             // 2
            isFriendly: true
           
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    
    handleChange(event) {

        // const {name, value} = event.target

        const {name, value, type, checked} = event.target
        //3 type and checked are values that we can pull from the checkbox 

        // this.setState({
        //     [name]: value
        // })


        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })

        //4 to update the state, we can use either if statement or a terneray operator 
    }
    
    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                
                {
                    /**
                     * Other useful form elements:
                     * 
                     *  <textarea /> element
                     *  <input type="checkbox" />
                     *  <input type="radio" />
                     *  <select> and <option> elements
                     */
                }
                <br />
                    {/* // 1 textarea (self closing)  */}
                 <textarea 
                    value = {"Some random text"}
                    onChange={this.handleChange}
                    //this is added to avoid the console warning
                    
                    />
                 
                 <br/>
                <label>
                    {/* // 2 checkbox is a type from an input
                    doesn't use a value property, it is either checked or not checked
                    determined by boolean */}
                 <input 
                 name="isFriendly" 
                 type="checkbox" 
                 //in this instance lets check if someone is friendly or not
                 checked={this.state.isFriendly}
                 //must be defined in state 
                 //hard coded with read only (check console.log)
                    //haven't taught it how to change
                 //3 add onChange method
                    //tricky part is that currently we are using value to update our setState 
                    //our checkbox doesn't have a value, it has a bool property
                 onChange={this.handleChange}  
                 
                 /> is Friendly?
                </label>
                
                
                
                
                
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default FinishedForm2


// resources for this lecture
// https://scrimba.com/learn/learnreact/react-form-part-2-cGKqZUQ