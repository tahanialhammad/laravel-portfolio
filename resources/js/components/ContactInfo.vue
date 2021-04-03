<template>
  <div>
      <h3>Mijn info</h3>
      <h4>{{name}}</h4>
      <h5><a :href="'mailto:'+ email">{{email}}</a></h5>

      </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Tahani Alhammad",
      email : "tahani_alhammad@yahoo.com"
    };
  },
};
</script>
