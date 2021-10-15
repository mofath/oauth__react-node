import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import Callback from '../components/Callback';
import Profile from '../components/Profile';
import Nav from './Nav';
import Auth from '../Auth/auth';
import './App.scss';
class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <Nav auth={this.auth} />
        <div className='body'>
          <Route
            path='/'
            exact
            render={(props) => <Home auth={this.auth} {...props} />}
          />
          <Route
            path='/callback'
            render={(props) => <Callback auth={this.auth} {...props} />}
          />
          <Route
            path='/profile'
            render={(props) => {
              this.auth.isAuthenticated() ? (
                <Profile auth={this.auth} {...props} />
              ) : (
                <Redirect to='/' />
              );
            }}
          />
        </div>
      </>
    );
  }
}

export default App;
