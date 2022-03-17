import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Text, View } from 'dripsy'
import React, { FC } from 'react'
import { Button } from 'react-native'
import { RootStackParamList } from '../App'

type Props = NativeStackScreenProps<RootStackParamList, 'Config'>

const Profile: FC<Props> = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="go to details" onPress={() => navigation.push('Home')} color="black" />
      <Text>{JSON.stringify(route.params)}</Text>
    </View>
  )
}

export default Profile
