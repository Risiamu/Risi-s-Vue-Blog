<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MarkdownViewer from '@/components/MarkdownViewer.vue'

interface BlogPost {
  title: string
  content: string
  filename: string
}

const posts = ref<BlogPost[]>([])
const currentPostIndex = ref(0)

onMounted(async () => {
  // Get all markdown files from the md_blogs folder
  const markdownFiles = import.meta.glob('/md_blogs/*.md', { as: 'raw', eager: true })
  
  // Process each file
  posts.value = Object.entries(markdownFiles).map(([filename, content]) => {
    // Extract title from first line
    const title = content.split('\n')[0].replace('#', '').trim()
    return {
      title,
      content,
      filename: filename.split('/').pop() || 'unknown.md'
    }
  })
})

function nextPost() {
  if (currentPostIndex.value < posts.value.length - 1) {
    currentPostIndex.value++
  }
}

function previousPost() {
  if (currentPostIndex.value > 0) {
    currentPostIndex.value--
  }
}
</script>

<template>
  <main class="blogs">
    <h1>Blogs</h1>
    
    <div v-if="posts.length > 0" class="blog-container">
      <div class="navigation">
        <button 
          @click="previousPost" 
          :disabled="currentPostIndex === 0"
        >
          Previous
        </button>
        <span class="post-count">
          {{ currentPostIndex + 1 }} / {{ posts.length }}
        </span>
        <button 
          @click="nextPost" 
          :disabled="currentPostIndex === posts.length - 1"
        >
          Next
        </button>
      </div>
      
      <MarkdownViewer :content="posts[currentPostIndex].content" />
    </div>
    
    <div v-else class="no-posts">
      No blog posts found.
    </div>
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

.blog-container {
  margin-top: 2rem;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.post-count {
  font-weight: bold;
}

button {
  padding: 0.5rem 1rem;
  background-color: var(--color-background-mute);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.no-posts {
  text-align: center;
  margin-top: 2rem;
  color: var(--color-text-soft);
}
</style>
