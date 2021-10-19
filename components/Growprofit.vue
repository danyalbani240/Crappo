<template>
  <div class="w-11/12 mx-auto mt-52 flex-col xl:flex-row flex items-center">
    <div class="flex flex-col text-Neutral-white md:ml-40">
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
    <div class="w-full xl:w-min">
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
        {
          abbr: "ETH",
          abbreviation: "Ethereum",
          LogoName: "ETC Logo",
          price: "$2000",
          change: "+-0.9%",
          volume: "$1812350",
          id: 2,
        },
        {
          abbr: "LTC",
          abbreviation: "Litecoin",
          LogoName: "LTC Logo",
          price: "$8535",
          change: "+8.2%",
          volume: "$5820399",
          id: 3,
        },
      ],
    };
  },
};
</script>

<style></style>
