<template>
    <div class="container resume-page">
      <div class="resume-content">
        <h1 class="resume-title">Education</h1>
        <div class="profile-image">
          <img
            src="https://www.bing.com/th/id/OGC.02db1749ae530fc23035fb25bbc2b004?pid=1.7&rurl=https%3a%2f%2f64.media.tumblr.com%2f05a242a1e65589cfa75215ce82944158%2ftumblr_o7vs1zNO341runoqyo1_540.gifv&ehk=tVXSAXjw6U78voRgvXweh%2bs%2bzswDW%2bpZwJag6KMNSyQ%3d"
            alt=""
            height="100px"
            width="100px"
          />
        </div>
        <div class="education-section">
          <div class="card my-3 animate__animated animate__backInDown" v-for="edu in getEducationMethod()" :key="edu.id">
            <div class="card-header animate__animated ">{{ edu.year }}</div>
            <div class="card-body ">
              <blockquote class="blockquote mb-0">
                <p>{{ edu.description }}</p>
                <footer class="blockquote-footer  animate__animated animate__fadeInLeftBig">{{ edu.place }} <br> <cite title="Source Title">{{ edu.type }}</cite></footer>
              </blockquote>
            </div>
          </div>
        </div>
        <hr />
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      getEducationMethod() {
        console.log(this.$store.state.education);
        return this.$store.state.education;
      },
      getSkillsMethod() {
        return this.$store.state.skills;
      },
    },
    computed: {
      getEducation() {
        return this.$store.dispatch('getEducation');
      },
      getSkills() {
        return this.$store.dispatch('getSkills');
      },
    },
    mounted() {
      this.getEducation;
      this.getSkills;
    },
  };
  </script>
  
  <style scoped>
.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  color: #ffffff;
}
.blockquote{
  color: #cfcfcf;
}

.resume-content {
  background: #121212;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.resume-title {
  text-align: center;
  font-family: 'Orbitron', sans-serif; 
  color: #4dff4d; 
}

.profile-image img {
  border-radius: 50%;
  margin: 20px auto;
  display: block;
  box-shadow: 0 0 10px #4dff4d; 
  border-radius: 50%;
  box-shadow: 0 0 20px  rgb(0, 254, 34);
  width: 150px;
  height: 150px;
  border: 5px solid white;
  animation: rotateImage 5s linear infinite;
}

.card {
  background-color: #1a1a1a; 
  border: 1px solid #333; 
  border-radius: 5px;
   color: black;
  
}

.card-header {
  background-color: #6d7934; 
  color: rgb(255, 255, 255);
  font-weight: bold;
}
p{
  color: white;
}

.card-body {
  padding: 15px;
  font-style: normal;
  color: white; 
}

.skills-section h2 {
  font-size: 1.5rem;
  color: #4dff4d;
  padding-top: 20px;
}

.skills {
  background-color: #262626; 
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  font-size: 1rem;
  color: #cfcfcf; 
}
#description{
  color: aqua;
}
</style>
