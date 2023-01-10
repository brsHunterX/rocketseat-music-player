<template>
  <img :class="[layout]" :src="url" alt="Player track art" />
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  url: string;
  layout: string;
}

defineProps<Props>();
</script>

<style scoped>
img {
  width: 100%;
  user-select: none;
  border-radius: 8px;
  transition: all 300ms ease-in-out;
}

img.small,
img.compact {
  width: 72px;
}

img.large {
  width: 192px;
}
</style>
