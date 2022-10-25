import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routers} from '@routes/index';
import HomeNavigator from './home-navigator';
import DebitCardNavigator from './debit-card-navigator';
import PaymentNavigator from './payment-navigator';
import CreditNavigator from './credit-navigator';
import ProfileNavigator from './profile-navigator';
import {Colors} from 'src/common';

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
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.deactiva,
      }}>
      <Tab.Screen
        name={Routers.HomeStack}
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={Routers.DebitCardStack}
        component={DebitCardNavigator}
        options={{
          tabBarLabel: 'DebitCard',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={Routers.PaymentStack}
        component={PaymentNavigator}
        options={{
          tabBarLabel: 'DebitCard',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={Routers.CreditStack}
        component={CreditNavigator}
        options={{
          tabBarLabel: 'DebitCard',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={Routers.ProfileStack}
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'DebitCard',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
