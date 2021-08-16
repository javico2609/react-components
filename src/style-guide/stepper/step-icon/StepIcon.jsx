import * as React from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import {CheckCircleIcon, ErrorCircleIcon} from '../../icons'
import NumberTag from "../../number-tag/NumberTag";

const StepIcon = props => {
  const {
    active = false,
    className,
    completed = false,
    error = false,
    icon,
    ...other
  } = props;

  if (typeof icon === 'number' || typeof icon === 'string') {
    const classes = clsx(className, {
      'active': active,
      'error': error,
      'completed': completed
    });

    if (error) {
      return <ErrorCircleIcon className={classes} color="error" {...other}/>;
    }

    if (completed) {
      return <CheckCircleIcon className={classes} {...other}/>;
    }

    return (
      <NumberTag number={icon} color="outline" {...other}/>
    );
  }

  return icon;
};

StepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  error: PropTypes.bool,
  icon: PropTypes.node,
};

export default StepIcon;
