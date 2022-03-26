import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { styled, Text, View } from 'dripsy'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { FC, useEffect, useState } from 'react'
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

const Container = styled(View)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
})

const Home: FC<Props> = ({ navigation }) => {
  const [permission, setPermission] = useState(false)
  const [scanned, setScanned] = useState(false)

  const getBarcodePermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync()
    setPermission(status === 'granted')
  }

  useEffect(() => {
    getBarcodePermissions()
  }, [])

  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    setScanned(true)
    alert(data)
    navigation.navigate('Details', { type, data })
  }

  const handlePress = () => {
    navigation.navigate('Config', { name: 'Jane' })
  }

  if (permission === false) {
    return (
      <Container>
        <Text>This app needs access to the camera so it can scan your products</Text>
      </Container>
    )
  }

  return (
    <Container>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StyledTouchableOpacity onPress={handlePress}>
        <Text>go to other screen</Text>
      </StyledTouchableOpacity>

      <Text>Scan Barcode</Text>

      {!scanned ? (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{
            height: 300,
            width: 300,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
          }}
        />
      ) : (
        scanned && (
          <StyledTouchableOpacity onPress={() => setScanned(false)}>
            <Text>Tap to scan</Text>
          </StyledTouchableOpacity>
        )
      )}
    </Container>
  )
}

export default Home
