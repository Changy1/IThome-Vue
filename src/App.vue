<template>
  <div id="app">
    <header>
      <app-header></app-header>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import AppHeader from '@c/layout/AppHeader.vue'

export default {
    name: 'app',
    components: {
      AppHeader
    }
}
</script>


<style lang="scss">
  body  {
    margin: 0 auto;
    font-family: "Lantinghei SC","Open Sans",Arial,"Hiragino Sans GB",STHeiti,"WenQuanYi Micro Hei",SimSun,sans-serif;
    max-width: 640px;
    color: #333;
  }
  a { 
    color: #333;
  }
</style>
