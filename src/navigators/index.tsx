import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Routers} from '@routes/index';
import RootNavigator from './root-navigator';

export type RootNavigatorParamsList = {
  [Routers.RootNavigation]: undefined;
};

const Stack = createStackNavigator<RootNavigatorParamsList>();

const AppNavigator = () => {
  return (
    <NavigationContainer independent>
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen
          name={Routers.RootNavigation}
          component={RootNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
