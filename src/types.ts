/**
 * Created by nghinv on Mon Jun 07 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */

import type React from 'react';
import type { TextStyle } from 'react-native';
import type { LightTheme } from './LightTheme';

export type ThemeMode = 'default' | 'light' | 'dark';

export type ThemeType = typeof LightTheme;

export type ThemesType = Record<'light' | 'dark' | string, ThemeType>;

export type ThemeContextType = {
  themeMode: ThemeMode;
  themes: ThemesType;
  setThemeMode: (value: ThemeMode) => void;
};

export type ThemeProviderPropsType = {
  children: React.ReactNode;
  themeMode?: ThemeMode;
  themes?: ThemesType;
  systemTheme?: boolean;
};

export type FontWeightType = Record<
  'thin' | 'light' | 'regular' | 'medium' | 'bold' | 'heavy' | 'black',
  TextStyle['fontWeight']
>;

export type TextType = 'h0' | 'h1' | 'h2' | 'p0' | 'p1' | 'p2' | 'p3';

export type TextStylesType = Record<
  'h0' | 'h1' | 'h2' | 'p0' | 'p1' | 'p2' | 'p3',
  TextStyle
>;
