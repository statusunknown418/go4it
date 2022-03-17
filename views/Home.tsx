import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Text, View } from 'dripsy'
import { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { RootStackParamList } from '../App'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home: FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <TouchableOpacity
        style={{
          borderColor: 'black',
          borderRadius: 10,
          borderWidth: 1,
          padding: 10,
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate('Config', { name: 'Jane' })}
      >
        <Text>go to other screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
