import React from 'react';
import ListItem from './listItem';
import ColorItem from './colorItem';

var SmartComp = React.createClass({
  getInitialState : function() {
    return {numbers: [1,2,3,4,5], colors: ["red","green","blue"]};
  },
  render : function() {
    var numList = this.state.numbers.map(function(item) {
      return <ListItem number={item} />;
    });
    var colorList = this.state.colors.map(function(item) {
      return <ColorItem colors={item} />;
    });
    return (
      <div>
        <h2>List of Numbers</h2>
        <ul>
          {numList}
        </ul>
        <h2>List of Colors</h2>
        <ul>
          {colorList}
        </ul>
      </div>
    );
  }
});

export default SmartComp;
