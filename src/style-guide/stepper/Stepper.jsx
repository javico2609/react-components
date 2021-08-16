import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import StepperContext from './StepperContext';
import PropTypes from 'prop-types';
import styles from './Stepper.module.scss';
import StepperActions from "./step-actions/StepperActions";
import StepContent from './step-content/StepContent';
import ErrorAlert from "../alert/ErrorAlert";
import {emptyFn} from "../utils";

export const Stepper = props => {

  const {
    activeStep = 1,
    children,
    className,
    finishButtonText,
    onFinish,
    onFinishDisabled = false,
    onCancel,
    ...other
  } = props;

  const [currentStepActive, setCurrentStepActive] = useState(activeStep);

  useEffect(() => {
    setCurrentStepActive(activeStep);
  }, [activeStep]);

  const childrenArray = React.Children.toArray(children);
  const haveSteps = childrenArray.length > 0;
  const steps = childrenArray.map((step, index) => {
    return React.cloneElement(step, {
      index: index + 1,
      last: index + 1 === childrenArray.length,
      ...step.props,
    });
  });

  const {error, errorMessage, isDirty, onValidateNext, onBack} = haveSteps ? steps[currentStepActive - 1].props : {};

  const contextValue = React.useMemo(
    () => ({activeStep: currentStepActive, setCurrentStepActive, stepCount: childrenArray.length}),
    [currentStepActive, setCurrentStepActive, childrenArray.length],
  );

  return (
    <StepperContext.Provider value={contextValue}>
      <div className={clsx(styles.stepperContainer, className)} {...other}>
        <div
          className={styles.stepperContent}>
          {steps}
        </div>

        {
          haveSteps &&
          <>
            <StepContent>
              {error && isDirty && errorMessage && <ErrorAlert message={errorMessage}/>}
              {steps[currentStepActive - 1].props.children}
            </StepContent>

            <StepperActions
              finishButtonText={finishButtonText}
              onValidateNext={onValidateNext}
              onBack={onBack}
              onFinish={onFinish}
              onFinishDisabled={onFinishDisabled}
              onCancel={onCancel}/>
          </>
        }

      </div>
    </StepperContext.Provider>
  );
};

Stepper.propTypes = {
  activeStep: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  finishButtonText: PropTypes.string,
  onFinish: PropTypes.func,
  onCancel: PropTypes.func,
};

Stepper.defaultProps = {
  finishButtonText: "Finalizar",
  onFinish: emptyFn(),
  onCancel: emptyFn()
};

export default React.memo(Stepper);
