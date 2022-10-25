import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Routers} from '@routes/index';
import {DebitCardScreen, SpendingLimitScreen} from '@routes/debit-card-stack';

export type DebitCardStackParamsList = {};

const Stack = createStackNavigator();

const DebitCardNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routers.DebitCardScreen}
      screenOptions={() => ({headerShown: false})}>
      <Stack.Screen
        name={Routers.DebitCardScreen}
        component={DebitCardScreen}
      />
    </Stack.Navigator>
  );
};

export default DebitCardNavigator;
