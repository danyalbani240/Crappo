<template>
  <nav class="w-11/12 mx-auto h-14 flex  items-center justify-between">
    <div class="icon relative">
      <img src="../assets\images\images.png" alt="" />
    </div>
    <Burger />
    <div class="sm:flex hidden ml-5 ">
      <div class=" flex items-center">
        <a href="#" class="text-Neutral-white lg:mx-4  nav-link realtive"
          >Products</a
        >
        <a href="#" class="text-Neutral-white lg:mx-4 mx-2 nav-link realtive"
          >Features</a
        >
        <a href="#" class="text-Neutral-white lg:mx-4 mx-2 nav-link realtive"
          >About</a
        >
        <a href="#" class="text-Neutral-white lg:mx-4 mx-2 nav-link realtive"
          >Contact</a
        >
      </div>
      <div class="flex buttons relative lg:ml-10 items-center">
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
.icon {
  animation: Slide_Left 0.5s ease-in-out forwards;
}
.nav-link {
  animation: Slide_Up 1s forwards;
}
.nav-link:nth-child(1) {
  animation-duration: 0.2s;
}
.nav-link:nth-child(2) {
  animation-duration: 0.3s;
}

.nav-link:nth-child(3) {
  animation-duration: 0.4s;
}

.nav-link:nth-child(4) {
  animation-duration: 0.5s;
}
.buttons {
  position: relative;
  animation: Slide_Right 0.5s forwards;
  
}
</style>
