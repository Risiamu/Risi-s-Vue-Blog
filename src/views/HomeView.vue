<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="home">
    <div class="column-container">
      <div class="padding-column left"></div>
      <div class="content-columns">
        <div class="column odd">
          <RouterLink to="/" class="header-link">Home</RouterLink>
        </div>
        <div class="column even">
          <RouterLink to="/about" class="header-link">About</RouterLink>
        </div>
        <div class="column odd">
          <RouterLink to="/illustration" class="header-link">Illustration</RouterLink>
        </div>
        <div class="column even">
          <RouterLink to="/blogs" class="header-link">Blogs</RouterLink>
        </div>
      </div>
      <div class="padding-column right"></div>
    </div>
  </main>
</template>

<style scoped>
.home {
  --content-width: 60%; /* Easily editable percentage for content width */
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.column-container {
  display: flex;
  width: 100%;
  height: 100%;
}

.padding-column {
  flex-grow: 1;
  background-color: white;
}

.content-columns {
  width: var(--content-width);
  display: flex;
}

.column {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  box-sizing: border-box;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
}

.odd {
  background-color: black;
  color: white;
}

.even {
  background-color: white;
  color: black;
}

.header-link {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
}

.odd .header-link {
  color: white;
}

.even .header-link {
  color: black;
}

.column:hover {
  border-left-color: gold;
  border-right-color: gold;
}

.column:hover .header-link {
  color: gold;
}
</style>
