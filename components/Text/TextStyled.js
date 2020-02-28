import styled from 'styled-components';
import { getStyleRowByTheme } from '../../factories';

export default styled.div(
  ({
    theme: {
      color: colors,
      padding,
      size: sizes,
      indent: indentValue,
    },
    color,
    indent,
    center,
    size,
  }) => `
  ${getStyleRowByTheme({ color }, colors)}
  ${getStyleRowByTheme(
    { textIndent: indent && indentValue },
    padding,
  )}
  ${getStyleRowByTheme({ fontSize: size }, sizes)}
  ${center ? 'display: block; text-align: center;' : ''}
  `,
);
