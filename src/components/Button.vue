<template>
  <button
    v-bind="$attrs"
    @click="$emit('click', $emit)"
    class="button"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>

<style scoped>
  .button {
    color: #303030;
    background: #EEEEEE;
    border: 1px solid #202020;
    padding: 10px;
    transition: 0.6s;
  }

  .button:hover,
  .button:focus {
    color: #EEEEEE;
    background: #303030;
    transition: 0.6s
  }
</style>
