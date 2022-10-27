import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {CardInfo} from '@models/debitCard';
import {LogoIcon, EyeCloseIcon, EyeOpenIcon, VisaLogoIcon} from '@assets/icons';
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
          <Text style={styles.appName}>aspire</Text>
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
        <View style={styles.visaContainer}>
          <VisaLogoIcon />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Styles.Spacing.large,
    marginTop: -100,
  },

  appName: {marginStart: Styles.Spacing.small, fontWeight: 'bold'},
  clientName: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: Styles.FontSize.xlarge,
  },
  cardNum: {
    marginTop: 20,
    fontSize: Styles.FontSize.medium,
    fontWeight: 'bold',
  },
  validFrom: {flexDirection: 'row', marginTop: 20},
  validFromText: {fontSize: Styles.FontSize.small, fontWeight: 'bold'},
  cvv: {
    marginStart: 20,
    textAlign: 'center',
    fontSize: Styles.FontSize.small,
    fontWeight: 'bold',
  },
  cardContainer: {
    borderRadius: 10,
    backgroundColor: '#01d167',
    paddingHorizontal: Styles.Spacing.xlarge,
    paddingVertical: Styles.Spacing.xlarge,
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
    fontWeight: 'bold',
    fontSize: Styles.FontSize.tiny,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  visaContainer: {alignItems: 'flex-end'},
});

export default DebitCardInfo;
