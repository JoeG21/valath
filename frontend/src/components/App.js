import React, { Component } from 'react';
import '../styling/App.css';
import '../styling/SideBar.css'
import '../styling/Content.css'
import Header from './Header';
import MainContainer from './MainContainer';
import Welcome from './Welcome';
import UserProfile from './UserProfile';


import Login from '../components/auth/Login'
import SignUp from '../components/auth/SignUp'

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


class App extends Component {

  state = {
    isLoggedIn: false,
    currentUser: '',
    userOpps: []
  }

  componentDidMount(){
    if(localStorage.getItem('auth_key')){
      this.setState({ isLoggedIn: true })
    }
  }

  handleLogin = () => {
    if(localStorage.getItem('auth_key')){
      this.setState({ isLoggedIn: true })
    }
  }

  failedLogin = () =>{
    localStorage.clear()
    this.setState({
      isLoggedin: false
    }, () =>{
      return <Redirect push to="/login" />
    })
  }

  currentUser = (current_user) => {
    this.setState({
      currentUser: current_user
    })
  }

  setUserOpps = (userOpps) => {
    this.setState({
      userOpps: [...this.state.userOpps, userOpps]
    })
  }


  render() {
    return (
      <div className="parent">
        <BrowserRouter>
          <Header isLoggedIn={this.state.isLoggedIn} />

          <Switch>
            <Route exact path="/" component={() => {
                if(localStorage.getItem('auth_key')){
                  return <MainContainer setUserOpps={this.setUserOpps} />
                  // return <Route path='/homepage' component={OppContainer} />
                }else{
                  return <Redirect to='/welcome' />
                }
              }} />

              <Route path='/welcome' >
                <Welcome />
              </Route >
              
              <Route path="/login" component={() => {
                return <Login currentUser={this.currentUser} failedLogin={this.failedLogin} handleLogin={this.handleLogin} setUserOpps={this.setUserOpps} />
              }} />

              <Route path='/signup' component={SignUp} />

              <Route path='/logout' component={() => {
                localStorage.clear()
                this.setState({ isLoggedIn: false })
                  return <Redirect to='/welcome'/>
              }} />



              <Route path='/userpage' component={ () => {
                return <UserProfile user={this.state.currentUser} userOpps={this.state.userOpps} />
              }} />
              
              
            <Route>
              <Redirect to='/' />
            </Route>
          </Switch>

        </BrowserRouter>
      </div>

    )
  }
}

export default App;