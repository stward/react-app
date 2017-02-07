import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './HelloWorld';
import SmartComp from './SmartComp';
import NumberMapsAndFilters from './NumberMapsAndFilters';
import FoodFilter from './FoodFilter';
import Gravatars from './Gravatars';
import Users from './data/users';
import Toggler from './Toggler';

ReactDOM.render(
  <div>
    <HelloWorld name="Spencer" />
    <SmartComp />
    <NumberMapsAndFilters />
    <FoodFilter type="chinese" />
    <Gravatars users={Users} />
    <Toggler />
  </div>,
  document.getElementById('root')
);
