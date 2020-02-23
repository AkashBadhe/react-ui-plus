import React, { Component } from 'react'

import { ExampleComponent, Button } from 'react-ui-plus'
// import ExampleComponent from 'react-ui-plus';

export default class App extends Component {
  render() {
    return (
      <div>
        <ExampleComponent text='Modern React component module' className="secondary" />
        <Button text="Test" variant="primary"></Button>
      </div>
    )
  }
}
