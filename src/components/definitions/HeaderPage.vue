<template>
    <v-nav nav-class="cyan darken-1">
        <a href="#!" class="brand-logo">Logo</a>
        <ul class="right">
            <li>
                <a href="#!">Item</a>
            </li>
            <li>
                <a href="#!">Item</a>
            </li>
            <li>
                <v-btn-link class="btn-floating btn-large waves-effect waves-light" v-side-nav:demo="nav"><i class="material-icons">menu</i></v-btn-link>
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
