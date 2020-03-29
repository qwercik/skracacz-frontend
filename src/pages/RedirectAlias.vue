<template>
  <div v-if="error" class="wrapper">
    <h1 class="title">The alias does not exist</h1>
    <p class="description">
      Make sure that your link is correct.
    </p>
  </div>
</template>

<script>
import axios from 'axios'
import config from '@/config'

export default {
  props: ['token'],
  data () {
    return {
      error: false
    }
  },
  created () {
    const regex = /[A-Za-z0-9-]+/
    if (!regex.test(this.token)) {
      this.error = true
    } else {
      axios.get(`${config.apiUrl}/aliases/${this.token}`)
        .then(response => {
          location.href = response.data.url
        })
        .catch(() => {
          this.error = true
        })
    }
  }
}
</script>

<style>
  .wrapper {
    text-align: center;
  }

  .title {
    font-size: 40px;
  }
</style>
