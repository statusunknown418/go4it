import { DripsyProvider } from 'dripsy'
import theme from './theme/main'
import Home from './views/Home'
import Profile from './views/Profile'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined
  Config: {
    name: string
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ animation: 'slide_from_right' }} />
          <Stack.Screen
            name="Config"
            component={Profile}
            options={{
              animation: 'slide_from_right',
              contentStyle: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DripsyProvider>
  )
}
