<template>
    <v-side-nav id="nav">
        <ul>
            <li>
                <a href="#!">Link</a>
            </li>
        </ul>
        <slot></slot>
    </v-side-nav>
</template>

<script>
export default {
  data () {
    return {
      nav: {
        edge: 'right'
      }
    }
  }
}
</script>

<style scoped>

</style>
