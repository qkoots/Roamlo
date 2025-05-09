<template>
  <div class="animate__animated animate__zoomIn">
    <Hero />
    <ProductGrid />
    <WhyRoamlo />
    <ReviewsGrid />
    <FAQ />
  </div>
</template>

<script>
import Hero from "../components/home/Hero.vue"
import ProductGrid from "../components/home/ProductsGrid.vue"
import FAQ from "../components/home/Faq.vue"
import ReviewsGrid from "../components/home/Review.vue"
import WhyRoamlo from "../components/home/Services.vue"

export default {
  name: "Home",
  components: {
    Hero,
    ProductGrid,
    FAQ,
    ReviewsGrid,
    WhyRoamlo
  }
}
</script>