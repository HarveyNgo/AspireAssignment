import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routers} from '@routes/index';
import HomeNavigator from './home-navigator';
export type AuthenticatedParamsList = {
  [Routers.HomeStack]: undefined;
  [Routers.DebitCardStack]: undefined;
  [Routers.PaymentStack]: undefined;
  [Routers.ProfileStack]: undefined;
};

const Tab = createBottomTabNavigator<AuthenticatedParamsList>();

const RootNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {},
      }}>
      <Tab.Screen
        name={Routers.HomeStack}
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name={Routers.HomeStack}
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default RootNavigator;
