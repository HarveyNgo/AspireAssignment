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
  CreditTabIcon,
  ProfileTabIcon,
  DebitCardIcon,
} from 'src/assetss/icons/tabbar/index';

export type AuthenticatedParamsList = {};

const Tab = createBottomTabNavigator<AuthenticatedParamsList>();

const TabList = [
  {
    routerName: Routers.HomeStack,
    component: HomeNavigator,
    label: 'Home',
    icon: HomeTabIcon,
  },
  {
    routerName: Routers.DebitCardStack,
    component: DebitCardNavigator,
    label: 'DebitCard',
    icon: DebitCardIcon,
  },
  {
    routerName: Routers.PaymentStack,
    component: PaymentNavigator,
    label: 'Payments',
    icon: PaymentTabIcon,
  },
  {
    routerName: Routers.CreditStack,
    component: CreditNavigator,
    label: 'Credit',
    icon: CreditTabIcon,
  },
  {
    routerName: Routers.ProfileStack,
    component: ProfileNavigator,
    label: 'Profile',
    icon: ProfileTabIcon,
  },
];
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
      {TabList.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.routerName}
          component={tab.component}
          options={{
            tabBarLabel: tab.label,
            headerShown: false,
            tabBarIcon: tab.icon,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default RootNavigator;
