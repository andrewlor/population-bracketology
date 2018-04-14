import React from "react"
import Node from "./Node.js"
import score from "./Score"
class NodePair extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			disableLeft: true,
			disableRight: true,
			correctLeft: false,
			correctRight: false,
			incorrectLeft: false,
			incorrectRight: false,
			existsLeft: false,
			existsRight: false
		}
	}

	renderChildren() {
		let n1, n2;
		n1 = <Node
			data={this.props.data.left}
			correct={this.state.correctLeft}
			incorrect={this.state.incorrectLeft}
			disabled={this.state.disableLeft}
			id={0}
			reverse={this.props.reverse}
			gameOver={this.props.gameOver}
			select={(text, id) => {this.select(text, id)}}
			enable={(id) => {this.enableNode(id)}}
		></Node>
		n2 = <Node
			data={this.props.data.right}
			correct={this.state.correctRight}
			incorrect={this.state.incorrectRight}
			disabled={this.state.disableRight}
			id={1}
			reverse={this.props.reverse}
			gameOver={this.props.gameOver}
			select={(text, id) => {this.select(text, id)}}
			enable={(id) => {this.enableNode(id)}}
		></Node>

		let brackStyle = {}
		let containerStyle = {position: "relative", paddingRight: "20px"}
		if (this.props.reverse) {
			brackStyle.left = 5; brackStyle.borderRight = "0"; brackStyle.borderLeft = "2px solid grey";
			containerStyle.paddingRight = 0; containerStyle.paddingLeft = "20px";
		}

		return <div style={containerStyle}>
			<React.Fragment>
				{n1}
				{n2}
			</React.Fragment>
			<div className="bracket" style={brackStyle}></div>
		</div>
	}

	enableNode(id) {
		let oldState = this.state
		if (id === 0) {
			oldState["existsLeft"] = true
		} else {
			oldState["existsRight"] = true
		}
		if (oldState.existsLeft && oldState.existsRight) {
			oldState["disableLeft"] = false
			oldState["disableRight"] = false
		}
		this.setState(oldState)
	}

	select(text, id) {
		if (id === 0) {
			this.setState({disableRight: true})
			if (this.props.data.correct === text) {
				++score.score
				this.setState({correctLeft: true})
			} else {
				this.setState({incorrectLeft: true})
			}
		} else {
			this.setState({disableLeft: true})
			if (this.props.data.correct === text) {
				++score.score
				this.setState({correctRight: true})
			} else {
				this.setState({incorrectRight: true})
			}
		}
		this.props.select(this.props.data)
	}

  render () {
    return (
      <React.Fragment>
      	{this.renderChildren()}
      </React.Fragment>
    );
  }
}

export default NodePair
