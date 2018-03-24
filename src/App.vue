<template>
  <div id="app">
    <header-page></header-page>
    <content-page>
      <v-side-nav id="demo">
        <ul>
          <li>
            <router-link to="/HelloWorldRoutes">Home</router-link>
          </li>
        </ul>
      </v-side-nav>
      <router-view></router-view>
    </content-page>
    <footer-page></footer-page>
  </div>
</template>

<script>
import HeaderPage from './components/definitions/HeaderPage.vue'
import ContentPage from './components/definitions/ContentPage.vue'
import FooterPage from './components/definitions/FooterPage.vue'

export default {
  components: {
    HeaderPage,
    ContentPage,
    FooterPage
  },
  name: 'App'
}
</script>

<style>
</style>
