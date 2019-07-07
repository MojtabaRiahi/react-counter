import React, { Component } from "react";

class Counter extends Component {

  render() {
    return (
      <React.Fragment>
        <h4>counter number #{this.props.counter.id}</h4>
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formateCount()}
        </span>
        <button
          onClick={
            ()=>this.props.onIncreament(this.props.counter)
          }
          style={{ color: "#fff" }}
          className="btn btn-primary m-2"
        >
         +
        </button>
        <button
          onClick={
            ()=>this.props.onDecreament(this.props.counter)
          }
          disabled={this.props.counter.value!==0 ? "" : "disabled"}
          style={{ color: "#fff" }}
          className="btn btn-primary"
        >
          -
        </button>
      <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2">Delete</button>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formateCount() {
    const count = this.props.counter.value;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
