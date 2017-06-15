import React, { Component } from 'react'
import Posts from './Posts';
import { urls } from './urls';

class Sources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: '',
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
          <button id={k} onClick={(e) => this.showPosts(e, v, k)}>{k}</button>
        </li>
      )
    })
    return sourceArray
  }

  showPosts(e, valueUrl, keySource) {
    e.preventDefault()
    this.setState({
      source: keySource,
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
            (
              <div>
                <h2>{this.state.source}</h2>
                <Posts {...this.state} />
              </div>
            ) :
            <span>Click news source</span>
          }
      </div>
    );
  }
}

export default Sources
