import React, { Component } from 'react'
import sanitizeHtml from 'sanitize-html-react';
import { Container, Header } from 'semantic-ui-react';

class Post extends Component {

  createMarkup(text) {
    let clean = sanitizeHtml(text, {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ])
    })
    return {__html: clean}
  }

  render() {
    return (
      <Container key={this.props.id}>
        <Header as='h2'>
          <span dangerouslySetInnerHTML={this.createMarkup(this.props.title)} />
        </Header>
        <p dangerouslySetInnerHTML={this.createMarkup(this.props.content)} />
      </Container>
    )
  }
}
export default Post
