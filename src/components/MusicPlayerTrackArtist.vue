<template>
  <span :class="[layout]" :style="style">
    <slot></slot>
  </span>
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
span {
  width: 100%;
  opacity: 0.6;
  overflow: hidden;
  white-space: nowrap;
  font-weight: regular;
  text-overflow: ellipsis;
  transition: all 300ms ease-in-out;
}
span.small,
span.compact {
  font-size: 14px;
}

span.large {
  font-size: 16px;
}
</style>
