<template>
    <div>
        <button @click="inc" class="waves-effect waves-light btn"><i class="material-icons">exposure_plus_1</i></button>
        <button @click="dec" class="waves-effect waves-light btn"><i class="material-icons">exposure_neg_1</i></button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      'inc': 'INCREMENT_ACT',
      'dec': 'DECREMENT_ACT'
    })
  }
}
</script>

<style scoped>

</style>
