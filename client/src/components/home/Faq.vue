<template>
  <div class="py-12 lg:py-8">
    <div class="container mx-auto px-4 py-12 lg:py-20 lg:px-52">
      <!-- Header Section -->
      <div class="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between mb-8">
        <div class="lg:text-center">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl text-dark dark:text-black mb-3 lg:mb-4">
            Frequently Asked Questions
          </h2>
        </div>
      </div>

      <!-- FAQ Items -->
      <div class="flex flex-col">
        <div 
          v-for="(item) in faqItems" 
          :key="item.id"
          class="border-b border-[#E9ECF8] dark:border-dark-3"
        >
          <button
            @click="toggleAccordion(item.id)"
            class="w-full px-4 py-4 flex justify-between items-center hover:text-primary transition-colors duration-300"
          >
            <span class="text-left text-base font-medium text-dark dark:text-dark">
              {{ item.question }}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-body-color transition-transform duration-300"
              :class="{ 'rotate-45': activeId === item.id }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          <div 
            class="overflow-hidden transition-all duration-300"
            :class="{ 'max-h-0': activeId !== item.id, 'max-h-[500px]': activeId === item.id }"
          >
            <div class="px-4 py-4 bg-gray-50 dark:bg-gray-200 text-body-color dark:text-dark-3 font-light font-sans leading-relaxed">
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  data() {
    return {
      activeId: null,
      faqItems: [
        {
          id: 1,
          question: 'How does Roamlo\'s eSIM work?',
          answer: 'Roamlo\'s eSIM technology allows you to instantly connect to local networks without physical SIM cards. Simply purchase a plan, scan the QR code, and you\'re ready to roam.'
        },
        {
          id: 2,
          question: 'Which countries are supported?',
          answer: 'We currently support over 100+ countries worldwide. You can check specific coverage details on our destinations page.'
        },
        {
          id: 3,
          question: 'Can I share my data plan with other devices?',
          answer: 'No, each eSIM is tied to a single device. However, you can purchase multiple plans for different devices.'
        },
        {
          id: 4,
          question: 'What happens if I run out of data?',
          answer: 'You can easily top up your data through our app or website. We\'ll also send notifications when you\'re running low.'
        },
        {
          id: 5,
          question: 'Can I share my data plan with other devices?',
          answer: 'No, each eSIM is tied to a single device. However, you can purchase multiple plans for different devices.'
        },
        {
          id: 6,
          question: 'What happens if I run out of data?',
          answer: 'You can easily top up your data through our app or website. We\'ll also send notifications when you\'re running low.'
        },
        {
          id: 7,
          question: 'Can I share my data plan with other devices?',
          answer: 'No, each eSIM is tied to a single device. However, you can purchase multiple plans for different devices.'
        },
        {
          id: 8,
          question: 'What happens if I run out of data?',
          answer: 'You can easily top up your data through our app or website. We\'ll also send notifications when you\'re running low.'
        }
      ]
    }
  },
  methods: {
    toggleAccordion(id) {
      this.activeId = this.activeId === id ? null : id
    }
  }
}
</script>

<style scoped>
.max-h-0 {
  max-height: 0;
}

.max-h-[500px] {
  max-height: 500px;
}
</style>