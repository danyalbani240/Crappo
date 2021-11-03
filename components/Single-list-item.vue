<template>
  <div
    class="
      flex
      w-full
      itemho
      text-center
      justify-center
      items-center
      pl-2
      py-2
      rounded
    "
  >
    <div class="flex flex-1 text-left">
      <span v-if="LogoName">
        <img class="w-12" :src="baseSrc + LogoName + '.png'" :alt="LogoName" />
      </span>
      <div class="ml-3">
        <p class="text-Neutral-white">{{ abbr }}</p>
        <p class="text-Neutral-Grey6">{{ abbreviation }}</p>
      </div>
    </div>
    <div class="text-Neutral-Grey6 flex-1 text-center">{{ price }}</div>
    <div class="change flex-1">{{ change }}</div>
    <div class="text-Neutral-Grey6 flex-1">{{ volume }}</div>
  </div>
</template>

<script>
export default {
  props: ["LogoName", "abbr", "abbreviation", "price", "change", "volume"],
  data() {
    return {
      baseSrc: "../_nuxt/static/",
    };
  },
};
</script>

<style>
.change {
  color: #8fffbe;
}
.itemho {
  transition: all 0.5s ease-in-out;
}
.itemho:hover {
  transform: translateX(-2rem);
  background-color: #4610ad;
}
</style>
