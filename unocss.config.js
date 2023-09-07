import { 
  defineConfig,
  presetAttributify,
  presetUno ,
  presetIcons,
} from 'unocss'

import presetWebFonts from '@unocss/preset-web-fonts'
import presetTheme from '@minmin614/unocss-preset-theme'

export default defineConfig({
  theme: {
    colors: {
      'primary': '#ccc',
      'secondary': '',
      'container': '',
      'text': '',
    },
  },
  presets: [
    presetUno(),
    presetTheme({
      theme: {
        redTheme: {
          colors: {
            'primary': '#be185d',
          },
        },
        blueTheme: {
          colors: {
            'primary': '#ffffff',
          },
        },
      }
    }),
    presetAttributify(),
    presetIcons({}),
    presetWebFonts({})
  ],
})