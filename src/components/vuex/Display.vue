<template>
    <div>
        <h3>Count is {{ count }}</h3>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      count: 'GET_COUNT'
    })
  }
}
</script>

<style scoped>

</style>
