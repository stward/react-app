import React from 'react';
import ListItem from './listItem';
import Numbers from './data/numbers';

var NumberMapsAndFilters = React.createClass({
  render: function() {
    var EvensList = Numbers.filter(function(item) {
      return (item % 2 === 0);
    }).map(function(item) {
      return <ListItem number={item} />
    });
    return (
      <div>
        <h1>Hello, Number mapping and filtering!!</h1>
        <h2>List of Even Numbers</h2>
        <ul>
          {EvensList}
        </ul>
      </div>
    )
  }
})

export default NumberMapsAndFilters;
