<template>
  <div class="flex flex-col w-full p-5 space-y-2">
    <template v-for="option in options">
      <div
        class="flex flex-row w-full h-10 space-x-4 text-base text-white transition-all opacity-75 cursor-pointer hover:opacity-100"
        :key="option"
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
            :d="option.iconPath"
          />
        </svg>
        <span>{{ option.name }}</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "NavOptions",
  data: function () {
    return {
      options: [
        {
          name: "Home",
          iconPath:
            "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
        },
        {
          name: "Search",
          iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        },
        {
          name: "Your Library",
          iconPath:
            "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
        },
      ],
    };
  },
};
</script>

<style></style>
