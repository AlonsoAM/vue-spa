<script setup lang="ts">

</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/features">Features</router-link>
      </li>
      <li>
        <router-link to="/pricing">Pricing</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </nav>
  <main class="bg-slate-100">
    <RouterView />
  </main>
</template>

<style scoped>

</style>
