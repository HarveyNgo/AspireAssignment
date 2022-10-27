import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import {BackIcon, LogoIcon} from '@assets/icons';
import {Colors} from '@common';
import {isIphoneX} from 'react-native-iphone-x-helper';

const IS_IPHONE_X = isIphoneX();
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 10;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 60;
export const HEADER_EXPANDED_HEIGHT =
  Platform.OS === 'ios' ? (IS_IPHONE_X ? 150 : 126) : 122;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

type HeaderProps = {
  showBackIcon?: boolean;
};
const Header: React.FC<HeaderProps> = ({showBackIcon = true}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        {showBackIcon && (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <BackIcon color={'white'} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.main} />
      <View>
        <LogoIcon color={Colors.primary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: NAV_BAR_HEIGHT,
  },
  main: {
    flex: 1,
  },
});

export default Header;
