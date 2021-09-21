import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;