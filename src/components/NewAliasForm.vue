<template>
  <div class="container">
    <h1 class="title">Shorten your link.</h1>
    <form ref="form" class="form" @submit.prevent>
      <div class="row">
        <label for="url" class="label">Link to shorten</label>

        <Input v-model="link" id="url" class="link-input" type="url" placeholder="Link to shorten" required/>
        <Button class="button" @click="shortenLink">
          Shorten
        </Button>
      </div>

      <div class="row" v-if="shortenedLink">
        <Input v-model="shortenedLink" class="shortened-link"/>
      </div>

      <div class="row" v-if="errorMessage">
        {{ errorMessage }}
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import Button from '@/components/Button'
import Input from '@/components/Input'

export default {
  components: {
    Button,
    Input
  },
  data () {
    return {
      link: '',
      shortenedLink: '',
      errorMessage: ''
    }
  },
  methods: {
    async shortenLink () {
      if (this.$refs.form.checkValidity()) {
        try {
          const response = await axios.post('https://s.komputeryk.pl/api/aliases', { url: this.link })
          this.shortenedLink = 'http://localhost:8080/' + response.data.token
        } catch (error) {
          this.errorMessage = 'API request error'
        }
      }
    }
  }
}

</script>

<style scoped>
  .form {
  }

  .title {
    padding: 20px 0;
    margin: 0;
    font-size: 40px;
  }

  .label {
    display: none;
  }

  .row {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding-bottom: 20px;
  }

  .link-input {
    flex: 3;
  }

  .shortened-link {
    width: 100%;
    text-align: center;
  }

  .button {
    flex: 1;
    margin-left: 5px;
  }
</style>
