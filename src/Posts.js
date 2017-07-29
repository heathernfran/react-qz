import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import Post from './Post';

// Enable cross-origin resource sharing (CORS)
// https://cors-anywhere.herokuapp.com/
const crossOrigin = 'https://cors-anywhere.herokuapp.com/',
      postsEndpoint = '/wp-json/wp/v2/posts'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    this._fetchPosts(crossOrigin.concat(this.props.url).concat(postsEndpoint))
  }

  componentDidUpdate() {
    this._fetchPosts(crossOrigin.concat(this.props.url).concat(postsEndpoint))
  }

  _fetchPosts(url) {
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
      <Container>
        {this.state.posts.map((value) => {
          return (
            <Post
              key={value.id}
              title={value.title.rendered}
              content={value.content.rendered}
            />
          )
        })}
      </Container>
    )
  }
}

export default Posts;
