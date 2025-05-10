<template>
  <div class="py-12 lg:py-20">
    <div class="container mx-auto px-4 lg:px-52">
      <!-- Header -->
      <div class="text-center lg:text-left mb-12">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl text-dark dark:text-black mb-4">
          Why You'll Love Roamlo
        </h2>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Freedom & Flexibility -->
        <div class="flex flex-col">
          <div class="py-6">
            <svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-dark dark:text-black mb-3">
            FREEDOM & FLEXIBILITY
          </h3>
          <p class="text-body-color dark:text-dark-6 leading-relaxed">
            No long-term contracts, no surprises—just pick your plan, scan the QR code, and go.
          </p>
        </div>

        <!-- Global Reach -->
        <div class="flex flex-col">
          <div class="py-6">
            <svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.0001 3H9.0001C7.0501 8.84 7.0501 15.16 9.0001 21H8.0001" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 8.99998C8.84 7.04998 15.16 7.04998 21 8.99998" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
          <h3 class="text-lg font-bold text-dark dark:text-black mb-3">
            GLOBAL REACH
          </h3>
          <p class="text-body-color dark:text-dark-6 leading-relaxed">
            Data coverage in 190+ countries, powered by top local networks.
          </p>
        </div>

        <!-- Instant Activation -->
        <div class="flex flex-col">
          <div class="py-6">
            <svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.7099 15.18L12.6099 13.33C12.0699 13.01 11.6299 12.24 11.6299 11.61V7.51001" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
          <h3 class="text-lg font-bold text-dark dark:text-black mb-3">
            INSTANT ACTIVATION
          </h3>
          <p class="text-body-color dark:text-dark-6 leading-relaxed">
            Buy online, install in minutes, and you're online before you even unpack.
          </p>
        </div>

        <!-- Reliable Support -->
        <div class="flex flex-col">
          <div class="py-6">
            <svg class="w-12 h-12" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.49561 18.35L10.5956 20.75C10.9956 21.15 11.8956 21.35 12.4956 21.35H16.2956C17.4956 21.35 18.7956 20.45 19.0956 19.25L21.4956 11.95C21.9956 10.55 21.0956 9.34997 19.5956 9.34997H15.5956C14.9956 9.34997 14.4956 8.84997 14.5956 8.14997L15.0956 4.94997C15.2956 4.04997 14.6956 3.04997 13.7956 2.74997C12.9956 2.44997 11.9956 2.84997 11.5956 3.44997L7.49561 9.54997" stroke="#3B3B3B" stroke-miterlimit="10"/>
              <path d="M2.39563 18.35V8.55002C2.39563 7.15002 2.99563 6.65002 4.39563 6.65002H5.39563C6.79563 6.65002 7.39563 7.15002 7.39563 8.55002V18.35C7.39563 19.75 6.79563 20.25 5.39563 20.25H4.39563C2.99563 20.25 2.39563 19.75 2.39563 18.35Z" stroke="#3B3B3B" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
          <h3 class="text-lg font-bold text-dark dark:text-black mb-3">
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