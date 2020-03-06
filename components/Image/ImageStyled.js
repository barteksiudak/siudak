import styled from 'styled-components';
import { getStyleRowByTheme } from '../../factories';

export default styled.img(
  ({
    theme: { size: sizes, color: colors },
    circle,
    borderWidth,
    borderColor,
    borderStyle,
  }) => `
  max-width: 100%;
  ${getStyleRowByTheme({ borderWidth }, sizes)}
  ${getStyleRowByTheme({ borderColor }, colors)}
  ${getStyleRowByTheme({ borderStyle })}
  ${getStyleRowByTheme({ borderRadius: circle && '50%' })}
`,
);
