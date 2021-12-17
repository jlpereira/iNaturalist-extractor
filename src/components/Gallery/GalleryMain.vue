<template>
  <button
    type="button"
    @click="emit('selected', imagesSelected)">
    Upload images
  </button>
  <div class="gallery">
    <gallery-image
      v-for="image in images"
      :key="image.id"
      v-model="imagesSelected"
      :image="image"
    />
  </div>
</template>
<script setup>

import { ref } from 'vue'
import GalleryImage from './GalleryImage.vue'

const props = defineProps({
  images: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['selected'])
const imagesSelected = ref([])

</script>

<style>
.gallery {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  grid-auto-flow: row dense;
  grid-gap: 10px;
}
</style>