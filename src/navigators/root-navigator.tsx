import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {Routers} from '@routes/index';
import HomeNavigator from './home-navigator';
import DebitCardNavigator from './debit-card-navigator';
import PaymentNavigator from './payment-navigator';
import CreditNavigator from './credit-navigator';
import ProfileNavigator from './profile-navigator';
import {Colors} from 'src/common';
import {
  HomeTabIcon,
  PaymentTabIcon,
  CreditIcon,
  ProfileIcon,
  DebitCardIcon,
} from 'src/assetss/icons/tabbar/index';

export type AuthenticatedParamsList = {};

const Tab = createBottomTabNavigator<AuthenticatedParamsList>();

const RootNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {},
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.deactive,
        tabBarButtonColor: Colors.primary,
        tabBarSelectedButtonColor: Colors.deactive,
      }}
      tabBar={(props: JSX.IntrinsicAttributes) => <BottomTabBar {...props} />}>
      <Tab.Screen
        name={Routers.HomeStack}
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name={Routers.DebitCardStack}
        component={DebitCardNavigator}
        options={{
          tabBarLabel: 'DebitCard',
          headerShown: false,
          tabBarIcon: DebitCardIcon,
        }}
      />
      <Tab.Screen
        name={Routers.PaymentStack}
        component={PaymentNavigator}
        options={{
          tabBarLabel: 'DebitCard',
          headerShown: false,
          tabBarIcon: PaymentTabIcon,
        }}
      />
      <Tab.Screen
        name={Routers.CreditStack}
        component={CreditNavigator}
        options={{
          tabBarLabel: 'DebitCard',
          headerShown: false,
          tabBarIcon: CreditIcon,
        }}
      />
      <Tab.Screen
        name={Routers.ProfileStack}
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'DebitCard',
          headerShown: false,
          tabBarIcon: ProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;
