<template>
  <div id="app">
    <header>
      <app-header></app-header>
    </header>
    <main>
      <app-home></app-home>
    </main>
  </div>
</template>
<script>
import AppHome from '@pages/home/AppHome.vue'
import AppHeader from '@c/layout/AppHeader.vue'

export default {
    name: 'app',
    components: {
      AppHome,
      AppHeader
    }
}
</script>


<style lang="scss">
  body  {
    margin: 0 auto;
    font-family: "Lantinghei SC","Open Sans",Arial,"Hiragino Sans GB",STHeiti,"WenQuanYi Micro Hei",SimSun,sans-serif;
    max-width: 640px;
  }
  a { 
    color: #333;
  }
</style>
