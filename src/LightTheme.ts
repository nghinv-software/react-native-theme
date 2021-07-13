/**
 * Created by nghinv on Sun May 30 2021
 * Copyright (c) 2021 nghinv@lumi.biz
 */

import { Colors, hexToRgba } from './Colors';
import { TextStylesWithColor } from './TypoGraphy';

const Common = {
  primary: Colors.blueA200,
  secondary: Colors.grey900,
  background: '#F0F2F5',
  card: Colors.white,
  drawerBackground: '#F0F2F5',
  selected: '#E8F0FE',
  shadowColor: Colors.grey400,
  separator: hexToRgba(Colors.black, 25),
  disabled: Colors.grey500,
  status: {
    success: Colors.green100,
    info: Colors.blue100,
    warning: Colors.orange100,
    error: Colors.red700,
  },
  text: {
    active: Colors.blueA200,
    normal: Colors.grey900,
    subTitle: Colors.grey900,
    disable: Colors.grey600,
    error: Colors.red700,
  },
  icon: {
    active: Colors.blueA200,
    normal: Colors.grey900,
    disable: Colors.grey600,
    error: Colors.red700,
  },
  blurType: 'light',
  blurView: true,
};

export const LightTheme = {
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
    backgroundColor: Colors.white,
  },
  actionSheet: {
    titleColor: Common.text.active,
    messageColor: Colors.grey700,
    bottomTitleColor: Common.text.active,
    buttonTitleColor: Common.text.normal,
    checkColor: Common.text.active,
    separator: Common.separator,
    backgroundColor: Colors.white,
  },
  bottomSheet: {
    titleColor: Common.text.normal,
    titleColorActive: Common.text.active,
    buttonTitleColor: Common.text.normal,
    separator: Common.separator,
    backgroundColor: Colors.white,
    iconColor: Colors.grey800,
    checkColor: Common.text.active,
  },
  textInput: {
    backgroundColor: 'transparent',
    placeholderColor: '#8e8e93',
    textInputBackground: 'rgba(142,142,147,0.12)',
    textColor: 'black',
    selectionColor: Colors.blueA200,
    clearIconColor: '#c7c7cc',
    searchIconColor: '#8e8e93',
    textButtonColor: Colors.blueA200,
  },
};
