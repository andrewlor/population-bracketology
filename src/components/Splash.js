import React from "react"
import Node from "./Node"
class Splash extends React.Component {

	start() {
  	let size = Number(document.getElementById("select").value)
  	if (size > 0) {
  		this.props.unmountSplash(size)
  	}
  }
  
  render () {
    return (
      <React.Fragment>
      	<div className="splash">
      		<div className="center">
      			<h1 style={{textAlign: 'center'}}>population bracketology</h1>
      			<h3 style={{textAlign: 'center'}}>a bracketology game where you compare population sizes of countries around the world.</h3>
      			<div className="input">
	      			<select defaultValue="" id="select">
	      				<option value="" disabled>size</option>
	  						<option value="2">2</option> 
	  						<option value="4">4</option>
	  						<option value="8">8</option>
	  						<option value="16">16</option> 
	  						<option value="32">32</option>
	  						<option value="64">64</option>
	  						<option value="128">128</option> 
							</select>
							<button onClick={() => {this.start()}}>start</button>
						</div>
      		</div>
      	</div>
      </React.Fragment>
    );
  }
}

export default Splash
