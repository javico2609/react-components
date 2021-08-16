import React from 'react';
import {storiesOf} from '@storybook/react';
import {boolean, number, text} from "@storybook/addon-knobs";
import Step from "./Step";
import {ErrorCircleIcon} from "../../icons";
import StepperContext from '../StepperContext';

const TITLE = 'Components/';

export const getProps = (props = {}) => (Object.assign({
  /**
   * @ignore
   */
  className: '',

}, props));

export const withKnobs = props => ({
  ...props,
  className: text("className", props.className),
  title: text("title", props.title),
  subTitle: text("subTitle", props.subTitle),
  index: number("index", props.index),
  active: boolean("active", props.active),
});

const contextValue = {activeStep: 1, stepCount: 1};

const render = (props = {}) => (
  <div style={{width: '400px'}}>
    <StepperContext.Provider value={contextValue}>
      <Step {...props} />
    </StepperContext.Provider>
  </div>
);

storiesOf(`${TITLE}Style Guide/Stepper`, module)
  .add('Step', () => render(withKnobs(getProps({
      title: 'Datos Generales',
      subTitle: 'Ingrese los datos solicitados',
      index: 2,
      active: true,
    })))
  )
  .add('StepIcon', () => render(withKnobs(getProps({
      title: 'Datos Generales',
      subTitle: 'Ingrese los datos solicitados',
      index: 1,
      icon: <ErrorCircleIcon fontSize="large" color="error"/>
    })))
  )
  .add('StepComplete', () => render(withKnobs(getProps({
      title: 'Datos Generales',
      subTitle: 'Ingrese los datos solicitados',
      index: 0,
    })))
  )
  .add('LastStep', () => render(withKnobs(getProps({
      title: 'Datos Generales',
      subTitle: 'Ingrese los datos solicitados',
      index: 1,
      last: true
    })))
  )
  .add('Step Error', () => render(withKnobs(getProps({
      title: 'Datos Generales',
      subTitle: 'Ingrese los datos solicitados',
      index: 1,
      error: true,
      isDirty: true
    })))
  );
