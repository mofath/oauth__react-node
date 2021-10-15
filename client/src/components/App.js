import { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Nav from './Nav';
import Auth from '../Auth/auth';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth();
  }

  render() {
    return (
      <div className='App'>
        <Nav />
        <div className='body'>
          <Route
            path='/'
            exact
            // use render props
            render={(props) => <Home auth={this.auth} {...props} />}
          />
          <Route path='/profile' component={Profile} />
        </div>
      </div>
    );
  }
}

export default App;
