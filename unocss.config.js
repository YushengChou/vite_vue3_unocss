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
      // 圖片路徑
      'pic_url': 'url(https://octodex.github.com/images/daftpunktocat-guy.gif)',
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
            'pic_url': 'url(https://octodex.github.com/images/homercat.png)',
          },
        },
        lightTheme: {
          colors: {
            'primary': '#FFDAC8',
            'secondary': '#A19D85',
            'bg': '#FFF8D7',
            'text': '#000D70',
            'pic_url': 'url(https://octodex.github.com/images/pusheencat.png)',
          },
        },
      }
    }),
    // npm之後即可使用attr寫法
    presetAttributify(),
    // 可以改變icon樣式
    presetIcons({
      scale: 1.2,
    }),
    // 將要加入的字體於此處設置
    presetWebFonts({
      // default provider
      provider: 'google',
      fonts: {
        // these will extend the default theme
        sans: 'Roboto',
        // 加入自訂字體
        aclonica: 'Aclonica',
      }
    })
  ],
})