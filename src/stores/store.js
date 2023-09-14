import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  // 定義狀態初始值
  state: () => ({
    count: 1,
  }),
  // 對狀態加工，如同computed(當data有變化就會運作)
  getters: {

  },
  // 定義使用到的函式，如同method(可以在此處call api)
  actions: {
    increment() {
      this.count++
    }
  },
})