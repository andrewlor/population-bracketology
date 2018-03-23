import React from "react"
import NodePair from "./NodePair.js"
class Node extends React.Component {
	constructor(props) {
		super(props)
		let text
		if (typeof props.data === "string") text = props.data
		this.state = {
			correct: false,
			incorrect: false,
			invisible: props.invisible,
			disabled: props.disabled,
			text: text
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			correct: nextProps.correct,
			incorrect: nextProps.incorrect,
			invisible: nextProps.invisible,
			disabled: nextProps.disabled
		})
	}

	renderStyle() {
		let output = {}
		if (this.state.correct) output['backgroundColor'] = 'green'
		if (this.state.incorrect) output['backgroundColor'] = 'red'
		if (this.state.invisible) output['visibility'] = 'hidden'
		if (this.state.disabled) output['backgroundColor'] = 'grey'
		return output
	}

	renderNodePair() { if (typeof this.props.data !== 'string') return <NodePair data={this.props.data} select={(text) => {this.select(text)}} reverse={this.props.reverse}></NodePair> }

	select(text) {
		this.setState({text: text, invisible: false})
	}

	onClick() {
		if (!this.state.selected && !this.state.disabled && !this.state.invisible) {
      this.props.select(this.state.text, this.props.id)
    }
	}

  render () {
  	let elements = [
  		<td>{this.renderNodePair()}</td>,
      <td>
      	<div className='node' style={this.renderStyle()} onClick={() => {this.onClick()}}>
      		<h1>{this.state.text}</h1>
      	</div>
      </td>
  	]
  	if (this.props.reverse) elements.reverse()
  	let className = this.props.root ? "outerTable" : ""
    return (
      <React.Fragment>
      	<table className={className}><tbody><tr>{elements.map((x) => {return x})}</tr></tbody></table>
      </React.Fragment>
    );
  }
}

export default Node
