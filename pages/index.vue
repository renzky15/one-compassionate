<template>
  <div class="page-bg">
    <NavMobile v-if="isMobile < 641" />
    <Nav v-else />
    <div class="header-banner">
      <div class="header-banner-container">
        <div class="flex flex-col justify-start items-start my-10">
          <h2 class="banner-text" for="">
            Let our family
            <span class="text-secondary">take care</span> of yours!
          </h2>
          <label class="banner-snippet" for=""
            >It is very important that you or your loved ones receive care that
            is not only outstanding and exemplary, but also
            compassionate.</label
          >
          <!-- <NuxtLink to="/contact">
            <button class="rounded-full text-white bg-secondary px-4 py-2 mt-7">
              Assessment Form
            </button>
          </NuxtLink> -->
        </div>
        <div
          class="
            shadow-md
            rounded-2xl
            w-3/6
            mx-auto
            p-10
            my-10
            bg-white
            float-right
            mobile:w-full
            laptop:w-3/6
          "
          :class="isMobile < 640 ? 'hidden' : ''"
        >
          <h1 class="text-3xl font-bold text-center text-secondary">
            Free In-home Assessment
          </h1>
          <div class="grid gap-5 mt-5 mobile:grid-cols-1 laptop:grid-cols-2">
            <input
              v-model="clientName"
              class="input-text"
              placeholder="Who needs care?"
              type="text"
            />
            <input
              v-model="patientName"
              class="input-text"
              placeholder="Clients Name"
              type="text"
            />
            <input
              v-model="patientAddress"
              class="input-text"
              placeholder="Address (Where service is needed)"
              type="text"
            />
            <input
              v-model="phoneNum"
              class="input-text"
              placeholder="Phone Number"
              type="text"
            />
            <input
              v-model="dob"
              class="input-text"
              placeholder="Date of Birth"
              type="date"
            />
            <input
              v-model="email"
              class="input-text"
              placeholder="Email"
              type="email"
            />
            <select class="input-text" v-model="lookingFor" name="" id="">
              <option selected disabled value="">Looking For?</option>
              <option default value="Round the clock care">
                Round the clock care
              </option>
              <option value="Hourly Care">Hourly Care</option>
              <option value="Long Term Care">Long Term Care</option>
              <option value="Short Term Care">Short Term Care</option>
            </select>
            <select class="input-text" v-model="careType" name="" id="">
              <option selected disabled value="">Type of Services</option>
              <option default value="24hr">24hr live in</option>
              <option value="Hospital-to-homecare">Hospital to homecare</option>
              <option value="Companionship">Companionship</option>
              <option value="Advanced Care">Advanced Care</option>
              <option value="Post-Surgery Care">Post-Surgery Care</option>
              <option value="Alzheimer's Disease/Dementia Care">
                Alzheimer's Disease/Dementia Care
              </option>
            </select>
            <input
              v-model="contactPerson"
              class="input-text"
              placeholder="Contact Person"
              type="text"
            />
            <select class="input-text" v-model="caregiver" name="" id="">
              <option selected disabled value="">Preferred Caregiver</option>
              <option default value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Either">Either</option>
            </select>
            <input
              v-model="neededCare"
              class="input-text"
              placeholder="When is care needed?"
              type="text"
            />
            <input
              v-model="bestToContact"
              class="input-text"
              placeholder="Best Way to Reach You"
              type="text"
            />
            <textarea
              v-model="message"
              class="input-text mobile:col-span-1 laptop:col-span-2"
              placeholder="Your message"
              type="text"
              size="7"
            />
          </div>
          <button
            class="
              py-3
              w-full
              text-center
              bg-light-white
              text-secondary
              border border-secondary
              text-lg
              font-bold
              rounded-md
              mt-5
            "
            @click="send"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    <div class="container mx-auto my-20 mobile:px-2 laptop:px-0">
      <h2
        class="
          text-center text-gray-500
          font-bold
          text-3xl
          mobile:text-xl mobile:text-justify
          laptop:text-3xl laptop:text-center
        "
      >
        If you or anyone you know or love is at the stage where assistance at
        home may be required, we know that making this decision and choosing the
        right fit could be challenging. We want to let you know that we
        understand and we are here to help!
      </h2>

      <div
        class="flex items-center justify-center mobile:flex-col laptop:flex-row"
      >
        <p
          class="
            text-center text-gray-500
            italic
            text-3xl
            my-5
            mr-3
            mobile:text-2xl
            laptop:text-3xl
          "
        >
          We guarantee you that
        </p>
        <h2
          class="
            text-secondary
            italic
            font-bold
            text-3xl
            mobile:text-2xl
            laptop:text-3xl
          "
        >
          our name is our promise.
        </h2>
      </div>

      <div
        class="
          flex
          items-center
          justify-center
          mobile:flex-col
          laptop:flex-row
          mobile:space-y-4
          laptop:space-y-0
          mobile:mt-3
          laptop:mt-0
        "
      >
        <span class="italic text-center text-gray-500 text-4xl">
          Call us today at
        </span>
        <h2 class="font-bold text-secondary text-4xl mx-3">847-989-7701</h2>
        <span class="text-3xl text-gray-500 mobile:text-center">
          and talk to one of our care coordinators for a free assessment!</span
        >
      </div>
    </div>
    <div class="content">
      <!-- <div class="covid-box">
        <div class="flex flex-col">
          <h3 class="text-2xl font-bold">COVID-19 CARE</h3>
          <p class="w-3/4 text-xl mt-3">
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
      </div> -->

      <div class="banner-form">
        <div class="flex flex-col">
          <label class="text-2xl text-secondary" for=""
            >Receive compassionate care beyond measure</label
          >
          <h3 class="text-3xl text-secondary">Call 847-9897701</h3>
        </div>
        <div class="flex items-center">
          <button
            class="
              rounded-full
              text-white
              bg-secondary
              px-4
              py-2
              mt-7
              mr-5
              mobile:px-2
              laptop:px-4
            "
          >
            Assessment Form
          </button>

          <button
            class="
              rounded-full
              text-secondary
              border border-secondary
              bg-white
              px-4
              py-2
              mt-7
              mobile:px-2
              laptop:px-4
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
  name: "IndexPage",
  data() {
    return {
      clientName: "",
      patientName: "",
      patientAddress: "",
      phoneNum: "",
      dob: "",
      email: "",
      lookingFor: "",
      careType: "",
      contactPerson: "",
      caregiver: "",
      neededCare: "",
      bestToContact: "",
      message: "",
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
    clear() {
      this.clientName = "";
      this.patientName = "";
      this.patientAddress = "";
      this.phoneNum = "";
      this.dob = "";
      this.email = "";
      this.lookingFor = "";
      this.careType = "";
      this.contactPerson = "";
      this.caregiver = "";
      this.neededCare = "";
      this.bestToContact = "";
      this.message = "";
    },
    send() {
      this.$mail
        .send({
          from: this.email,
          subject: "One compassionate",
          text: `
         Who needs care : ${this.clientName}
         Client Name : ${this.patientName}
         Address : ${this.patientAddress} 
         Phone Number : ${this.phoneNum}
         Date of Birth : ${this.dob}
         Email : ${this.email}
         Looking for : ${this.lookingFor}
         Type of Care : ${this.careType} 
         Contact Person : ${this.contactPerson}
         Preferred Caregiver : ${this.caregiver}
         When is care needed : ${this.neededCare}
         Best way to contact : ${this.bestToContact}
         Message : ${this.message}
        `,
        })
        .then((e) => {
          window.alert("Assessment Form submitted.");
        });

      this.clear();
    },
  },
};
</script>

<style scoped>
.page-bg {
  background-color: #fafbfb;
  @apply h-full overflow-hidden;
}
.header-banner {
  @apply flex justify-between items-start w-full bg-custom py-10;
}
.header-banner-container {
  @apply flex container mx-auto justify-between mobile:px-4 laptop:px-0;
}
.banner-text {
  @apply text-custom font-bold text-5xl w-full mobile:text-3xl laptop:text-5xl;
}
.banner-snippet {
  @apply w-3/6 mt-3 text-gray-700 text-2xl mobile:text-xl mobile:w-full laptop:w-3/6;
}
.content {
  @apply w-full mx-auto container;
}
.bg-custom {
  @apply bg-cover bg-center;
  background-image: url("@/assets/img/banner.jpg");
}
.img-1 {
  @apply w-9/12 h-96 flex justify-center items-center;
}
.covid-box {
  @apply w-full h-full my-10 flex rounded-xl bg-white shadow-md px-10 py-10 justify-between;
}
.banner-form {
  @apply bg-light-blue rounded-xl w-full py-10 my-10 px-20 flex justify-between items-center mobile:flex-col laptop:flex-row mobile:px-10 laptop:px-20;
}
.services {
  @apply my-10;
}
.input-text {
  @apply bg-secondary
              text-white
              border border-secondary
              rounded-md
              px-5
              py-3
              placeholder-white;
}
input[type="date"]:valid {
  color: #fff;
}
.text-custom {
  color: #a06f55;
}
</style>
