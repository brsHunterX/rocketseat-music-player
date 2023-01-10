<template>
  <button :class="[layout]" :style="style">
    <slot></slot>
  </button>
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
button {
  border: none;
  margin: 0;
  padding: 0;
  width: 24px;
  height: 24px;
  opacity: 0.8;
  font: inherit;
  cursor: pointer;
  overflow: visible;
  line-height: normal;
  background: transparent;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  transition: all 300ms ease-in-out;
}

button.small,
button.compact {
  font-size: 18px;
}

button.large {
  font-size: 24px;
}

button:hover {
  opacity: 1;
}
</style>
