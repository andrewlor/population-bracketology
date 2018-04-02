import React from "react"
import Textfit from 'react-textfit'
class Population extends React.Component {
    render() {
        return (
            <div className='population'>
                <h1>{this.props.population}</h1>
            </div>
        )
    }
}

export default Population
