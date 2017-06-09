import React, { Component } from 'react';
import Posts from './Posts';
import { urls } from './urls';

import './App.css';

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
          {k} <button id={k} onClick={(e) => this.showPosts(e, v)}>Show posts</button>
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
