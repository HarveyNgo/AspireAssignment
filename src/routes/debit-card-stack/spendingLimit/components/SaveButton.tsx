import React, {useEffect} from 'react';
import {
  View,
  Text,
  ViewStyle,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components';

interface IProps {
  haveSpendAmount: Boolean;
  onPress: Function;
}

const SaveContainer = styled(TouchableOpacity)`
  border-radius: 30px;
  background-color: ${({haveSpendAmount}) =>
    haveSpendAmount ? '#01d167' : 'gray'};
  align-items: center;
  padding: 20px;
`;

const SaveButton: React.FC<IProps> = ({haveSpendAmount, onPress}) => {
  return (
    <SaveContainer haveSpendAmount={haveSpendAmount} onPress={onPress}>
      <Text style={styles.save}>Save</Text>
    </SaveContainer>
  );
};

type Style = {
  container: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  save: {
    color: 'white',
  },
});

const mapStateToProps = (state: State) => ({});

const mapDiaptchToProps = {};

export default connect(mapStateToProps, mapDiaptchToProps)(SaveButton);
