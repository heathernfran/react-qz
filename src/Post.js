import React, { Component } from 'react'
import sanitizeHtml from 'sanitize-html-react';

class Post extends Component {

  createMarkup(text) {
    let clean = sanitizeHtml(text, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ])
    })
    return {__html: clean}
  }

  render() {
    return (
      <div key={this.props.key}>
        <h2 dangerouslySetInnerHTML={this.createMarkup(this.props.title)} />
        <p dangerouslySetInnerHTML={this.createMarkup(this.props.content)} />
      </div>
    )
  }
}
export default Post
