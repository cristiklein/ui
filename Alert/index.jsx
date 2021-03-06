import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import childrenPropType from '../propTypes/children'
import setDisplayName from 'recompose/setDisplayName'
import compose from 'ramda/src/compose'
import {withOverrideFromContext} from '@klarna/higher-order-components'

const baseClass = 'alert'

const classes = {
  error: `${baseClass}--error`,
  paragraph: `${baseClass}__paragraph`,
  title: `${baseClass}__title`,
  warning: `${baseClass}--warning`
}

function AlertError ({ children, className, styles, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div
      className={classNames(classes.error, className)}
      {...remainingProps}>
      {children}
    </div>
  )
}

AlertError.displayName = 'Alert.Error'

AlertError.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
}

export const Error = compose(
  setDisplayName('Alert.Error'),
  withOverrideFromContext
)(AlertError)

export function AlertWarning ({ children, className, styles, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div
      className={classNames(classes.warning, className)}
      {...remainingProps}>
      {children}
    </div>
  )
}

AlertWarning.displayName = 'Alert.Warning'

AlertWarning.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
}

export const Warning = compose(
  setDisplayName('Alert.Warning'),
  withOverrideFromContext
)(AlertWarning)

function AlertTitle ({ children, className, styles, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <h1
      className={classNames(classes.title, className)}
      {...remainingProps}>
      {children}
    </h1>
  )
}

AlertTitle.displayName = 'Alert.Title'

AlertTitle.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
}

export const Title = compose(
  setDisplayName('Alert.Title'),
  withOverrideFromContext
)(AlertTitle)

export function AlertParagraph ({ children, className, styles, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <p
      className={classNames(classes.paragraph, className)}
      {...remainingProps}>
      {children}
    </p>
  )
}

AlertParagraph.displayName = 'Alert.Paragraph'

AlertParagraph.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
}

export const Paragraph = compose(
  setDisplayName('Alert.Paragraph'),
  withOverrideFromContext
)(AlertParagraph)
