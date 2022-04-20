<template>
  <div id="footer-bg" class="scout-footer">
    <div class="container">
      <div class="row-container border-b border-secondary">
        <div class="w-3/6 mobile:w-full laptop:w-3/6 mobile:px-7 laptop:px-0">
          <div
            class="
              w-full
              grid
              items-center
              gap-3
              mobile:grid-cols-2 mobile:grid-rows-2
              laptop:grid-cols-3 laptop:grid-rows-1
            "
          >
            <img class="logo-img" src="~/assets/img/1.png" />
            <img class="logo-img" src="~/assets/img/2.png" />
            <img class="logo-img" src="~/assets/img/3.png" />
          </div>
        </div>
        <div class="content">
          <div class="list">
            <label class="list-title" for="">Company</label>
            <NuxtLink class="list-menu" to="/about" for="">About Us</NuxtLink>
            <NuxtLink class="list-menu" to="/career" for="">Careers</NuxtLink>
          </div>
          <div class="list">
            <label class="list-title" for="">Support</label>
            <NuxtLink class="list-menu" to="/faq" for="">Resources</NuxtLink>
            <NuxtLink to="/contact" class="list-menu" for=""
              >Contact Us</NuxtLink
            >
          </div>
        </div>
      </div>
      <div class="row-container-two">
        <div class="flex">
          <label class="footer-text" for=""
            >© Onecompassionate 2022. All Rights Reserved</label
          >
        </div>

        <div class="flex justify-end px-4 items-center">
          <div class="flex gap-5 justify-center sm:justify-start">
            <!-- <a
              target="_blank"
              class="mt-1"
              href="https://www.youtube.com/channel/UCFCSYNU3_bd2PDmUZy1LseA/featured"
              ><img src="~/static/icons/social/icon-yt.svg" alt="Youtube"
            /></a>
            <a
              target="_blank"
              href="https://www.facebook.com/Spacesium-108662231671656"
              ><img src="~/static/icons/social/icon-fb.svg" alt="Facebook"
            /></a>
            <a class="mt-1" target="_blank" href="https://twitter.com/Spacesium"
              ><img src="~/static/icons/social/icon-tw.svg" alt="Twitter"
            /></a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/spacesium/?viewAsMember=true"
              ><img src="~/static/icons/social/icon-in.svg" alt="Linkedin"
            /></a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style  scoped>
#footer-bg {
  background-color: #c4e3e6;
}
.scout-footer {
  @apply relative bottom-0 w-full text-white;
}
.container {
  @apply flex flex-col mx-auto py-5 mobile:mx-5 laptop:mx-auto;
}
.container-two {
  @apply flex justify-between;
}
.row-container {
  @apply flex justify-between items-start pb-12 mobile:flex-col  laptop:flex-row;
}
.row-container-two {
  @apply flex justify-between mt-5;
}
.content {
  @apply flex space-x-3  w-3/6 mt-2 justify-end mobile:w-auto  laptop:w-3/6;
}
.logo-img {
  @apply h-20 w-full;
}
.list {
  @apply flex flex-col px-6;
}
.list-title {
  @apply text-base text-secondary;
  font-weight: 700;
}
.list-menu {
  color: #9a9a9a;
  font-size: 14px;
}
.footer-text {
  color: #9a9a9a;

  font-weight: 600;
  @apply mobile:text-xs laptop:text-sm;
}
@media only screen and (max-width: 600px) and (orientation: portrait) {
  #scout-footer {
    position: relative;
    bottom: 0;
  }
}
</style>