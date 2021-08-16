import React from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';

export const StepContent = (props) => {
  const {
    className,
    ...other
  } = props;

  return (
    <div className={clsx(
      "stepContent d-flex flex-column border-box flex-fill overflow-y-auto p-3 p-sm-none",
      className
    )} {...other}>
    </div>
  );
};

StepContent.propTypes = {
  index: PropTypes.number,
  className: PropTypes.string,
};

export default StepContent;
