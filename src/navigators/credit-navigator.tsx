import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Routers} from '@routes/index';
import {CreditScreen} from '@routes/credit-stack';

export type CreditStackParamsList = {
  [Routers.CreditScreen]: undefined;
};

const Stack = createStackNavigator();

const CreditNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routers.CreditScreen}
      screenOptions={() => ({headerShown: false})}>
      <Stack.Screen name={Routers.CreditScreen} component={CreditScreen} />
    </Stack.Navigator>
  );
};

export default CreditNavigator;
