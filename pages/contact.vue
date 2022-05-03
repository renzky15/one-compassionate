<template>
  <div class="page-bg">
    <NavMobile v-if="isMobile < 641" />
    <Nav v-else />
    <div class="w-full bg-secondary">
      <div class="mx-auto container py-4 w-full flex justify-center">
        <h1 class="text-4xl text-white">Contact Us</h1>
      </div>
    </div>
    <div class="content">
      <div
        class="
          shadow-md
          w-3/6
          mx-auto
          p-10
          my-10
          bg-white
          mobile:w-full
          laptop:w-3/6
        "
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
            <option selected disabled value="">Type of Service</option>
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
            name="date"
            type="text"
            onfocus="(this.type='date')"
            onfocusout="(this.type='text')"
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

      <div
        class="
          flex flex-col
          justify-start
          w-3/6
          mx-auto
          my-5
          text-gray-500
          mobile:w-full mobile:px-5
          laptop:px-0 laptop:w-3/6
        "
      >
        <h3 class="text-lg">
          Location: 5617 Dempster St. Morton Grove, IL 60053
        </h3>
        <h3 class="text-lg">Office Number: 847-989-7701</h3>
        <h3 class="text-lg">Fax Number: 847-713-4858</h3>
        <h3 class="text-lg">Email: info@onecompassionate.com</h3>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
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
.content {
  @apply w-full mx-auto  container;
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
</style>