import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Stars from '../Stars';

export default function Description({ type, children: description }) {
  if (!description.length) {
    return null;
  }
  switch (type) {
    case 'rating':
      return description.map(({ title, rate }) => {
        const [filledStarsNum, allStarsNum] = rate.split('/');
        return (
          <div key={`star-${title}`}>
            <Stars
              title={title}
              filledStarsNum={parseInt(filledStarsNum, 10)}
              allStarsNum={parseInt(allStarsNum, 10)}
            />
          </div>
        );
      });
    default:
      return <Text indent>{description.join('<br />')}</Text>;
  }
}

Description.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        title: PropTypes.string,
        rate: PropTypes.string,
      }),
      PropTypes.string,
    ]),
  ).isRequired,
};
