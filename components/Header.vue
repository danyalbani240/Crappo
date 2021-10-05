<template>
  <div class="bg-primary h-screen w-full" id="header">
    <Navbar />
    <div class="flex w-11/12 mx-auto hero justify-between mt-28 items-center	">
      <div class="hero-text flex flex-col flex-1 ">
        <div
          class="info inline-flex items-center rounded-full w-80 text-mine bg-opacity-10 p-1 bg-Neutral-white "
        >
          <div
            class="mr-1 bg-Neutral-white text-primary inline rounded-2xl px-2 "
          >
            75% SAVE
          </div>
          <div class="ml-1 inline text-Neutral-white">
            For the Black Friday weekend
          </div>
        </div>
        <h1 class="text-Neutral-white text-7xl mt-5 pr-20">
          Fastest & secure platform to invest in crypto
        </h1>
        <h6 class="text-Neutral-Grey5 mt-5">
          Buy and sell cryptocurrencies, trusted by 10M wallets <br />
          with over $30 billion in transactions.
        </h6>
        <div class="mt-5">
          <Button blue="true" name="Try for Free" next="true" />
        </div>
      </div>
      <div class="hero-img flex-1">
        <img src="../assets\images\BTCpng.png" alt="" />
      </div>
    </div>
    
  </div>
</template>
<style lang="scss">
.hero {
  height: 27rem;
}
</style>
