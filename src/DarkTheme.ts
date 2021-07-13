/**
 * Created by nghinv on Sun May 30 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */

import { Colors, hexToRgba } from './Colors';
import { TextStylesWithColor } from './TypoGraphy';

const Common = {
  primary: Colors.blueA700,
  secondary: Colors.grey500,
  background: '#17191A',
  card: hexToRgba(Colors.white, 6),
  drawerBackground: '#17191A',
  selected: hexToRgba(Colors.white, 25),
  shadowColor: Colors.grey900,
  separator: hexToRgba(Colors.white, 25),
  disabled: Colors.grey500,
  status: {
    success: Colors.green100,
    info: Colors.blue100,
    warning: Colors.orange100,
    error: Colors.red700,
  },
  text: {
    active: Colors.blueA200,
    normal: Colors.grey200,
    subTitle: Colors.grey500,
    disable: Colors.grey600,
    error: Colors.red700,
  },
  icon: {
    active: Colors.blueA700,
    normal: Colors.grey500,
    disable: Colors.grey600,
    error: Colors.red700,
  },
  blurType: 'dark',
  blurView: true,
};

export const DarkTheme = {
  ...Common,
  textStyles: {
    ...TextStylesWithColor(Common.text.normal),
  },
  alert: {
    textActive: Common.text.active,
    textNormal: Common.text.normal,
    textDisable: Common.text.disable,
    textError: Common.text.error,
    separator: Common.separator,
    backgroundColor: Colors.grey900,
  },
  actionSheet: {
    titleColor: Common.text.active,
    messageColor: Colors.grey500,
    bottomTitleColor: Common.text.active,
    buttonTitleColor: Common.text.normal,
    checkColor: Common.text.active,
    separator: Common.separator,
    backgroundColor: Colors.grey900,
  },
  bottomSheet: {
    titleColor: Colors.grey400,
    titleColorActive: Common.text.active,
    buttonTitleColor: Common.text.normal,
    separator: Common.separator,
    backgroundColor: Colors.grey900,
    iconColor: Colors.grey300,
    checkColor: Common.text.active,
  },
  textInput: {
    backgroundColor: 'transparent',
    placeholderColor: '#636366',
    textInputBackground: 'rgba(44,44,46,0.8)',
    textColor: 'white',
    selectionColor: Colors.blueA200,
    clearIconColor: '#c7c7cc',
    searchIconColor: '#b0b0b2',
    textButtonColor: Colors.blueA200,
  },
};
