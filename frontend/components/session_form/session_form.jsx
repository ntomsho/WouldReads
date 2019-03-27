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
    this.props.processForm(user);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error ${i}:`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  signupGreeting() {
    if (!this.props.currentUser) {
      return (
        <p>New here? Create a free account!</p>
      )
    };
  };


  render() {
    return (
      <div className="session-form-container">
        <h2 className="session-form-header"> {this.props.formType} </h2>
        <form onSubmit={this.handleSubmit} className="session-form-box">
          {this.signupGreeting()}
          {this.renderErrors()}
          <input type="text" value={this.state.username} placeholder="Name" onChange={this.update('username')} className="session-input"/>
          <br/>
          <input type="text" value={this.state.email} placeholder="Email" onChange={this.update('email')} className="session-input"/>
          <br/>
          <input type="text" value={this.state.password} placeholder="Password" onChange={this.update('password')} className="session-input"/>
          <br/>
          <input type="submit" value={this.props.formType} className="session-submit"/>
        </form>
      </div>
    )
  }

};

export default withRouter(SessionForm);