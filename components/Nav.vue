<template>
  <div class="bg-nav">
    <div class="nav">
      <div class="w-2/6">
        <NuxtLink to="/">
          <div class="w-10/12">
            <img class="logo-img" src="~/assets/img/one-logo.png" />
          </div>
        </NuxtLink>
      </div>

      <div class="links">
        <div class="relative group">
          <NuxtLink class="group-hover:block" to="/">Home</NuxtLink>
          <div
            class="
              z-40
              w-28
              bg-white
              rounded
              divide-y divide-gray-100
              shadow
              dark:bg-gray-700
              group-hover:block
              absolute
              hidden
            "
          >
            <ul
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li>
                <a
                  href="#"
                  class="
                    block
                    py-2
                    px-4
                    hover:bg-gray-100
                    dark:hover:bg-gray-600 dark:hover:text-white
                  "
                  >Dashboard</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="
                    block
                    py-2
                    px-4
                    hover:bg-gray-100
                    dark:hover:bg-gray-600 dark:hover:text-white
                  "
                  >Settings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="
                    block
                    py-2
                    px-4
                    hover:bg-gray-100
                    dark:hover:bg-gray-600 dark:hover:text-white
                  "
                  >Earnings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="
                    block
                    py-2
                    px-4
                    hover:bg-gray-100
                    dark:hover:bg-gray-600 dark:hover:text-white
                  "
                  >Sign out</a
                >
              </li>
            </ul>
          </div>
        </div>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/services">Services</NuxtLink>
        <NuxtLink to="/career">Careers</NuxtLink>
        <NuxtLink to="/faq">Resources</NuxtLink>
        <NuxtLink to="/testimonial">Testimonials</NuxtLink>
        <NuxtLink to="/contact">Contact Us</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style  scoped>
.bg-nav {
  background-color: #fafbfb;
  @apply w-full;
}
.nav {
  @apply flex items-center justify-between container mx-auto py-3 sticky;
}
.links {
  @apply flex space-x-6 items-center  text-xl w-3/6 text-gray-500 font-bold;
}
.logo-img {
  @apply w-full h-full;
}

/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  @apply text-secondary;
}
</style>