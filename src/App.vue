<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>

export default {
    name: 'app',
    beforeCreate () {
      this.$store.dispatch('collect/startInfo')
    }
}
</script>


<style lang="scss">
  body  {
    margin: 0 auto;
    font-family: "Lantinghei SC","Open Sans",Arial,"Hiragino Sans GB",STHeiti,"WenQuanYi Micro Hei",SimSun,sans-serif;
    color: #333;
  }
  a { 
    color: #333;
  }
</style>
