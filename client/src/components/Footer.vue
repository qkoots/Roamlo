<template>
  <!-- ====== Footer Section Start -->
  <footer class="relative z-10  dark:bg-dark pt-20 pb-10 lg:pt-[120px] lg:pb-10">
    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4 sm:w-2/3 lg:w-3/12">
          <div class="w-full mb-10">
            <a href="javascript:void(0)" class="mb-6 inline-block max-w-[160px]">
              LOGO
            </a>
            <p class="text-base text-body-color dark:text-dark-6 mb-7">
              Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem totam rem aperiam.
            </p>
          </div>
        </div>

        <div v-for="menu in menus" :key="menu.title" class="w-full px-4 sm:w-1/2 lg:w-2/12">
          <div class="w-full mb-10">
            <h4 class="text-lg font-semibold text-dark mb-9">{{ menu.title }}</h4>
            <ul class="space-y-3">
              <li v-for="item in menu.items" :key="item.text">
                <a
                  :href="item.link"
                  class="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6">
                  {{ item.text }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="w-full px-4 sm:w-1/2 lg:w-3/12">
          <div class="w-full mb-10">
            <h4 class="text-lg font-semibold text-dark  mb-9">Follow Us On</h4>
            <!-- Social links section remains the same -->
            <!-- ... SVG content remains unchanged ... -->
            <p class="text-base text-body-color dark:text-dark-6">© {{ currentYear }} by Roamlo</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- ====== Footer Section End -->
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      menus: [
        {
          title: 'Resources',
          items: [
            { text: 'SaaS Development', link: 'javascript:void(0)' },
            { text: 'Our Products', link: 'javascript:void(0)' },
            { text: 'User Flow', link: 'javascript:void(0)' },
            { text: 'User Strategy', link: 'javascript:void(0)' }
          ]
        },
        {
          title: 'Company',
          items: [
            { text: 'About TailGrids', link: 'javascript:void(0)' },
            { text: 'Contact & Support', link: 'javascript:void(0)' },
            { text: 'Success History', link: 'javascript:void(0)' },
            { text: 'Setting & Privacy', link: 'javascript:void(0)' }
          ]
        },
        {
          title: 'Quick Links',
          items: [
            { text: 'Premium Support', link: 'javascript:void(0)' },
            { text: 'Our Services', link: 'javascript:void(0)' },
            { text: 'Know Our Team', link: 'javascript:void(0)' },
            { text: 'Download App', link: 'javascript:void(0)' }
          ]
        }
      ]
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>
