<template>
  <nav class="w-11/12 mx-auto h-14 flex  items-center justify-between">
    <div class="icon 	">
      <img src="../assets\images\images.png" alt="" />
    </div>
    <Burger />
    <div class="sm:flex hidden ml-5 ">
      <div class="flex items-center">
        <a href="#" class="text-Neutral-white lg:mx-4 ">Products</a>
        <a href="#" class="text-Neutral-white lg:mx-4 mx-2">Features</a>
        <a href="#" class="text-Neutral-white lg:mx-4 mx-2">About</a>
        <a href="#" class="text-Neutral-white lg:mx-4 mx-2">Contact</a>
      </div>
      <div class="flex buttons lg:ml-10 items-center">
        <Button name="Login" class="text-Neutral-white " />
        <span class="inline-block text-white">|</span>
        <Button
          name="Register"
          class="text-Neutral-white lg:mx-2"
          blue="true"
        />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
<style scoped>
.buttons span {
  position: relative;
  right: 0.5rem;
}
</style>
