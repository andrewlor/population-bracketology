import React from "react"
import Node from "./Node.js"
class Bracketology extends React.Component {
  
  render () {
    return (
      <React.Fragment>
        <Node data={this.props.data} invisible={true} root={true}></Node>
        <Node data={this.props.data} invisible={true} reverse={true} root={true}></Node>
      </React.Fragment>
    );
  }
}

export default Bracketology
