<template>
  <div class="animate__animated animate__zoomIn">
    <product-grid />
    <FAQ />
  </div>
</template>

<script>
import ProductGrid from "../components/home/ProductsGrid.vue"
import FAQ from "../components/home/Faq.vue"
export default {
  name: "Home",
  components: {
    ProductGrid,
    FAQ
  }
}
</script>