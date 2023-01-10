<template>
  <div class="profile-card">
    <img src="https://github.com/brsHunterX.png" alt="Github Avatar" />
    <div class="text">
      <h1 :style="style">Bruno Santos</h1>
      <a href="https://github.com/brsHunterX" :style="style">
        <i class="fa-brands fa-github"></i> brsHunterX
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const style = computed(() => {
  return {
    color: store.getters.track.onSurfaceColor,
  };
});
</script>

<style scoped>
.profile-card {
  gap: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.profile-card img {
  width: 80px;
  height: 80px;
  border-radius: 16px;
}

.profile-card .text {
  gap: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.profile-card .text h1 {
  margin: 0;
  padding: 0;
  font-size: 26px;
  transition: all 300ms ease-in-out;
}

.profile-card .text a {
  opacity: 0.6;
  font-size: 18px;
  text-decoration: none;
  transition: all 300ms ease-in-out;
}

.profile-card .text a i {
  margin-right: 4px;
}

.profile-card .text a:hover {
  opacity: 1;
}
</style>
