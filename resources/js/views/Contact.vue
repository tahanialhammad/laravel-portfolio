<template>
  <div class="container">
    <h3>Contact ons</h3>
    <contact-info></contact-info>
  </div>
</template>

<script>
import ContactInfo from "../components/ContactInfo.vue";
export default {
    components:{ContactInfo},
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
