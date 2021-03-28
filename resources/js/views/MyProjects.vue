<template>
  <div class="container">
    <h1>Alle Projects</h1>
    <div class="card" style="width: 18rem" v-for="project in projects">
      <div class="card-body">
        <h5 class="card-title">{{ project.user.name }} make this project:</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          posted on {{ project.created_at | ago | capitalize }}
        </h6>
        <p class="card-text">
          {{ project.body }}
        </p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      projects: [],
    };
  },
  created() {
    //ajax request to a server
    axios.get("/projects").then(({ data }) => (this.projects = data));
  },
  filters: {
    ago(date) {
      return moment(date).fromNow();
    },
    capitalize(value) {
      return value.toUpperCase();
    },
  },
};
</script>
