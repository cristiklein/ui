import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/text.scss'

export default function TextLabel ({
  className,
  children,
  defaultMargins,
  styles,
  ...remainingProps
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames(
    'cui__text-label',
    className,
    {
      defaultMargins
    }
  )

  return (
    <h4 className={cls} {...remainingProps}>{children}</h4>
  )
}

TextLabel.defaultProps = {
  defaultMargins: false,
  styles: {}
}

TextLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultMargins: PropTypes.bool,
  styles: PropTypes.object
}
