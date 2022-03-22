import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { styled, Text, View } from 'dripsy'
import { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { RootStackParamList } from '../App'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

const StyledTouchableOpacity = styled(TouchableOpacity)({
  borderColor: '$background',
  borderRadius: 10,
  borderWidth: 1,
  padding: 10,
  margin: 10,
})

const Home: FC<Props> = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Config', { name: 'Jane' })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StyledTouchableOpacity onPress={handlePress}>
        <Text>go to other screen</Text>
      </StyledTouchableOpacity>
    </View>
  )
}

export default Home
