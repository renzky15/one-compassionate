<template>
  <div class="page-bg">
    <NavMobile v-if="isMobile < 641" />
    <Nav v-else />
    <div class="w-full bg-secondary">
      <div class="mx-auto container py-4 w-full flex justify-center">
        <h1 class="text-4xl text-white">Careers</h1>
      </div>
    </div>
    <div class="bg-custom"></div>
    <div class="content">
      <div
        class="
          my-10
          w-9/12
          mx-auto
          mobile:w-full
          laptop:w-9/12
          mobile:px-2
          laptop:px-0
        "
      >
        <h1 class="text-3xl text-center text-secondary italic">
          Our Team of Home Care Workers
        </h1>

        <p class="p-snippet">
          We are proud and honored to be working with individuals who are
          trustworthy, hardworking and genuinely compassionate. Our home care
          workers undergo a comprehensive screening process including a national
          criminal background check. All of our home care workers are skilled,
          certified, and experienced in working with clients who are diagnosed
          with Alzheimer's Disease/Dementia, as well as other medical conditions
          including those who are receiving hospice care.
        </p>
        <p class="p-snippet">
          We strive to achieve an excellent match between clients and staff
          members in order to maintain an honest and productive relationship
          with our clients and their families. We are also sensitive to the fact
          that our clients’ needs can change – often quickly – which is why our
          team is ready and able to adapt as needed.
        </p>

        <div class="my-10">
          <h1 class="text-2xl text-gray-500 italic">
            Trainings are provided in the following areas:
          </h1>
          <ul class="list-disc ml-5 text-2xl text-gray-500">
            <li>Abuse and Neglect</li>
            <li>Basic Needs and Bathing</li>
            <li>Communication Skills</li>
            <li>Feeding, Ambulation, and Transfer</li>
            <li>Hygiene and Infection Control</li>
            <li>Maintenance of Clean, Safe, and Healthy Environment</li>
            <li>Observation, Reporting and Documentation</li>
            <li>Personal Care and Toileting</li>
            <li>Responsibilities and Confidentiality</li>
            <li>Safety and Emergencies</li>
            <li>
              6 hour course in Understanding Alzheimer's Disease and Related
              Dementia Disorders
            </li>
          </ul>
        </div>

        <div class="border border-secondary rounded-lg p-5">
          <h1 class="text-2xl text-gray-500">Join Our Team</h1>
          <p class="p-snippet">
            One Compassionate Home Care, Inc. is an equal opportunity employer.
            We evaluate qualified applicants regardless of race, color,
            religion, sex, national origin, disability, and veteran status.
          </p>

          <span
            class="p-snippet flex items-center mobile:flex-col laptop:flex-row"
            >Email us your resume today at
            <h2 class="text-secondary ml-2">info@onecompassionate.com</h2>
          </span>
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
.bg-custom {
  @apply bg-cover bg-center w-full;
  background-image: url("@/assets/img/team.jpg");
  height: 30rem;
}
.p-snippet {
  @apply text-gray-500 text-2xl leading-relaxed mt-3 text-justify mobile:leading-snug laptop:leading-relaxed;
}
</style>