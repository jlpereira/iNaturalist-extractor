<template>
  <div class="gallery__image">
    <label>
      <img :src="image.small_url">
      <br>
      <input
        v-model="selectedImages"
        :value="image"
        type="checkbox">
      Include
    </label>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  image: {
    type: Object,
    required: true
  },
  modelValue: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])

const selectedImages = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value)
})

</script>

<style>
  .gallery__image {
    background-color: black;
    
    color: white;
  }

  .gallery__image img {
    align-self: center;
  }
</style>