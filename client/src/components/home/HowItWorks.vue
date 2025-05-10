<template>
  <section class="container mx-auto px-4 py-12 lg:py-0 2xl:px-52">
    <div class="">

      <!-- Steps Container -->
      <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

        <!-- Steps List -->
        <div class="w-full lg:w-1/2 space-y-8">

             <!-- Section Header -->
          <h2 class="text-3xl md:text-4xl text-dark dark:text-black mb-12 lg:mb-16">
            How Roamlo Works?
          </h2>
          
          <!-- Step 1 -->
          <div class="flex gap-6 items-start">
            <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center text-white font-bold text-xl bg-[#EC9944] rounded-xl">
              1
            </div>
            <div>
              <h3 class="text-xl font-bold text-dark dark:text-black mb-2">
                Choose Your Adventure
              </h3>
              <p class="text-body-color dark:text-dark-6 leading-relaxed">
                Browse our global, regional, or country-specific plans—pick the data allowance and validity that fits your trip.
              </p>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="flex gap-6 items-start">
            <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center text-white font-bold text-xl bg-[#91B43C] rounded-xl">
              2
            </div>
            <div>
              <h3 class="text-xl font-bold text-dark dark:text-black mb-2">
                Scan & Install
              </h3>
              <p class="text-body-color dark:text-dark-6 leading-relaxed">
                After purchase, you'll receive a QR code. Open your device's eSIM settings, scan the code, and voilà—your plan is live in seconds.
              </p>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="flex gap-6 items-start">
            <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center text-white font-bold text-xl bg-[#EC9944] rounded-xl">
              3
            </div>
            <div>
              <h3 class="text-xl font-bold text-dark dark:text-black mb-2">
                Roam & Explore
              </h3>
              <p class="text-body-color dark:text-dark-6 leading-relaxed">
                Jump online instantly—post your paragliding selfie, Zoom into meetings, or binge your favorite show with zero roaming hassles.
              </p>
            </div>
          </div>
        </div>

        <!-- Phone Illustration -->
        <div class="w-full lg:w-1/2 flex justify-center">
          <div class="relative w-[280px] md:w-[320px] h-[560px] md:h-[640px]">
            <svg 
              class="w-full h-full"
              viewBox="0 0 320 640" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect 
                x="2" 
                y="2" 
                width="316" 
                height="636" 
                rx="40" 
                stroke="currentColor" 
                stroke-width="4" 
                class="text-dark/10 dark:text-white/10"
              />
              <rect 
                x="20" 
                y="4" 
                width="120" 
                height="24" 
                rx="12" 
                fill="currentColor" 
                class="text-dark/10 dark:text-white/10"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowItWorks'
}
</script>

<style scoped>

/* Optional: Add animation for steps on scroll */
@media (prefers-reduced-motion: no-preference) {
  .flex.gap-6 {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;
  }

  .flex.gap-6:nth-child(2) {
    animation-delay: 0.2s;
  }

  .flex.gap-6:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

/* Ensure text remains readable */
@media (max-width: 640px) {
  .text-3xl {
    font-size: 1.875rem;
  }
  
  .text-xl {
    font-size: 1.25rem;
  }
}
</style>