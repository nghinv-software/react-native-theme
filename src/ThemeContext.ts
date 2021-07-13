/**
 * Created by nghinv on Sun May 30 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */

import React from 'react';
import type { ThemeContextType } from './types';
import { LightTheme } from './LightTheme';
import { DarkTheme } from './DarkTheme';

export const ThemeContext = React.createContext<ThemeContextType>({
  themes: {
    dark: DarkTheme,
    light: LightTheme,
  },
  themeMode: 'default',
  setThemeMode: () => {
    // set theme mode
  },
});
