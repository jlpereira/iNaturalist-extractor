module.exports = {
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],
  globals: {
    defineProps: true,
    defineEmits: true
  }
}
