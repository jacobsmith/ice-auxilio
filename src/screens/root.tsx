import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Landing from 'src/screens/landing';
import AtTheDoor from 'src/screens/AtTheDoor';
import safeAreaView from 'src/helpers/safeAreaView';


export const primaryNavigationStackScreens = {
    Landing: { screen: safeAreaView(Landing) },
    AtTheDoor: { screen: safeAreaView(AtTheDoor) },
}

const AppNavigator = createStackNavigator(
  primaryNavigationStackScreens,
  {
      headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);