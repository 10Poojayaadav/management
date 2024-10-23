<!-- Sidebar.vue -->
<template>
    <div class="bg-gray-800 text-white w-64 h-screen p-5">
      <h2 class="text-xl font-semibold mb-5">Admin Panel</h2>
      <ul>
        <li class="mb-2">
          <router-link to="/" class="block py-2 px-4 hover:bg-gray-700 rounded">Dashboard</router-link>
        </li>
        <li class="mb-2">
          <router-link to="/products" class="block py-2 px-4 hover:bg-gray-700 rounded">Products</router-link>
        </li>
        <!-- <li class="mb-2">
          <router-link to="/settings" class="block py-2 px-4 hover:bg-gray-700 rounded">Settings</router-link>
        </li> -->
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "SidebarLine",
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  