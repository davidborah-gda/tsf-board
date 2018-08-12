import React, { Component } from "react";
import "./MetricsCard.css";

class MetricsCard extends Component {
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
      <div className="Outter-Metrics-container">
        <div className="Inner-Metrics-container">
          <div className="Metrics-Counter-container">
            {this.props.title ? (
              <h1 className="Counter-title Total-calls-title1">
                {this.props.title}
              </h1>
            ) : null}
            <div className="Daily-calls-container1">
              <h4 className="Counter-display Daily-calls1">
                {this.state.count}
              </h4>
            </div>
          </div>
        
        <div className="Metrics-Buttons-row">
          <button
            onClick={this.increment.bind(this)}
            className="Counter-button increaseMet"
          >
            ▲
          </button>
          <button
            onClick={this.decrement.bind(this)}
            className="Counter-button decreaseMet"
          >
            ▼
          </button>
          <div className="Weekly-Total-Metrics-container">
            <div className="Weekly-Metrics-counter-container">
            <h1 className="Weekly-total-calls1">{this.state.count}</h1>
          </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default MetricsCard;