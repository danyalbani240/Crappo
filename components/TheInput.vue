<template>
  <div>
    <input
      type="text"
      :class="{
        'placeholder-white': placeholderWhite,
        'placeholder-black': !placeholderWhite,
      }"
      :placeholder="placeholder"
      class="
        placeholder-black
        md:w-80
        w-64
        outline-none
        py-3
        border-b-2 border-Neutral-Grey5
        bg-transparent
      "
      :value="model"
      @input="model = $event.target.value"
    />
  </div>
</template>
<script>
export default {
  props: ["placeholder", "model", "placeholderWhite"],
};
</script>
