import {Dimensions, StatusBar, Platform} from 'react-native';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const dimensions = {
  height: screenHeight,
  width: screenWidth,
};
const Common = {
  ColumnCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ColumnCenterTop: {
    alignItems: 'center',
  },
  ColumnCenterBottom: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  ColumnCenterLeft: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  ColumnCenterRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  specifications: {
    statusBarHeight: StatusBar.currentHeight,
    headerHeight: 60,
    bottomNavbarHeight: 65,
    headerNavbarHeight: 75,
  },
  viewAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  Shadow: Platform.select({
    ios: {
      backgroundColor: 'white',
      shadowColor: '#aaa',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
    android: {
      borderWidth: 1,
      borderColor: '#eee',
      elevation: 1,
    },
  }),
  FontBold: {
    fontWeight: 'bold',
  },
};
const FontSize = {
  tiny: 12,
  small: 14,
  normal: 15,
  medium: 16,
  big: 18,
  large: 20,
  xlarge: 24,
};
const IconSize = {
  TextInput: 25,
  ToolBar: 18,
  Inline: 20,
  SmallRating: 14,
};

const Spacing = {
  small: 6,
  normal: 10,
  medium: 14,
  large: 18,
  xlarge: 24,
};

const styles = {
  dimensions,
  Common,
  FontSize,
  IconSize,
  Spacing,
};

export default styles;
