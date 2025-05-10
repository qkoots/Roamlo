<template>
  <div class="container mx-auto px-4 py-12 lg:py-32 2xl:px-52 2xl:py-40">
    <!-- Hero Content -->
    <div class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
      <!-- Left Column: Content -->
      <div class="w-full lg:w-1/2 text-center lg:text-left mt-16">
        <h1 class="text-3xl md:text-4xl lg:text-5xl/tight text-dark dark:text-black mb-6">
          Your Passport to <br> Global Data
        </h1>

        <h2 class="text-1xl md:text-2xl lg:text-2xl text-dark dark:text-black mb-6 font-medium">
          Born to Roam. Built to Connect.
        </h2>

        <p class="text-base md:text-lg lg:text-md text-body-color dark:text-dark-6 mb-8 lg:max-w-none leading-relaxed">
          Enjoy seamless eSIM coverage in 190+ countries—no SIM swaps, no hidden fees, 
          just instant connectivity wherever adventure finds you.
        </p>

         <!-- Search Input -->
        <div class="relative max-w-xl mx-auto lg:mx-0">
          <input 
            type="search"
            placeholder="Search for a destiny"
            v-model="searchQuery"
            @keyup.enter="handleSearch"
            class="w-full px-6 py-4 text-lg bg-white dark:bg-dark-2 text-dark dark:text-black border border-[#E9ECF8] dark:border-dark-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 pl-12"
            :class="{ 'pr-12': searchQuery }"
          />
          <!-- Search Icon -->
          <svg 
            class="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-body-color dark:text-dark-6"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <!-- Clear Button -->
          <button
            v-if="searchQuery"
            @click="clearSearch"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 text-body-color dark:text-dark-6 hover:text-dark dark:hover:text-black transition-colors duration-300"
            aria-label="Clear search"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      </div>

      <!-- Right Column: Globe Image -->
      <div class="w-full lg:w-1/2 relative">
        <img 
          src="" 
          alt=""
          class="w-full h-auto max-w-xl mx-auto lg:max-w-none animate-float"
          aria-hidden="true"
        />
        
        <!-- Decorative Elements -->
        <div class="absolute top-1/4 -left-4 w-8 h-8 bg-primary/20 rounded-full" aria-hidden="true"></div>
        <div class="absolute bottom-1/3 -right-4 w-12 h-12 bg-primary/10 rounded-full" aria-hidden="true"></div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    handleSearch() {
      if (this.searchQuery.trim()) {
        this.$router.push({
          path: '/plans',
          query: { search: this.searchQuery.trim() }
        })
      }
    },
    clearSearch() {
      this.searchQuery = ''
    }
  }
}
</script>

<style scoped>
/* Ensure proper text wrapping on small screens */
h1, h2, p {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* Smooth transitions for interactive elements */
.hover\:shadow-lg {
  will-change: transform;
}

/* Floating animation for the globe */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Ensure decorative elements don't interfere with content */
.absolute {
  pointer-events: none;
}

@media (max-width: 1024px) {
  .lg\:text-left {
    text-align: center;
  }
  
  .animate-float {
    max-width: 80%;
    margin: 2rem auto;
  }
}

@media (max-width: 640px) {
  .text-3xl {
    font-size: 2rem;
  }
  
  .container {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style>