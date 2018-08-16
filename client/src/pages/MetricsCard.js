import React, { Component } from "react";
import "../css/MetricsCard.css";

class MetricsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }
  decrement() {
    this.setState({
      count: this.state.count === 0 ? this.state.count : this.state.count - 1
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