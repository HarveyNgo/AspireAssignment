import {Colors} from '@common';
import {Text} from '@components';
import React, {useEffect} from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';

type SaveButtonProps = {
  haveSpendAmount: Boolean;
  onPress: () => void;
};

const SaveButton: React.FC<SaveButtonProps> = ({haveSpendAmount, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.save}>Save</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.primary,
  },
  save: {
    fontWeight: 'bold',
  },
});

export default SaveButton;
