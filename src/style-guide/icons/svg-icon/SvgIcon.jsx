import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './SvgIcon.module.scss';
import {capitalize} from "../../utils";

const SvgIcon = React.forwardRef(function SvgIcon(props, ref) {
  const {
    children,
    fontSize = 'default',
    htmlColor,
    color = 'default',
    className,
    component: Component = 'svg',
    titleAccess,
    viewBox = '0 0 24 24',
    ...other
  } = props;

  const classes = {
    'colorDefault': 'primary',
    'colorPrimary': 'primary',
    'colorWhite': 'white',
    'colorError':  'error',
    'colorWarning': 'warning',
    'colorDisabled': 'gray-200',
    'fontDefault': styles.sizeDefault,
    'fontSmall': styles.sizeSmall,
    'fontLarge': styles.sizeLarge,
    'fontXxLarge': styles.xxLarge
  };

  const applyFontSize = classes[`font${capitalize(fontSize)}`];

  return (
    <Component
      className={clsx(
        [styles.svgIcon],
        [classes[`color${capitalize(color)}`]],
        applyFontSize,
        className
      )}
      focusable="false"
      viewBox={viewBox}
      color={htmlColor}
      aria-hidden={titleAccess ? undefined : true}
      role={titleAccess ? 'img' : undefined}
      ref={ref}
      {...other}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </Component>
  );
});

SvgIcon.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: PropTypes.oneOf(['disabled', 'error', 'default', 'primary']),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'default'
   */
  fontSize: PropTypes.oneOf(['default', 'large', 'small', 'xxLarge']),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: PropTypes.string,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: PropTypes.string,
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: PropTypes.string,
};

export default SvgIcon;
