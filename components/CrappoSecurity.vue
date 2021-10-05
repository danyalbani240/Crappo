<template>
  <div class="py-20">
    <div class="bg-primary">
      <h3 class="text-Neutral-white text-5xl text-center font-extrabold mt-10 mb-15">Check how much you can earn</h3>
      <p class="text-Neutral-Grey5 text-center mt-10">
        Let’s check your hash rate to see how much you will earn today,<br>
        Exercitation veniam consequat sunt nostrud amet.
      </p>
    </div>
    <div class="bg-Neutral-white mx-auto w-7/12 px-4 mt-20 rounded flex flex-col">
      <div class="py-5 mb-5 flex items-center justify-evenly">
        <Input placeholder="Enter Your hash rate" :model="my1" /> <span>dropdown</span> <span>Button</span>
      </div>
      <div class="mt-5"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      my1: ""
    }
  }
}
</script>