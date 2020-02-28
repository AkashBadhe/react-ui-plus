import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
export default class MButton extends Component {
  render() {
    return (
      <Button {...this.props}>{this.props.children}</Button>
    )
  }
}
