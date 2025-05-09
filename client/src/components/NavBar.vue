<template>
  <header class="relative z-10 bg-white dark:bg-dark md:border-b md:border-[#E9ECF8] dark:md:border-dark-3">
    <div class="container mx-auto">
      <div class="relative -mx-4 flex items-center justify-between">
        <div class="w-60 max-w-full px-4">
          <a href="/#" class="block w-full py-5">
            <!-- Replace with your logo -->
            <span class="text-xl font-bold">LOGO</span>
          </a>
        </div>
        <div class="flex w-full items-center justify-between px-4">
          <div>
            <button
              @click="toggleNavbar"
              ref="dropdownButtonRef"
              id="navbarToggler"
              class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
            >
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-dark dark:bg-white"
              ></span>
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-dark dark:bg-white"
              ></span>
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-dark dark:bg-white"
              ></span>
            </button>
            <nav
              :class="[
                'lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent',
                'fixed top-0 right-0 h-screen w-[250px] bg-white dark:bg-dark-2 p-6 shadow-2xl transition-transform duration-300 ease-in-out lg:h-auto',
                open ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
              ]"
            >
              <ul class="block space-y-3 lg:flex lg:space-y-0">
                <li v-for="(item, index) in navLinkItems" :key="index">
                  <a
                    :href="item.href"
                    class="inline-block text-base text-body-color hover:text-primary dark:text-dark-6 lg:ml-12"
                  >
                    {{ item.text }}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="hidden justify-end pr-16 sm:flex lg:pr-0">
            <a
              href="/#"
              class="px-7 py-3 text-base text-body-color hover:text-primary dark:text-dark-6"
            >
              Sign in
            </a>
            <a
              href="/#"
              class="rounded-md bg-primary px-7 py-3 text-base font-medium text-black hover:bg-primary/90"
            >
              Sign Up
            </a>
          </div>
          <div>
            <DropdownAccountButton />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import DropdownAccountButton from './DropdownAccountButton.vue'

export default {
  components: {
    DropdownAccountButton
  },
  data() {
    return {
      open: false,
      navLinkItems: [
        { text: 'Home', href: 'javascript:void(0)' },
        { text: 'Payment', href: 'javascript:void(0)' },
        { text: 'About', href: 'javascript:void(0)' },
        { text: 'Blog', href: 'javascript:void(0)' }
      ]
    }
  },
  methods: {
    toggleNavbar() {
      this.open = !this.open
    },
    handleClickOutside(event) {
      if (
        this.$refs.dropdownButtonRef && 
        !this.$refs.dropdownButtonRef.contains(event.target) && 
        this.open
      ) {
        this.open = false
      }
    },
    handleEscKey(event) {
      if (event.key === 'Escape' && this.open) {
        this.open = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
    document.addEventListener('keydown', this.handleEscKey)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
    document.removeEventListener('keydown', this.handleEscKey)
  }
}
</script>
