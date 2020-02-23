import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text,
      className,
      variant
    } = this.props
    let classValue = '';
    switch (variant) {
      case "primary":
        classValue = 'btn btn-primary'
        break;
      case "secondary":
        classValue = 'btn btn-secondary'
        break
      default:
        classValue = 'btn btn-primary'
    }
    return (

      <button className={classValue}>{this.props.text}</button>
    )
  }
}
