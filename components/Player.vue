<template>
  <div class="flex flex-row justify-center h-24 bg-light">
    <!-- buttons -->
    <div class="flex flex-col justify-center w-1/3 h-full p-5 space-y-2">
      <div class="flex flex-row self-center space-x-3 text-white cursor-pointe">
        <span class="material-icons small-btn">shuffle</span>
        <span class="material-icons small-btn">skip_previous</span>
        <span
          v-if="!playing"
          class="material-icons large-btn"
          @click="playing = true"
          >play_circle</span
        >
        <span v-else class="material-icons large-btn" @click="playing = false"
          >stop_circle</span
        >
        <span class="material-icons small-btn">skip_next</span>
        <span class="material-icons small-btn">loop</span>
      </div>
      <!-- progress -->
      <div
        class="flex flex-row self-center justify-around w-full my-auto space-x-1 text-xs text-center text-white text-opacity-75"
      >
        <span class="">00:00</span>
        <input
          type="range"
          class="self-center"
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
      background: "red",
    };
  },
  methods: {
    updateProgress: function (e) {
      console.log("this.progress", this.progress);
      this.progress = e.target.value;
      this.$el.style.setProperty("--progress", this.progress + "%");
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
  background-size: var(--progress) 100%;
  background-repeat: no-repeat;
}

input[type="range"]:hover {
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 5px;
  background-image: linear-gradient(#1db954, #1db954);
  background-size: var(--progress) 100%;
  background-repeat: no-repeat;
}

/* Input Thumb */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  opacity: 0;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: white;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background 0.3s ease-in-out;
}

input[type="range"]::-webkit-slider-thumb:hover {
  -webkit-appearance: none;
  opacity: 1;
  display: block;
}

input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  opacity: 0;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: white;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background 0.3s ease-in-out;
}

input[type="range"]::-moz-range-thumb:hover {
  -webkit-appearance: none;
  opacity: 1;
  display: block;
}

input[type="range"]::-ms-thumb {
  -webkit-appearance: none;
  opacity: 0;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: white;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background 0.3s ease-in-out;
}

input[type="range"]::-ms-thumb:hover {
  -webkit-appearance: none;
  opacity: 1;
  display: block;
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

.large-btn {
  font-size: 48px;
  transition: all 0.2s linear;
}

.large-btn:hover {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.small-btn {
  font-size: 32px;
  opacity: 0.5;
  margin: auto 0;
  transition: all 0.2s linear;
}

.small-btn:hover {
  opacity: 1;
}
</style>
