<template>
  <div>
    <SignupForm />
  </div>
</template>

<script>
import SignupForm from '../components/Auth/SignupForm.vue' 
import { api } from '../../utils/axios'
import { mapState } from 'vuex'
import EyeOn from '../components/svg/EyeOn.vue'
import EyeOff from '../components/svg/EyeOff.vue'

export default {
  name: 'SignupPage',
  components: {
    EyeOn,
    EyeOff,
    SignupForm
  },
  data() {
    return {
      email: 'quincy@qoots.io',
      password: '123Fasil',
      showPass: false,
    }
  },
  computed: mapState([
    
  ]),

  methods: {
    async submit() {
      try {
        const { data: response } = await api.post(`${import.meta.env.VITE_API_URL}/login`, {
          email: this.email,
          password: this.password
        })

        if (response.status === 'success') {
          this.$store.dispatch('setUserInfo', {
            name: response.user.name,
            email: response.user.email,
            token: response.accessToken
          })

          this.$router.push('/profile')
          this.$toast.success(`Good`, {
            timeout: 2000,
            position: 'top-center',
            icon: true
          })
        }
      } catch (error) {
        console.log(error)
        this.$toast.error(`${error.response}`, {
          timeout: 2000,
          position: 'top-center',
          icon: true
        })
      }
    }
  }
}
</script>
