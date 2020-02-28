import React from 'react';
import PropTypes from 'prop-types';

import ImageStyled from './ImageStyled';

export default function Image({ src, alt, type }) {
  return <ImageStyled src={src} alt={alt} type={type} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Image.defaultProps = {
  type: 'default',
};
