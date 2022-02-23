import { DripsyProvider, makeTheme, SafeAreaView, Text, View } from 'dripsy'
import Home from './views/Home'

const theme = makeTheme({
  customFonts: {
    ['Poppins']: {},
  },
})

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <SafeAreaView sx={(theme) => ({ flex: 1, alignItems: 'center', justifyContent: 'center' })}>
        <View>
          <Text sx={{ fontSize: 24 }}>This is gon' be so much fun</Text>
        </View>
      </SafeAreaView>
    </DripsyProvider>
  )
}
