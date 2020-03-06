import React from 'react';
import PropTypes from 'prop-types';

import ImageStyled from './ImageStyled';

export default function Image({
  src,
  alt,
  circle,
  borderStyle,
  borderColor,
  borderWidth,
}) {
  return (
    <ImageStyled
      src={src}
      alt={alt}
      circle={circle}
      borderStyle={borderStyle}
      borderColor={borderColor}
      borderWidth={borderWidth}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  circle: PropTypes.bool,
  borderStyle: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.string,
};

Image.defaultProps = {
  circle: false,
  borderStyle: 'solid',
  borderColor: null,
  borderWidth: null,
};
