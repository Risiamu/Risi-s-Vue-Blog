<script setup lang="ts">
import { ref, watch } from 'vue'
import { marked } from 'marked'

const props = defineProps({
  content: {
    type: String,
    required: true
  }
})

const htmlContent = ref('')

watch(() => props.content, (newContent) => {
  htmlContent.value = marked.parse(newContent)
}, { immediate: true })
</script>

<template>
  <div class="markdown-content" v-html="htmlContent"></div>
</template>

<style scoped>
.markdown-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
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
