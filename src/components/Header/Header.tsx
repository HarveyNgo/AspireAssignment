import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BackIcon, LogoIcon} from 'src/assets/icons';
import {Colors} from 'src/common';

type HeaderProps = {
  showBackIcon?: boolean;
};
const Header: React.FC<HeaderProps> = ({showBackIcon = true}) => {
  return (
    <View style={styles.container}>
      <View>{showBackIcon && <BackIcon color={'white'} />}</View>
      <View style={{flex: 1}}></View>
      <View>
        <LogoIcon color={Colors.primary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // alignItems: 'center',
    // height: NAV_BAR_HEIGHT,
    // width: '100%',
    // borderBottomWidth: 1,
    // borderBottomColor: colors.lineDivider,
    // padding: 5,
  },
  //   statusBar: {
  //     height: STATUS_BAR_HEIGHT,
  //     backgroundColor: colors.white,
  //   },
});

export default Header;
