import React from 'react';
import {storiesOf} from '@storybook/react';
import {optionsKnob as options, text} from "@storybook/addon-knobs";

import NumberTag from './NumberTag';

const TITLE = 'Components/';

export const getProps = (props = {}) => (Object.assign({
    /**
     * @ignore
     */
    className: '',
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
     * @default 'inherit'
     * oneOf(['disabled', 'error', 'inherit', 'primary', 'secondary'])
     */
    color: 'primary',
    /**
     * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
     * @default 'default'
     * PropTypes.oneOf(['default', 'inherit', 'large', 'small'])
     */
    fontSize: 'default',
}, props));

const colorOptions = {
    default: 'default',
    disabled: 'disabled',
    error: 'error',
    outline: 'outline',
    primary: 'primary'
};

const fontSize = {
    default: 'default',
    large: 'large',
    small: 'small'
};

export const withKnobs = props => ({
    className: text("className", props.className),
    color: options('color', colorOptions, 'primary', {display: 'select'}),
    fontSize: options('fontSize', fontSize, 'default', {display: 'select'})
});

const render = (props = {}) => (
    <NumberTag {...props} />
);

storiesOf(`${TITLE}Style Guide`, module)
    .add('Number Tag', () => {
        return render(withKnobs(getProps({
            className: 'my-auto'
        })));
    })
;
