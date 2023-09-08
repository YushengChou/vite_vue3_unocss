import { createI18n } from 'vue-i18n'

// 引入語言包
import en from './language/en.json'
import zh from './language/zh.json'

// 創建i18n實例
const i18n = createI18n({
  legacy: false, // 使用composition API的時候legacy要設false
  globalInjection: true, // 為true時，$t將能全局注入做使用
  locale: 'zh', // 預設語言
  fallbackLocale: 'zh', // 當前語言文件缺失，默認退回使用的語言
  messages: { // 放置配置好的語言包
    en,
    zh
  },

})

export default i18n