<template>
  <div class="page-bg">
    <NavMobile v-if="isMobile < 641" />
    <Nav v-else />
    <div class="w-full bg-secondary">
      <div class="mx-auto container py-4 w-full flex justify-center">
        <h1 class="text-4xl text-white">Resources</h1>
      </div>
    </div>
    <div
      class="
        flex
        items-center
        justify-between
        container
        mx-auto
        mt-6
        mobile:flex-col
        laptop:flex-row
        mobile:items-start
        laptop:items-center
      "
    >
      <label class="text-gray-600 text-lg" for="">Resources > FAQ's</label>
      <input
        type="text"
        placeholder="Search..."
        class="px-5 py-1 border border-secondary rounded-md"
      />
    </div>
    <div class="content mb-10">
      <div v-for="(question, index) in questions" :key="index">
        <div
          class="
            flex
            justify-between
            w-full
            mt-6
            border
            m-auto
            items-center
            border-light-brown
            px-5
            py-3
            rounded-lg
            text-gray-500
          "
          @click="handleSelect(index)"
        >
          <label class="text-xl mobile:text-lg laptop:text-xl" for="">{{
            question.text
          }}</label>
          <div
            class="
              rounded-full
              h-6
              w-6
              bg-blue-200
              flex
              justify-center
              items-center
            "
          >
            <ion-icon
              class="stroke-current text-blue-500 z-10"
              name="chevron-down-outline"
            ></ion-icon>
          </div>
        </div>

        <div
          :class="
            selectedId === index
              ? 'max-h-80 transition-all duration-500 overflow-hidden'
              : 'overflow-hidden transition-all max-h-0 duration-500'
          "
        >
          <div
            class="
              flex flex-col
              w-11/12
              mt-6
              text-base
              mb-5
              border
              m-auto
              border-gray-200
              px-5
              py-3
              rounded-lg
            "
          >
            <ol>
              <li class="text-secondary text-xl font-bold">
                {{ question.answer }}
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div
        class="
          flex
          justify-between
          w-full
          mt-6
          border
          m-auto
          items-center
          border-light-brown
          px-5
          py-3
          rounded-lg
        "
        @click="handleSelect(index)"
      >
        <label class="text-xl text-gray-500" for=""
          >How are your home care workers screened?</label
        >
        <div
          class="
            rounded-full
            h-6
            w-6
            bg-blue-200
            flex
            justify-center
            items-center
          "
        >
          <ion-icon
            class="stroke-current text-blue-500"
            name="chevron-down-outline"
          ></ion-icon>
        </div>
      </div>

      <div
        :class="
          selectedId === index
            ? 'max-h-80 transition-all duration-500 overflow-hidden'
            : 'overflow-hidden transition-all max-h-0 duration-500'
        "
      >
        <div
          class="
            flex flex-col
            w-11/12
            mt-6
            text-base
            mb-5
            border
            m-auto
            border-gray-200
            px-5
            py-3
            rounded-lg
          "
        >
          <ol>
            <li class="text-secondary text-xl font-bold">
              Our caregivers are carefully screened and matched with our clients
              based on their skills and compatibility with the client’s needs.
            </li>
            <li class="text-secondary text-xl font-bold">
              Our pre-employment screening process requires:
              <ul class="ml-10">
                <li class="list-disc">
                  Submission of Application for Employment form and at least two
                  forms of legal identification
                </li>
                <li class="list-disc">Face-to-face interview</li>
                <li class="list-disc">Reference check</li>
                <li class="list-disc">
                  Illinois Department of Public Health fingerprint-based
                  healthcare worker background check
                </li>
              </ul>
            </li>
            <li class="text-secondary text-xl">
              Our Business Development Specialist also makes in-home visits to
              observe caregiver/client interaction to ensure that our
              personalized care plans are being followed.
            </li>
          </ol>
        </div>
      </div>
      <div class="covid-box">
        <div class="flex flex-col">
          <h3 class="text-2xl font-bold text-gray-500">COVID-19 CARE</h3>
          <p class="w-3/4 text-xl mt-3 text-gray-500">
            Safety is our #1 priority! You don’t need to worry because we
            administer rapid tests and weekly PCR swab tests at our office which
            is located at 5617 Dempster St. Morton Grove, Illinois. We will stay
            up to date with the changing COVID-19 guidelines to ensure that all
            our employees follow the protocols we have in place so that we can
            continue to promote a healthy work environment.
          </p>
        </div>
        <div class="w-3/6 h-40">
          <img
            class=""
            src="@/assets/img/covid-care-home.png"
            alt=""
            srcset=""
          />
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
      questions: [
        {
          text: "Who qualifies for home care services?",
          answer:
            "We accept clients who require the use of any assistive devices, such as wheelchairs, canes, or walkers; clients who may be recovering from hospitalization and require ambulation assistance, maintain personal hygiene, and need assistance w/ food preparation and/or light housekeeping chores. We also work with clients who have Dementia, Alzheimer’s or other types of cognitive impairment.",
        },
        {
          text: "I need a caregiver immediately! Will you be able to help?",
          answer:
            "Yes. Call us today at 847-989-7701 and our care team will help meet your needs!",
        },
        {
          text: "How much do you charge for your services?",
          answer:
            "Our rates differ and in order for us to provide you with the best rate, we will need to assess the type of assistance or services the client will require. You can call us at 847-989-7701 or email us at info@onecompassionate.com to discuss this with our care team directly!",
        },
        {
          text: "Do you accept insurance?",
          answer:
            "Yes, we accept Long Term Care Insurance. We do not accept Medicare.",
        },
        {
          text: "What are your forms of payments?",
          answer: "We accept checks, cash, and credit card payments.",
        },
      ],
      selectedId: null,
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
  methods: {
    handleSelect(id) {
      if (this.selectedId !== id) {
        this.selectedId = id;
      } else {
        this.selectedId = null;
      }
    },
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
.covid-box {
  @apply w-full h-full my-10 flex rounded-xl bg-white shadow-md px-10 py-10 justify-between;
}
</style>