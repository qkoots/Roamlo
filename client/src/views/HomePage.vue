<template>
  <div class="animate__animated animate__zoomIn">
    <ProductGrid />
    <ReviewsGrid />
    <FAQ />
  </div>
</template>

<script>
import ProductGrid from "../components/home/ProductsGrid.vue"
import FAQ from "../components/home/Faq.vue"
import ReviewsGrid from "../components/home/Review.vue"

export default {
  name: "Home",
  components: {
    ProductGrid,
    FAQ,
    ReviewsGrid
  }
}
</script>