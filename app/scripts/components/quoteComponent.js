import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class QuoteComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      className: 'wow'
    }
  }

  render() {
    return <div className={this.state.className}>
      <div>{this.props.currentQuote}</div>
    </div>;
  }

}
