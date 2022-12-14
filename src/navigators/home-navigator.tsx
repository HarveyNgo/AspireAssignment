import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Routers} from '@routes/index';
import {HomeScreen} from '@routes/home-stack';

export type HomeStackParamsList = {
  [Routers.HomeScreen]: undefined;
};

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routers.HomeScreen}
      screenOptions={() => ({headerShown: false})}>
      <Stack.Screen name={Routers.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
