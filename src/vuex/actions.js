export default {
  'INCREMENT_ACT' (context, state) {
    context.commit('INCREMENT_MUT', state)
  },
  'DECREMENT_ACT' (context, state) {
    context.commit('DECREMENT_MUT', state)
  }
}
