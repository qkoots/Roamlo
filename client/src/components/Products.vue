<template>
  <div>
    <!-- Tabs -->
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="{ active: activeTab === activeTab }"
        @click="setActiveTab(tab)">
        {{ tab }}
      </button>
    </div>

    <!-- Product Cards -->
    <div class="product-grid">
      <router-link
        v-for="product in filteredProducts"
        :key="product._id"
        :to="`/product/${product.iso2}`"
        class="product-card">
        <h3>{{ product.country }}</h3>
        <!-- <p>Price: ${{ product.price }}</p>
        <p>Region: {{ product.region }}</p>
        <p>Country: {{ product.country }}</p> -->
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      countriesArray: [],
      regionsArray: [],
      tabs: ['Country', 'Region'],
      activeTab: 'Country',
    }
  },

  props: {
    countries: {
      type: Array,
      required: true,
    },
    regions: {
      type: Array,
      required: true,
    },
  },

  computed: {
    filteredProducts() {
      if (this.activeTab === 'Country') {
        return this.countriesArray;
      } else if (this.activeTab === 'Region') {
        return this.regions;
      }
    },
  },

  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },

  mounted() {
    console.log(this.countries)
    this.countriesArray = this.countries
  },
};
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.tabs button {
  padding: 10px 20px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  cursor: pointer;
  margin: 0 5px;
}

.tabs button.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  text-decoration: none;
  color: black;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-card h3 {
  margin-top: 0;
  margin-bottom: 10px;
}
</style>