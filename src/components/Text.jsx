import styled from 'styled-components/macro';
import { device } from '../utils/device';

const defaultSize = 1;
const increments = {
  default: 0.4,
  laptop: 0.35,
  tablet: 0.3,
  mobile: 0.2,
};

const setColor = ({ theme, dark }) => {
  const { color } = theme;
  dark = dark || false;

  return dark ? color.dark : color.light;
};

const setWeight = ({ bold }) => {
  bold = bold || false;

  return bold ? '700' : '300';
};

const setFontSize = ({ size }, increment) => {
  size = size || 1;

  return `${defaultSize + increment * (size - 1)}em`;
};

const setAlign = ({ align }) => {
  return align || 'inherit';
};

const Text = styled.div`
  line-height: 1.2em;
  font-family: ${({ theme }) => theme.font.main};
  color: ${setColor};
  font-size: ${props => setFontSize(props, increments.default)};
  font-weight: ${setWeight};
  text-align: ${setAlign};

  ${device.laptop} {
    font-size: ${props => setFontSize(props, increments.laptop)};
  }

  ${device.tablet} {
    font-size: ${props => setFontSize(props, increments.tablet)};
  }

  ${device.mobile} {
    font-size: ${props => setFontSize(props, increments.mobile)};
  }
`;

export default Text;
