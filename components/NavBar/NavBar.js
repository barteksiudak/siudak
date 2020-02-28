import React from 'react';
import PropTypes from 'prop-types';

import NavBarStyled from './NavBarStyled';

export default function NavBar({ content }) {
  return (
    <NavBarStyled>
      <ul>
        {content.map(({ title, path }) => (
          <li key={title}>
            <h2>
              <a href={`#${path}`}>{title}</a>
            </h2>
          </li>
        ))}
      </ul>
    </NavBarStyled>
  );
}

NavBar.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string }),
  ).isRequired,
};
