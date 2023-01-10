<template>
  <strong :class="[layout]" :style="style">
    <slot></slot>
  </strong>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { defineProps, computed } from "vue";

interface Props {
  layout: string;
}

defineProps<Props>();

const store = useStore();
const style = computed(() => {
  return {
    color: store.getters.track.onSurfaceColor,
  };
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
strong {
  width: 100%;
  overflow: hidden;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: all 300ms ease-in-out;
}

strong.small,
strong.compact {
  font-size: 22px;
}

strong.large {
  font-size: 24px;
}
</style>
