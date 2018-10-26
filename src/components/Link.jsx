import _Link from 'gatsby-link';
import styled from 'styled-components';

const Link = styled(_Link)`
  text-decoration: none;
  color: ${props => props.theme.color.light};
  font-family: ${props => props.theme.font.main};

  &:visited {
    text-decoration: none;
  }
`;

export default Link;
