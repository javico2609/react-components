import React from 'react';
import {storiesOf} from '@storybook/react';
import {number, text} from "@storybook/addon-knobs";

import Stepper from './Stepper';
import Step from './step/Step';

const TITLE = 'Components/';

export const getProps = (props = {}) => (Object.assign({
  /**
   * @ignore
   */
  className: '',
  activeStep: 1,
}, props));

export const withKnobs = props => ({
  className: text("className", props.className),
  activeStep: number('active step', props.activeStep),
});

const render = (props = {}) => (
  <div className="px-4 py-2 w-full h-full flex-center flex" style={{height: '500px'}}>
    <Stepper {...props}>
      <Step title="Datos Generales" subTitle="Ingrese los datos solicitados">
        <div>
          <h1>Contenido del Step Datos Generales</h1>
        </div>
      </Step>
      <Step title="Forma de Pago" subTitle="Seleccione forma de pago">
        <h1>Contenido del Step Forma de Pago</h1>
      </Step>
      <Step title="Resumen" subTitle="Verifique los datos de su solicitud">
        <h1>Contenido del Step Resumen</h1>
      </Step>
    </Stepper>
  </div>
);

storiesOf(`${TITLE}Style Guide/Stepper`, module)
  .add('Stepper', () => {
    return render(withKnobs(getProps()));
  })
;
