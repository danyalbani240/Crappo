<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div
      class="selected text-primary"
      :class="{ open: open }"
      @click="open = !open"
    >
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
        class="bg-Neutral-Grey6 border-b-2 border-Neutral-Grey3 hover:bg-Neutral-Grey5 transition"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>
<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
}

.custom-select .selected {
  border-bottom: 1px solid #666666;

  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1rem;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #e0e0e0 transparent transparent transparent;
}

.custom-select .items {
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;

  position: absolute;
  background-color: transparent;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.selectHide {
  display: none;
}
</style>
