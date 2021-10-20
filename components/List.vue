<template>
  <div
    style="background-color:#35068C; "
    class="flex flex-col p xl:px-10 py-6 rounded-xl xl:ml-52   w-full mt-10 xl:mt-0"
  >
    <div class="flex w-full txet-Neutral-white justify-between text-Neutral-white">
      <p class="flex-1 text-center" v-for="header in headers" :key="header">
        {{ header }}
      </p>
    </div>
    <div>
      <div v-for="item in items" class="py-6 " :key="item.id">
        <single-list-item
          :LogoName="item.LogoName"
          :price="item.price"
          :change="item.change"
          :abbr="item.abbr"
          :abbreviation="item.abbreviation"
          :volume="item.volume"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SingleListItem from "./Single-list-item.vue";
export default {
  components: { SingleListItem },
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
