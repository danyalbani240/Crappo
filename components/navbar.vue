<template>
  <nav class="w-11/12 mx-auto h-14 flex  items-center justify-between">
    <div class="icon 	">
      <img src="../assets\images\images.png" alt="" />
    </div>
    <div class="flex">
      <div class="flex items-center">
        <a href="#" class="text-Neutral-white mx-4">Products</a>
        <a href="#" class="text-Neutral-white mx-4">Features</a>
        <a href="#" class="text-Neutral-white mx-4">About</a>
        <a href="#" class="text-Neutral-white mx-4">Contact</a>
      </div>
      <div class="buttons ml-10">
        <Button name="Login" class="text-Neutral-white " />
        <span class="inline-block text-white">|</span>
        <Button name="Register" class="text-Neutral-white mx-2" blue="true" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
