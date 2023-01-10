<template>
  <div id="app" :style="style">
    <div class="grid" v-show="store.state.interfaceVisible">
      <div class="large" :class="[playerAnimation]">
        <MusicPlayer layout="large" />
      </div>
      <div class="small" :class="[playerAnimation]">
        <MusicPlayer layout="small" />
      </div>
      <div class="compact" :class="[playerAnimation]">
        <MusicPlayer layout="compact" />
      </div>
    </div>
    <GitHubTile
      :class="githubAnimation"
      v-show="!store.state.interfaceVisible"
    />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { ref, computed, onMounted } from "vue";

import GitHubTile from "./components/ProfileCard.vue";
import MusicPlayer from "./components/MusicPlayer.vue";

const store = useStore();

const githubAnimation = ref("fade-in");
const playerAnimation = ref("fade-in");

const style = computed(() => {
  return {
    background: store.getters.track.backgroundColor,
  };
});

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.code == "Space") {
      if (store.state.interfaceVisible) {
        githubAnimation.value = "fade-in";
        playerAnimation.value = "fade-out";
        setTimeout(() => store.dispatch("hide"), 1000);
      } else {
        githubAnimation.value = "fade-out";
        playerAnimation.value = "fade-in";
        setTimeout(() => store.dispatch("show"), 1000);
      }
    }
    if (e.code == "ArrowLeft") {
      store.dispatch("back");
    }
    if (e.code == "ArrowRight") {
      store.dispatch("next");
    }
  });
});
</script>

<style>
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

#app {
  gap: 32px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease-in-out;
}

#app .grid {
  display: grid;
  grid-row-gap: 32px;
  grid-column-gap: 32px;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
}

#app .grid .large {
  background: transparent;
  grid-area: 1 / 1 / 5 / 2;
}

#app .grid .small {
  background: transparent;
  grid-area: 1 / 2 / 3 / 3;
}

#app .grid .compact {
  background: transparent;
  grid-area: 3 / 2 / 5 / 3;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}

.fade-in {
  animation: fade-in 1s;
}

.fade-out {
  animation: fade-out 1s;
}
</style>
