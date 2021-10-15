import { Route } from 'react-router-dom';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Nav from './Nav';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Nav />
      <div className='body'>
        <Route path='/' exact component={Home} />
        <Route path='/profile' component={Profile} />
      </div>
    </div>
  );
}

export default App;
