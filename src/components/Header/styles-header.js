import styled from "styled-components";
import { Link } from "@reach/router";

export const Navigation = styled.nav`
  width: 100%;
  height: 8rem;
  border-bottom: 0.2rem solid #e6e6e6;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 160rem;
  position: relative;
  height: 100%;
`;

export const List = styled.ul`
  float: right;
`;

export const ListItem = styled.li`
  display: inline-block;
  &:hover {
    border-bottom: 0.2rem solid #3a7bd5;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  color: black;
  font-size: 1.6rem;
  padding: 3rem 3.5rem;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    transition: color 0.2s;
    color: #3a7bd5;
  }
`;
