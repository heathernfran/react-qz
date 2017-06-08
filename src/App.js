import React, { Component } from 'react';
import Post from './Post';

import './App.css';

let urls = new Map()
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

  render() {
    return (
      <div className="App">

        <div>
          <h1>Mozilla Blog</h1>
          {this.state.posts.map((value, key) => {
            return (
              <Post
                key={key}
                title={value.title.rendered}
                content={value.content.rendered}
              />
            )
          })}
        </div>

      </div>
    );
  }
}

export default App;
