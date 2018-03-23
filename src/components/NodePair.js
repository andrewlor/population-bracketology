import React from "react"
import Node from "./Node.js"
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
			select={(text, id) => {this.select(text, id)}}
			enable={(id) => {this.enableNode(id)}}
		></Node>

    return (
    <tbody>
      <tr>
				<td>{n1}</td>
			</tr>
			<tr>
				<td>{n2}</td>
			</tr>
		</tbody>
		)
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
		this.props.select(this.props.data.correct)
	}

  render () {
    return (
      <React.Fragment>
      	<table>
      		{this.renderChildren()}
				</table>
      </React.Fragment>
    );
  }
}

export default NodePair
