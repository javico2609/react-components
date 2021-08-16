import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './NumberTag.module.scss';
import {capitalize} from "../utils";

const NumberTag = React.forwardRef(function NumberTag(props, ref) {
  const {
    fontSize = 'default',
    color = 'default',
    number = 1,
    className,
    component: Component = 'span',
    ...other
  } = props;

  const classes = {
    'colorDefault': styles.colorDefault,
    'colorPrimary': styles.colorPrimary,
    'colorOutline': styles.colorOutline,
    'colorError': styles.colorError,
    'colorWarning': styles.colorWarning,
    'colorDisabled': styles.colorDisabled,
    'fontDefault': styles.sizeDefault,
    'fontSmall': styles.sizeSmall,
    'fontLarge': styles.sizeLarge
  };

  return (
    <Component
      className={clsx(
        [styles.numberTag],
        [classes[`color${capitalize(color)}`]],
        [classes[`font${capitalize(fontSize)}`]],
        className
      )}
      focusable="false"
      ref={ref}
      {...other}
    >
      <span>{number}</span>
    </Component>
  );
});

NumberTag.propTypes = {
  /**
   * * The number displayed by this component
   * @default 1
   */
  number: PropTypes.number,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'inherit'
   */
  color: PropTypes.oneOf(['default', 'disabled', 'error', 'outline', 'primary']),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'default'
   */
  fontSize: PropTypes.oneOf(['default', 'large', 'small']),
};

export default NumberTag;
