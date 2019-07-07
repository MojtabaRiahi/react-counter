import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Rest
        </button>

        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            selected={true}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncreament={this.props.onIncreament}
            onDecreament={this.props.onDecreament}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
