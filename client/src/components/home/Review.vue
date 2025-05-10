<template>
  <div class="container mx-auto px-8 py-12 lg:py-20 2xl:px-52 2xl:py-24">
    <!-- Header Section -->
    <div class="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between">
      <!-- Text Content -->
      <div class="text-center lg:text-left lg:w-1/2">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl text-dark dark:text-black mb-3 lg:mb-4">
          What Roamers Are Saying
        </h2>
        <p class="text-base sm:text-md lg:text-lg text-body-color dark:text-dark-6 font-semibold mb-2">
          Real travelers. Real adventures. Real smooth connections.
        </p>
        <p class="text-base sm:text-md lg:text-lg text-body-color dark:text-dark-6 font-light font-sans leading-relaxed">
          From weekend wanderers to full-time globetrotters, our customers are loving the freedom of staying connected without the roaming drama.
        </p>
      </div>
      <!-- All Reviews Button -->
      <div class="flex justify-center lg:justify-end">
        <router-link
          to="/reviews"
          class="px-4 sm:px-6 py-2.5 text-sm font-medium rounded-full bg-white text-body-color border border-[#E9ECF8] dark:border-dark-3 hover:bg-gray-50 transition-all duration-300"
        >
          See All Reviews
        </router-link>
      </div>
    </div>

    <!-- Reviews Slider -->
    <div class="mt-8 lg:mt-16 relative max-w-[90vw] mx-auto">
      <div class="overflow-hidden">
        <div 
          class="flex gap-1transition-transform duration-300 ease-in-out"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="review in reviews"
            :key="review.id"
            class="w-full md:w-1/3 flex-shrink-0 md:pr-4"
          >
            <div class="bg-[#F2F2F2] dark:bg-dark-2 rounded-xl border border-[#E9ECF8] dark:border-dark-3 p-6 h-[280px]">
              <div class="flex flex-col h-full">
                <!-- Rating Stars -->
                <div class="flex items-center space-x-1 mb-4">
                  <span class="sr-only">Rating: 5 out of 5 stars</span>
                  <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                
                <!-- Review Content -->
                <div class="flex flex-col flex-grow">
                  <h3 class="text-xl font-semibold text-dark dark:text-black mb-2">
                    {{ review.title }}
                </h3>
                <p class="text-body-color dark:text-dark-6 line-clamp-4">
                  {{ review.subtitle }}
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <!-- Navigation Controls -->
      <div class="flex justify-center items-center space-x-4 mt-8">
        <button 
          @click="previousSlide"
          class="p-2 rounded-full bg-primary text-black hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          :disabled="currentSlide === 0"
          aria-label="Previous slide"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          @click="nextSlide"
          class="p-2 rounded-full bg-primary text-black hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          :disabled="currentSlide >= maxSlides"
          aria-label="Next slide"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Review',
  data() {
    return {
      currentSlide: 0,
      reviews: [
        {
          id: 1,
          title: 'Amazing Service in Curacao',
          subtitle: 'The connection was flawless throughout my entire stay. Highly recommended!',
          image: '/path-to-image-1.jpg'
        },
        {
          id: 2,
          title: 'Perfect for Bonaire',
          subtitle: 'Great coverage across the island, even in remote diving spots.',
          image: '/path-to-image-2.jpg'
        },
        {
          id: 3,
          title: 'Island Hopping Made Easy',
          subtitle: 'Seamless transition between islands, no hassle with switching plans.',
          image: '/path-to-image-3.jpg'
        },
        {
          id: 4,
          title: 'Business Trip Success',
          subtitle: 'Reliable connection for video calls and emails, exactly what I needed.',
          image: '/path-to-image-4.jpg'
        }
      ]
    }
  },
  computed: {
    maxSlides() {
      return Math.ceil(this.reviews.length / 3) - 1  // Changed from 4 to 3
    }
  },
  methods: {
    previousSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      }
    },
    nextSlide() {
      if (this.currentSlide < this.maxSlides) {
        this.currentSlide++
      }
    }
  }
}
</script>

<style scoped>
/* Ensure smooth sliding transitions */
.flex {
  transition: transform 0.3s ease-in-out;
}

/* Improve button focus states for accessibility */
button:focus {
  outline: 2px solid var(--primary-color, #4F46E5);
  outline-offset: 2px;
}

/* Ensure text doesn't overflow */
.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 768px) {
  .md:w-1\/3 {
    width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .md:w-1\/3 {
    width: 50%;
  }
}

@media (min-width: 1024px) {
  .md:w-1\/3 {
    width: 33.333333%;
  }
}
</style>