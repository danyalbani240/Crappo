<template>
  <div class="start-mining">
    <div
      class="mask-group flex text-Neutral-white w-11/12 mx-auto justify-between"
    >
      <div class="flex flex-col items-center">
        <p>Start mining now</p>
        <p>
          Join now with CRAPPO to get the latest news <br />
          and start mining now
        </p>
      </div>
      <div class="flex items-center">
        <Input :model="email" placeholder="Enter your email" />
        <Button name="Subscribe" white="true" />
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
