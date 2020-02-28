import styled from 'styled-components';

import {
  getStyleRowByTheme,
  getStyleByTheme,
  getStyleByValue,
} from '../../factories';

export default styled.footer(
  ({
    theme: {
      color: colors,
      padding: paddings,
      gutter,
      maxPageWidth: maxWidth,
    },
  }) => `

  ${getStyleRowByTheme({ backgroundColor: 'middle' }, colors)}
  ${getStyleRowByTheme({ marginTop: 'large' }, paddings)}
  padding: ${getStyleByTheme('large', paddings)} 0;

  > .footerContainer {
    display: flex;
    justify-content: space-between;
    align-self: stretch;
    ${getStyleRowByTheme({ maxWidth })}
    margin: auto;
    padding: 0 ${getStyleByValue(gutter)};
  }
`,
);
