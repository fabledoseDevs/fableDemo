import type React from 'react';
import { useEffect, useState } from 'react';

import type { UseStory as UseStoryType } from './Story.types';

export const useStory: UseStoryType = storyContent => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [backgroundSlide, setBackgroundSlide] = useState<number>(1);
  const [settingsVisibility, setSettingsVisibility] = useState<boolean>(false);
  const [exitVisibility, setExitVisibility] = useState<boolean>(false);
  const [fullscreen, setFullscreen] = useState<boolean>();
  const [inputShown, setInputShown] = useState(false);

  const switchSlideBack = () => {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
      setBackgroundSlide(currentSlide);
    }
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = Number(event.target.value);
    if (inputVal >= 1 && inputVal <= storyContent.length)
      setCurrentSlide(inputVal - 1);
  };

  const switchToInput = () => setInputShown(true);

  const switchToSpan = () => setInputShown(false);

  const switchSlideForward = () => {
    if (currentSlide !== storyContent.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setBackgroundSlide(currentSlide);
    }
  };

  const handleKeyDown = (event: {
    preventDefault: () => void;
    key: string;
  }) => {
    event.preventDefault();
    switch (event.key) {
      case 'ArrowRight':
        switchSlideForward();
        break;
      case 'ArrowLeft':
        switchSlideBack();
        break;
      default:
        return;
    }
  };

  const toggleFullscreen = () => {
    const requestFullscreen = document.documentElement
      .requestFullscreen()
      .then(() => {
        setFullscreen(true);
      });

    const exitFullscreen =
      fullscreen &&
      document.exitFullscreen().then(() => {
        setFullscreen(false);
      });

    return document.fullscreenElement ? exitFullscreen : requestFullscreen;
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, { passive: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  return {
    currentSlide,
    setCurrentSlide,
    backgroundSlide,
    switchToInput,
    inputShown,
    handleInput,
    switchToSpan,
    settingsVisibility,
    setSettingsVisibility,
    exitVisibility,
    setExitVisibility,
    fullscreen,
    toggleFullscreen,
    switchSlideBack,
    switchSlideForward,
  };
};
