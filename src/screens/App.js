import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home/Home'
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import { store } from '../storage/store';
import Splash from './splash/Splash';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import LoginPhone from './LoginPhone/LoginPhone';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';
import PropertyDetails from './PropertyDetails/PropertyDetails';
import Colors from '../components/Colors';

const Drawer = createDrawerNavigator()
const AppDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} 
    screenOptions={{
      headerShown: false,
      drawerStyle: {width: 200,},
      overlayColor: "transparent",
      drawerType: "slide",
      sceneContainerStyle: {backgroundColor: Colors.primaryColor,},
      }}>
      <Drawer.Screen name='Home' component={Home}/>
      <Drawer.Screen name='PropertyDetails' component={PropertyDetails}/>
    </Drawer.Navigator>
  )
}

const AppStack = createNativeStackNavigator();
const AppNavigation = () => {
  const LoggedIn = useSelector(state => state.isLoggedIn);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }, [LoggedIn])
  
  
  return (
    <NavigationContainer>
        <AppStack.Navigator screenOptions={{headerShown: false}} >
          {loading ? <AppStack.Screen name='Splash' component={Splash} /> :
          <>
          {LoggedIn ? <AppStack.Screen name="AppDrawer" component={AppDrawer} /> :
          <>
           <AppStack.Screen name='Login' component={Login} />
           <AppStack.Screen name='SignUp' component={SignUp} />
           <AppStack.Screen name='LoginPhone' component={LoginPhone} />
           </> 
          }
          </>
          }
        </AppStack.Navigator>
    </NavigationContainer>
  )
}

const App = () => {

  useEffect(()=> {
    //enableLatestRenderer();
  },[])

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default App