import styled, { css } from 'styled-components';

export const TagBody = styled.li<{ extend: boolean }>`
  list-style: none;
  display: inline-block;
  position: relative;

  img {
    width: 30px;
    height: 30px;
    box-shadow: none;

    @media ${({ theme }) => theme.media.mobile} {
      width: 40px;
      height: 40px;
    }

    @media ${({ theme }) => theme.media.tablet} {
      width: 50px;
      height: 50px;
    }
  }

  ${({ extend }) =>
    extend &&
    css`
      display: flex;
      flex-direction: row;
      width: 100%;
      min-width: 200px;

      img {
        width: 70px;
        height: 70px;
        box-shadow: none;
      }
    `}
`;

export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 120px;
  height: 100px;
  overflow: hidden;

  h5 {
    font-size: 12px;
    color: ${({ theme }) => theme.palette.accent};
  }
`;

export const DescriptionBox = styled.p`
  display: flex;
  align-items: center;
  text-align: left;
  padding-left: 24px;
  height: 80px;
  width: calc(100% - 120px);
`;

export const CustomLabel = styled.div`
  position: absolute;
  text-align: center;
  top: 55px;
  left: 0;
  width: auto;
  min-width: 100px;
  color: black;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.palette.accentActive};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.palette.background};
  z-index: ${({ theme }) => theme.zIndex.high};
  box-shadow: ${({ theme }) => theme.palette.closeShadow};
`;
