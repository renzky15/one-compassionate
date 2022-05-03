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
        <NuxtLink class="" to="/">Home</NuxtLink>
        <div class="group relative">
          <NuxtLink to="/about">About</NuxtLink>

          <div
            class="
              z-40
              hidden
              w-40
              bg-white
              rounded
              divide-y divide-gray-100
              shadow
              dark:bg-gray-700
              group-hover:block
              absolute
            "
          >
            <ul
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li>
                <NuxtLink
                  to="/about"
                  class="
                    block
                    py-2
                    px-4
                    hover:bg-gray-100
                    dark:hover:bg-gray-600 dark:hover:text-white
                  "
                  >Mission and Vision</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/about"
                  class="
                    block
                    py-2
                    px-4
                    hover:bg-gray-100
                    dark:hover:bg-gray-600 dark:hover:text-white
                  "
                  >How We Started</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/about"
                  class="
                    block
                    py-2
                    px-4
                    hover:bg-gray-100
                    dark:hover:bg-gray-600 dark:hover:text-white
                  "
                  >Our Core Values</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
        <NuxtLink to="/services">Services</NuxtLink>
        <NuxtLink to="/career">Careers</NuxtLink>
        <div class="group">
          <NuxtLink class="" to="/faq">Resources</NuxtLink>
          <div
            class="
              hidden
              w-40
              bg-white
              rounded
              divide-y divide-gray-100
              shadow
              dark:bg-gray-700
              group-hover:block
              absolute
            "
          >
            <ul
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li>
                <NuxtLink
                  to="/faq"
                  class="
                    block
                    py-2
                    px-4
                    hover:bg-gray-100
                    dark:hover:bg-gray-600 dark:hover:text-white
                  "
                  >FAQs</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/faq"
                  class="
                    block
                    py-2
                    px-4
                    hover:bg-gray-100
                    dark:hover:bg-gray-600 dark:hover:text-white
                  "
                  >COVID-19 Care</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
        <NuxtLink to="/testimonial">Testimonials</NuxtLink>
        <div class="group">
          <NuxtLink class="" to="/contact">Contact Us</NuxtLink>
          <div
            class="
              hidden
              w-40
              bg-white
              rounded
              divide-y divide-gray-100
              shadow
              dark:bg-gray-700
              group-hover:block
              absolute
            "
          >
            <ul
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li>
                <NuxtLink
                  to="/contact"
                  class="
                    block
                    py-2
                    px-4
                    hover:bg-gray-100
                    dark:hover:bg-gray-600 dark:hover:text-white
                  "
                  >Request Information</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/contact"
                  class="
                    block
                    py-2
                    px-4
                    hover:bg-gray-100
                    dark:hover:bg-gray-600 dark:hover:text-white
                  "
                  >General Information</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
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
  @apply flex space-x-6 items-center justify-end  text-xl w-4/6 text-gray-500 font-bold;
}
.logo-img {
  @apply w-full h-full;
}

/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  @apply text-secondary;
}
</style>