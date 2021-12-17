<template>
  <div>
    <ul>
      <li 
        v-for="(value, key) in list"
        :key="key"
      >
        <label>
          <input
            v-model="selectedType"
            :value="value"
            type="radio">
          {{ key }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: undefined
  },

  list: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])

const selectedType = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value)
})
</script>