import React from "react"
import Node from "./Node"
import NodePair from "./NodePair"
import score from "./Score"
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
		this.setState({showScore: true, gameOver: true})
	}
  
	renderScore() {
		let currScore = score.score
		if (this.state.correctLeft || this.state.correctRight) ++currScore
		if (this.state.showScore) {
			return <tr colSpan="2">
				<td colSpan="2">
				  <h1 style={{color: 'black', float: 'left'}}>Your score is {currScore}</h1>
				  <button style={{float: 'right'}} onClick={this.props.playAgain}>Play Again</button>
				</td>
			</tr>
		}
	}
  
  render () {
    return (
      <table className="bracketology">
      	<tbody>
      		{this.renderScore()}
      		<tr>
	      		<td>
			        <Node
								data={this.props.data.left}
								metric={this.props.data.metric}
			        	root={true}
			        	correct={this.state.correctLeft}
			        	incorrect={this.state.incorrectLeft}
			        	disabled={this.state.disableLeft}
								id={0}
								gameOver={this.state.gameOver}
			        	select={(text, id) => {this.select(text, id)}}
			        	enable={(id) => {this.enableNode(id)}}
			        ></Node>
			      </td>
			      <td>
							<Node
								data={this.props.data.right}
								metric={this.props.data.metric}
								root={true}
								reverse={true}
								correct={this.state.correctRight}
								incorrect={this.state.incorrectRight}
								disabled={this.state.disableRight}
								id={1}
								gameOver={this.state.gameOver}
								select={(text, id) => {this.select(text, id)}}
								enable={(id) => {this.enableNode(id)}}
							></Node>
						</td>
					</tr>
				</tbody>
      </table>
    );
  }
}

export default Bracketology
