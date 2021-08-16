import React from 'react';
import {storiesOf} from '@storybook/react';
import {array} from "@storybook/addon-knobs";
import ErrorAlert from "./ErrorAlert";

const TITLE = 'Components/';

export const withKnobs = () => ({
  message: array("Messages", [
    "El campo nombre es requerido",
    "El campo correo no tiene el formato válido",
    "El RUT le falta el código verificador"
  ])
});

const render = (props = {}) => (
  <ErrorAlert {...props} />
);

storiesOf(`${TITLE}Style Guide`, module).add('ErrorAlert', () => render(withKnobs()));