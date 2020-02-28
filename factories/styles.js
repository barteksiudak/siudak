import kebabCase from 'lodash.kebabcase';

import { hasValue } from '../services';

export const getStyleByValue = (value = '') => {
  const type = typeof value;
  if (type === 'number') {
    return `${value}px`;
  }
  if (type === 'string') {
    return value;
  }
  return '';
};

export const getStyleByTheme = (value, theme = {}) => {
  if (!value && value !== 0) {
    return '';
  }
  const style = theme[value];

  return getStyleByValue(typeof style === 'undefined' ? value : style);
};

export const getStyleRowByTheme = (styleRowObject, theme = {}) => {
  const [styleKey] = Object.keys(styleRowObject);
  const styleValue = getStyleByTheme(styleRowObject[styleKey], theme);
  if (!styleKey || !styleKey) {
    return '';
  }

  return `${kebabCase(styleKey)}: ${styleValue};`;
};

export const getStyleBreakpointBody = (breakpoint, styles, min = false) => {
  if (!styles.length) {
    return '';
  }

  if (!breakpoint && breakpoint !== 0) {
    return '';
  }

  return `@media(${min ? 'min' : 'max'}-width: ${breakpoint}px) {${styles.join(
    '',
  )}}`;
};

// todo - testme
export const milisecondsToAnimationTime = (ms = 0) => `${ms / 1000}s`;

// todo -testme
export const joinAnimation = (animationTypes, time) => {
  const joinedAnimations = [...animationTypes, '']
    .join(` ${milisecondsToAnimationTime(time)},`)
    .slice(0, -1);
  return `transition: ${joinedAnimations};`;
};

export const convertBreakpointsToStyle = (
  breakpoints,
  theme,
  themeToStyleAdapter,
) => {
  if (!breakpoints || !theme) {
    return '';
  }

  const { breakpoints: themeBreakpoints, breakpointsArray } = theme;

  const filteredAndSortedBreakpoints = breakpointsArray
    .filter(({ name: breakpointName }) => hasValue(breakpoints[breakpointName]))
    .map(({ name: breakpointName }) => ({
      breakpointName,
      breakpointValue: themeBreakpoints[breakpointName],
      breakpointBodyStyles: breakpoints[breakpointName],
    }));

  return filteredAndSortedBreakpoints
    .map(({ breakpointValue, breakpointBodyStyles }) => {
      const minWidth = `min-width: ${getStyleByValue(breakpointValue)}`;

      return `@media(${minWidth}){${
        themeToStyleAdapter
          ? themeToStyleAdapter(breakpointBodyStyles)
          : breakpointBodyStyles
      }};`;
    })
    .join('');
};
