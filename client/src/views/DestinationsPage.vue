<template>
  <div>
    <div class="flex justify-center mt-32 animate__animated animate__fadeIn">
      <div class="align-middle rounded-3xl shadow-xl my-3 bg-red-500">
        <div class="text-center px-3 pb-6 pt-2 text-white font-bold text-xl">
          <h3>Products</h3>
        </div>
        <Products
          v-if="countries.length > 0"
          :countries="countries"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { api } from '../../utils/axios'
  import Products from '../components/Products.vue'

  export default {
    name: 'DestinationPage',
    components: {
      Products
    },
    data() {
      return {
        countries: [],
        regions: [],
      }
    },

    async created() {
      try {
        const { data: response1 } = await api.get(`/countries`)
        this.countries = response1.countries
        
        const { data: response2 } = await api.get(`/regions`)
        this.regions = response2.regions
        
      } catch (error) {
        console.error('Error in fetchCountriesAndRegions:', error)
      }
    }
  }
</script>