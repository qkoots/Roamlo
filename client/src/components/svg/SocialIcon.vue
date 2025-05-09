<template>
  <a
    :href="`https://${name}.com`"
    :aria-label="ariaLabel"
    class="social-icon-link"
    target="_blank"
    rel="noopener noreferrer">
    <div v-html="svg" class="social-icon-container"></div>
  </a>
</template>

<script>
export default {
  name: 'SocialIcon',
  props: {
    name: {
      type: String,
      required: true,
      validator: value =>
        ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'].includes(value)
    },
    svg: {
      type: String,
      required: true
    },
    ariaLabel: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.social-icon-link {
  display: inline-block;
  transition: opacity 0.2s ease;
}

.social-icon-link:hover {
  opacity: 0.8;
}

.social-icon-link:focus {
  outline: 2px solid #666;
  outline-offset: 2px;
}
</style>
