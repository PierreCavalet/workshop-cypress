<template>
  <div class="about">
    <v-layout>
      <v-flex>
        <h1 data-cy="signup-title">Signup 1</h1>
        <v-col cols="12" offset-md="3" offset-lg="4" sm="12" md="6" lg="4">
          <img
            data-cy="signup1-gif"
            width="100%"
            src="https://media.giphy.com/media/jRlP4zbERYW5HoCLvX/giphy.gif"
            alt="wtf"
          />
          <br />
          <br />
          <br />
          <v-form ref="form" lazy-validation>
            <v-text-field
              data-cy="firstname-input"
              label="First name"
              solo
              :rules="[v => !!v || 'First name is required']"
            />

            <v-text-field
              data-cy="lastname-input"
              label="Last name"
              solo
              :rules="[v => !!v || 'Last name is required']"
            />

            <v-text-field
              data-cy="email-input"
              label="E-mail"
              solo
              :rules="[
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
              ]"
            />

            <v-text-field
              data-cy="password-input"
              label="Password"
              type="password"
              solo
              :rules="[
                v => !!v || 'Password is required',
                v => (!!v && v.length >= 8) || 'Min 8 characters'
              ]"
            />

            <v-btn
              v-if="!done"
              large
              :loading="loading"
              @click="validate"
              data-cy="submit-button"
            >
              Register
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
