# @nghinv/react-native-theme

React Native Theme manager

---

[![CircleCI](https://circleci.com/gh/nghinv-software/react-native-theme.svg?style=svg)](https://circleci.com/gh/nghinv-software/react-native-theme)
[![Version][version-badge]][package]
[![MIT License][license-badge]][license]
[![All Contributors][all-contributors-badge]][all-contributors]
[![PRs Welcome][prs-welcome-badge]][prs-welcome]

<p align="center">
<img src="./assets/demo.gif" width="300"/>
</p>

## Installation

```sh
yarn add @nghinv/react-native-theme
```

or 

```sh
npm install @nghinv/react-native-theme
```

## Usage

1. Wrapper `ThemeProvider` with `Root` Component
```js
import { 
  ThemeProvider, 
  DarkTheme, 
  LightTheme, 
  Colors, 
  ThemeType,
} from '@nghinv/react-native-theme';

const black: ThemeType = {
  ...DarkTheme,
  background: Colors.black,
  drawerBackground: Colors.black,
  card: 'rgba(255, 255, 255, 0.1)',
  shadowColor: 'black',
};

const purple: ThemeType = {
  ...LightTheme,
  background: Colors.deepPurple800,
};

function App() {
  return (
    <ThemeProvider
      themes={{
        purple,
        black,
      }}
      themeMode='dark'
    >
      <RootComponent />
    </ThemeProvider>
  );
}
```

2. Use hook `useTheme`

```js
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTheme, ThemeMode } from '@nghinv/react-native-theme';

function App() {
  const { theme, themeMode, setThemeMode } = useTheme();

  return (
    <View 
      style={[
        styles.container, 
        { backgroundColor: theme.drawerBackground }
      ]}
    >
      <Text 
        style={[
          theme.textStyles.h0, 
          { marginLeft: 16, marginBottom: 8 }
        ]}
      >
      Set theme
      </Text>
      <ScrollView>
        {
          ['Default', 'Light', 'Dark', 'Black', 'Purple'].map(themeKey => (
            <Row
              key={themeKey}
              title={`${themeKey} theme`}
              containerStyle={{ 
                marginBottom: 2, 
                marginHorizontal: 16, 
                borderRadius: 4 
              }}
              backgroundColor={themeMode === themeKey.toLowerCase() ? theme.selected : undefined}
              onPress={() => {
                setThemeMode(themeKey.toLowerCase() as ThemeMode)
              }}
            />
          ))
        }
      </ScrollView>
    </View>
  );
}
```

# Property

* ThemeProvider

| Property | Type | Default | Description |
|----------|:----:|:-------:|-------------|
| themeMode | `String` | `default` | `dark`, `light`..., `default` get `theme mode` from device |
| themes | `ThemeType` | `undefined` | Add custom theme |

<br/>

* useTheme

| Property | Type | Default | Description |
|----------|:----:|:-------:|-------------|
| themeMode | `String` |  | Current theme mode |
| setThemeMode | `ThemeType` | `undefined` | `Set theme mode` |
| toggleThemeMode | `ThemeType` | `undefined` | `Set theme mode to dark or light` |

```js
type ThemeType = {
  textStyles: {
    h0: TextStyle;
    h1: TextStyle;
    h2: TextStyle;
    p0: TextStyle;
    p1: TextStyle;
    p2: TextStyle;
    p3: TextStyle;
  };
  alert: {
    textActive: string;
    textNormal: string;
    textDisable: string;
    textError: string;
    separator: string;
    backgroundColor: string;
  };
  actionSheet: {
    titleColor: string;
    messageColor: string;
    bottomTitleColor: string;
    buttonTitleColor: string;
    checkColor: string;
    separator: string;
    backgroundColor: string;
  };
  bottomSheet: {
    titleColor: string;
    titleColorActive: string;
    buttonTitleColor: string;
    separator: string;
    backgroundColor: string;
    iconColor: string;
    checkColor: string;
  };
  textInput: {
    backgroundColor: string;
    placeholderColor: string;
    textInputBackground: string;
    textColor: string;
    selectionColor: string;
    clearIconColor: string;
    searchIconColor: string;
    textButtonColor: string;
  };
  primary: string;
  secondary: string;
  background: string;
  card: string;
  drawerBackground: string;
  selected: string;
  shadowColor: string;
  separator: string;
  disabled: string;
  status: {
    success: string;
    info: string;
    warning: string;
    error: string;
  };
  text: {
    active: string;
    normal: string;
    subTitle: string;
    disable: string;
    error: string;
  };
  icon: {
    active: string;
    normal: string;
    disable: string;
    error: string;
  };
  blurType: string;
  blurView: boolean;
};
```

---
## Credits

- [@Nghi-NV](https://github.com/Nghi-NV)

[version-badge]: https://img.shields.io/npm/v/@nghinv/react-native-theme.svg?style=flat-square
[package]: https://www.npmjs.com/package/@nghinv/react-native-theme
[license-badge]: https://img.shields.io/npm/l/@nghinv/react-native-theme.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
[all-contributors-badge]: https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square
[all-contributors]: #contributors
[prs-welcome-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs-welcome]: http://makeapullrequest.com
