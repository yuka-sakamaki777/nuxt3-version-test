<script setup lang="ts">
const { data } = useAsyncData('data', async () => {
  return new AweSomeFramework('Nuxt.js!')
})
</script>
<template>
  <div>
    AweSomeFramework is ...
    {{ data?.name }}
  </div>
</template>
