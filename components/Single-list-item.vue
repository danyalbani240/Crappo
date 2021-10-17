<template>
  <div class="flex ">
    <div class="flex">
      <span v-if="LogoName">
        <img class="w-12" :src="baseSrc + LogoName + '.png'" :alt="LogoName" />
      </span>
      <div>
        <p class="text-Neutral-white">{{ abbr }}</p>
        <p class="text-Neutral-Grey6">{{ abbreviation }}</p>
      </div>
    </div>
    <div class="text-Neutral-Grey6">{{ price }}</div>
    <div class="change">{{ change }}</div>
    <div class="text-Neutral-Grey6">{{ volume }}</div>
  </div>
</template>

<script>
export default {
  props: ["LogoName", "abbr", "abbreviation", "price", "change", "volume"],
  data() {
    return {
      baseSrc: "../_nuxt/assets/images/",
    };
  },
};
</script>

<style>
.change {
  color: #8fffbe;
}
</style>
