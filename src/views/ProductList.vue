<template>
    <div class="flex">
      <SidebarLine />
      <div class="flex-1  bg-gray-100 min-h-screen">
        <HeaderLine />
        <h1 class="text-3xl font-bold mb-6">Product List</h1>
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <data-table
            :data="products"
            :columns="columns"
            :pagination="true"
            :items-per-page="5"
            class="whitespace-no-wrap"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import DataTable from 'vue3-data-table'; // Adjust this based on the actual library
import SidebarLine from './SidebarLine.vue';
import HeaderLine from './HeaderLine.vue';
  
  export default {
    name: 'ProductList',
    components: {
      DataTable,
      HeaderLine,
      SidebarLine,
    },
    setup() {
      const products = ref([
        { id: 1, name: 'Product A', price: 100, category: 'Category 1' },
        { id: 2, name: 'Product B', price: 200, category: 'Category 2' },
        { id: 3, name: 'Product C', price: 150, category: 'Category 1' },
        { id: 4, name: 'Product D', price: 300, category: 'Category 3' },
        { id: 5, name: 'Product E', price: 250, category: 'Category 2' },
        // Add more products as needed
      ]);
  
      const columns = [
        { label: 'ID', field: 'id', sortable: true },
        { label: 'Name', field: 'name', sortable: true },
        { label: 'Price', field: 'price', sortable: true },
        { label: 'Category', field: 'category', sortable: true },
      ];
  
      return {
        products,
        columns,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  