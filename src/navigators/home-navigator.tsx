import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Routers} from '@routes/index';
import {HomeScreen} from '@routes/home-stack/home';

export type HomeStackParamsList = {
  [Routers.Home]: undefined;
};

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routers.Home}
      screenOptions={() => ({headerShown: false})}>
      <Stack.Screen name={Routers.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
