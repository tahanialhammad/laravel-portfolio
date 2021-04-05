<template>
  <div class="container">
    <h1>Alle Projects</h1>
    <!-- <a href="#projectsform" @click.prevent="scrollTo('#projectsform')">Add new Project</a> -->
    <scroll-link href="#projectsform">Add new Project</scroll-link>
    <div class="card text-dark mb-2" v-for="project in projects">
      <div class="card-body">
        <h5 class="card-title">{{ project.user.name }} make this project:</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          posted on {{ project.created_at | ago | capitalize }}
        </h6>
        <p class="card-text" v-text="project.body"></p>
        <a href="#" class="card-link">Card link</a>
      </div>
    </div>
    <div id="projectsform">
    <!-- add new project form -->
    <!-- listen to the event completed and then do method addProject -->
    <add-new-project @completed="addProject"></add-new-project>
    </div>
    <!-- <a href="#app" @click.prevent="scrollTo('#app')">scroll to top</a> -->
    <scroll-link href="#app">Go To Top</scroll-link>
  </div>
</template>

<script>
import moment from "moment";
import Project from "../models/Project";
import AddNewProject from "../components/AddNewProject.vue";

export default {
  components: { AddNewProject },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    //ajax request to a server
    // axios.get('/projects')
    // .then(({data}) => this.projects = data);
    //or
    // Project.all()
    //     .then(({data}) => this.projects = data);
    //or
    Project.all((projects) => (this.projects = projects));
  },
  filters: {
    ago(date) {
      return moment(date).fromNow();
    },
    capitalize(value) {
      return value.toUpperCase();
    },
  },
  methods:{
    addProject(project){
        this.projects.unshift(project); //update array in data from top unshfit
        alert('Your project has been added to the projects ');
        window.scrollTo(0, 0); //scroll back to the top
    },
    // scrollTo(selector){
    //     document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
    // }
  },
};
</script>
