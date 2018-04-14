import React from "react"
import Textfit from 'react-textfit'
class Population extends React.Component {
    render() {
        return (
            <div className='population' onMouseLeave={this.props.onMouseLeave}>
                <h1 className="nodetext">
					<Textfit mode="single" max={30}>
                        {this.props.population} million
                    </Textfit>
				</h1>
            </div>
        )
    }
}

export default Population
