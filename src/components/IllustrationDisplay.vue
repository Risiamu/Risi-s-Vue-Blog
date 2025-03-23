<script setup lang="ts">
import { ref, watch } from 'vue'
import { marked } from 'marked'

const props = defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

const htmlDescription = ref('')

watch(() => props.description, async (newDescription) => {
  htmlDescription.value = await marked.parse(newDescription)
}, { immediate: true })
</script>

<template>
  <div class="illustration-container">
    <div class="image-container">
      <img :src="imageSrc" :alt="description" class="illustration-image" />
    </div>
    <div class="description markdown-content" v-html="htmlDescription"></div>
  </div>
</template>

<style scoped>
.illustration-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.image-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.illustration-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.markdown-content {
  text-align: left;
}

.markdown-content :deep(h1),
.markdown-content :deep(h2),
.markdown-content :deep(h3) {
  margin: 1.5rem 0 1rem;
  color: var(--color-heading);
}

.markdown-content :deep(p) {
  margin: 1rem 0;
  line-height: 1.6;
}

.markdown-content :deep(a) {
  color: var(--color-link);
  text-decoration: none;
}

.markdown-content :deep(a:hover) {
  text-decoration: underline;
}

.markdown-content :deep(code) {
  background-color: var(--color-background-mute);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
}

.markdown-content :deep(pre) {
  background-color: var(--color-background-mute);
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1rem 0;
}

.markdown-content :deep(blockquote) {
  border-left: 4px solid var(--color-border);
  padding-left: 1rem;
  margin: 1rem 0;
  color: var(--color-text-soft);
}
</style>
