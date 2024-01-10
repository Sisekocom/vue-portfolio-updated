<template>
  <div class="about">
    <h1>About</h1>


    <p v-for="job in getData()" :key="job">
      {{ job.title }}
    </p>

    <p v-for="abot in getAbout()" :key="abot">
      {{ abot }}
    </p>

    
  </div>
</template>


<script>

export default {

  methods: {
    getData() {
        return this.$store.state.jobTitle
    },
    getAbout() {
      return this.$store.state.about
    }
  },

  computed: {
    getJobTitle() {
      return this.$store.dispatch('getJobTItle')
    },
    getAboutMe() {
      return this.$store.dispatch('getAbout')
    }
  },
  mounted() {
    this.getJobTitle, this.getAboutMe
  }

}

</script>
<style >
body{
  
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(https://www.colerainecastles.com/theme/green-fade.png);
  height: 800px;
}
</style>