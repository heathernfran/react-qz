import React, { Component } from 'react';
import Post from './Post';

import './App.css';

const urls = new Map()
  .set('Mozilla', 'https://blog.mozilla.org')
  .set('Variety', 'http://variety.com')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    urls.forEach((value, key) => {
      // TODO use key for headings, selecting/navigating to different sources
      this.fetchPosts(value.concat('/wp-json/wp/v2/posts'))
    })
  }

  fetchPosts(url) {
    return fetch(url)
            .then((response) => response.json())
            .then((json) => {
              this.setState({
                posts: json
              })
            })
            .catch((error) => {
              console.error(`Error in response: ${error}`)
            })
  }

  showSources() {
    let sourceArray = []
    urls.forEach((v, k) => {
      sourceArray.push(<li key={k}>{k}</li>)
    })
    return sourceArray
  }

  render() {
    const sourceList = urls.forEach((v, k) => <li>{k}</li>)
    const sourceNames = this.showSources()

    return (
      <div className="App">
        <h1>News sources available</h1>
          <ul>{sourceNames}</ul>
      </div>
    );
  }
}

export default App;
