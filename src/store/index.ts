import { createStore } from "vuex";

import { Track } from "@/interfaces";

export default createStore({
  state: {
    interfaceVisible: false,
    tracks: [
      {
        art: require("../assets/01-track-art.png"),
        name: "Acorda Devinho",
        artist: "Banda Rocketseat",
        surfaceColor: "#2A2141",
        onSurfaceColor: "#E1E1E6",
        backgroundColor: "#0f0d13",
        maxTimeInSeconds: 220,
        curTimeInSeconds: Math.floor(220 * 0.8),
      },
      {
        art: require("../assets/02-track-art.png"),
        name: "Yummy",
        artist: "Justin Bieber",
        surfaceColor: "#2C0D09",
        onSurfaceColor: "#F7D3CF",
        backgroundColor: "#140604",
        maxTimeInSeconds: 208,
        curTimeInSeconds: Math.floor(208 * 0.8),
      },
      {
        art: require("../assets/03-track-art.png"),
        name: "I Like You (A Happpier Song)(with Doja Cat)",
        artist: "Post malone, Doja Cat",
        surfaceColor: "#1D1F22",
        onSurfaceColor: "#E2E3E3",
        backgroundColor: "#111314",
        maxTimeInSeconds: 192,
        curTimeInSeconds: Math.floor(192 * 0.8),
      },
      {
        art: require("../assets/04-track-art.png"),
        name: "Die For You",
        artist: "The Weeknd",
        surfaceColor: "#580417",
        onSurfaceColor: "#FDC9D5",
        backgroundColor: "#27020A",
        maxTimeInSeconds: 260,
        curTimeInSeconds: Math.floor(260 * 0.8),
      },
      {
        art: require("../assets/05-track-art.png"),
        name: "Indigo",
        artist: "Chris Brown",
        surfaceColor: "#1B2348",
        onSurfaceColor: "#D6DBF0",
        backgroundColor: "#0B0E1E",
        maxTimeInSeconds: 192,
        curTimeInSeconds: Math.floor(192 * 0.8),
      },
    ],
    trackIndex: 0,
  },
  getters: {
    track(state): Track {
      return state.tracks[state.trackIndex];
    },
  },
  mutations: {
    show(state) {
      state.interfaceVisible = true;
    },
    hide(state) {
      state.interfaceVisible = false;
    },
    back(state) {
      if (state.interfaceVisible) {
        if (state.trackIndex <= 0) {
          state.trackIndex = state.tracks.length - 1;
        } else {
          state.trackIndex--;
        }
      }
    },
    next(state) {
      if (state.interfaceVisible) {
        if (state.trackIndex >= state.tracks.length - 1) {
          state.trackIndex = 0;
        } else {
          state.trackIndex++;
        }
      }
    },
  },
  actions: {
    show(context) {
      context.commit("show");
    },
    hide(context) {
      context.commit("hide");
    },
    back(context) {
      context.commit("back");
    },
    next(context) {
      context.commit("next");
    },
  },
  modules: {},
});
