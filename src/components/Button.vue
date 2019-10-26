<template>
  <button
    v-bind="$attrs"
    @click="$emit('click', $emit)"
  >
    <span class="button-text">
      <slot/>
    </span>
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
    padding: 0;
    transition: 0.6s;
  }

  .button-text {
    padding: 10px;
  }

  .button:hover,
  .button:focus {
    background: #55F352;
    transition: 0.6s
  }
</style>
