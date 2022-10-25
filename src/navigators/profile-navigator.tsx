import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Routers} from '@routes/index';
import {ProfileScreen} from '@routes/profile-stack';

export type ProfileNavigationParamsList = {
  [Routers.ProfileScreen]: undefined;
};

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routers.ProfileScreen}
      screenOptions={() => ({headerShown: false})}>
      <Stack.Screen name={Routers.ProfileScreen} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
