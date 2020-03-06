import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Text from '../Text';
import Link from '../Link';
import FooterStyled from './FooterStyled';

export default function Footer({ id, title, titleHeader }) {
  return (
    <FooterStyled>
      <Text title center color="primary">
        {title}
      </Text>
      <div id={id} className="footerContainer">
        <Link
          alt={`${titleHeader} - Linkedin`}
          target="_blank"
          href="https://www.linkedin.com/pub/bartosz-siudak/5a/8a8/bb0"
        >
          <Icon
            name="linkedin"
            size="xBig"
            breakpoints={{ sm: { size: 'max' } }}
            color="linkedin"
          />
        </Link>
        <Link
          alt={`${titleHeader} - Facebook`}
          target="_blank"
          href="https://facebook.com/bartosz.siudak.5"
        >
          <Icon
            name="facebook"
            size="xBig"
            breakpoints={{ sm: { size: 'max' } }}
            color="facebook"
          />
        </Link>
        <Link
          alt={`${titleHeader} - Github`}
          target="_blank"
          href="https://github.com/barteksiudak"
        >
          <Icon
            name="github"
            size="xBig"
            breakpoints={{ sm: { size: 'max' } }}
            color="black"
          />
        </Link>
      </div>
    </FooterStyled>
  );
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  titleHeader: PropTypes.string.isRequired,
};
