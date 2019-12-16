import styled from "styled-components";

export const OverlayWrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
`;

export const ModalWrapper = styled.div`
  padding: 2rem 3rem;
  min-width: 40%;
  max-width: 40%;
  min-height: 50%;
  max-height: 50%;
  overflow-y: auto;
  position: relative;
  min-height: 330px;
  margin: 10% auto;
  background: #fff;
  z-index: 9999;
`;

export const ButtonClose = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  font-size: 4rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  font-size: 1.6rem;
  text-align: center;
  color: black;
`;
