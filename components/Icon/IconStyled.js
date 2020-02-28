import styles from 'styled-components';

import { getStyleRowByTheme, convertBreakpointsToStyle } from '../../factories';

const sizeBreakpointAdapter = sizes => ({ size: breakpointSize }) =>
  [
    getStyleRowByTheme({ width: breakpointSize }, sizes),
    getStyleRowByTheme({ height: breakpointSize }, sizes),
  ].join('');

const IconStyled = styles.div`
  ${({
    theme: { size: sizes, color: colors },
    theme,
    size,
    cursor,
    color,
    backgroundColor,
    top,
    inline,
    breakpoints,
  }) => `
    position: relative;
    ${getStyleRowByTheme({ cursor })}
    ${getStyleRowByTheme({ top })}
    ${getStyleRowByTheme({ display: inline && 'inline' })}

    & svg {
      ${getStyleRowByTheme({ width: size }, sizes)}
      ${getStyleRowByTheme({ height: size }, sizes)}

      ${convertBreakpointsToStyle(
        breakpoints,
        theme,
        sizeBreakpointAdapter(sizes),
      )}

      > path:first-child {
        ${getStyleRowByTheme({ fill: backgroundColor }, colors)};
      }

      > path:last-child {
        ${getStyleRowByTheme({ fill: color }, colors)};
      }
    }
  `}
`;

export default IconStyled;
