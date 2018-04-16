import React from "react"
import NodePair from "./NodePair.js"
import Textfit from 'react-textfit'
import Population from "./Population.js";
class Node extends React.Component {
	constructor(props) {
		super(props)
		let text
		let pop
		if (!Object.keys(this.props.data).includes('left')) {
			text = props.data.correct
			pop = props.data.population
			this.props.enable(this.props.id)
		}
		this.state = {
			correct: false,
			incorrect: false,
			disabled: props.disabled,
			text: text,
			population: pop,
			showPopulation: false
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			correct: nextProps.correct,
			incorrect: nextProps.incorrect,
			disabled: nextProps.disabled
		})
	}

	renderStyle() {
		let output = {}
		if (this.state.correct) output['backgroundColor'] = 'green'
		if (this.state.incorrect) output['backgroundColor'] = 'red'
		if (this.state.disabled) output['backgroundColor'] = 'grey'
		if (this.state.text) output['height'] = '50px'
		return output
	}

	renderNodePair() {
		if (Object.keys(this.props.data).includes('left')) {
			return <NodePair data={this.props.data} select={(data) => {this.select(data)}} reverse={this.props.reverse} gameOver={this.props.gameOver} metric={this.props.metric}></NodePair>
		}
	}

	renderNode() {
		if (this.state.showPopulation) {
			return <Population population={this.state.population} metric={this.props.metric} onMouseLeave={() => {this.setState({showPopulation: false})}}></Population> 
		} else {
			return (
			<div className='node' style={this.renderStyle()} onClick={() => {this.onClick()}} onMouseEnter={() => {this.onHover()}} onMouseLeave={() => {this.setState({showPopulation: false})}}>
				<h1 className="nodetext">
					<Textfit mode="single" max={30}>{this.state.text}</Textfit>
				</h1>
			</div>
			)
		}
	}

	select(data) {
		this.props.enable(this.props.id)
		this.setState({text: data.correct, population: data.population})
	}

	onClick() {
		if (!(this.state.correct || this.state.incorrect) && !this.state.disabled) {
      		this.props.select(this.state.text, this.props.id)
    	}
	}

	onHover() {
		if (this.props.showPopulation || this.props.gameOver) this.setState({showPopulation: true})
	}

  render () {
  	let elements = [
  		<td key={0}>{this.renderNodePair()}</td>,
      <td key={1}>{this.renderNode()}</td>
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
