import { convertBreakpointsToStyle } from '../styles';
import theme from '../../themes/main';

describe('convertBreakpointsToStyle', () => {
  const {
    breakpoints: { sm, md, lg, xl },
  } = theme;
  const stylesMock = 'styles mock';
  const stylesMock1 = 'styles mock1';

  it('is convertBreakpointsToStyle', () => {
    expect(convertBreakpointsToStyle()).toBe('');
  });

  it('has only sm breakpoint', () => {
    expect(convertBreakpointsToStyle({ sm: stylesMock }, theme)).toBe(
      `@media(min-width: ${sm}px){${stylesMock}};`,
    );
  });
  it('has sm and lg breakpoints', () => {
    expect(
      convertBreakpointsToStyle({ sm: stylesMock, lg: stylesMock1 }, theme),
    ).toBe(
      [
        `@media(min-width: ${sm}px){${stylesMock}};`,
        `@media(min-width: ${lg}px){${stylesMock1}};`,
      ].join(''),
    );
  });
  it('has all breakpoints and call an adapter', () => {
    const adapterMock = jest.fn(attr => attr);
    expect(
      convertBreakpointsToStyle(
        { sm: stylesMock, lg: stylesMock1, md: stylesMock1, xl: stylesMock },
        theme,
        adapterMock,
      ),
    ).toBe(
      [
        `@media(min-width: ${sm}px){${stylesMock}};`,
        `@media(min-width: ${md}px){${stylesMock1}};`,
        `@media(min-width: ${lg}px){${stylesMock1}};`,
        `@media(min-width: ${xl}px){${stylesMock}};`,
      ].join(''),
    );
    expect(adapterMock).toHaveBeenCalledTimes(4);
  });
});
