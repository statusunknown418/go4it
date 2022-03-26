import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Text, View } from 'dripsy'
import { FC } from 'react'
import { RootStackParamList } from '../App'

export type TDetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>

const Details: FC<TDetailsProps> = ({ route }) => {
  const { data, type } = route.params
  return (
    <View>
      <Text>Details</Text>
      <Text>{type}</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{data}</Text>
    </View>
  )
}

export default Details
