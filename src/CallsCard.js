import React, { Component } from "react";
import "./CallsCard.css";

class CallsCard extends Component {
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
        <div className="Main-Calls-container">
          <div className="Counter-container">
            {this.props.title ? (
              <p className="Total-calls-title">
                {this.props.title}
              </p>
            ) : null}
            <div className="Daily-calls-container">
              <p className="Daily-calls">
                {this.state.count}
              </p>
            </div>
          </div>
        </div>
        <div className="Buttons-row">
          <button
            onClick={this.increment.bind(this)}
            className="increase"
          >
            ▲
          </button>
          <button
            onClick={this.decrement.bind(this)}
            className="decrease"
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

export default CallsCard;
