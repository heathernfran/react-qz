import React, { Component } from 'react'
import Post from './Post'

const postsEndpoint = '/wp-json/wp/v2/posts'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    this.fetchPosts(this.props.url.concat(postsEndpoint))
  }

  componentDidUpdate() {
    this.fetchPosts(this.props.url.concat(postsEndpoint))
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
      <div>
        {this.state.posts.map((value) => {
          return (
            <Post
              key={value.id}
              title={value.title.rendered}
              content={value.content.rendered}
            />
          )
        })}
      </div>
    )
  }
}

export default Posts;
