<template>
  <div class="page-bg">
    <NavMobile v-if="isMobile < 641" />
    <Nav v-else />

    <div class="w-full bg-secondary">
      <div class="mx-auto container py-4 w-full flex justify-center">
        <h1 class="text-4xl text-white">Our Services</h1>
      </div>
    </div>

    <div class="content">
      <div class="service-wrapper">
        <div class="service">
          <h1 class="text-3xl text-center text-white mb-5 font-bold">
            24-hour live-in or hourly rate
          </h1>
          <p class="p-snippet">
            Personal care provided by trained home care workers.
          </p>

          <div class="mt-3">
            <h2 class="text-lg text-white font-bold">
              Some of the services include:
            </h2>
            <ul class="list-disc ml-5 text-xl text-white">
              <li>
                Assistance with Activities of Daily Living such as bathing and
                dressing
              </li>
              <li>Errand Services</li>
              <li>Personal Laundry</li>
              <li>Light House Keeping</li>
              <li>Meal Preparation</li>
              <li>Medication or Appointment Reminders</li>
              <li>Transportation</li>
            </ul>
          </div>
        </div>
        <div v-for="(service, index) in services" :key="index">
          <div class="service">
            <h1 class="text-3xl text-center text-white mb-5 font-bold">
              {{ service.name }}
            </h1>
            <p class="p-snippet">
              {{ service.desc }}
            </p>
            <p class="p-snippet">
              {{ service.descTwo }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          name: "Hospital to home care",
          desc: "Transitioning from hospital to home care can be difficult without the proper support that you need. ",
          descTwo:
            "We are here to make sure that the transition for you is seamless and hassle free by providing you with a skilled and experienced home care worker who will fit your needs anytime.",
        },
        {
          name: "Companionship",
          desc: "Companionship is important for anyone at any stage of their lives. Our home care workers are here for you to help you with your regular day to day activities, engage in your hobbies, and even create new routines that can help maintain the quality of life you have grown accustomed to!",
        },
        {
          name: "Advanced care",
          desc: "Whether you are facing an acute illness, a long-term chronic illness or a terminal illness, we can help customize an advance care plan that can help alleviate unnecessary stress and provide a better understanding of the decision-making challenges you may be facing.",
          descTwo:
            "Our team and care coordinators can help you find the best support you need.",
        },
        {
          name: "Post-Surgery care",
          desc: "If you are recovering from a minor or major surgery, our team of home care workers can assist and support you with your daily tasks so that you can focus all your energy towards your recovery! We are here to ensure that you can prioritize your health without compromising your day to day responsibilities at home.",
        },
        {
          name: "Alzheimer’s Disease/Dementia care",
          desc: "Caring for a loved one who is diagnosed with Alzheimer’s Disease or dementia related disorder can be challenging. One Compassionate Home Care, Inc. provides our home care workers with the proper training and skills to connect with our clients suffering from dementia. You can expect our team to know how to assess each situation and be sensitive of their needs.",
        },
      ],
      isMobile: 1280,
    };
  },
  mounted() {
    this.isMobile = window.innerWidth;
    // window.addEventListener("resize", () => {
    //   this.isMobile = window.innerWidth;
    // });
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth;
    });
  },
};
</script>

<style  scoped>
.page-bg {
  background-color: #fafbfb;
  @apply h-full overflow-hidden;
}
.content {
  @apply w-full mx-auto  container;
}
.service-wrapper {
  @apply grid grid-cols-3 gap-5 my-10 mobile:grid-cols-1 mobile:grid-rows-3 laptop:grid-cols-3 laptop:grid-rows-1;
}
.service {
  @apply p-10 h-full bg-secondary flex flex-col  items-center rounded;
}
.p-snippet {
  @apply text-white text-xl leading-relaxed mt-3 text-justify;
}
</style>