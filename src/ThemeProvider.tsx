/**
 * Created by nghinv on Sun May 30 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */

import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { LightTheme } from './LightTheme';
import { DarkTheme } from './DarkTheme';
import type { ThemeProviderPropsType, ThemeMode } from './types';

ThemeProvider.defaultProps = {
  systemTheme: false,
};

function ThemeProvider(props: ThemeProviderPropsType) {
  const { themes } = props;
  const [themeMode, setThemeMode] = useState<ThemeMode>(
    props.themeMode || 'default'
  );

  return (
    <ThemeContext.Provider
      value={{
        themes: {
          dark: DarkTheme,
          light: LightTheme,
          ...themes,
        },
        themeMode,
        setThemeMode,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default React.memo(ThemeProvider);
