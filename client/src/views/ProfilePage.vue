<template>
  <section class="bg-gray-1 dark:bg-dark py-20 lg:py-[60px]">
    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <div
            class="relative max-w-[630px] overflow-hidden rounded-lg bg-white px-10 sm:px-12 dark:bg-dark-2">
            <div class="mb-10 md:mb-16">
              <h1 class="text-2xl font-semibold text-dark mb-6">Account Settings</h1>
            </div>
            
            <form @submit.prevent="submit">
              <h3 class="text-lg font-semibold text-dark mb-4 text-left">Personal Information</h3>
              <div class="flex space-x-4 mb-6">
                <input
                  type="text"
                  placeholder="First Name"
                  v-model="user.firstName"
                  class="w-1/2 px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color dark:text-white dark:border-dark-3 focus:border-primary focus-visible:shadow-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  v-model="user.lastName"
                  class="w-1/2 px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color dark:text-white dark:border-dark-3 focus:border-primary focus-visible:shadow-none"
                />
              </div>
              <div class="mb-6">
                <input
                  type="email"
                  placeholder="Email"
                  v-model="user.email"
                  class="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color dark:text-white dark:border-dark-3 focus:border-primary focus-visible:shadow-none"
                />
              </div>

              <div class="pt-6">
                <h3 class="text-lg font-semibold text-dark mb-4 text-left">Change Password</h3>
                <div class="flex space-x-4 mb-6">
                  <input
                    type="password"
                    placeholder="Password"
                    v-model="user.password"
                    class="w-1/2 px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color dark:text-white dark:border-dark-3 focus:border-primary focus-visible:shadow-none"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    v-model="user.confirmPassword"
                    class="w-1/2 px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color dark:text-white dark:border-dark-3 focus:border-primary focus-visible:shadow-none"
                  />
                </div>
              </div>

              <div class="mt-10">
                <input
                  type="submit"
                  value="Save Changes"
                  class="w-full px-5 py-3 text-base font-medium transition border rounded-md cursor-pointer border-primary bg-primary hover:bg-opacity-90"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
// import { toast } from 'vue3-toastify';
// import 'vue3-toastify/dist/index.css';

const user = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
});

// const submit = async () => {
//   try {
//     const { data: response } = await api.post('/update', {
//       firstName: user.value.firstName,
//       lastName: user.value.lastName,
//       email: user.value.email,
//       password: user.value.password,
//       confirmPassword: user.value.confirmPassword
//     });

//     if (response.status === 200) {
//       toast.success('Profile updated successfully', {
//         timeout: 2000,
//         position: 'top-center',
//         icon: true
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
</script>