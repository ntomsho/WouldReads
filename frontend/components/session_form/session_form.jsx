import React from 'react';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push(`/shelves`));
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return (
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error ${i}:`}>
              {error}
            </li>
          ))}
        </ul>
      );
    };
  }

  signupGreeting() {
    if (this.props.formType === "Sign up") {
      return (
        <p className="signup-greeting">New here? Create a free account!</p>
      )
    };
  };

  usernameField() {
    if (this.props.formType === "Sign up") {
      return (
        <>
          <input type="text" value={this.state.username} placeholder="Name" onChange={this.update('username')} className="session-input" />
        </>
      )
    };
  };

  render() {
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          {this.signupGreeting()}
          {this.renderErrors()}
          {this.usernameField()}
          <input type="text" value={this.state.email} placeholder="Email Address" onChange={this.update('email')} className="session-input" />
          <input type="text" value={this.state.password} placeholder="Password" onChange={this.update('password')} className="session-input"/>
          <input type="submit" value={this.props.formType} className="session-submit" />
        </form>
      </div>
    )
  }

};

export default withRouter(SessionForm);