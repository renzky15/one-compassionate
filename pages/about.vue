<template>
  <div class="page-bg">
    <NavMobile v-if="isMobile < 641" />
    <Nav v-else />

    <div class="w-full bg-secondary">
      <div class="mx-auto container py-4 w-full flex justify-center">
        <h1 class="text-4xl text-white">About Us</h1>
      </div>
    </div>

    <div class="content">
      <div class="slide">
        <slick :options="slickOptions">
          <div class="img-wrapper">
            <img class="bg-contain" src="@/assets/img/nurse6.jpeg" />
          </div>
          <div class="img-wrapper">
            <img src="@/assets/img/nurse2.jpeg" />
          </div>
          <div class="img-wrapper">
            <img src="@/assets/img/nurse6.jpg" />
          </div>
        </slick>
      </div>
      <div
        class="
          flex flex-col
          justify-start
          mt-10
          bg-secondary
          rounded-lg
          shadow-md
          text-white
          p-10
          mobile:mt-0
          laptop:mt-10
        "
      >
        <h1 class="text-white text-3xl text-center">Mission and Vision</h1>
        <p
          class="
            text-white text-xl
            leading-relaxed
            mt-3
            text-center
            mobile:text-justify
            laptop:text-center
          "
        >
          We aim to become the prime and leading home care agency in the region
          by providing compassionate care that upholds the values of trust and
          respect with our clients and fosters excellence in protecting their
          dignity and way of life.
        </p>
      </div>
      <div
        class="
          flex flex-col
          justify-start
          bg-secondary
          mt-10
          rounded-lg
          shadow-md
          p-10
        "
      >
        <h1 class="text-white text-3xl text-center">How We Started</h1>
        <p class="text-white text-xl text-justify leading-relaxed mt-3">
          One Compassionate Home Care, Inc. is a client-centered agency
          that delivers individualized care tailored to the needs of our clients
          since 2020. Founder and Director of Operations, Cristina, started her
          journey as a caregiver in California in 1998. By caring for her
          clients and becoming an active participant in her clients’ care team,
          she developed a high level of commitment and dedication in ensuring
          that they were able to accomplish all of their common goals. It is
          through this personal experience that encouraged her to establish a
          family owned home care agency that is remarkably focused on promoting
          trust, respect, and compassion.
        </p>
        <p class="text-white text-xl text-justify leading-relaxed mt-3">
          We remain to be a family owned agency and we are licensed by the
          Illinois Department of Labor and Illinois Department of Public Health
          as a non-medical Home Services Placement Agency. We offer personalized
          round the clock or hourly home care services, companionship,
          post-surgery care, and Alzheimer’s Disease/Dementia care to clients
          who wish to continue living their lives independently at the comfort
          of their own home. Our skilled home care workers are able to provide
          assistance with activities of daily living, medication management, as
          well as transportation. Our team will help develop an individualized
          care plan to provide the services our clients deserve based on their
          needs and lifestyle.
        </p>
      </div>

      <div
        class="
          flex flex-col
          bg-secondary
          shadow-md
          text-white
          justify-start
          rounded-lg
          mt-10
          p-10
        "
      >
        <h1 class="text-white text-3xl text-center">Our Core Values</h1>
        <label
          class="
            text-xl text-center
            my-5
            mobile:text-justify
            laptop:text-center
          "
          >These values will serve as our guiding principles to ensure that our
          clients have the opportunity to empower themselves by getting the
          quality care they deserve. </label
        >
        <div
          class="
            grid grid-cols-3
            gap-5
            my-5
            mobile:grid-cols-1 mobile:grid-rows-3
            laptop:grid-cols-3 laptop:grid-rows-1
          "
        >
          <div
            class="
              flex flex-col
              border border-light-white
              rounded-md
              p-10
              mobile:p-4
              laptop:p-10
            "
          >
            <h1 class="text-white text-3xl text-center font-bold">Trust</h1>
            <p class="text-white text-xl leading-relaxed mt-3 text-justify">
              We strive to enable our clients in continuing to live their lives
              at the comfort of their own home. Trust is an essential part of
              any relationship. It is a significant factor that allows our
              clients and their home care workers to openly communicate and
              foster an effective collaboration. Clients become more at ease in
              reaching out and expressing their needs when they are confident
              that they can trust their home care workers.
            </p>
          </div>
          <div
            class="
              flex flex-col
              border border-light-white
              rounded-md
              p-10
              mobile:p-4
              laptop:p-10
            "
          >
            <h1 class="text-white text-3xl text-center font-bold">Respect</h1>
            <p class="text-white text-xl text-justify leading-relaxed mt-3">
              Demonstrating respect towards our clients is one of the most
              successful ways to establish a good working relationship with
              them. Since the home care workers spend majority of their time
              with our clients, they take an active role in impacting not only
              our clients’ health, but also their overall well-being. This value
              plays a critical role in the care process because it nurtures a
              more meaningful relationship between the client and home care
              worker.
            </p>
          </div>

          <div
            class="
              flex flex-col
              border border-light-white
              rounded-md
              p-10
              mobile:p-4
              laptop:p-10
            "
          >
            <h1 class="text-white text-3xl text-center font-bold">
              Compassion
            </h1>
            <p class="text-white text-xl leading-relaxed mt-3 text-justify">
              Our ability to show compassion strengthens our goal in ensuring
              that all our clients are treated fairly and kindly. The experience
              of our clients partnering with our home care workers can be
              incredibly rewarding through the display of compassion. By simply
              acknowledging our clients’ situation from their point of view,
              empathizing with their day to day challenges and concerns, as well
              as giving them the time, care and attention they need, can deepen
              the bond in our relationship.
            </p>
          </div>
        </div>
      </div>
      <!-- Testimonials -->
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
  @apply w-full mx-auto  container my-10;
}
.img-wrapper {
}
.slide {
  @apply w-full h-full mobile:h-80 laptop:h-full;
}
</style>