<script setup lang="ts">
import IllustrationDisplay from '@/components/IllustrationDisplay.vue'

const illustrations = [
  {
    imageSrc: '/src/assets/logo.svg',
    description: `
# Vue Logo Illustration

This is the official Vue.js logo.

## Features
- Clean design
- Represents reactivity
- Recognizable brand

> "The Progressive JavaScript Framework"
    `
  },
  {
    imageSrc: 'https://placehold.co/600x400',
    description: `
# Placeholder Image

This is a sample illustration using a placeholder image.

## Usage
- Testing layouts
- Temporary content
- Design mockups

\`\`\`html
<img src="placeholder.jpg" alt="Example">
\`\`\`
    `
  }
]
</script>

<template>
  <main class="illustration">
    <h1>Illustration</h1>
    
    <div class="illustrations-list">
      <IllustrationDisplay
        v-for="(illustration, index) in illustrations"
        :key="index"
        :imageSrc="illustration.imageSrc"
        :description="illustration.description"
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
