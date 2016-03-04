import React, { Component } from 'react';
import { Button, Image, Jumbotron } from 'react-bootstrap';

import HeaderComponent from './headerComponent';
import QuoteComponent from './quoteComponent';
import Utils from '../common/utils';

const dataSource = '/data.json';

export default class MainComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      words: {},
      currentQuote: ''
    }

    this._fetchInitialData = this._fetchInitialData.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {
    this._fetchInitialData();
    // this._launchWOW();
  }

  render() {
    return <div>
      <HeaderComponent />

      <div className="container">
        <Jumbotron>
          <Image src="/images/emeric.jpg" circle />
          <h1>Emeric Generator</h1>
          <p>Welcome to my bullshit generator. With such a tool, you'll never be speechless facing people. Bitch.</p>
          <p>
            <Button
              onClick={this._handleClick}
              bsStyle="primary">
              Generate quote
            </Button>
          </p>
        </Jumbotron>
      </div>

      <QuoteComponent {...this.state} />
    </div>;
  }

  _handleClick() {
    const sentence = Utils.generateSentenceFromWords(this.state.words);

    this.setState({
      currentQuote: sentence
    })
  }

  _fetchInitialData() {
    Utils
      .get(dataSource)
      .then((data) => {
        this.setState({
          words: data
        })
      });
  }

  _launchWOW() {
    new WOW().init();
  }

}
