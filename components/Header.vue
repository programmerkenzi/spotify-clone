<template>
  <header
    class="flex flex-row items-center justify-between w-full px-10 py-5 h-14 bg-header"
  >
    <!-- arrows -->
    <div class="flex flex-row space-x-3">
      <div
        class="w-8 h-8 text-center text-white bg-black rounded-full opacity-50 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div
        class="w-8 h-8 text-center text-white bg-black rounded-full opacity-50 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
    <!-- login || user -->
    <div>
      <div
        v-if="user"
        @click="toggleDropdown"
        class="relative flex flex-row items-center justify-between p-1 space-x-2 text-white transition-all bg-black rounded-full cursor-pointer hover:bg-light hover:opacity-100 user-btn"
      >
        <img class="w-8 h-8" src="@/assets/img/Spotify_Icon_RGB_White.png" />
        <span>{{ user }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
        <div
          v-if="dropdown"
          class="absolute right-0 self-center w-full p-5 text-white rounded-md opacity-100 top-12 bg-light"
        >
          <span @click="logout">Logout</span>
        </div>
      </div>

      <span
        v-if="!user"
        class="p-2 text-center bg-white rounded-full cursor-pointer"
        @click="login"
        >Login</span
      >
    </div>
  </header>
</template>

<script>
import spotifyApi, { LOGIN_URL } from "../lib/spotify";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Header",
  data: function () {
    return {
      dropdown: false,
    };
  },

  computed: {
    ...mapState({
      user: (state) => state.localStorage.user,
    }),
  },
  methods: {
    toggleDropdown: function () {
      this.dropdown = !this.dropdown;

      if (this.dropdown) {
        this.$el.style.setProperty("--dropdown-bg", "#282828");
      } else {
        this.$el.style.setProperty("--dropdown-bg", "black");
      }
      console.log(this.dropdown);
    },

    login: async function () {
      window.location.href = LOGIN_URL;
    },

    logout: function () {
      this.$store.commit("localStorage/logout", null);
    },
  },
};
</script>

<style>
.user-btn {
  background-color: var(--dropdown-bg);
}
</style>
