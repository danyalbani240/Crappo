<template>
  <div class="bg-primary lg:min-h-screen w-full" id="header">
    <Navbar />
    <div
      class="
        flex
        w-11/12
        mx-auto
        hero
        min-h-full
        justify-between
        mt-12
        items-center
        flex-col-reverse
        md:flex-row
      "
    >
      <div class="hero-text flex flex-col flex-1 justify-center z-10">
        <div
          class="
            relative
            little-box
            info
            inline-flex
            items-center
            rounded-full
            w-80
            text-mine
            bg-opacity-10
            p-1
            bg-Neutral-white
          "
        >
          <div
            class="mr-1 bg-Neutral-white text-primary inline rounded-2xl px-2"
          >
            75% SAVE
          </div>
          <div class="ml-1 inline text-Neutral-white">
            For the Black Friday weekend
          </div>
        </div>
        <h1
          class="
            text-Neutral-white
            font-extrabold
            text-5xl
            md:text-5xl
            lg:text-7xl
            mt-5
            pr-20
            relative
          "
        >
          Fastest & secure platform to invest in crypto
        </h1>
        <h6 ref="typing" class="text-Neutral-Grey5 mt-5">
          Buy and sell cryptocurrencies, trusted by 10M wallets <br />
        </h6>
        <div class="mt-5 Slide_Down">
          <Button blue="true" name="Try for Free" next="true" />
        </div>
      </div>
      <div
        class="
          hero-img
          w-80
          md:w-auto
          absolute
          md:static
          mt-5
          opacity-40
          md:opacity-100
        "
      >
        <img src="../static/BTCpng.png" alt="hreo" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "with over $30 billion in transactions.",
      i: 0,
    };
  },
  methods: {
    typeWriter() {
      let speed = 50;
      if (this.i < this.text.length) {
        this.$refs.typing.innerHTML += this.text.charAt(this.i);
        this.i++;
        setTimeout(this.typeWriter, speed);
      }
    },
  },
  mounted() {
    this.typeWriter();
  },
};
</script>
<style scoped>
.hero-img {
  animation: Slide_Down 2s ease-out forwards;
}
.Slide_Down {
  animation: Slide_Down 0.9s forwards;
}
.little-box {
  animation: Slide_Left 0.59s ease-in forwards;
}
h1 {
  animation: Slide_Left 0.76s forwards ease-in;
}
</style>
