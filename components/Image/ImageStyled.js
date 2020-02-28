import styled from 'styled-components';

export default styled.img(({ theme: { image }, type }) =>
  Object.entries(image[type])
    .map(([name, value]) => `${name}: ${value};`)
    .join(''),
);
