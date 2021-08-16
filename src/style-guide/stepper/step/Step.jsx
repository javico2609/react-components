import React, {useImperativeHandle} from 'react';
import * as PropTypes from 'prop-types';
import styles from './Step.module.scss';
import clsx from 'clsx';
import StepIcon from '../step-icon/StepIcon';
import StepperContext from '../StepperContext';
import {ErrorCircleIcon} from "../../icons";
import {emptyFn} from "../../utils";

const errorIcon = <ErrorCircleIcon color="error" fontSize="large"/>

export const Step = React.forwardRef(function Step(props, ref) {
    const {
      title,
      subTitle,
      index = 1,
      last = false,
      className,
      icon,
      error,
      isDirty,
    } = props;

    const {activeStep} = React.useContext(StepperContext);
    const showError = error && activeStep === index && isDirty;

    useImperativeHandle(ref, () => {
      return {
        showError: () => error && activeStep === index,
        errorMessage: () => showError
      }
    });

    return (
      <div className={clsx(
        styles.stepContainer,
        (activeStep === index) && styles.active,
        showError && styles.error,
        last && styles.last,
        className
      )}>
        <StepIcon icon={showError ? errorIcon : icon || index} fontSize="large" completed={activeStep > index}/>
        <div className={styles.stepLabelContainer}>
          <span className={styles.stepTitle}>{title}</span>
          <span className={styles.stepSubTitle}>{subTitle}</span>
        </div>
      </div>
    );
  }
);

Step.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  index: PropTypes.number,
  last: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.any,
  error: PropTypes.bool,
  errorMessage: PropTypes.array,
  isDirty: PropTypes.bool,
  onValidateNext: PropTypes.func,
  onBack: PropTypes.func,
};

Step.defaultProps = {
  errorMessage: null,
  error: false,
  isDirty: false,
  onBack: emptyFn(),
}

export default Step;
