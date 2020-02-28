import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Description from './Description';

export default function DescriptionContainer({
  title,
  path,
  type,
  description,
}) {
  if (!description.length) {
    return null;
  }

  return (
    <div key={`content-${title}`}>
      <Text id={path} title color="light">
        {title}
      </Text>
      <Description type={type}>{description}</Description>
    </div>
  );
}

DescriptionContainer.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        title: PropTypes.string,
        rate: PropTypes.string,
      }),
      PropTypes.string,
    ]),
  ).isRequired,
};
