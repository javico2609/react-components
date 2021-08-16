import React, {useCallback} from 'react';
import clsx from 'clsx';
import StepperContext from '../StepperContext';
import * as PropTypes from 'prop-types';
import Button from "../../button/Button";
import styles from './StepperActions.module.scss';
import {emptyFn} from "../../utils";

export const StepperActions = props => {

  const {
    onCancel = emptyFn,
    onFinish = emptyFn,
    onBack = emptyFn,
    onFinishDisabled = false,
    onValidateNext,
    finishButtonText,
  } = props;

  const {activeStep, setCurrentStepActive, stepCount} = React.useContext(StepperContext);
  const isLast = activeStep === stepCount;

  const next = async () => {
    if (onValidateNext) {
      const isValid = await onValidateNext();

      if (isValid) {
        setCurrentStepActive(value => value + 1);
      }

      return;
    }

    setCurrentStepActive(value => value + 1);
  };

  const back = useCallback(() => {
    if (onBack) {
      onBack();
    }

    setCurrentStepActive(value => value - 1);
  }, [setCurrentStepActive, onBack]);

  return (
    <div className={
      clsx("d-flex justify-content-end px-4 py-2", styles.buttonsContainer)}>
      <Button label="Cancelar" onClick={onCancel.bind(activeStep)} type="outline"/>
      {activeStep !== 1 && <Button label="Anterior" onClick={back} className="ml-4"/>}
      {isLast
        ? <Button label={finishButtonText} onClick={onFinish} disabled={onFinishDisabled} className="ml-4"/>
        : <Button label="Siguiente" onClick={next} className="ml-4"/>}
    </div>
  );
};

StepperActions.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  finishButtonText: PropTypes.string,
  onFinishDisabled: PropTypes.bool,
  onValidateNext: PropTypes.func,
  onCancel: PropTypes.func,
  onFinish: PropTypes.func,
  onBack: PropTypes.func
};

StepperActions.defaultProps = {
  onBack: emptyFn(),
  onCancel: emptyFn(),
}

export default React.memo(StepperActions);
