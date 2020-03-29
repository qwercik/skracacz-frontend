<template>
  <input
    v-bind="$attrs"
    @input="$emit('input', $event.target.value)"
    class="link"
  />
</template>

<script>
export default {
  inheritAttrs: false
}
</script>

<style>
  .link {
    padding: 10px;
    border: 1px solid #202020;
  }
</style>
