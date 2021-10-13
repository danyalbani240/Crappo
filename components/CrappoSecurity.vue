<template>
  <div class="pt-20">
    <div class="bg-primary">
      <h3
        class="text-Neutral-white text-5xl text-center font-extrabold mt-10 mb-15"
      >
        Check how much you can earn
      </h3>
      <p class="text-Neutral-Grey5 text-center mt-10">
        Let’s check your hash rate to see how much you will earn today,<br />
        Exercitation veniam consequat sunt nostrud amet.
      </p>
      <div
        class="py-8 w-7/12 flex items-center bg-Neutral-white mx-auto px-8 mt-24 rounded-t-lg border-b-2"
      >
        <Input placeholder="Enter Your hash rate" :model="my1" />
        <div class="w-3/12 ml-10 mr-20">
          <Select :options="['javascript', 'css', 'go']" />
        </div>
        <Button name="Calculate" blue="true" />
      </div>
    </div>
    <div class="bg-gradient-to-r from-white to-Neutral-Gradient w-full pb-32">
      <div
        class="w-7/12 py-10 flex flex-col bg-Neutral-white mx-auto px-8 rounded-b-lg relative shadow-md"
      >
        <p class="text-accent">ESTIMATED 24 HOUR REVENUE:</p>
        <p class="my-5 text-3xl font-bold">
          0.055 130 59 ETH <span class="text-accent"> ($1275)</span>
        </p>
        <p class="text-Neutral-Grey3">
          Revenue will change based on mining difficulty and Ethereum price.
        </p>
      </div>
      <h3 class="text-4xl font-extrabold text-center mt-20">
        Trade securely and market the high <br />
        growth cryptocurrencies.
      </h3>
      <div class="flex w-11/12 mx-auto justify-between mt-20">
        <div class="bg-secondary rounded-xl pt-16 pb-10 px-10">
          <div class="icon">
            <img
              class="mx-auto"
              src="../assets\images\Bitcoin Logo.png"
              alt=""
            />
          </div>
          <p
            class="text-Neutral-white text-4xl font-bold text-center mt-10 mb-5"
          >
            Bitcoin<sup class="text-base mx-2 opacity-70">BTC</sup>
          </p>
          <p class="text-Neutral-white text-center">
            Digital currency in which a record of <br />
            transactions is maintained.
          </p>
          <div class="flex justify-center mt-5">
            <Button blue="true" name="Start mining" next="true" />
          </div>
        </div>
        <div class="bg-Neutral-white rounded-xl pt-16 pb-10 px-7">
          <div class="icon">
            <img class="mx-auto" src="../assets\images\ETC Logo.png" alt="" />
          </div>
          <p class="text-primary text-4xl font-bold text-center mt-10 mb-5">
            Ethereum<sup class="text-base mx-2 text-Neutral-Grey4">ETC</sup>
          </p>
          <p class="text-Neutral-Grey3 text-center">
            Blockchain technology to create and run <br />
            decentralized digital applications.
          </p>
          <div class="mx-auto mt-10 flex justify-center"><img class="w-12 cursor-pointer text-center border-2 rounded-full"  src="../assets\images\next.png" alt=""></div>
        </div>
        <div class="bg-Neutral-white rounded-xl pt-16 pb-10 px-7">
          <div class="icon">
            <img class="mx-auto" src="../assets\images\LTC Logo.png" alt="" />
          </div>
          <p class="text-primary text-4xl font-bold text-center mt-10 mb-5">
            Litecoin<sup class="mx-2 text-base text-Neutral-Grey4">LTC</sup>
          </p>
          <p class="text-Neutral-Grey3 text-center">
            Cryptocurrency that enables instant <br />
            payments to anyone in the world.
          </p>
          <div class="mx-auto mt-10 flex justify-center"><img class="w-12 cursor-pointer text-center border-2 rounded-full"  src="../assets\images\next.png" alt=""></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      my1: "",
    };
  },
};
</script>
