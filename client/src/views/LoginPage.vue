<template>
  <div>
    <LoginForm />
  </div>
  <!-- <div
    class="w-full mt-24 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 animate__animated animate__fadeIn">
    <div class="w-full sm:max-w-md p-5 mx-auto">
      <h2 class="mb-12 text-center text-5xl font-extrabold">Login</h2>
      <form @submit.prevent="submit">
        <div class="mb-4">
          <label class="block mb-1" for="email">Email-Address</label>
          <input
            type="email"
            name="email"
            v-model="email"
            required
            class="py-2 px-3 border-2 border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
        </div>
        <div class="mb-4">
          <label class="mb-1" for="password">Password</label>
          <div class="flex items-center">
            <input
              :type="showPass ? 'text' : 'password'"
              name="password"
              required
              v-model="password"
              class="py-2 px-3 border-l-2 border-y-2 border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-l-md shadow-sm disabled:bg-gray-100 mt-1 w-full" />
            <div
              @click="showPass = !showPass"
              class="py-3 px-1 mt-1 border-y-2 border-r-2 hover:cursor-pointer border-gray-300 rounded-r-md">
              <EyeOff v-if="showPass" />
              <EyeOn v-else />
            </div>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <div class="flex items-center">
            <input
              type="checkbox"
              checked
              class="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
            <label for="remember_me" class="ml-2 mt-1 block text-sm leading-5 text-gray-900">
              Remember me
            </label>
          </div>
          <router-link to="/" class="text-sm hover:underline"> Forgot your password? </router-link>
        </div>
        <div class="mt-6">
          <button
            class="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
            Login
          </button>
        </div>
        <div class="mt-6 text-center">
          Don't have an Account ?
          <router-link to="/register" class="hover:underline"
            ><span class="font-bold">Register</span></router-link
          >
        </div>
      </form>
    </div>
  </div> -->
</template>

<script>
import LoginForm from '../components/Auth/LoginForm.vue' 
import { api } from '../../utils/axios'
import { mapState } from 'vuex'
import EyeOn from '../components/svg/EyeOn.vue'
import EyeOff from '../components/svg/EyeOff.vue'

export default {
  name: 'LoginPage',
  components: {
    EyeOn,
    EyeOff,
    LoginForm
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
