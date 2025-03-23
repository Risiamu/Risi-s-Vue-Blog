<script setup lang="ts">
import IllustrationDisplay from '@/components/IllustrationDisplay.vue'

const imageSrc = '/src/illustrations/vue-logo/image.svg'
const description = `
# Vue Logo

This is the official Vue.js logo.

## Features
- Clean design
- Represents reactivity
- Recognizable brand

> "The Progressive JavaScript Framework"
`
</script>

<template>
  <IllustrationDisplay 
    :imageSrc="imageSrc"
    :description="description"
  />
</template>
