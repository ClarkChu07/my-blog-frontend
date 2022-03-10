import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',
  state: () =>({
    count: 0
  }),
  // getters
  getters: {
    count: (state) => state.count,
  },
  actions: {

  },
})
