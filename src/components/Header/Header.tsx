import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BackIcon, LogoIcon} from '@assets/icons';
import {Colors} from '@common';

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
