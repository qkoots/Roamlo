<template>
  <div class="max-w-lg mx-auto bg-white dark:bg-dark-2 rounded-2xl p-6 lg:p-8 shadow-sm border border-[#E9ECF8] dark:border-dark-3">
    <!-- Promo Code Section -->
    <div class="space-y-5">
      <!-- Promo Code Header -->
      <h2 class="text-lg font-semibold text-dark dark:text-black mb-4">
        Promo Code
      </h2>

      <div>
        <input
          id="promoCode"
          type="text"
          v-model="promoCode"
          placeholder="Enter Promocode"
          class="w-full px-4 py-2.5 text-base bg-white dark:bg-dark-2 text-dark dark:text-black border border-[#E9ECF8] dark:border-dark-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
        />
      </div>

      <!-- Order Summary Section -->
      <div class="pt-2">
        <h2 class="text-lg font-semibold text-dark dark:text-black mb-4">
          Order Summary
        </h2>
        
        <!-- Summary Details -->
        <div class="space-y-4 border border-[#E9ECF8] dark:border-dark-3 rounded-lg p-4">
          <!-- Item -->
          <div class="flex justify-between items-center">
            <span class="text-body-color/70 dark:text-dark-6/70 text-sm font-light">Item</span>
            <span class="text-dark dark:text-black">{{ planName }}</span>
          </div>

          <!-- Subtotal -->
          <div class="flex justify-between items-center">
            <span class="text-body-color/70 dark:text-dark-6/70 text-sm font-light">Subtotal</span>
            <span class="text-dark dark:text-black">USD {{ subtotal }}</span>
          </div>

          <!-- Taxes -->
          <div class="flex justify-between items-center">
            <span class="text-body-color/70 dark:text-dark-6/70 text-sm font-light">Taxes</span>
            <span class="text-body-color/70 dark:text-dark-6/70 text-sm font-light">(included)</span>
          </div>

          <!-- Total -->
          <div class="flex justify-between items-center pt-4 border-t border-[#E9ECF8] dark:border-dark-3 font-bold">
            <span class="text-dark dark:text-black font-bold">Total</span>
            <span class="text-dark dark:text-black font-bold">USD {{ total }}</span>
          </div>
        </div>
      </div>

      <!-- Terms Section -->
      <div class="pt-2">
        <h2 class="text-lg font-semibold text-dark dark:text-black mb-4">
          Terms
        </h2>
        
        <!-- Checkboxes -->
        <div class="space-y-4 border border-[#E9ECF8] dark:border-dark-3 rounded-lg p-4">
          <!-- Device Compatibility -->
          <label class="flex items-start gap-3 cursor-pointer group">
            <div class="relative flex items-center">
              <input
                type="checkbox"
                v-model="isDeviceCompatible"
                class="w-5 h-5 border border-[#E9ECF8] dark:border-dark-3 rounded transition-all duration-300 focus:ring-2 focus:ring-primary/50 checked:bg-primary checked:border-primary"
              />
            </div>
            <span class="text-body-color/70 dark:text-dark-6/70 text-xs font-light">
              I confirm that my device is eSIM-compatible and unlocked.
            </span>
          </label>

          <!-- Terms and Conditions -->
          <label class="flex items-start gap-3 cursor-pointer group">
            <div class="relative flex items-center">
              <input
                type="checkbox"
                v-model="agreedToTerms"
                class="w-5 h-5 border border-[#E9ECF8] dark:border-dark-3 rounded transition-all duration-300 focus:ring-2 focus:ring-primary/50 checked:bg-primary checked:border-primary"
              />
            </div>
            <span class="text-body-color/70 dark:text-dark-6/70 text-xs font-light">
              I agree to 
              <router-link to="/terms" class="text-primary hover:underline">
                Terms & Conditions
              </router-link> 
              and 
              <router-link to="/refund-policy" class="text-primary hover:underline">
                Refund Policy
              </router-link>
            </span>
          </label>
        </div>
      </div>

      <!-- Checkout Button -->
      <button
        @click="handleCheckout"
        :disabled="!isFormValid"
        class="w-full py-4 px-6 text-lg font-medium text-black bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed rounded-lg transition-all duration-300 mt-4"
      >
        Checkout
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PaymentSummary',
  props: {
    planName: {
      type: String,
      required: true,
      default: 'Curacao 5GB 10Days'
    },
    subtotal: {
      type: Number,
      required: true,
      default: 8
    },
    total: {
      type: Number,
      required: true,
      default: 10
    }
  },
  data() {
    return {
      promoCode: '',
      isDeviceCompatible: false,
      agreedToTerms: false
    }
  },
  computed: {
    isFormValid() {
      return this.isDeviceCompatible && this.agreedToTerms
    }
  },
  methods: {
    handleCheckout() {
      if (this.isFormValid) {
        this.$emit('checkout', {
          promoCode: this.promoCode,
          total: this.total
        })
      }
    }
  }
}
</script>

<style scoped>
/* Custom checkbox styles */
input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  padding: 0;
}

input[type="checkbox"]:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

/* Hover effect for interactive elements */
.hover\:bg-primary\/90:hover {
  opacity: 0.9;
}

/* Focus styles for accessibility */
.focus\:ring-2:focus {
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.1);
}

@media (max-width: 640px) {
  .p-6 {
    padding: 1.25rem;
  }
}
</style>