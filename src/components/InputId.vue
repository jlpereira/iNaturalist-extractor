<template>
  <div>
    <label>ID or Link</label>
    <input
      v-model="inputText"
      type="text"
      placeholder="1234, https://www.inaturalist.org/observations/1234..."
    >
    <button
      type="button"
      :disabled="!objectId"
      @click="emit('objectId', objectId)">
      GET
    </button>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { getNumberFromString } from '../utils/strings';

const emit = defineEmits(['objectId'])
const inputText = ref('')
const objectId = computed(() => getNumberFromString(inputText.value))


</script>
<style>
label {
  display: block;
}
</style>