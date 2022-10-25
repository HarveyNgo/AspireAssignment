import React, {useEffect} from 'react';
import {
  View,
  Text,
  ViewStyle,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {SpendingLimitSuggestion} from '../../../models/debitCard';
import {connect} from 'react-redux';
import {getSpendLimitList} from '../../../redux/actions/debitCard';
import SuggestionItem from './SuggestionItem';
interface IProps {
  //   item: SpendingLimitSuggestion;
  //   onPress?: Function;
  spendLimitList: Array<SpendingLimitSuggestion>;
  getSpendLimitList: any;
  onPress: Function;
}

const SpendLimitList: React.FC<IProps> = ({
  spendLimitList,
  getSpendLimitList,
  onPress,
}) => {
  useEffect(() => {
    getSpendLimitList();
  }, []);

  return (
    <View style={styles.container}>
      {spendLimitList?.map(item => {
        return <SuggestionItem key={item.id} item={item} onPress={onPress} />;
      })}
    </View>
  );
};

type Style = {
  container: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    // backgroundColor: '#90ee90',
    justifyContent: 'space-around',
    // marginVertical: 10,
    // marginHorizontal: 20,
  },
  name: {
    color: '#0c365a',
  },
  description: {
    color: 'gray',
  },
});

const mapStateToProps = (state: State) => ({
  spendLimitList: state.debitCard.spendLimitList,
  // isGettingMerchantList: state.merchant.isGettingMerchantList,
  // isGotMerchantList: state.merchant.isGotMerchantList
});

const mapDiaptchToProps = {
  getSpendLimitList,
};

export default connect(mapStateToProps, mapDiaptchToProps)(SpendLimitList);
