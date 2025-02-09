import { ArrowLeft } from '@styled-icons/fa-solid/ArrowLeft';
import Image from 'next/image';
import Link from 'next/link';
import ReactPlayer from 'react-player/lazy';
import styled, { css } from 'styled-components';

export const StoryCoverBody = styled.section<{ backgroundColor: string }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.veryTop};
  width: 100dvw;
  height: 100dvh;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-sizing: border-box;
  overflow: clip;
`;

export const SummaryLayer = styled.div<{ $layout: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: ${({ $layout }) => ($layout ? 'flex-end' : 'flex-start')};
  width: 100dvw;
  height: auto;
  padding: 0;
  z-index: ${({ theme }) => theme.zIndex.medium};

  @media ${({ theme }) => theme.media.laptop} {
    padding: 5dvw;
  }
`;

export const SummaryCard = styled.div<{ $decor?: string }>`
  width: 55vw;
  min-width: 360px;
  height: auto;
  padding: 24px 0 48px;
  overflow: clip;
  background-color: antiquewhite;
  box-shadow: ${({ theme }) => theme.palette.wideShadow};
  text-align: center;

  @media ${({ theme }) => theme.media.laptop} {
    width: 45vw;
    max-height: 80vh;
    border-radius: 10px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 40dvw;
  }

  ${({ $decor }) =>
    $decor &&
    css`
      background-image: url(${$decor});
      background-position: bottom center;
      background-size: cover;
      background-repeat: no-repeat;
    `}
`;

export const LogoPositioner = styled.div<{ $layout: boolean }>`
  position: absolute;
  top: 12px;
  display: block;

  ${({ $layout }) =>
    $layout
      ? css`
          left: 6px;

          @media ${({ theme }) => theme.media.laptop} {
            right: 12px;
          }

          @media ${({ theme }) => theme.media.desktop} {
            left: 24px;
          }
        `
      : css`
          right: 6px;

          @media ${({ theme }) => theme.media.laptop} {
            right: 12px;
          }

          @media ${({ theme }) => theme.media.desktop} {
            right: 24px;
          }
        `};

  img {
    width: 160px;
    height: 30px;
  }

  @media ${({ theme }) => theme.media.laptop} {
    img {
      width: 200px;
      height: 40px;
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    img {
      width: 240px;
      height: 45px;
    }
  }
`;

export const MainContent = styled.div`
  padding: 20px;
  height: calc(100dvh - 28px);
  overflow-x: clip;
  overflow-y: auto;

  @media ${({ theme }) => theme.media.laptop} {
    padding: 10px 20px;
    height: auto;
    max-height: 70dvh;
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: 20px 40px;
    overflow-y: hidden;
  }
`;

export const BlurPicture = styled(Image)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  object-fit: cover;
  filter: blur(1.5rem);
`;

export const AnimatedPicture = styled(ReactPlayer)`
  position: fixed;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: ${({ theme }) => theme.zIndex.standard};

  video {
    object-fit: cover;
  }
`;

export const Title = styled.h1`
  font-size: 24px;

  @media ${({ theme }) => theme.media.laptop} {
    font-size: 30px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 44px;
  }
`;

export const Credits = styled.div`
  font-size: 12px;
  margin: 5px 0;

  p {
    margin: 5px 0;
  }

  a {
    color: ${({ theme }) => theme.palette.green};
    font-weight: 700;

    svg {
      display: inline;
      width: 12px;
    }
  }

  @media ${({ theme }) => theme.media.laptop} {
    font-size: 13px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 14px;
  }
`;

export const BookExcerpt = styled.p`
  font-size: 12px;
  line-height: 1.5;
  margin: 5px 0;

  @media ${({ theme }) => theme.media.tablet} {
    font-size: 14px;
    line-height: 1.75;
    margin: 10px 0;
  }

  @media ${({ theme }) => theme.media.desktop} {
    font-size: 16px;

    margin: 20px 0;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  margin: 24px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  align-items: center;
  align-self: flex-end;

  @media ${({ theme }) => theme.media.tablet} {
    margin: 34px 0;
  }

  @media ${({ theme }) => theme.media.laptop} {
    margin: 32px 0;
  }
`;

export const TagListPositioner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
`;

export const BackLink = styled(Link)`
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.green};
  transition: all 5ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.palette.lightergreen};
  }
`;
export const ArrowLeftIcon = styled(ArrowLeft)`
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;
