import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from 'src/common';
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
      <SafeAreaView>
        {showHeader && <Header showBackIcon={showBackIcon} />}
        {children}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColor,
    paddingHorizontal: Styles.Spacing.medium,
  },
});

export default Container;
