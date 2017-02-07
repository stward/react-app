import React from 'react';

var SmartComp = React.createClass({
  getInitialState : function() {
    return {numbers: [1,2,3,4,5]};
  },
  render : function() {
    var numList = this.state.numbers.map(function(item) {
      return <li>{item}</li>
    });
    return (
      <div>
        <h2>List of Numbers</h2>
        <ul>
          {numList}
        </ul>
      </div>
    );
  }
});

export default SmartComp;
