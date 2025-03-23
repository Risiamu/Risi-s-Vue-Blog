<script setup lang="ts">
import VueLogo from '@/components/illustrations/VueLogo.vue'

const illustrations = [
  {
    component: VueLogo
  }
]
</script>

<template>
  <main class="illustration">
    <h1>Illustration</h1>
    
    <div class="illustrations-list">
      <component
        v-for="(illustration, index) in illustrations"
        :key="index"
        :is="illustration.component"
      />
    </div>
  </main>
</template>

<style scoped>
.illustration {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  margin-bottom: 2rem;
}

.illustrations-list {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 2rem;
}
</style>
