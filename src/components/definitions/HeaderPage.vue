<template>
    <v-nav nav-class="cyan darken-1">
        <a href="/" class="brand-logo">SPA Vue</a>
        <ul class="right">
            <li>
                <v-btn-link class="btn-floating btn-large waves-effect waves-light cyan darken-1" v-side-nav:demo="nav"><i class="material-icons">menu</i></v-btn-link>
            </li>
        </ul>
        <v-side-nav id="side" slot="side-nav"></v-side-nav>
    </v-nav>
</template>
<script>
export default {
  data () {
    return {
      nav: ''
    }
  }
}
</script>

<style scoped>
</style>
