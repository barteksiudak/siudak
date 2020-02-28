import { createGlobalStyle } from 'styled-components';

import { getStyleRowByTheme } from '../../factories';

export default createGlobalStyle(
  ({ theme: { size, color } }) => `
  @import url('/fonts.css');

  html {
    scroll-behavior: smooth;
    ${getStyleRowByTheme({ fontSize: 'small' }, size)}
    font-family: font-regular, sans-serif;
    line-height: 1.6;
    body {
      margin: 0;
      padding: 0;
      ${getStyleRowByTheme({ backgroundColor: 'darker' }, color)}
      ${getStyleRowByTheme({ color: 'normal' }, color)}
    }
  }

  * {
    box-sizing: border-box;
  }
`,
);
