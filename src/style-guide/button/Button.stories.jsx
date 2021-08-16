import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object, text } from "@storybook/addon-knobs";
import { Button, defaultTheme } from './Button';

const TITLE = 'Components/';

export const getProps = (props = {}) => (Object.assign({
  theme: defaultTheme,
  disabled: false,
  icon: null,
  label: "Button"
}, props));

export const withKnobs = props => ({
  theme: object("Theme", props.theme),
  icon: object("Icon", props.icon),
  disabled: boolean("Disabled", false),
  label: text("Label", props.label)
});

const render = (props = {}) => (
  <Button {...props} />
);

storiesOf(`${TITLE}Style Guide`, module).add('Button', () => render(withKnobs(getProps())));
