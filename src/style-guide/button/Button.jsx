import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import clsx from 'clsx';

export const Button = props => {

  const {
    className,
    theme,
    icon,
    disabled,
    label = 'label',
    onClick,
    type = 'full' | 'outline',
    ...other
  } = props;

  return (
    <button
      {...other}
      className={clsx(styles.button, styles[type], className)}
      disabled={disabled}
      onClick={onClick}>
      <span>{label}</span>
    </button>
  )
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.object,
  icon: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  label: '',
  type: 'full'
};

export default React.memo(Button);

