import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Routers} from '@routes/index';
import {PaymentScreen} from '@routes/payments-stack';

export type PaymentStackParamsList = {
  [Routers.PaymentScreen]: undefined;
};

const Stack = createStackNavigator();

const PaymentNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routers.PaymentScreen}
      screenOptions={() => ({headerShown: false})}>
      <Stack.Screen name={Routers.PaymentScreen} component={PaymentScreen} />
    </Stack.Navigator>
  );
};

export default PaymentNavigator;
