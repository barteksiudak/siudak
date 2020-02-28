import styled from 'styled-components';

import {
  getStyleBreakpointBody,
  getStyleRowByTheme,
} from '../../factories';

export default styled.div(
  ({
    theme: {
      color: colors,
      breakpoints: { lg: breakpoint },
    },
  }) => `
    flex: 1;

    > ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      padding: 0 30px;

      ${getStyleBreakpointBody(
        breakpoint,
        ['position: fixed;', 'top: 0;'],
        true,
      )}

      a {
        ${getStyleRowByTheme({ color: 'info' }, colors)}

        &:visited: {
          ${getStyleRowByTheme({ color: 'info' }, colors)}
        }

        &:hover,
        &:active {
          ${getStyleRowByTheme({ color: 'light' }, colors)}
        }
      }
    }

  `,
);
