<template>
  <div class="start-mining pb-12">
    <div
      data-aos="zoom-in"
      class="mask-group items-center md:items-start flex-col md:flex-row flex text-Neutral-white w-11/12 mx-auto justify-between bg-accent px-10 rounded-xl py-12"
    >
      <div class="flex flex-col">
        <p class="text-3xl font-extrabold">Start mining now</p>
        <p class="my-5">
          Join now with CRAPPO to get the latest news <br />
          and start mining now
        </p>
      </div>
      <div class="flex items-center">
        <Input
          placeholderWhite="true"
          :model="email"
          placeholder="Enter your email"
        />
        <div class="mx-5"></div>
        <Button tblack="true" name="Subscribe" white="true" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
};
</script>

<style>
.start-mining {
  background-image: linear-gradient(
    180deg,
    rgba(43, 7, 110, 1) 0%,
    rgba(13, 13, 43, 1) 100%
  );
}
</style>
