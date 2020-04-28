import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './component/Clock'

ReactDOM.render(
  <React.StrictMode>
    <Clock date ={new Date()} />
  </React.StrictMode>,
  document.getElementById('root')
);

