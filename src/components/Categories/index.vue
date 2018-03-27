<template>
    <table class="centered responsive-table striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Descricão</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in getCategories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>{{ category.description }}</td>
          <td v-if="category.status === 0 ">Inativo</td>
          <td v-else>Ativo</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  mounted () {
    this.setCategories()
  },
  methods: {
    ...mapActions('CcCategories', ['setCategories'])

  },
  computed: {
    ...mapState('CcCategories', ['categories']),
    ...mapGetters('CcCategories', ['getCategories'])
  }
}
</script>

<style scoped>

</style>
