<template>
  <button
    class="text-Neutral-white py-4 px-8 rounded-full inline-flex items-center"
    :class="{ 'bg-accent': blue }"
  >
    {{ name }}
    <div class="inline-block ml-4" :class="{ 'hidden': !next }">
      <img src="../assets\images\next.png" alt="">
    </div>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: ["name", "blue", "next"],
};
</script>
