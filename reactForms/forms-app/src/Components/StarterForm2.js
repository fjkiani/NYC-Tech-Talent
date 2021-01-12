import React, {Component} from "react"

class StarterForm2 extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",

            //2 how can we give checked box a state?
            isChecked: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
       
        // this.setState({
        //     isChecked: 
        // })

        type === "checkbox" ? this.setState({[name]: checked}) : this.setState ({[name]: value})



    }
    
    // handleChange(event) {
    //     const {name, value} = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }
    
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
                        useful other forms that also exist
                     * 
                     *  <textarea /> element
                     *  <input type="checkbox" />
                     *  <input type="radio" />
                     *  <select> and <option> elements
                     */
                }
                <label>

                {/* //textareat */}
                <textarea 
                    value = {"some text"}
                    onChange={this.handleChange}
                />
                

                <input 
                    type="checkbox" 
                    name="isChecked"
                    checked = {this.state.isChecked}
                    onChange={this.handleChange}

                
                />
                
                Checked or Not checked?
                </label>
                
                
                
                
                
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default StarterForm2
