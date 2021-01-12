import React from 'React'

import React from 'react'
import PropTypes from 'prop-types'

class startLifecycle extends Component  {

    //initialize our local state 
    //used to bind method handler methods 

    constructor () {
        super ()
        this.state = {}
    }


    //componentDidMount is another lifecycle 
    //the very first time component shows up, React will run this
    //only runs once
    //component doesn't mount and unmount 
    //most commonly used for API calls 

    componentDidMount () {

        //when the component finishes mounting, you can then get the data

    }

    // // componentDidUpdate 
    // link to video
    // https://scrimba.com/learn/learnreact/lifecycle-methods-part-3-componentdidupdate-cD7DJMUb

    /// render anytime a state or props change, react runs the render method
    //render can be called many times 

    render () {
        return (
            <div>
                Some text 
            </div>

        )
    }


}
  

export default StarterForm


