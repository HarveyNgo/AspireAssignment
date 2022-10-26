import {CardInfo, SpendingLimitSuggestion} from '../models/debitCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HenryCard: CardInfo = {
  Name: 'Mark Henry',
  FirstNumber: '5647  3411  2413',
  LastNumber: '2020',
  CVV: '456',
  ValidFrom: '12/20',
};

const spendLimitSuggestionList: Array<SpendingLimitSuggestion> = [
  {
    id: 1,
    number: 5000,
  },
  {
    id: 2,
    number: 10000,
  },
  {
    id: 3,
    number: 20000,
  },
];

const CURRENT_SPEND = 345;
const BALANCE = 3000;

class DebitCardService {
  public getBalance = (): number => {
    return BALANCE;
  };

  public getCardInfo = (): CardInfo => {
    return HenryCard;
  };

  public getSpendLimitList = (): Array<SpendingLimitSuggestion> => {
    return spendLimitSuggestionList;
  };

  public saveSpendLimit = async (value: string) => {
    try {
      await AsyncStorage.setItem('SPENDING_LIMIT', value);
      return value;
    } catch (e) {
      // saving error
    }
  };

  public getSpendLimit = async () => {
    try {
      const value = await AsyncStorage.getItem('SPENDING_LIMIT');
      if (value !== null) {
        return value;
      }
    } catch (e) {
      return undefined;
    }
  };

  public setIsSpendLimit = async (value: Boolean) => {
    try {
      await AsyncStorage.setItem('IS_SPENDING_LIMIT', value ? '1' : '0');
      return value;
    } catch (e) {
      // saving error
    }
  };
  public isSpendLimit = async () => {
    try {
      const value = await AsyncStorage.getItem('IS_SPENDING_LIMIT');
      if (value !== null) {
        return value === '1' ? true : false;
      }
    } catch (e) {
      return undefined;
    }
  };

  public getCurrentSpend = (): number => {
    return CURRENT_SPEND;
  };
}

export default DebitCardService;
