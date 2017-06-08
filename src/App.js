import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      name: '',
      description: '',
      namespace: '',
      api: '',
      posts: [],
    }
  }
  
  componentDidMount() {
    const qzUrl = 'https://qz.com/wp-json',
        varietyUrl = 'http://variety.com/wp-json/wp/v2/posts',
        mozUrl = 'https://blog.mozilla.org/wp-json/wp/v2/posts'

    fetch(qzUrl)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          results: json,
          name: json.name,
          description: json.description,
          namespace: json.namespaces,
          api: json._links.help[0].href,
        })
      })
      .catch((error) => {
        console.error(`Error in response: ${error}`)
      })

    fetch(mozUrl)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        this.setState({
          posts: json,
        })
      })

  }
  
  createMarkup(text) {
    return {__html: text}
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Data results</h1>
          <h2>Name: {this.state.name}</h2>
          <p>Description: {this.state.description}</p>
          <p>Namespace: {this.state.namespace}</p>
          <p>API: <a href={this.state.api} target="_blank" rel="noopener noreferrer">{this.state.api}</a></p>
        </div>

        <div>
          <h1>Mozilla Blog</h1>
          {this.state.posts.map((value, key) => {
            return (
              <div key={key}>
                <h2 dangerouslySetInnerHTML={this.createMarkup(value.title.rendered)} />
                <p dangerouslySetInnerHTML={this.createMarkup(value.content.rendered)} />
              </div>
            )
          })}
        </div>

      </div>
    );
  }
}

export default App;
