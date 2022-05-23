<template>
  <div class="flex flex-row justify-center h-28 bg-light">
    <!-- buttons -->
    <!-- play&stop -->

    <div class="flex flex-col justify-center w-1/2 h-full">
      <div class="flex flex-row self-center text-white cursor-pointer">
        <svg
          v-if="!playing"
          @click="playing = true"
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12"
          viewBox="0 0 20 20"
          fill="currentColor"
          @click="playing = false"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <!-- progress -->
      <div
        class="flex flex-row justify-around w-full space-x-1 text-xs text-center text-white text-opacity-75"
      >
        <span class="">00:00</span>
        <input
          type="range"
          class="self-center w-full h-1"
          v-model="progress"
          @input="updateProgress"
        />
        <span>00:00</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Player",

  data: function () {
    return {
      actions: [
        {
          name: "play",
          iconPath:
            "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
        },
        {
          name: "stop",
          iconPath:
            "M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z",
        },
      ],
      playing: false,
      progress: 0,
    };
  },
  methods: {
    updateProgress: function (e) {
      console.log("this.progress", this.progress);
      this.progress = e.target.value;
    },
  },
};
</script>

<style>
/* input[type="range"]:focus,
input[type="number"]:focus {
  box-shadow: 0 0 3px 1px #4b81dd;
  outline: none;
} */

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 5px;
  background-image: linear-gradient(#ffffff, #ffffff);
  background-size: var(progress) 100%;
  background-repeat: no-repeat;
}

input[type="range"]:hover {
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 5px;
  background-image: linear-gradient(#1db954, #1db954);
  background-size: 70% 100%;
  background-repeat: no-repeat;
}

/* Input Thumb */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: white;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background 0.3s ease-in-out;
}

input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: white;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background 0.3s ease-in-out;
}

input[type="range"]::-ms-thumb {
  -webkit-appearance: none;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: white;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background 0.3s ease-in-out;
}

/* Input Track */
input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

input[type="range"]::-moz-range-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

input[type="range"]::-ms-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}
</style>
