<template>
  <div class="container">
    <h1 class="title">Shorten your link.</h1>
    <form ref="form" class="form" @submit.prevent>
      <div class="row">
        <label for="url" class="label">Link to shorten</label>

        <Input v-model="link" id="url" class="link-input" type="text" placeholder="Link to shorten" pattern="(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)" required/>
        <Button class="shorten-button" @click="shortenLink">
          Shorten
        </Button>
      </div>

      <div class="row" v-if="shortenedLink">
        <Button :class="{ 'copy-button': true, 'link-copied': copied}" @click="copyShortenLink">
          Copy
        </Button>
        <Input v-model="shortenedLink" id="shortenedLink" @focus.native="$event.target.select()" class="link-input shortened-link"/>
        <label for="shortenedLink" class="label">Link to shorten</label>
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
import config from '@/config'

export default {
  components: {
    Button,
    Input
  },
  data () {
    return {
      link: '',
      shortenedLink: '',
      errorMessage: '',
      copied: false
    }
  },
  methods: {
    async shortenLink () {
      if (this.$refs.form.checkValidity()) {
        try {
          const response = await axios.post(`${config.apiUrl}/aliases`, { url: this.link })

          this.shortenedLink = config.frontUrl + '/' + response.data.token
          this.copied = false
        } catch (error) {
          this.errorMessage = 'API request error'
        }
      }
    },
    copyShortenLink () {
      this.$clipboard(this.shortenedLink)
      this.copied = true
    }
  }
}

</script>

<style scoped>
  .container {
    text-align: center;
  }

  .title {
    padding: 20px 0;
    margin: 0;
    font-size: 40px;
  }

  .label {
    /* hide label and not break accessibility */
    text-indent: -9999em;
    outline: 0;
  }

  .row {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding-bottom: 20px;
  }

  .link-input {
    flex: 2;
  }

  .shortened-link {
    text-align: center;
  }

  .shorten-button {
    flex: 1;
    margin-left: 5px;
  }

  .copy-button {
    flex: 1;
    margin-right: 5px;
  }

  .link-copied {
    color: #101010;
    background: #30DE99;
  }
</style>
