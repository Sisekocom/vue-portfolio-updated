<template>
  <div class="about">
    <h1>About</h1>
    <img height="100px" width="100px"
      src="https://www.bing.com/th/id/OGC.02db1749ae530fc23035fb25bbc2b004?pid=1.7&rurl=https%3a%2f%2f64.media.tumblr.com%2f05a242a1e65589cfa75215ce82944158%2ftumblr_o7vs1zNO341runoqyo1_540.gifv&ehk=tVXSAXjw6U78voRgvXweh%2bs%2bzswDW%2bpZwJag6KMNSyQ%3d"
      alt="">

    <!-- <p v-for="job in getData()" :key="job">
      {{ job.title }}
    </p> -->

    <p v-for="abot in getAbout()" :key="abot">
      {{ abot }}
    </p>

    <!-- <p v-for="edu in getEducation()" :key="edu">
        {{ edu .id .year .description.place.type.certificate }}
      </p>
         <p v-for="ski in getSkills()" :key="ski">
          {{ skills.title }}
          {{ ski.ex }}
        </p> -->


  </div>
</template>


<script>

export default {

  methods: {
    getData() {
      return this.$store.state.jobTitle
    },
    getAbout() {
      // console.log(this.$store.state.about);
      return this.$store.state.about
    }
    ,
    // getEducation() {
    //   return this.$store.state.education
    // }
    //  ,
    // getSkills() {
    //   return this.$store.state.skills
    // }
  },

  computed: {
    getJobTitle() {
      return this.$store.dispatch('getJobTItle')
    },
    getAboutMe() {
      return this.$store.dispatch('getAbout')
    },

  },
  mounted() {
    this.getJobTitle, this.getAboutMe, this.getEducation, this.Skills
  }

}

</script>
<style scoped>
body {
  background-color: #42b983;
}

.about {

  height: 74vh;
  color: black;
  font-weight: 300;

  font-size: x-large;
  margin-top: 10%;
  ;
}</style>