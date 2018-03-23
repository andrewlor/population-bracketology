import React from "react"
import Node from "./Node"
import NodePair from "./NodePair"
class Bracketology extends NodePair {

	select(text, id) {
		if (id === 0) {
			this.setState({disableRight: true})
			if (this.props.data.correct === text) {
				this.setState({correctLeft: true})
			} else {
				this.setState({incorrectLeft: true})
			}
		} else {
			this.setState({disableLeft: true})
			if (this.props.data.correct === text) {
				this.setState({correctRight: true})
			} else {
				this.setState({incorrectRight: true})
			}
		}
	}
  
  render () {
    return (
      <React.Fragment>
        <Node
        	data={this.props.data.left}
        	root={true}
        	correct={this.state.correctLeft}
        	incorrect={this.state.incorrectLeft}
        	disabled={this.state.disableLeft}
        	id={0}
        	select={(text, id) => {this.select(text, id)}}
        	enable={(id) => {this.enableNode(id)}}
        ></Node>
				<Node
					data={this.props.data.right}
					root={true}
					reverse={true}
					correct={this.state.correctRight}
					incorrect={this.state.incorrectRight}
					disabled={this.state.disableRight}
					id={1}
					select={(text, id) => {this.select(text, id)}}
					enable={(id) => {this.enableNode(id)}}
				></Node>
      </React.Fragment>
    );
  }
}

export default Bracketology
