<script setup lang="ts">
import { ref, onMounted } from 'vue'
import IllustrationDisplay from '@/components/IllustrationDisplay.vue'

interface Illustration {
  imageSrc: string
  description: string
}

const illustrations = ref<Illustration[]>([])

onMounted(async () => {
  // Get all image files from illustrations folder in content root
  const imageFiles = import.meta.glob('/illustrations/*.jpg', { eager: true })

  // Process each image file
  illustrations.value = Object.entries(imageFiles).map(([imagePath, module]) => {
    const folderPath = imagePath.split('/').slice(0, -1).join('/')
    const nameBaseName = imagePath.split('/').slice(-1)[0].split('.')[0]
    const descriptionPath = `${folderPath}/${nameBaseName}.md`
    const imageSrc = (module as { default: string }).default

    // Try to load corresponding markdown file
    try {
      const description = import.meta.glob('/illustrations/*.md', {
        as: 'raw',
        eager: true
      })[descriptionPath]

      return {
        imageSrc: imageSrc,
        description
      }
    } catch {
      return {
        imageSrc: imageSrc,
        description: ''
      }
    }
  })
})
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
