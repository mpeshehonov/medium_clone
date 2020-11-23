import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Routes from './pages/routes';
import {BrowserRouter as Router} from 'react-router-dom';
import TopBar from './components/TopBar';
import './index.css'


const App = () => {
  return (
    <div>
      <Router>
        <TopBar/>
        <Routes/>
      </Router>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
