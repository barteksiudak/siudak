import React from 'react';
import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';

import IconStyled from './IconStyled';

const Icon = ({
  name,
  theme: { icon },
  size,
  color,
  cursor,
  backgroundColor,
  rotate,
  top,
  inline,
  breakpoints,
}) => {
  const { [name]: iconSvgString } = icon;

  if (!iconSvgString) {
    return null;
  }

  const dangerousHtml = {
    __html: iconSvgString,
  };

  return (
    <IconStyled
      dangerouslySetInnerHTML={dangerousHtml}
      size={size}
      color={color}
      cursor={cursor}
      backgroundColor={backgroundColor}
      rotate={rotate}
      top={top}
      inline={inline}
      breakpoints={breakpoints}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
  ]),
  color: PropTypes.string,
  cursor: PropTypes.string,
  backgroundColor: PropTypes.string,
  rotate: PropTypes.oneOf([0, 90, 180, 270]),
  top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  theme: PropTypes.shape({
    icon: PropTypes.shape({}),
    breakpointsArray: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  inline: PropTypes.bool,
  breakpoints: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ),
  ),
};

Icon.defaultProps = {
  cursor: 'pointer',
  size: 'large',
  color: 'primary',
  backgroundColor: 'transparent',
  rotate: 0,
  top: 'initial',
  inline: false,
  breakpoints: null,
};

export default withTheme(Icon);
