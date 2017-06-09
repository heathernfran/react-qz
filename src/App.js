import React, { Component } from 'react';
import Posts from './Posts';

import './App.css';

const urls = new Map()
  .set('Mozilla', 'https://blog.mozilla.org')
  .set('Variety', 'http://variety.com')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      visible: false,
    }
    this.showPosts = this.showPosts.bind(this)
  }

  showSources() {
    let sourceArray = []
    urls.forEach((v, k) => {
      sourceArray.push(
        <li key={k}>
          Source: {k}
          <button id={k} onClick={(e) => this.showPosts(e, v)}>Show posts</button>
        </li>
      )
    })
    return sourceArray
  }

  showPosts(e, valueUrl) {
    e.preventDefault()
    this.setState({
      url: valueUrl,
      visible: true,
    })
  }

  render() {
    const sourceNames = this.showSources()

    return (
      <div className="App">
        <h1>News sources available</h1>
          <ul>{sourceNames}</ul>
          {
            this.state.visible ?
            <Posts url={this.state.url} /> :
            <span>Click news source</span>
          }
      </div>
    );
  }
}

export default App;
