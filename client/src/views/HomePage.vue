<template>
  <div class="">
    <Hero />
    <ProductGrid class="bg-[#fafafa]" />
    <HowItWorks />
    <WhyRoamlo class="bg-[#fafafa]" />
    <ReviewsGrid />
    <FAQ class="bg-[#fafafa]" />
  </div>
</template>

<script>
import Hero from "../components/home/Hero.vue"
import ProductGrid from "../components/home/ProductsGrid.vue"
import FAQ from "../components/home/Faq.vue"
import ReviewsGrid from "../components/home/Review.vue"
import WhyRoamlo from "../components/home/WhyRoamlo.vue"
import HowItWorks from "../components/home/HowItWorks.vue"

export default {
  name: "Home",
  components: {
    Hero,
    ProductGrid,
    WhyRoamlo,
    FAQ,
    ReviewsGrid,
    HowItWorks
  }
}
</script>