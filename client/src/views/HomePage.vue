<template>
  <div class="animate__animated animate__zoomIn">
    <product-grid />
  </div>
</template>

<script>
import ProductGrid from "../components/ProductsGrid.vue"
export default {
  name: "Home",
  components: {
    ProductGrid
  }
}
</script>