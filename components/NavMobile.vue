<template>
  <div class="z-10">
    <div class="nav z-10">
      <div class="nav-container">
        <div class="left-menu">
          <NuxtLink to="/">
            <img class="logo" src="~/assets/img/one-logo.png"
          /></NuxtLink>
          <!-- <div class="pages">
          <a class="font-menu res-tablet" href="get-started#features" for=""
            >Features</a
          >
          <NuxtLink class="font-menu res-tablet" to="/pricing"
            >Pricing</NuxtLink
          >
          <NuxtLink class="font-menu res-tablet tablet:mr-7" to="/about"
            >About Us</NuxtLink
          >
          <NuxtLink class="font-menu res-tablet" to="/contact"
            >Contact</NuxtLink
          >
        </div> -->
          <button @click="handleOpenMenu">
            <ion-icon
              class="h-7 w-7 stroke-current text-secondary"
              name="menu-outline"
            ></ion-icon>
          </button>
        </div>
      </div>
    </div>
    <div v-show="isMenu" class="menu">
      <ul>
        <li class="link-menu">
          <NuxtLink class="font-menu res-tablet" to="/" for="">Home</NuxtLink>
        </li>
        <li class="link-menu">
          <NuxtLink class="font-menu res-tablet" to="/about" for=""
            >About</NuxtLink
          >
        </li>
        <li class="link-menu">
          <NuxtLink class="font-menu res-tablet" to="/services" for=""
            >Services</NuxtLink
          >
        </li>
        <li class="link-menu">
          <NuxtLink class="font-menu res-tablet" to="/career" for=""
            >Careers</NuxtLink
          >
        </li>

        <li class="link-menu">
          <NuxtLink class="font-menu res-tablet" to="/testimonial" for=""
            >Testimonials</NuxtLink
          >
        </li>
        <li class="text-white text-sm p-3">
          <div class="right-menu">
            <NuxtLink class="w-5/12" to="/faq">
              <button class="p-2 bg-secondary w-full">Resources</button>
            </NuxtLink>
            <NuxtLink class="w-5/12" to="/contact">
              <button
                class="
                  font-menu
                  w-full
                  mr-5
                  border
                  p-2
                  border-secondary
                  text-secondary
                "
                for=""
              >
                Contact Us
              </button>
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavMobile",
  data() {
    return {
      isMenu: false,
    };
  },
  methods: {
    handleOpenMenu() {
      this.isMenu = !this.isMenu;
    },
  },
};
</script>

<style scoped>
.nav {
  @apply bg-white w-full sticky top-0 z-50;
  box-sizing: border-box;
  backdrop-filter: blur(50px);
}
.nav-container {
  @apply flex justify-between items-center text-white py-4 px-4 mx-auto;
}
.left-menu {
  @apply flex justify-between items-center w-full;
}
.menu {
  background: #fff;
  @apply w-full flex flex-col px-4;
}
.link-menu {
  @apply text-secondary text-sm p-3 font-normal border-b border-secondary;
}
.pages {
  @apply flex space-x-4 items-center mt-1  ml-10;
}
.logo {
  @apply h-3/6 w-3/6;
}
.res-tablet {
  @apply tablet:text-sm;
}
.right-menu {
  @apply my-3 flex justify-between;
}
</style>