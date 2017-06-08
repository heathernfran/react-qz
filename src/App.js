import React, { Component } from 'react';
import Post from './Post';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }
  
  componentDidMount() {
    const varietyUrl = 'http://variety.com/wp-json/wp/v2/posts',
        mozUrl = 'https://blog.mozilla.org/wp-json/wp/v2/posts'

    fetch(mozUrl)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        this.setState({
          posts: json,
        })
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
