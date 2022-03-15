import { DripsyProvider, SafeAreaView } from 'dripsy'
import theme from './theme/main'
import Home from './views/Home'

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <SafeAreaView
        sx={() => ({
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <Home />
      </SafeAreaView>
    </DripsyProvider>
  )
}
