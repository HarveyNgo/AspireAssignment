import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Routers} from '@routes/index';
import {DebitCardScreen} from '@routes/debit-card-stack';

export type HomeStackParamsList = {
  [Routers.DebitCardScreen]: undefined;
};

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
