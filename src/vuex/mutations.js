export default {
  'INCREMENT_MUT' (state) {
    state.count++
  },
  'DECREMENT_MUT' (state) {
    if (state.count > 0) {
      state.count--
    }
  }
}
