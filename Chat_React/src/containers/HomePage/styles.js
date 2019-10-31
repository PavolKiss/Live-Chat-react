import styled from "styled-components";
import * as variable from "../../variables-css/variables";
import { Link } from "@reach/router";

export const Row = styled.div`
  margin: 0 auto;
  max-width: 170rem;
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const Col_1_of_2 = styled.div`
  width: calc((100% - 6rem) / 2);
  float: left;
  &:not(:last-child) {
    margin-right: 6rem;
  }
`;

export const HomePageText = styled.h1`
  font-size: 14rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 5rem;
`;

export const HomePageContext = styled.h2`
  font-size: 2rem;
  max-width: 85rem;
  font-weight: lighter;
`;

export const HomePageButton = styled(Link)`
  position: relative;
  top: 4rem;
  outline: none;
  border: 0.2rem solid ${variable.lightBlue};
  cursor: pointer;
  margin-top: 3.5rem;
  text-decoration: none;
  padding: 2rem 4rem;
  border-radius: 0.5rem;
  font-size: 1.8rem;
  background: linear-gradient(
    to right,
    ${variable.lightBlue} 0%,
    ${variable.darkBlue} 51%,
    ${variable.darkBlue} 100%
  );
  color: white;
  font-weight: bold;
  &:hover {
    background: linear-gradient(
      to right,
      ${variable.darkBlue} 0%,
      ${variable.darkBlue} 51%,
      ${variable.lightBlue} 100%
    );
  }
`;

export const HomePageImage = styled.img`
  width: 92rem;
`;
