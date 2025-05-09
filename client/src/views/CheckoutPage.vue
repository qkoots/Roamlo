<template>
  <div class="container mx-auto px-4 py-8 lg:py-12">
    <div class="max-w-6xl mx-auto animate__animated animate__easein">
      <div class="flex flex-col lg:flex-row gap-8 justify-center items-start">
        <div class="w-full lg:w-1/2">
          <PaymentDetailsForm />
        </div>
        <div class="w-full lg:w-1/2">
          <PaymentSummaryForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaymentSummaryForm from "../components/checkout/PaymentSummaryForm.vue"
import PaymentDetailsForm from "../components/checkout/PaymentDetailsForm.vue"

export default {
  name: "Home",
  components: {
    PaymentSummaryForm,
    PaymentDetailsForm
  }
}
</script>