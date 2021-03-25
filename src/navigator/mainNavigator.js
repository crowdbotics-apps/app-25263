import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Dashboard210218558Navigator from '../features/Dashboard210218558/navigator';

/**
 * new navigators can be imported here
 */ import SideMenu5218557 from "../features/SideMenu5218557/navigator"

const AppNavigator = {
  SideMenu5218557: { screen: SideMenu5218557 },
  //@BlueprintNavigationInsertion
Dashboard210218558: { screen: Dashboard210218558Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
