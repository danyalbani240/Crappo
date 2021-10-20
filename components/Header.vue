<template>
  <div class="bg-primary lg:min-h-screen w-full" id="header">
    <Navbar />
    <div
      class="flex w-11/12 mx-auto hero min-h-full justify-between mt-12 items-center flex-col-reverse md:flex-row	"
    >
      <div class="hero-text flex flex-col flex-1 justify-center z-10">
        <div
          class="info inline-flex items-center rounded-full w-80 text-mine bg-opacity-10 p-1 bg-Neutral-white  "
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
        <h1
          class="text-Neutral-white font-extrabold text-5xl md:text-5xl lg:text-7xl mt-5 pr-20 "
        >
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
      <div
        class="hero-img w-80 md:w-auto absolute md:static mt-5 opacity-40 md:opacity-100 "
      >
        <img src="../assets\images\BTCpng.png" alt="" />
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
