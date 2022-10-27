import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '@common';
import Styles from '@common/styles';
import {Header} from '@components';

export type ContainerProps = {
  showHeader?: boolean;
  showBackIcon?: boolean;
  children?: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({
  showHeader = true,
  showBackIcon = true,
  children,
}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        {showHeader && <Header showBackIcon={showBackIcon} />}
        {children}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: Colors.backgroundColor,
    paddingHorizontal: Styles.Spacing.xlarge,
    flex: 1,
  },
});

export default Container;
