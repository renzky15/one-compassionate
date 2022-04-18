<template>
  <div class="page-bg">
    <NavMobile v-if="isMobile < 641" />
    <Nav v-else />
    <div class="w-full bg-secondary">
      <div class="mx-auto container py-4 w-full flex justify-center">
        <h1 class="text-4xl text-white">Testimonials</h1>
      </div>
    </div>
    <div class="content">
      <div class="px-10 py-10 mobile:px-2 laptop:px-10">
        <h1 class="text-gray-500 text-4xl text-center font-bold">
          What our clients are saying
        </h1>
        <div
          class="
            border border-light-brown
            rounded-md
            w-10/12
            mx-auto
            mt-5
            p-10
            mobile:w-full mobile:p-5
            laptop:w-10/12 laptop:p-10
          "
        >
          <slick :options="slickOptions">
            <div v-for="(testimonial, index) in testimonials" :key="index">
              <div
                class="
                  flex flex-col
                  mobile:space-y-4
                  items-center
                  justify-between
                  relative
                  w-full
                "
              >
                <h2
                  class="
                    text-gray-500 text-xl
                    font-bold
                    leading-relaxed
                    mt-3
                    px-10
                    py-10
                    text-center
                    mobile:px-5 mobile:py-5
                    laptop:py-10 laptop:px-10
                  "
                >
                  {{ testimonial.feedback }}
                </h2>
                <img
                  class="rounded-full h-40 w-40"
                  src="@/assets/img/nurse6.jpeg"
                />

                <label class="text-2xl text-gray-500" for="">John Doe</label>
              </div>
            </div>
          </slick>
        </div>
      </div>
      <div class="banner-form">
        <div class="flex flex-col">
          <label class="text-xl text-secondary" for=""
            >Hi! ready to trust One Compassionate?</label
          >
          <h3 class="text-3xl text-secondary">
            Make your life be more meaningful!
          </h3>
        </div>
        <div class="flex items-center">
          <NuxtLink to="/contact">
            <button
              class="rounded-full text-white bg-secondary px-4 py-2 mt-7 mr-5"
            >
              Assessment Form
            </button>
          </NuxtLink>

          <button
            class="
              rounded-full
              text-secondary
              border border-secondary
              bg-white
              px-4
              py-2
              mt-7
            "
          >
            Learn More
          </button>
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
      slickOptions: {
        arows: true,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        slidesToShow: 1,
      },
      testimonials: [
        {
          feedback:
            "When my husband was discharged from the hospital, the social worker assigned in our case referred us to One Compassionate. I called and told the coordinator that we needed help right away and they sent a caregiver the next day! It was nice to know that we could rely on them.",
        },
        {
          feedback:
            "The caregivers we worked with were all very respectful and dependable!",
        },
        {
          feedback:
            "One Compassionate Home Care responded to our inquiries very quickly! The turnaround time after we requested information was extremely impressive.",
        },
        {
          feedback:
            "We feel safe in the company of our caregiver and we are very satisfied with the quality of care we receive.",
        },
        {
          feedback:
            "The staff at One Compassionate Home Care were very courteous and professional!",
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

<style scoped>
.page-bg {
  background-color: #fafbfb;

  @apply h-full overflow-hidden;
}
.content {
  @apply w-full mx-auto  container;
}
.banner-form {
  @apply bg-light-blue rounded-xl w-full py-10 my-10 px-20 flex justify-between items-center mobile:flex-col mobile:px-10 laptop:flex-row laptop:px-20;
}
</style>