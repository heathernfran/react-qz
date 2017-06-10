import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
    }
  }

  componentDidUpdate() {
    this.fetchPosts(this.props.url.concat('/wp-json/wp/v2/posts'))
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
      <Container>
        {this.state.posts.map((value, key) => {
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
