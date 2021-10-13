<template>
  <div class="py-24 bg-secondary">
    <p class="Featuresp font-extrabold text-Neutral-white text-center text-3xl">
      Market sentiments, portfolio, and run <br />
      the infrastructure of your choice
    </p>
    <div class="w-11/12 flex mx-auto mt-20">
      <div class="flex flex-col mt-10">
        <p class="text-Neutral-white text-2xl font-bold">Invest Smart</p>
        <p class="text-Neutral-Grey5 text-center my-5">
          Get full statistic information about the behaviour of <br />
          buyers and sellers will help you to make the decision.
        </p>
        <div><Button name="Learn More" blue="true" /></div>
      </div>
      <div class="ml-52 w-5/12">
        <div class="card flxe flex-col rounded-xl px-10 py-6">
          <div class="card-header flex">
            <div class="logo">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#C4C4C4" />
                <g clip-path="url(#clip0)">
                  <path
                    d="M39.4018 24.8367C36.7296 35.5567 25.8686 42.0732 15.1639 39.4009C4.44355 36.7287 -2.07301 25.8681 0.599334 15.1635C3.27152 4.44354 14.1168 -2.07302 24.8371 0.599321C35.5418 3.25588 42.0742 14.1165 39.4018 24.8367Z"
                    fill="url(#paint0_linear)"
                  />
                  <path
                    d="M29.5223 17.508C29.9129 14.8517 27.8973 13.4142 25.116 12.4611L26.0223 8.85175L23.8348 8.30487L22.9598 11.8205C22.3817 11.6799 21.7879 11.5392 21.1942 11.4142L22.0692 7.883L19.8817 7.33612L18.991 10.9299C18.5067 10.8205 18.0379 10.7111 17.5848 10.6017V10.5861L14.5535 9.83612L13.9754 12.1799C13.9754 12.1799 15.6004 12.5549 15.5692 12.5705C16.4598 12.7892 16.616 13.383 16.5848 13.8517L15.5535 17.9611C15.616 17.9767 15.6942 17.9924 15.7879 18.0392C15.7098 18.0236 15.6317 18.008 15.5535 17.9767L14.116 23.7267C14.0067 23.9924 13.7254 24.3986 13.116 24.2424C13.1317 24.2736 11.5223 23.8517 11.5223 23.8517L10.4285 26.3674L13.2879 27.0861C13.8192 27.2267 14.3348 27.3517 14.8504 27.4924L13.9442 31.133L16.1317 31.6799L17.0379 28.0705C17.6317 28.2267 18.2254 28.383 18.7879 28.5236L17.8973 32.1174L20.0848 32.6642L20.991 29.0236C24.741 29.7267 27.5535 29.4455 28.7254 26.0549C29.6785 23.3361 28.6785 21.758 26.7098 20.7267C28.1629 20.3986 29.241 19.4455 29.5223 17.508ZM24.5067 24.5392C23.8348 27.258 19.241 25.7892 17.7567 25.4142L18.9598 20.5861C20.4442 20.9611 25.2254 21.6955 24.5067 24.5392ZM25.1942 17.4611C24.5692 19.9455 20.7567 18.6799 19.5223 18.3674L20.616 13.9924C21.8504 14.3049 25.8348 14.883 25.1942 17.4611Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="19.9893"
                    y1="-0.00947792"
                    x2="19.9893"
                    y2="39.9961"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F9AA4B" />
                    <stop offset="1" stop-color="#F7931A" />
                  </linearGradient>
                  <clipPath id="clip0">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="flex flex-col self-center ml-7 flex-1">
              <p class="text-Neutral-white">
                Bitcoin <span style="color:#cfcfcf">BTC</span>
              </p>
              <p class="text-Neutral-Grey6">0.00080 BTC</p>
            </div>
            <div class="rise self-center" style="color:#42ffff">+125%</div>
          </div>
          <div class="card-chart mt-10 h-36">
            <div class="w-full">
              <trend
                :data="[
                  0,
                  15,
                  7.5,
                  36,
                  12.5,
                  18.5,
                  11,
                  41,
                  41,
                  52,
                  65,
                  70.5,
                  44,
                  50,
                ]"
                :gradientDirection="top"
                :gradient="['#6EDCB5', '#6EDCB5', '#6EDCB5']"
                :padding="1"
                :radius="12"
                :stroke-width="4"
                :stroke-linecap="butt"
                auto-draw
                smooth
              >
              </trend>
            </div>
          </div>
        </div>
        <div class="subcard inline-flex flex-col">
          <p class="text-Neutral-white text-xl">Increase in <br> Trade</p>
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
        <div class="subcard"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.Featuresp {
  line-height: 2.5rem;
}
.subcard {
  background-color: #491f98;
}
</style>
