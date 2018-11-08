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
