import React from 'react';
import PropTypes from 'prop-types';

import Link from '../Link';
import NavBarStyled from './NavBarStyled';

export default function NavBar({ content, tabIndexRef }) {
  return (
    <NavBarStyled>
      <ul>
        {content.map(({ title, path }) => {
          const { current: tabIndex } = tabIndexRef;
          // eslint-disable-next-line no-param-reassign
          tabIndexRef.current += 1;

          return (
            <li key={title}>
              <h2>
                <Link alt={title} href={`#${path}`} tabIndex={tabIndex}>
                  {title}
                </Link>
              </h2>
            </li>
          );
        })}
      </ul>
    </NavBarStyled>
  );
}

NavBar.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string }))
    .isRequired,
  tabIndexRef: PropTypes.shape({ current: PropTypes.number.isRequired })
    .isRequired,
};
