<template>
  <div ref="Burger" class="sm:hidden">
    <div class="adasd inline-block cursor-pointer" @click="toggleMenu">
      <div
        class="bar1 z-30 w-9 h-1.5 bg-accent my-1.5 transition-all duration-300	"
      ></div>
      <div
        class="bar2 z-30 w-9 h-1.5 bg-accent my-1.5 transition-all duration-300	"
      ></div>
      <div
        class="bar3 z-30 w-9 h-1.5 bg-accent my-1.5 transition-all duration-300	"
      ></div>
    </div>
    <div
      class="menu fixed bg-Neutral-white w-screen h-screen hidden items-center justify-evenly z-20"
    >
      <a href="#" class="text-primary lg:mx-4 ">Products</a>
      <a href="#" class="text-primary lg:mx-4 mx-2">Features</a>
      <a href="#" class="text-primary lg:mx-4 mx-2">About</a>
      <a href="#" class="text-primary lg:mx-4 mx-2">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$refs.Burger.classList.toggle("active");
      document.body.classList.toggle("overflow-hidden");
    },
  },
};
</script>

<style>
.active .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}
.active .bar2 {
  opacity: 0;
}
.active .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
.active .menu {
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
}.active .adasd{
    position: fixed;
    z-index: 30;
    top: 3rem;
    right: 1rem;
}
</style>
