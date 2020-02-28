import styled from 'styled-components';

import { getStyleRowByTheme } from '../../factories';

export default styled.div(
  ({ theme: { color: colors } }) => `
  position: fixed;
  height: calc(100vh + 400px);
  width: 40%;
  z-index: 1000;
  ${getStyleRowByTheme({ backgroundColor: 'middle' }, colors)}
  left: 7%;
  transform: rotate(15deg);
  top: -200px;
  z-index: -1;

  > div {
    height: 100%;
    ${getStyleRowByTheme({ backgroundColor: 'dark' }, colors)}
    width: 25%;
  }
`,
);
