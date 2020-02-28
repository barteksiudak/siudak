import React from 'react';
import PropTypes from 'prop-types';

import fill from 'lodash.fill';

import Icon from '../Icon';
import Text from '../Text';
import StarsStyled from './StarsStyled';

export default function Stars({ title, filledStarsNum, allStarsNum }) {
  return (
    <StarsStyled>
      <Text as="div" size="normal">
        {title}
      </Text>
      <div className="stars-container">
        {fill(new Array(allStarsNum)).map((_, i) => (
          <Icon
            // eslint-disable-next-line react/no-array-index-key
            key={`star-${title}-${i}`}
            name={`star${filledStarsNum <= i ? '' : 'Filled'}`}
            color="gold"
            inline
            size="normal"
          />
        ))}
      </div>
    </StarsStyled>
  );
}

Stars.propTypes = {
  title: PropTypes.string,
  allStarsNum: PropTypes.number.isRequired,
  filledStarsNum: PropTypes.number,
};

Stars.defaultProps = {
  filledStarsNum: 0,
  title: null,
};
