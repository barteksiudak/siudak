import styled from 'styled-components';

import { getStyleByValue } from '../../factories';

export default styled.div`
  flex: 1;
  padding: 0 ${({ theme: { gutter } }) => getStyleByValue(gutter)};
`;
