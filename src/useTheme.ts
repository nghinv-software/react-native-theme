/**
 * Created by nghinv on Sun May 30 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */

import { useCallback, useContext } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeContext } from './ThemeContext';
import type { ThemeMode, ThemeType } from './types';

function useTheme() {
  const { themes, themeMode, setThemeMode } = useContext(ThemeContext);
  const colorScheme = useColorScheme();

  const setAppTheme = useCallback(
    (value: ThemeMode) => {
      setThemeMode(value);
    },
    [setThemeMode]
  );

  /**
   * Set theme to dark or light
   */
  const toggleThemeMode = useCallback(() => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  }, [themeMode, setThemeMode]);

  const currentThemeMode =
    themeMode === 'default'
      ? colorScheme === 'dark'
        ? 'dark'
        : 'light'
      : themeMode;
  const theme = themes[currentThemeMode] as ThemeType;

  return {
    theme,
    themeMode,
    setThemeMode: setAppTheme,
    toggleThemeMode,
  };
}

export { useTheme };
