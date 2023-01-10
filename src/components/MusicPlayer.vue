<template>
  <div class="music-player" :class="[layout]" :style="style">
    <div class="details" :class="[layout]">
      <MusicPlayerTrackArt :layout="layout" :url="store.getters.track.art" />
      <div class="text">
        <MusicPlayerTrackName :layout="layout">
          {{ store.getters.track.name }}
        </MusicPlayerTrackName>
        <MusicPlayerTrackArtist :layout="layout">
          {{ store.getters.track.artist }}
        </MusicPlayerTrackArtist>
      </div>
    </div>
    <div class="actions" :class="[layout]">
      <MusicPlayerTrackButton :layout="layout" @click="back">
        <i class="fa-solid fa-backward"></i>
      </MusicPlayerTrackButton>
      <MusicPlayerTrackButton :layout="layout">
        <i class="fa-solid fa-play"></i>
      </MusicPlayerTrackButton>
      <MusicPlayerTrackButton :layout="layout" @click="next">
        <i class="fa-solid fa-forward"></i>
      </MusicPlayerTrackButton>
    </div>
    <MusicPlayerTrackSlider
      :class="layout"
      :curTime="store.getters.track.curTimeInSeconds"
      :maxTime="store.getters.track.maxTimeInSeconds"
    />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { defineProps, computed } from "vue";

import MusicPlayerTrackArt from "./MusicPlayerTrackArt.vue";
import MusicPlayerTrackName from "./MusicPlayerTrackName.vue";
import MusicPlayerTrackArtist from "./MusicPlayerTrackArtist.vue";
import MusicPlayerTrackButton from "./MusicPlayerTrackButton.vue";
import MusicPlayerTrackSlider from "./MusicPlayerTrackSlider.vue";

interface Props {
  layout: string;
}

const store = useStore();

defineProps<Props>();

const style = computed(() => {
  return {
    background: store.getters.track.surfaceColor,
  };
});

const back = () => store.dispatch("back");
const next = () => store.dispatch("next");
</script>

<style scoped>
.music-player {
  padding: 32px;
  display: flex;
  border-radius: 8px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: all 300ms ease-in-out;
}

.music-player.small,
.music-player.compact {
  gap: 24px;
  width: 352px;
}

.music-player.large {
  gap: 36px;
  width: 256px;
}

.music-player .details {
  gap: 24px;
  width: 100%;
  display: flex;
}

.music-player .details.large {
  align-items: center;
  flex-direction: column;
}

.music-player .details.small,
.music-player .details.compact {
  align-items: center;
  flex-direction: row;
}

.music-player .details .text {
  width: 100%;
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  flex-direction: column;
  text-overflow: ellipsis;
}

.music-player .actions {
  width: 100%;
  display: flex;
  align-items: center;
}

.music-player .actions.large {
  justify-content: space-between;
}

.music-player .actions.small,
.music-player .actions.compact {
  justify-content: space-evenly;
}

.music-player .footer.compact {
  display: none;
}

.v-enter-active,
.v-leave-active {
  transition: all 500ms ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
