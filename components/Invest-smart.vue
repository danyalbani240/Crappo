<template>
  <div class="w-11/12 flex mx-auto mt-20">
    <div class="flex flex-col mt-10">
      <p class="text-Neutral-white text-2xl font-bold">Invest Smart</p>
      <p class="text-Neutral-Grey5 text-center my-5">
        Get full statistic information about the behaviour of <br />
        buyers and sellers will help you to make the decision.
      </p>
      <div><Button name="Learn More" blue="true" /></div>
    </div>
    <div class="ml-72 w-5/12 relative">
      <Trendchartcard />
      <div class="subcard px-4 py-5 inline-flex flex-col ">
        <p class="text-Neutral-white text-xl">
          Increase in <br />
          Trade
        </p>
        <p class="flex text-Neutral-white">
          +75%
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.7103 11.2898L12.7103 6.28984C12.6152 6.19879 12.5031 6.12743 12.3803 6.07984C12.1369 5.97982 11.8638 5.97982 11.6203 6.07984C11.4976 6.12743 11.3854 6.19879 11.2903 6.28984L6.29032 11.2898C6.19708 11.3831 6.12312 11.4938 6.07266 11.6156C6.0222 11.7374 5.99622 11.868 5.99622 11.9998C5.99622 12.2661 6.10201 12.5215 6.29032 12.7098C6.47862 12.8981 6.73401 13.0039 7.00032 13.0039C7.26662 13.0039 7.52201 12.8981 7.71032 12.7098L11.0003 9.40984V16.9998C11.0003 17.2651 11.1057 17.5194 11.2932 17.7069C11.4807 17.8945 11.7351 17.9998 12.0003 17.9998C12.2655 17.9998 12.5199 17.8945 12.7074 17.7069C12.895 17.5194 13.0003 17.2651 13.0003 16.9998V9.40984L16.2903 12.7098C16.3833 12.8036 16.4939 12.878 16.6157 12.9287C16.7376 12.9795 16.8683 13.0056 17.0003 13.0056C17.1323 13.0056 17.263 12.9795 17.3849 12.9287C17.5068 12.878 17.6174 12.8036 17.7103 12.7098C17.804 12.6169 17.8784 12.5063 17.9292 12.3844C17.98 12.2626 18.0061 12.1318 18.0061 11.9998C18.0061 11.8678 17.98 11.7371 17.9292 11.6153C17.8784 11.4934 17.804 11.3828 17.7103 11.2898Z"
              fill="#FD8589"
            />
          </svg>
        </p>
        <p class="text-Neutral-Grey6">Sell option</p>
      </div>
      <div
        style="box-shadow:15px 20px 40px 0 rgba(116, 117, 218,0.15);"
        class="subcard ml-80 px-4 py-5 mb-14  inline-flex flex-col"
      >
        <p class="text-Neutral-white">$15.32</p>
        <p class="text-Neutral-Grey6">Price in dollar</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.subcard {
  background-color: #491f98;
  border-radius: 16px;
  position: absolute;
  bottom: -6rem;
  left: 3rem;
}
.Featuresp {
  line-height: 2.5rem;
}
</style>
