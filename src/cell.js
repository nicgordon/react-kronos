import React, { Component, PropTypes } from 'react'
import cn from 'classnames'

import { Units } from './constants'

export default class Cell extends Component {

  static propTypes = {
    label: PropTypes.string,
    level: PropTypes.string,
    type: PropTypes.string,
    selected: PropTypes.bool,
    today: PropTypes.bool,
    onClick: PropTypes.func,
    classes: PropTypes.object,
    preventClickOnDateTimeOutsideRange: PropTypes.bool,
    valid: PropTypes.bool,
  }

  onClick() {
    const { level, moment, preventClickOnDateTimeOutsideRange, valid } = this.props

    if (!(preventClickOnDateTimeOutsideRange && !valid && level === Units.DAY)) {
      this.props.onClick(moment)
    }
  }

  render() {
    const classes = cn(
      this.props.classes.cell,
      this.props.level,
      this.props.type,
      { selected: this.props.selected },
      { today: this.props.today },
      { 'outside-range': !this.props.valid },
    )

    return (
      <div
        className={classes}
        onClick={::this.onClick}
      >
        {this.props.label}
      </div>
    )
  }

}
