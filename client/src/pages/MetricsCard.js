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
      <div className="Outter-Metric-container">
        <div className="Inner-Metric-container">
            {this.props.title ? (
              <p className="Metric-Title">
                {this.props.title}
              </p>
            ) : null}
            <div className="Daily-Metric-container">
              <p className="Daily-Metric-Count">
                {this.state.count}
              </p>
            </div>
        <div className="Metric-Buttons-row">
          <button
            onClick={this.increment.bind(this)}
            className="increaseMet"
          >
            ▲
          </button>
          <button
            onClick={this.decrement.bind(this)}
            className="decreaseMet"
          >
            ▼
          </button>
          <div className="Weekly-Metric-container">
            <p className="Weekly-Total-Count">{this.state.count}</p>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default MetricsCard;