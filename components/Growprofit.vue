<template>
  <div class="w-11/12 mx-auto mt-52 flex items-center">
    <div class="flex flex-col text-Neutral-white ml-40">
      <p class="text-2xl font-bold">
        Grow your profit and track <br />
        your investments
      </p>
      <p class="text-Neutral-Grey5 text-justify my-5">
        Use advanced analytical tools. Clear TradingView <br />
        charts let you track current and historical profit <br />
        investments.
      </p>
      <div><Button name="Learn More" blue="true" /></div>
    </div>
    <div>
      <List :headers="['', 'Price', 'Change', 'Volume']" :items="items" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          abbr: "BTC",
          abbreviation: "Bitcoin",
          LogoName: "Bitcoin Logo",
          price: "$55000",
          change: "+7.3%",
          volume: "$3420214",
          id: 1,
        },
      ],
    };
  },
};
</script>

<style></style>
