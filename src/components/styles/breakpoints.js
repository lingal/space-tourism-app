import { css } from 'styled-components';

export const breakpoints = (
  cssProp = 'font-size',
  cssPropUnits = 'rem',
  values = [
    {
      1024: 0
    },
    {
      768: 0
    }
  ],
  mediaQueryType = 'min-width'
) => {
  const breakpointProps = values.reduce((mediaQueries, value) => {
    const [screenBreakpoint, cssPropBreakpoint] = [
      Object.keys(value)[0],
      Object.values(value)[0]
    ];

    return (mediaQueries += ` @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
      ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
    }
    `);
  }, '');
  return css([breakpointProps]);
};
