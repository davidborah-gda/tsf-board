import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    error: null
  };
  async login(evt) {
    evt.preventDefault();
    const form = evt.target;
    const inputs = Array.from(form.elements).filter(
      element => element.tagName === "INPUT"
    );
    const [email] = inputs.map(input => input.value);
    try {
      await auth.login(email);
    } catch (error) {
      this.setState({
        error: "Your Email is incorrect"
      });
      form.reset();
    }
  }

  render() {
    return (
      <div className="Home-container">
        <form onSubmit={this.login.bind(this)}>
          <h4>Please enter your email address to get started!</h4>
          <input
            className="Email-Address-input"
            placeholder="hello@company.com"
          />
          <Link to="/settings">
            <button type="submit" className="TSF-button">
              Enter
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Home;
