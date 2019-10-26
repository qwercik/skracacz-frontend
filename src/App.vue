<template>
  <div id="app" class="app">
    <NewAliasForm/>
  </div>
</template>

<script>
import NewAliasForm from '@/components/NewAliasForm'

export default {
  components: {
    NewAliasForm
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  body, html {
    background: #FFFFFF;
    margin: 0;
    padding: 0;

    font-family: 'Open Sans', sans-serif;
  }

  .app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
