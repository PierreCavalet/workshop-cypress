<template>
  <div class="about">
    <v-layout>
      <v-flex>
        <h1 data-cy="signup2-title">Signup 2</h1>
        <v-col cols="12" offset="3" sm="6" md="6">
          <img
            data-cy="signup2-gif"
            width="100%"
            src="https://media.giphy.com/media/H5urqjnvEg8TK/giphy.gif"
            alt="wtf"
          />
          <br />
          <br />
          <br />
          <v-form ref="form" lazy-validation v-if="step === 1">
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
          <v-form ref="form2" lazy-validation v-if="step === 2">
            <v-text-field
              data-cy="code-input"
              v-model="code"
              label="Code"
              solo
              :rules="[v => !!v || 'Code is required']"
            />

            <span v-if="error" data-cy="error-message">{{ error }}</span>
            <br />

            <v-btn
              v-if="!done"
              large
              :loading="loading"
              @click="validate2"
              data-cy="submit-button"
            >
              Validate my account
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
  name: 'Signup2',
  data() {
    return {
      code: '',
      error: null,
      loading: false,
      done: false,
      step: 1
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.loading = true
        setTimeout(() => (this.done = true), 2000)
        setTimeout(() => {
          this.step = 2
          this.loading = false
          this.done = false
        }, 3000)
      }
    },

    validate2() {
      if (this.$refs.form2.validate()) {
        this.loading = true

        if (this.code !== '123456') {
          this.error = 'Invalid code'
          this.loading = false
          return
        }

        setTimeout(() => (this.done = true), 2000)
        setTimeout(() => this.$router.push({ name: 'home' }), 3000)
      }
    }
  }
}
</script>
