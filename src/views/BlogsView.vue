<script setup lang="ts">
import { ref } from 'vue'
import MarkdownViewer from '@/components/MarkdownViewer.vue'

const markdownContent = ref(`
# Welcome to My Blog

## Latest Post

Here's some example content with **markdown** syntax:

- List item 1
- List item 2
- List item 3

\`\`\`javascript
// Code example
function hello() {
  console.log('Hello, world!')
}
\`\`\`

> This is a blockquote

[Visit Vue's website](https://vuejs.org)
`)
</script>

<template>
  <main class="blogs">
    <h1>Blogs</h1>
    <MarkdownViewer :content="markdownContent" />
  </main>
</template>

<style scoped>
.blogs {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: left;
}

h1 {
  margin-bottom: 2rem;
  text-align: center;
}
</style>
