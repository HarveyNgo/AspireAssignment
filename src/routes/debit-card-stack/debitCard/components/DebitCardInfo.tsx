import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {CardInfo} from '@models/debitCard';
import {LogoIcon, EyeCloseIcon, EyeOpenIcon} from '@assets/icons';
import {Colors, Styles} from '@common';
import {Text} from '@components';

type DebitCardInfoProps = {
  cardInfo: CardInfo;
};
const DebitCardInfo: React.FC<DebitCardInfoProps> = ({cardInfo}) => {
  const [showCard, setShowCard] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.showCardNumberToggleContainer}
        onPress={() => setShowCard(prev => !prev)}>
        {showCard ? <EyeCloseIcon /> : <EyeOpenIcon />}
        <Text style={styles.showCardNumber}>
          {showCard ? 'Hide card number' : 'Show card number'}
        </Text>
      </TouchableOpacity>
      <View style={styles.cardContainer}>
        <View style={styles.logoContainer}>
          <LogoIcon color={Colors.white} />
          <Text style={styles.appName}>Aspire</Text>
        </View>
        <Text style={styles.clientName}>{cardInfo?.Name || 'Harvey '}</Text>
        <Text style={styles.cardNum}>
          {showCard ? cardInfo?.FirstNumber : '****  ****  ****'}
          {'   '}
          {cardInfo?.LastNumber}
        </Text>
        <View style={styles.validFrom}>
          <Text style={styles.validFromText}>Thru: {cardInfo?.ValidFrom}</Text>
          <Text style={styles.cvv}>
            CVV: {showCard ? cardInfo?.CVV : '***'}
          </Text>
        </View>
        <Text style={styles.visa}>VISA</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Styles.Spacing.medium,
    marginTop: -100,
  },
  debitCardInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  debitCardText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  availableBalance: {
    color: Colors.white,
    marginTop: 15,
  },
  balanceContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  currency: {
    color: Colors.white,
    marginRight: 10,
  },
  functionContainer: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: 'white',
    flex: 2,
  },
  appName: {marginStart: Styles.Spacing.small},
  clientName: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardNum: {marginTop: 20},
  validFrom: {flexDirection: 'row', marginTop: 20},
  validFromText: {color: 'white'},
  cvv: {
    marginStart: 20,
    color: Colors.white,
    textAlign: 'center',
  },
  visa: {
    textAlign: 'right',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardContainer: {
    borderRadius: 10,
    backgroundColor: '#01d167',
    padding: 10,
  },
  showCardNumberToggleContainer: {
    backgroundColor: 'white',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    paddingVertical: 10,
    marginBottom: -8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  showCardNumber: {
    textAlign: 'right',
    color: Colors.primary,
    marginStart: Styles.Spacing.small,
  },
  cardInfoAndToggleContainer: {
    // marginTop: -100,
    // marginHorizontal: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default DebitCardInfo;
