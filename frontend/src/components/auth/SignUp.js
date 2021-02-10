import React from 'react';

class SignUp extends React.Component {

  state = {
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    age: 0
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      user: {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        age: this.state.age
      }
    }
    fetch('http://localhost:3000/signup',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    }).then(res => res.json())
    .then(userObj => console.log(userObj))
  }

  render(){
    return (
      <span className={'form-outer'}>
        <h2> Sign Up </h2>
        <form className={'add-book'} onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.first_name} onChange={this.handleInputChange} name='first_name' placeholder="First Name"  />
            <input type="text" value={this.state.last_name} onChange={this.handleInputChange} name='last_name' placeholder="Last Name"  />
            <input type="text" value={this.state.username} onChange={this.handleInputChange} name='username' placeholder="Username"  />
            <input type="text" value={this.state.email} onChange={this.handleInputChange} name='email' placeholder="Email"  />
            <input type="text" value={this.state.age} onChange={this.handleInputChange} name='age' placeholder="Age"  />
            <input type="password" value={this.state.password} onChange={this.handleInputChange} name='password' placeholder="Password"  />
            <input id="submit" type="submit" value="Submit" />
        </form>
      </span>
    )
  }
}

export default SignUp;