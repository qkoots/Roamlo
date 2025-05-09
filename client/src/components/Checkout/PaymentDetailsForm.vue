<template>
  <div class="max-w-lg mx-auto bg-white dark:bg-dark-2 rounded-2xl p-6 lg:p-8 shadow-sm border border-[#E9ECF8] dark:border-dark-3">
    <form @submit.prevent="handleSubmit" class="space-y-5">
      <!-- Card Number -->
      <div>
        <label 
          for="cardNumber" 
          class="block text-base font-semibold text-dark dark:text-black mb-2"
        >
          Card Number
        </label>
        <input
          id="cardNumber"
          type="text"
          v-model="formData.cardNumber"
          :maxlength="19"
          @input="formatCardNumber"
          placeholder="1234 5678 9012 3456"
          autocomplete="cc-number"
          class="w-full px-4 py-2.5 text-base bg-white dark:bg-dark-2 text-dark dark:text-black border border-[#E9ECF8] dark:border-dark-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
          :class="{ 'border-red-500': errors.cardNumber }"
        />
        <span v-if="errors.cardNumber" class="text-xs text-red-500 mt-1">{{ errors.cardNumber }}</span>
      </div>

      <!-- Expiration Date and CVC -->
      <div class="grid grid-cols-2 gap-4">
        <!-- Expiration Date -->
        <div>
          <label 
            for="expiryDate" 
            class="block text-base font-semibold text-dark dark:text-black mb-2"
          >
            Expiration Date
          </label>
          <input
            id="expiryDate"
            type="text"
            v-model="formData.expiryDate"
            placeholder="MM / YY"
            maxlength="7"
            autocomplete="cc-exp"
            @input="formatExpiryDate"
            class="w-full px-4 py-2.5 text-base bg-white dark:bg-dark-2 text-dark dark:text-black border border-[#E9ECF8] dark:border-dark-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
            :class="{ 'border-red-500': errors.expiryDate }"
          />
          <span v-if="errors.expiryDate" class="text-xs text-red-500 mt-1">{{ errors.expiryDate }}</span>
        </div>

        <!-- Security Code -->
        <div>
          <label 
            for="cvc" 
            class="block text-base font-semibold text-dark dark:text-black mb-2"
          >
            Security Code
          </label>
          <div class="relative">
            <input
              id="cvc"
              :type="showCVC ? 'text' : 'password'"
              v-model="formData.cvc"
              placeholder="CVC"
              maxlength="4"
              autocomplete="cc-csc"
              class="w-full px-4 py-2.5 text-base bg-white dark:bg-dark-2 text-dark dark:text-black border border-[#E9ECF8] dark:border-dark-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
              :class="{ 'border-red-500': errors.cvc }"
            />
            <button
              type="button"
              @click="toggleCVC"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-body-color dark:text-dark-6"
              aria-label="Toggle CVC visibility"
            >
              <EyeOn v-if="showCVC" class="w-5 h-5" />
              <EyeOff v-else class="w-5 h-5" />
            </button>
          </div>
          <span v-if="errors.cvc" class="text-xs text-red-500 mt-1">{{ errors.cvc }}</span>
        </div>
      </div>

      <!-- Country -->
      <div>
        <label 
          for="country" 
          class="block text-base font-semibold text-dark dark:text-black mb-2"
        >
          Country
        </label>
        <select
          id="country"
          v-model="formData.country"
          class="w-full px-4 py-2.5 text-base bg-white dark:bg-dark-2 text-dark dark:text-black border border-[#E9ECF8] dark:border-dark-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
          :class="{ 'border-red-500': errors.country }"
        >
          <option value="">Select a country</option>
          <option v-for="country in countries" :key="country.code" :value="country.code">
            {{ country.name }}
          </option>
        </select>
        <span v-if="errors.country" class="text-xs text-red-500 mt-1">{{ errors.country }}</span>
      </div>
    </form>
  </div>
</template>

<script>
import EyeOn from '../svg/EyeOn.vue'
import EyeOff from '../svg/EyeOff.vue'

export default {
  name: 'PaymentDetails',
  components: {
    EyeOn,
    EyeOff
  },
  data() {
    return {
      formData: {
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        country: ''
      },
      showCVC: false,
      errors: {},
      countries: [
        { code: 'US', name: 'United States' },
        { code: 'GB', name: 'United Kingdom' },
        // Add more countries as needed
      ]
    }
  },
  methods: {
    formatCardNumber(e) {
      let value = e.target.value.replace(/\D/g, '')
      value = value.replace(/(\d{4})/g, '$1 ').trim()
      this.formData.cardNumber = value
    },
    formatExpiryDate(e) {
      let value = e.target.value.replace(/\D/g, '')
      if (value.length >= 2) {
        value = value.slice(0, 2) + ' / ' + value.slice(2)
      }
      this.formData.expiryDate = value
    },
    toggleCVC() {
      this.showCVC = !this.showCVC
    },
    validateForm() {
      this.errors = {}
      
      // Card number validation
      if (!/^\d{16}$/.test(this.formData.cardNumber.replace(/\s/g, ''))) {
        this.errors.cardNumber = 'Please enter a valid 16-digit card number'
      }

      // Expiry date validation
      const [month, year] = this.formData.expiryDate.split('/').map(s => s.trim())
      const currentDate = new Date()
      const currentYear = currentDate.getFullYear() % 100
      const currentMonth = currentDate.getMonth() + 1

      if (!month || !year || month > 12 || month < 1) {
        this.errors.expiryDate = 'Invalid expiration date'
      } else if (
        (parseInt(year) < currentYear) || 
        (parseInt(year) === currentYear && parseInt(month) < currentMonth)
      ) {
        this.errors.expiryDate = 'Card has expired'
      }

      // CVC validation
      if (!/^\d{3,4}$/.test(this.formData.cvc)) {
        this.errors.cvc = 'Invalid security code'
      }

      // Country validation
      if (!this.formData.country) {
        this.errors.country = 'Please select a country'
      }

      return Object.keys(this.errors).length === 0
    },
    handleSubmit() {
      if (this.validateForm()) {
        this.$emit('submit', this.formData)
      }
    }
  }
}
</script>

<style scoped>
/* Hide number input spinners */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

/* Ensure proper text sizing on mobile */
@media (max-width: 640px) {
  .text-lg {
    font-size: 1rem;
  }
  
  input, select {
    font-size: 16px; /* Prevents zoom on mobile */
  }
}
</style>