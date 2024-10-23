<!-- Header.vue -->
<template>
    <header class="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 class="text-lg font-bold">Admin Dashboard</h1>
      <div v-if="isAuthenticated" class="flex items-center">
        <span class="mr-4">Welcome, {{ user.name }}</span>
        <button @click="logout" class="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded">
          Logout
        </button>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderLine",
    props: {
      isAuthenticated: {
        type: Boolean,
        required: true,
      },
      user: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  