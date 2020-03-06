import React from 'react';
import PropTypes from 'prop-types';

import LinkStyled from './LinkStyled';

export default function Link({ href, alt, children, target, tabIndex }) {
  return (
    <LinkStyled href={href} alt={alt} target={target} tabIndex={tabIndex}>
      {children}
    </LinkStyled>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  tabIndex: PropTypes.number,
};

Link.defaultProps = {
  target: '_self',
  tabIndex: null,
};
