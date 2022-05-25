<template>
  <div class="w-full h-full mainContainer">
    <Header />
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style>
.mainContainer {
  background: #78341f;
  background: -moz-linear-gradient(top, #78341f 0%, #191919 17%, #141414 100%);
  background: -webkit-linear-gradient(
    top,
    #78341f 0%,
    #191919 17%,
    #141414 100%
  );
  background: linear-gradient(to bottom, #78341f 0%, #191919 17%, #141414 100%);
}
</style>
