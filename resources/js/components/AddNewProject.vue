<template>
  <div>
    <h2>Add new Project</h2>
    <form @submit.prevent="onSubmit" @keydown="form.errors.clear()">
      <textarea
        class="form-control"
        placeholder="New Project"
        v-model="form.body"
      ></textarea>
      <!-- if error in form body then disply danger text -->
      <span
        class="alert alert-danger" role="alert"
        v-if="form.errors.has('body')"
        v-text="form.errors.get('body')"
      ></span>
      <button type="submit" class="btn btn-primary mb-2" :disabled="form.errors.any()">
        Add New Project
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({ body: "" }),
    };
  },
  methods: {
    onSubmit() {
      //submit an ajax request to the server
      //this.form.post('/projects').then(project => alert('All doen!!'));
      this.form
        .post("/projects")
        .then((project) => this.$emit("completed", project)); //emit an event
    },
  },
};
</script>
