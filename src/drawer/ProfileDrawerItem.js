import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Profile from '../views/Profile';

const ProfileDrawerItem = createStackNavigator(
  {
    Profile: {
      screen: Profile,

      navigationOptions: ({ navigation }) => ({
        title: 'Thông tin cá nhân',
        headerLeft: (
          <Icon
            name="menu"
            size={30}
            type="entypo"
            iconStyle={{ paddingLeft: 10 }}
            onPress={navigation.toggleDrawer}
          />
        ),
      }),
    },
  }
);

ProfileDrawerItem.navigationOptions = {
  drawerLabel: 'Thông tin cá nhân',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="person"
      size={30}
      iconStyle={{
        width: 30,
        height: 30,
      }}
      type="material"
      color={tintColor}
    />
  ),
};

export default ProfileDrawerItem;