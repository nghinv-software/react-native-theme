/**
 * Created by nghinv on Sat Jun 12 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */

import { StyleSheet } from 'react-native';
import { px } from './helpers';
import type { FontWeightType, TextStylesType } from './types';

export const FontWeight: FontWeightType = {
  thin: '200',
  light: '300',
  regular: '400',
  medium: '500',
  bold: '600',
  heavy: '700',
  black: '800',
};

export const TextStyles = StyleSheet.create({
  h0: {
    fontWeight: FontWeight.medium,
    fontSize: 24,
    lineHeight: 33,
  },
  h1: {
    fontWeight: FontWeight.medium,
    fontSize: 18,
    lineHeight: 25,
  },
  h2: {
    fontWeight: FontWeight.medium,
    fontSize: 16,
    lineHeight: 22,
  },
  p0: {
    fontSize: 16,
    lineHeight: 22,
  },
  p1: {
    fontSize: 14,
    lineHeight: 19,
  },
  p2: {
    fontSize: 12,
    lineHeight: 16,
  },
  p3: {
    fontSize: 10,
    lineHeight: 14,
  },
});

export function TextStylesWithColor(color: string): TextStylesType {
  const styles: any = {};
  Object.keys(TextStyles).map((key) => {
    const keyString = key as keyof TextStylesType;
    styles[key] = {
      ...TextStyles[keyString],
      color,
    };
  });

  return styles;
}

export const Spacing = {
  /**
   * 4px
   */
  s1: px(4),
  /**
   * 8px
   */
  s2: px(8),
  /**
   * 12px
   */
  s3: px(12),
  /**
   * 16px
   */
  s4: px(16),
  /**
   * 20px
   */
  s5: px(20),
  /**
   * 24px
   */
  s6: px(24),
  /**
   * 28px
   */
  s7: px(28),
  /**
   * 32px
   */
  s8: px(32),
  /**
   * 36px
   */
  s9: px(36),
  /**
   * 40px
   */
  s10: px(40),
};

export const BorderRadius = {
  /**
   * 4px
   */
  r1: px(4),
  /**
   * 8px
   */
  r2: px(8),
  /**
   * 12px
   */
  r3: px(12),
  /**
   * 16px
   */
  r4: px(16),
  /**
   * 20px
   */
  r5: px(20),
  /**
   * 24px
   */
  r6: px(24),
  /**
   * 28px
   */
  r7: px(28),
  /**
   * 32px
   */
  r8: px(32),
  /**
   * 36px
   */
  r9: px(36),
  /**
   * 40px
   */
  r10: px(40),
};
