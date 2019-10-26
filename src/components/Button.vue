<template>
  <button @click="$emit('click', $emit)">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
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
    background: #55F352;
    transition: 0.6s
  }
</style>
