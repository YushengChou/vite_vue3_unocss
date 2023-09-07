import { 
  defineConfig,
  presetAttributify,
  presetUno ,
  presetIcons,
} from 'unocss'

import presetWebFonts from '@unocss/preset-web-fonts'
import presetTheme from '@minmin614/unocss-preset-theme'

export default defineConfig({
  // 設置各樣式
  theme: {
    colors: {
      // 主要
      'primary': '#F7F6F4',
      // 次要
      'secondary': '#888586',
      // 背景
      'bg': '#ECF1FF',
      // 文字
      'text': '#333333',
    },
  },
  presets: [
    presetUno(),
    presetTheme({
      theme: {
        // 其他主題樣式配置
        darkTheme: {
          colors: {
            'primary': '#676767',
            'secondary': '#3A3A3A',
            'bg': '#1C1C1C',
            'text': '#FFFFFF',
          },
        },
        lightTheme: {
          colors: {
            'primary': '#FFDAC8',
            'secondary': '#A19D85',
            'bg': '#FFF8D7',
            'text': '#000D70',
          },
        },
      }
    }),
    presetAttributify(),
    presetIcons({}),
    presetWebFonts({})
  ],
})