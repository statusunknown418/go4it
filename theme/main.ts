import { makeTheme } from 'dripsy'

const theme = makeTheme({
  colors: {
    $text: '#fff',
    $background: '##101214',
    $backgroundSecondary: '#1a1d1f',
    $secondary: '#cabdff',
  },
})

type MainTheme = typeof theme

declare module 'dripsy' {
  type DripsyCustomTheme = MainTheme
}

export default theme
