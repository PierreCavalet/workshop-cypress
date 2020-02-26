<template>
  <div class="about">
    <v-layout>
      <v-flex>
        <h1>Login</h1>
        <v-col cols="12" offset="3" sm="6" md="6">
          <img
            width="100%"
            src="https://media.giphy.com/media/H7JD0pfyksePe/giphy.gif"
            alt="whoareyou"
          />
          <br />
          <br />
          <br />
          <v-form ref="form" lazy-validation>
            <v-text-field
              label="E-mail"
              solo
              :rules="[
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
              ]"
            />

            <v-text-field
              label="Password"
              type="password"
              solo
              :rules="[v => !!v || 'Password is required']"
            />

            <v-btn v-if="!done" large :loading="loading" @click="validate">
              login
            </v-btn>
            <template v-else> OK </template>
          </v-form>
        </v-col>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Signup1',
  data() {
    return {
      loading: false,
      done: false
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.loading = true
        setTimeout(() => (this.done = true), 2000)
        setTimeout(() => this.$router.push({ name: 'home' }), 3000)
      }
    }
  }
}
</script>
