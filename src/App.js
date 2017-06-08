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
    }
  }
  
  componentDidMount() {
    const jsonUrl = 'https://qz.com/wp-json'
    
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
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
  }
  
  render() {
    return (
      <div className="App">
        <div>
          <h1>Data results</h1>
          <h2>Name: {this.state.name}</h2>
          <p>Description: {this.state.description}</p>
          <p>Namespace: {this.state.namespace}</p>
          <p>API: {this.state.api}</p>
        </div>
        
      </div>
    );
  }
}

export default App;
