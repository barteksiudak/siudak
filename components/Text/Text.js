import React from 'react';
import PropTypes from 'prop-types';

import TextStyled from './TextStyled';

export default function Text({
  id,
  children,
  title,
  color,
  indent,
  center,
  size,
  as,
}) {
  // eslint-disable-next-line react/no-danger
  return (
    <TextStyled
      id={id}
      as={title ? 'h2' : as}
      dangerouslySetInnerHTML={{ __html: children }}
      color={color}
      indent={indent}
      center={center}
      size={size}
    />
  );
}

Text.propTypes = {
  id: PropTypes.string,
  title: PropTypes.bool,
  indent: PropTypes.bool,
  color: PropTypes.string,
  center: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  as: PropTypes.string,
  size: PropTypes.string,
};

Text.defaultProps = {
  id: null,
  title: false,
  color: null,
  indent: false,
  center: false,
  as: 'div',
  size: null,
};
