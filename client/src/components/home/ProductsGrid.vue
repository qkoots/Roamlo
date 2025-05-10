<template>
  <div class="py-12 lg:py-20">
    <div class="container mx-auto px-4 lg:px-52">
      <!-- Header Section -->
      <div class="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between">
        <!-- Text Content -->
        <div class="text-center lg:text-left">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl text-dark dark:text-black mb-3 lg:mb-4">
            Where Will You Roam Next?
          </h2>
          <p class="text-base sm:text-md lg:text-lg text-body-color dark:text-dark-6">
            Pick your destination to discover the perfect data plan.
          </p>
        </div>
        
        <!-- Filter Buttons -->
        <div class="flex justify-center lg:justify-end space-x-3">
          <button
            @click="activeFilter = 'countries'"
            :class="[
              'px-4 sm:px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300',
              activeFilter === 'countries'
                ? 'bg-primary text-black shadow-md'
                : 'bg-white text-body-color border border-[#E9ECF8] dark:border-dark-3 hover:bg-gray-50'
            ]"
          >
            Countries
          </button>
          <button
            @click="activeFilter = 'regions'"
            :class="[
              'px-4 sm:px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300',
              activeFilter === 'regions'
                ? 'bg-primary text-black shadow-md'
                : 'bg-white text-body-color border border-[#7B920A] dark:border-dark-3 hover:bg-[#7B920A]'
            ]"
          >
            Regions
          </button>
        </div>
      </div>

      <!-- Grid Section -->
      <div class="mt-8 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <router-link
          v-for="product in products"
          :key="product.id"
          :to="`/product/${product.id}`"
          class="flex items-center justify-between h-[64px] w-full px-4 sm:px-6 py-4 bg-white dark:bg-dark-2 rounded-lg border border-[#E9ECF8] dark:border-dark-3 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
        >
          <div class="flex items-center space-x-3 sm:space-x-4">
            <div class="flex flex-col">
              <span class="text-sm sm:text-base font-medium text-dark dark:text-black truncate">
                {{ product.title }}
              </span>
              <span class="text-xs sm:text-sm text-body-color dark:text-dark-6">
                {{ product.subtitle }}
              </span>
            </div>
          </div>
          <!-- Chevron Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 sm:h-5 sm:w-5 text-body-color dark:text-dark-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </router-link>
      </div>

      <!-- Show All Button -->
      <div class="flex justify-center mt-8 lg:mt-16">
        <router-link
          to="/countries"
          class="inline-flex items-center px-6 sm:px-9 py-4 sm:py-5 text-sm sm:text-base font-medium text-white bg-[#EC9944] hover:bg-primary/90 rounded-md dark:border-dark-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          Show all countries
        </router-link>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductsGrid',
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'Curacao',
          subtitle: 'Start from $8.95',
          image: '/path-to-image-1.jpg'
        },
        {
          id: 2,
          title: 'Bonaire',
          subtitle: 'Starts from $7.99',
          image: '/path-to-image-2.jpg'
        },
        {
          id: 2,
          title: 'Bonaire',
          subtitle: 'Starts from $7.99',
          image: '/path-to-image-2.jpg'
        },
        {
          id: 2,
          title: 'Bonaire',
          subtitle: 'Starts from $7.99',
          image: '/path-to-image-2.jpg'
        },
        {
          id: 2,
          title: 'Bonaire',
          subtitle: 'Starts from $7.99',
          image: '/path-to-image-2.jpg'
        },
        {
          id: 2,
          title: 'Bonaire',
          subtitle: 'Starts from $7.99',
          image: '/path-to-image-2.jpg'
        },
        {
          id: 2,
          title: 'Bonaire',
          subtitle: 'Starts from $7.99',
          image: '/path-to-image-2.jpg'
        },
        {
          id: 2,
          title: 'Bonaire',
          subtitle: 'Starts from $7.99',
          image: '/path-to-image-2.jpg'
        },
        {
          id: 2,
          title: 'Bonaire',
          subtitle: 'Starts from $7.99',
          image: '/path-to-image-2.jpg'
        },
        {
          id: 2,
          title: 'Bonaire',
          subtitle: 'Starts from $7.99',
          image: '/path-to-image-2.jpg'
        },
        {
          id: 2,
          title: 'Bonaire',
          subtitle: 'Starts from $7.99',
          image: '/path-to-image-2.jpg'
        },
        {
          id: 2,
          title: 'Bonaire',
          subtitle: 'Starts from $7.99',
          image: '/path-to-image-2.jpg'
        },
        {
          id: 2,
          title: 'Bonaire',
          subtitle: 'Starts from $7.99',
          image: '/path-to-image-2.jpg'
        },
        {
          id: 2,
          title: 'Bonaire',
          subtitle: 'Starts from $7.99',
          image: '/path-to-image-2.jpg'
        },
        {
          id: 2,
          title: 'Bonaire',
          subtitle: 'Starts from $7.99',
          image: '/path-to-image-2.jpg'
        },
        {
          id: 2,
          title: 'Bonaire',
          subtitle: 'Starts from $7.99',
          image: '/path-to-image-2.jpg'
        },
        // Add more products to fill the grid
      ]
    }
  }
}
</script>

<style scoped>
/* Add any additional custom styles here */
.grid {
  min-height: calc(4 * 64px + 3 * 1.5rem); /* 4 rows of 64px height + 3 gaps of 1.5rem */
}
</style>