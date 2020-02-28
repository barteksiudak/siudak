import styled from 'styled-components';

import {
  getStyleRowByTheme,
  getStyleBreakpointBody,
} from '../../factories';

export default styled.div(
  ({
    theme: {
      padding: paddings,
      breakpoints: { lg: breakpoint },
    },
  }) => `
  line-height: 1;
  > .stars-container {
    white-space: nowrap;
    ${getStyleRowByTheme({ marginLeft: 'normal' }, paddings)}
  }

  ${getStyleBreakpointBody(
    breakpoint,
    ['display: flex;', 'align-items: center;'],
    true,
  )}
`,
);
