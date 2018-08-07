import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      amount: 1
    };
  }

  increment() {
    this.setState({
      count: this.state.count + this.state.amount
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - this.state.amount
    });
  }

  changeAmount(evt) {
    this.setState({
      amount: parseInt(evt.target.value, 10)
    });
  }
  render() {
    console.log(this.props);
    return (
      <div className="Calls-container">
        <div className="Main-calls-container">
          <div className="Counter-container">
            {this.props.title ? (
              <h1 className="Counter-title Total-calls-title">
                {this.props.title}
              </h1>
            ) : null}
            <div className="Daily-calls-container">
              <h4 className="Counter-display Daily-calls">
                {this.state.count}
              </h4>
            </div>
          </div>
        </div>
        <div className="Buttons-row">
          <button
            onClick={this.increment.bind(this)}
            className="Counter-button increase"
          >
            ▲
          </button>
          <button
            onClick={this.decrement.bind(this)}
            className="Counter-button decrease"
          >
            ▼
          </button>
          <div className="TotalCalls-container">
            <h3 className="Weekly-title">Weekly Total</h3>
            <div className="Weekly-Calls-counter-container">
            <h1 className="Weekly-total-calls">{this.state.count}</h1>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
