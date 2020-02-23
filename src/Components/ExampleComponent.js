import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text,
      className
    } = this.props

    return (

      <div className={className}>
        Example Component: {text}
      </div>
    )
  }
}
