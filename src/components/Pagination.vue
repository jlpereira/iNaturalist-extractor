<template>
  <div>
    {{ 1 + (per * page) - per }} - {{ per * page }}
    of {{ total }}
    <button
      type="button">
      Previous
    </button>
    <button
      type="button">
      Next
    </button>
  </div>
</template>

<script setup>

const props = defineProps({
  per: {
    type: Number,
    required: true
  },

  page: {
    type: Number,
    required: true
  },

  total: {
    type: Number,
    required: true
  }
})

</script>