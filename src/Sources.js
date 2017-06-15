import React, { Component } from 'react'
import Posts from './Posts';
import { urls } from './urls';

class Sources extends Component {
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
          <button id={k} onClick={(e) => this.showPosts(e, v)}>{k}</button>
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
      <div>
        <h1>News sources available</h1>
          <ul>{sourceNames}</ul>
          {
            this.state.visible ?
            <Posts {...this.state} /> :
            <span>Click news source</span>
          }
      </div>
    );
  }
}

export default Sources
