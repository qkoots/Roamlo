<template>
  <div class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <!-- eSIM Plan Card -->
      <div 
        v-for="plan in plans" 
        :key="plan.id"
        class="group flex flex-col bg-white dark:bg-dark-2 rounded-xl overflow-hidden border border-[#E9ECF8] dark:border-dark-3 hover:shadow-lg transition-all duration-300"
      >
        <!-- Card Header -->
        <div class="relative bg-gradient-to-r from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 p-4">
          <!-- Provider Info -->
          <div class="flex items-center justify-between mb-2">
            <!-- <img :src="plan.providerLogo" alt="" class="w-10 h-10 rounded-lg shadow-sm" /> -->
            <span class="py-0.5 bg-white dark:bg-dark-2 text-primary text-xs font-medium ">
              {{ plan.coverage }}
            </span>
          </div>
          
          <!-- Plan Name -->
          <h3 class="text-lg font-bold text-dark dark:text-black">
            {{ plan.provider }}
          </h3>
          
          <!-- Best Value Badge -->
          <div 
            v-if="plan.bestValue"
            class="absolute top-3 right-3 bg-primary text-dark px-2 py-0.5 rounded-full text-xs font-medium shadow-sm"
          >
            Best Value
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-4 flex-grow">
          <!-- Main Feature -->
          <div class="flex justify-between items-center p-3 bg-gray-50 dark:bg-dark-3 rounded-lg mb-3">
            <div>
              <span class="block text-xs text-body-color dark:text-dark-6">Data Amount</span>
              <span class="text-xl font-bold text-dark dark:text-black">{{ plan.data }} GB</span>
            </div>
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <!-- Features Grid -->
          <div class="grid grid-cols-2 gap-3 mb-3">
            <div class="p-2 bg-gray-50 dark:bg-dark-3 rounded-lg text-center">
              <span class="block text-xs text-body-color dark:text-dark-6">Validity</span>
              <span class="font-semibold text-sm text-dark dark:text-black">{{ plan.validity }} Days</span>
            </div>
            <div class="p-2 bg-gray-50 dark:bg-dark-3 rounded-lg text-center">
              <span class="block text-xs text-body-color dark:text-dark-6">Network</span>
              <span class="font-semibold text-sm text-dark dark:text-black">4G/LTE</span>
            </div>
          </div>
        </div>

        <!-- Card Footer -->
        <div class="p-4 border-t border-[#E9ECF8] dark:border-dark-3">
          <!-- Price -->
          <div class="flex justify-between items-center mb-3">
            <span class="text-xs text-body-color dark:text-dark-6">Total Price</span>
            <div class="flex items-baseline gap-1">
              <span class="text-2xl font-bold text-primary">{{ plan.price }}</span>
              <span class="text-xs text-body-color dark:text-dark-6">USD</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="space-y-2">
            <!-- <button 
              @click="selectPlan(plan)"
              class="w-full py-2 px-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors duration-300 text-sm"
            >
              Buy Now
            </button> -->
            <button 
              @click="viewDetails(plan)"
              class="w-full py-2 px-4 bg-gray-50 dark:bg-dark-3 text-body-color dark:text-dark-6 hover:bg-gray-100 dark:hover:bg-dark-4 rounded-lg transition-colors duration-300 text-sm"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ESIMPlans',
  data() {
    return {
      plans: [
        {
          id: 1,
          provider: 'Saba Mobile',
          providerLogo: '/path/to/logo.png',
          coverage: 'Antilles',
          data: 1,
          validity: 7,
          price: 8.50,
          bestValue: true
        },
        {
          id: 2,
          provider: 'Saba Mobile',
          providerLogo: '/path/to/logo.png',
          coverage: 'Antilles',
          data: 3,
          validity: 15,
          price: 15.99,
          bestValue: false
        },
        {
          id: 3,
          provider: 'Saba Mobile',
          providerLogo: '/path/to/logo.png',
          coverage: 'Antilles',
          data: 5,
          validity: 30,
          price: 32.50,
          bestValue: false
        },
        {
          id: 4,
          provider: 'Saba Mobile',
          providerLogo: '/path/to/logo.png',
          coverage: 'Antilles',
          data: 30,
          validity: 30,
          price: 65,
          bestValue: false
        },
        // Add more plans...
      ]
    }
  },
  methods: {
    selectPlan(plan) {
      this.$router.push({ 
        name: 'Checkout',
        params: { planId: plan.id }
      })
    },
    viewDetails(plan) {
      // Handle viewing plan details
    }
  }
}
</script> 

<style scoped>
/* Card hover effect */
.group:hover {
  transform: translateY(-2px);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .text-3xl {
    font-size: 2rem;
  }
  
  .p-6 {
    padding: 1.25rem;
  }
}
</style>