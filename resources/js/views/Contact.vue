<template>
  <div class="container">
    <h1>Contact ons</h1>
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
