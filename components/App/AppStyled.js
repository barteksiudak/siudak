import styled from 'styled-components';

import {
  getStyleBreakpointBody,
  getStyleRowByTheme,
} from '../../factories';

export default styled.div(
  ({
    theme: {
      breakpoints: { lg: breakpoint },
      maxPageWidth: maxWidth,
    },
  }) => `
  > .container {
    margin: auto;
    display: flex;
    justify-content: center;
    ${getStyleRowByTheme({ maxWidth })}
    ${getStyleBreakpointBody(breakpoint, ['flex-direction: column;'])}
  }
`,
);
