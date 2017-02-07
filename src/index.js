import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './HelloWorld';
import SmartComp from './SmartComp';

ReactDOM.render(
  <div>
    <HelloWorld name="Spencer" />
    <SmartComp />
  </div>,
  document.getElementById('root')
);
