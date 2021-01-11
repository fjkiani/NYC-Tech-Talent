import React, {Component} from "react"

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class TodoList extends Component {
    constructor() {
        super()
        this.state = {}
    }
    
    //** */componentDidMount is another lifecycle 
    //this component is like saying "you were just born"
    //the very first time component shows up, React will run this
    //only runs once
    //component doesn't mount and unmount
    //most commonly used for API calls
    //Ex. Getting the "To-do" lists from a server 
    componentDidMount () {

        //when the component finishes mounting, you can get the data
        //GET the data 

    }

    //componentDidUpdate 

    // --->> watch 
    // https://scrimba.com/learn/learnreact/lifecycle-methods-part-3-componentdidupdate-cD7DJMUb




    //*** */render is one of the lifecycle
    //getting dressed for the day
    //determine what will get displayed to the screen
    //can be called many times 
    //anytime a state or props change, react can run the render method again (Ex. days when you decide to look different and change your look )
    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App
