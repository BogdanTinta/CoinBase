import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import SplashScreen from './src/screens/SplashScreen/SplashScreen'
import LoginScreen from './src/screens/Authentication/Login/LoginScreen'
import SignupScreen from './src/screens/Authentication/Signup/SignupScreen'
import PassRecovery from './src/screens/Authentication/PassRecovery/PassRecovery'
import Newsletter from './src/screens/Authentication/Newsletter/Newsletter'
import OnboardingScreen from './src/screens/Onboarding/OnboardingScreen'
import NavigationScreen from './src/screens/Account/NavigationScreen/NavigationScreen'

import DashboardScreen from './src/screens/Account/DashboardScreen/DashboardScreen'
import ProfileScreen from './src/screens/Account/ProfileScreen/ProfileScreen'
import ChatScreen from './src/screens/Account/ChatScreen/ChatScreen'
import TransactionScreen from './src/screens/Account/TransactionScreen/TransactionScreen'
import SettingsScreen from './src/screens/Account/SettingsScreen/SettingsScreen'
import DashboardDetailScreen from './src/screens/Account/DashboardDetailScreen/DashboardDetailScreen'

import BackButton from './src/components/BackButton/BackButton'
import ProfileImage from './src/components/ProfileImage/ProfileImage'

import { navigatorIcons } from './src/constants/arrays'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function DashboardTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Dashboard'
        component={DashboardScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name='DashboardDetail'
        component={DashboardDetailScreen}
        options={{
          headerShown: false,
          headerLeft: () => <BackButton destination={'Dashboard'} />
        }}
      />
    </Stack.Navigator>
  )
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='DashboardTab'
        component={DashboardTab}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? navigatorIcons[1] : navigatorIcons[0]
          },
          headerShown: false,
          tabBarShowLabel: false,
        }}

      />

      {/* <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#F8F8F8s',
          },
          headerLeft: () => <BackButton destination={'Navigation'} />
        }}
      /> */}

      <Tab.Screen
        name='Chat'
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? navigatorIcons[3] : navigatorIcons[2]
          },
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name='Transaction'
        component={TransactionScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? navigatorIcons[5] : navigatorIcons[4]
          },
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? navigatorIcons[7] : navigatorIcons[6]
          },
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen
          options={{ headerShown: false, }}
          name='Splash'
          component={SplashScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name='Login'
          component={LoginScreen}
        />

        <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#F8F8F8s',
            },
            headerLeft: () => <BackButton destination={'Login'} />
          }}
          name='Signup'
          component={SignupScreen}
        />

        <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#F8F8F8s',
            },
            headerLeft: () => <BackButton destination={'Login'} />
          }}
          name='Recovery'
          component={PassRecovery}
        />

        <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#F8F8F8s',
            },
            headerLeft: () => <BackButton destination={'Login'} />
          }}
          name='Newsletter'
          component={Newsletter}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name='Onboarding'
          component={OnboardingScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name='Navigation'
          component={NavigationScreen}
        />

        <Stack.Screen
          name='Account'
          component={TabNavigator}
          options={{
            headerLeft: () => <BackButton destination={'Navigation'} />,
            headerRight: () => <ProfileImage size={25} />,
            title: '',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App