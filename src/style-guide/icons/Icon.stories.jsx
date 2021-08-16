import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, optionsKnob as options, text } from '@storybook/addon-knobs';
import { CheckCircleIcon, ErrorCircleIcon } from './index';

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
    /**
     * Applies a color attribute to the SVG element.
     */
    htmlColor: 'red',
    /**
     * The shape-rendering attribute. The behavior of the different options is described on the
     * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
     * If you are having issues with blurry icons you should investigate this prop.
     * PropTypes.oneOf('auto', 'optimizeSpeed', 'crispEdges', 'geometricPrecision')
     */
    shapeRendering: 'auto',
    /**
     * Provides a human-readable title for the element that contains it.
     * https://www.w3.org/TR/SVG-access/#Equivalent
     */
    titleAccess: 'some readable title',
    /**
     * Allows you to redefine what the coordinates without units mean inside an SVG element.
     * For example, if the SVG element is 500 (width) by 200 (height),
     * and you pass viewBox="0 0 50 20",
     * this means that the coordinates inside the SVG will go from the top left corner (0,0)
     * to bottom right (50,20) and each unit will be worth 10px.
     * @default '0 0 24 24'
     */
    viewBox: '0 0 24 24',

    fill: '#0373B8',
}, props));

const colorOptions = {
    disabled: 'disabled',
    error: 'error',
    inherit: 'default',
    primary: 'primary',
    white: 'white',
};

const shapeRendering = {
    auto: 'auto',
    optimizeSpeed: 'optimizeSpeed',
    crispEdges: 'crispEdges',
    geometricPrecision: 'geometricPrecision'
};

const fontSize = {
    xxLarge: 'xxLarge',
    default: 'default',
    large: 'large',
    small: 'small'
};

export const withKnobs = props => ({
    ...props,
    className: text("className", props.className),
    color: options('color', colorOptions, props.color, {display: 'select'}),
    shapeRendering: options('shapeRendering', shapeRendering, 'auto', {display: 'select'}),
    fontSize: options('fontSize', fontSize, 'default', {display: 'select'}),
    disabled: boolean("Disabled", false),
});

storiesOf(`${TITLE}Style Guide/Icons`, module)
    .add('CheckCircleIcon', () => <CheckCircleIcon {...withKnobs(getProps())}/>)
    .add('ErrorCircleIcon', () => <ErrorCircleIcon{...withKnobs(getProps({color: 'error'}))}/>);
