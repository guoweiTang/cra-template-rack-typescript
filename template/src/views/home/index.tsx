import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss';
import { selectUser } from '../../store/userSlice';
import logo from '../../assets/img/logo.svg';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          User Info：
          <br />
          name：{user.name}
          <br />
          age：{user.age}
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
