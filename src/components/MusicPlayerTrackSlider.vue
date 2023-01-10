<template>
  <div class="footer">
    <!-- <input type="range" min="1" max="100" value="0" /> -->
    <div class="slider">
      <div class="slide bg" :style="bgSlideStyle"></div>
      <div class="slide fg" :style="fgSlideStyle"></div>
    </div>
    <div class="timer">
      <span :style="spanStyle">{{ curTime }}</span>
      <span :style="spanStyle">{{ maxTime }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { defineProps, computed } from "vue";

import { formatFromSecToMin } from "../utils/time";

interface Props {
  curTime: number;
  maxTime: number;
}

const store = useStore();
const props = defineProps<Props>();

const curTime = computed(() => formatFromSecToMin(props.curTime));
const maxTime = computed(() => formatFromSecToMin(props.maxTime));

const bgSlideStyle = computed(() => {
  return {
    background: store.getters.track.onSurfaceColor,
  };
});

const fgSlideStyle = computed(() => {
  const width: number = (props.curTime * 100) / props.maxTime;

  return {
    background: store.getters.track.onSurfaceColor,
    width: width <= 100 ? `${width}%` : "100%",
  };
});

const spanStyle = computed(() => {
  return {
    color: store.getters.track.onSurfaceColor,
  };
});
</script>

<style scoped>
.footer {
  gap: 8px;
  width: 100%;
  float: left;
  display: flex;
  position: relative;
  flex-direction: column;
}

.footer .slide {
  height: 4px;
  float: left;
  border-radius: 999px;
  transition: all 300ms ease-in-out;
}

.footer .slide.bg {
  width: 100%;
  opacity: 0.3;
}

.footer .slide.fg {
  opacity: 1;
  position: absolute;
}

.footer input[type="range"] {
  width: 100%;
  height: 4px;
  opacity: 1;
  outline: none;
  appearance: none;
  border-radius: 999px;
  transition: all 0.2s ease-in-out;
  background: rgb(217, 217, 217, 0.3);
}
.footer input[type="range"]::-moz-range-thumb {
  width: 8px;
  height: 8px;
  cursor: pointer;
  appearance: none;
  background: rgb(217, 217, 217, 1);
}
.footer input[type="range"]::-webkit-slider-thumb {
  width: 8px;
  height: 8px;
  cursor: pointer;
  appearance: none;
  border-radius: 999px;
  background: rgb(217, 217, 217, 1);
}

.footer .timer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer .timer span {
  opacity: 0.6;
  font-size: 14px;
  font-weight: regular;
}
</style>
