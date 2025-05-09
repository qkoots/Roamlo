<template>
  <div class="py-12 lg:py-20">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark dark:text-black mb-4">
          Why You'll Love Roamlo
        </h2>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Freedom & Flexibility -->
        <div class="flex flex-col items-center text-center">
          <div class="bg-white dark:bg-dark-2 rounded-full p-6 mb-6 shadow-sm">
            <svg class="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-dark dark:text-black mb-3">
            FREEDOM & FLEXIBILITY
          </h3>
          <p class="text-body-color dark:text-dark-6 leading-relaxed">
            No long-term contracts, no surprises—just pick your plan, scan the QR code, and go.
          </p>
        </div>

        <!-- Global Reach -->
        <div class="flex flex-col items-center text-center">
          <div class="bg-white dark:bg-dark-2 rounded-full p-6 mb-6 shadow-sm">
            <svg class="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-dark dark:text-black mb-3">
            GLOBAL REACH
          </h3>
          <p class="text-body-color dark:text-dark-6 leading-relaxed">
            Data coverage in 190+ countries, powered by top local networks.
          </p>
        </div>

        <!-- Instant Activation -->
        <div class="flex flex-col items-center text-center">
          <div class="bg-white dark:bg-dark-2 rounded-full p-6 mb-6 shadow-sm">
            <svg class="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-dark dark:text-black mb-3">
            INSTANT ACTIVATION
          </h3>
          <p class="text-body-color dark:text-dark-6 leading-relaxed">
            Buy online, install in minutes, and you're online before you even unpack.
          </p>
        </div>

        <!-- Reliable Support -->
        <div class="flex flex-col items-center text-center">
          <div class="bg-white dark:bg-dark-2 rounded-full p-6 mb-6 shadow-sm">
            <svg class="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67.32-.89 1.27-1.5 2.3-1.28.95.2 1.65 1.13 1.57 2.1-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02-.01.02-.02.03-.03.05-.09.15-.18.32-.25.5-.01.03-.03.05-.04.08-.01.02-.01.04-.02.07-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07.02-.03.03-.06.05-.09.08-.14.18-.27.28-.39.01-.01.02-.03.03-.04.1-.12.21-.23.33-.34.96-.91 2.26-1.65 1.99-3.56-.24-1.74-1.61-3.21-3.35-3.47z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-dark dark:text-black mb-3">
            RELIABLE SUPPORT
          </h3>
          <p class="text-body-color dark:text-dark-6 leading-relaxed">
            24/7 customer care, trusted around the globe.
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style scoped>
@media (max-width: 768px) {
  .grid {
    gap: 2rem;
  }
}

/* Add hover effect for service cards */
.flex-col:hover .bg-white {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}

/* Ensure consistent icon sizes */
.w-12 {
  min-width: 3rem;
}

/* Smooth transitions */
.bg-white {
  transition: all 0.3s ease;
}
</style>