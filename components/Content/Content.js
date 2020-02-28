import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Description from './DescriptionContainer';

import ContentStyled from './ContentStyled';
import Image from '../Image';

export default function Content({ content, title: contentTitle }) {
  return (
    <ContentStyled>
      <Text title color="primary" center>
        {contentTitle}
      </Text>
      <Image
        src="/images/profile.jpg"
        alt={contentTitle}
        type="profile"
      />
      {content.map(({ title, path, type, description }) => (
        <Description
          key={`content-${title}`}
          title={title}
          path={path}
          type={type}
          description={description}
        />
      ))}
    </ContentStyled>
  );
}

Content.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      type: PropTypes.string,
      description: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.shape({
            title: PropTypes.string,
            rate: PropTypes.string,
          }),
          PropTypes.string,
        ]),
      ),
    }),
  ).isRequired,
};
