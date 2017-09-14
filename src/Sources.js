import React, { Component } from 'react'
import Button from 'muicss/lib/react/button';
import Panel from 'muicss/lib/react/panel';
import Posts from './Posts';
import urls from './urls';

class Sources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: '',
      url: '',
      visible: false,
    }
  }

  showSources() {
    let sourceArray = []
    urls.forEach((v, k) => {
      sourceArray.push(
        <li key={k}>
          <Button variant='raised' size='small' id={k} onClick={(e) => this.showPosts(e, v, k)}>{k}</Button>
        </li>
      )
    })
    return sourceArray
  }

  showPosts(e, valueUrl, keySource) {
    e.preventDefault()
    this.setState({
      source: keySource,
      url: valueUrl,
      visible: true,
    })
  }

  render() {
    const sourceNames = this.showSources()

    return (
      <div className='mui-container'>
        <h1>News sources available</h1>
          <ul className='mui-list--inline'>{sourceNames}</ul>
          {
            this.state.visible ?
            (
              <div>
                <h2 className='mui--z3'>{this.state.source}</h2>
                <Posts {...this.state} />
              </div>
            ) :
            <Panel className='mui--z3'>Click news source</Panel>
          }
      </div>
    );
  }
}

export default Sources
