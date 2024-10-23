<template>
  <div class="flex min-h-screen bg-gray-100">
    <SidebarLine />
    <div class="flex-1 flex flex-col">
      <HeaderLine :isAuthenticated="isAuthenticated" :user="user" @logout="logout" />
      <main class="flex-1 p-8">
        <!-- <h1 class="text-3xl font-bold mb-4">Welcome to the Admin Panel</h1>
        <p v-if="isAuthenticated" class="mb-4">You are logged in as {{ user.name }}</p> -->


      </main>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

import SidebarLine from './SidebarLine.vue';
import HeaderLine from './HeaderLine.vue';

export default {
  name: 'HomePage',
  components: {
    SidebarLine,
    HeaderLine,
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'getUser']),
    user() {
      return this.getUser;
    },
  },
  methods: {
    ...mapActions(['logout']),
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
