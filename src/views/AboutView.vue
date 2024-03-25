<template>
  <div class="about-container">
    <div class="about">
      <h1><i class="fas fa-info-circle"></i> About</h1>
      <div class="image-container">
        <img src="https://www.bing.com/th/id/OGC.02db1749ae530fc23035fb25bbc2b004?pid=1.7&rurl=https%3a%2f%2f64.media.tumblr.com%2f05a242a1e65589cfa75215ce82944158%2ftumblr_o7vs1zNO341runoqyo1_540.gifv&ehk=tVXSAXjw6U78voRgvXweh%2bs%2bzswDW%2bpZwJag6KMNSyQ%3d" alt="" class="about-image">
      </div>

      <div class="info-section">
        <h2></h2>
        <p v-for="job in getData()" :key="job" class="info">
          {{ job.title }}
        </p>

        <h2>About Me</h2>
        <p v-for="abot in getAbout()" :key="abot" class="info">
          {{ abot }}
        </p>

        <h2></h2>
        <p v-for="edu in getEducation()" :key="edu" class="info">
            {{ edu.id }} - {{ edu.year }}: {{ edu.description }} at {{ edu.place }} - {{ edu.type }} - {{ edu.certificate }}
        </p>

        <h2></h2>
        <p v-for="ski in getSkills()" :key="ski" class="info">
            <i class="fas fa-check-circle"></i> {{ ski.title }} - Experience: {{ ski.ex }} years
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getData() {
      return this.$store.state.jobTitle;
    },
    getAbout() {
      return this.$store.state.about;
    },
    getEducation() {
      return this.$store.state.education;
    },
    getSkills() {
      return this.$store.state.skills;
    }
  },
  computed: {
    getJobTitle() {
      return this.$store.dispatch('getJobTItle');
    },
    getAboutMe() {
      return this.$store.dispatch('getAbout');
    },
  },
  mounted() {
    this.getJobTitle;
    this.getAboutMe;
    // Calls for education and skills are missing; they should be invoked if needed.
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
@import url('https://use.fontawesome.com/releases/v5.15.1/css/all.css');

.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background: #121212; /* Dark background for contrast */
  box-shadow: 0 0 20px  rgb(0, 254, 34);
}

.about {
  width: 90%;
  max-width: 800px;
  background: linear-gradient(to right, #403c44 0%, #0c0e10 100%);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
}

.about:hover {
  transform: scale(1.03);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.6);
}

.about h1 {
  font-size: 2rem;
  color: #fff;
  text-align: center;
  padding: 1.5rem 0;
  background-color: rgba(0,0,0,0.2); /* Subtle overlay */
  font-family: 'Poppins', sans-serif;
}

.image-container {
  text-align: center;
  padding: 1rem;
  box-shadow: 0 0 20px  rgb(0, 254, 34);
}

.about-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid white;
  animation: rotateImage 5s linear infinite;
  
}

@keyframes rotateImage {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.info-section {
  color: #fff;
  font-family: 'Poppins', sans-serif;
  padding: 2rem;
  text-align: justify;
}

.info-section h2 {
  color: #4dff4d; /* Light green for visibility */
  margin-bottom: 1rem;
}

.info {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about {
    margin: 20px;
  }
}
</style>

