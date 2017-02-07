import React from 'react';

var ContentToggler = React.createClass({
  getInitialState: function(){
    return {
      showDetails: true
    }
  },

  toggleDetails: function(){
    this.setState({
      showDetails: !this.state.showDetails
    });
  },

  renderDetails: function(){
    var showStuff = this.state.showDetails;
    if(showStuff){
      return this.props.children
    } else {
      null;
    }
  },

  render: function(){
    return (
      <div className="contentToggle">
        <div className="contentToggleSummary">
          <h3>{this.props.title}</h3>
          <button onClick={this.toggleDetails}>Show/Hide Details </button>
        </div>
        <div className="contentToggleDetail">
          {this.renderDetails()}
        </div>
      </div>
      )
  }
})

var Content = React.createClass({
  render: function(){
    return (
        <div>
          <ContentToggler title="The Cat In The Hat">
            <p> Lorem Ipsum about a cat in a hat. Lorem Ipsum about a cat in a hat. Lorem Ipsum about a cat in a hat. Lorem Ipsum about a cat in a hat. Lorem Ipsum about a cat in a hat. Lorem Ipsum about a cat in a hat. </p>
          </ContentToggler>
        </div>
      )
  }
});

export default Content;
