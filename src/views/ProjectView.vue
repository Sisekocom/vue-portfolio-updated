<template>
  <div class="container">
    <h1 class="animate__animated  animate__hinge">Projects</h1>
    <img
      height="100px"
      width="100px"
      src="https://www.bing.com/th/id/OGC.02db1749ae530fc23035fb25bbc2b004?pid=1.7&rurl=https%3a%2f%2f64.media.tumblr.com%2f05a242a1e65589cfa75215ce82944158%2ftumblr_o7vs1zNO341runoqyo1_540.gifv&ehk=tVXSAXjw6U78voRgvXweh%2bs%2bzswDW%2bpZwJag6KMNSyQ%3d"
      alt=""
    />
    <p></p>
    <div v-if="projects" class="projects-grid">
      <div
        class="card"
        v-for="project in projects"
        :key="project.id"
      >
        <div class="card-body">
          <h5 class="card-title animate__animated animate__rotateIn">{{ project.name }}</h5>
          <p class="card-text animate__animated ">{{ project.description }}</p>
          <div class="d-flex justify-content-center gap-3">
            <a :href="project.gitHub" class="btn btn-primary" target="_blank">
              <i class="fab fa-github"></i> GitHub
            </a>
            <a :href="project.netlify" class="btn btn-primary" target="_blank">
              <i class="fas fa-link"></i> Netlify
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <SpinnerComp />
    </div>
  </div>
</template>

<script>
import SpinnerComp from '../components/SpinnerComp.vue';

export default {
  components: {
    SpinnerComp
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  },
  mounted() {
    this.$store.dispatch('getProjects');
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
@import url('https://use.fontawesome.com/releases/v5.15.1/css/all.css');
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 2rem;
  background: #121212; 
  color: #fff; 
  font-family: 'Orbitron', sans-serif;
  box-shadow: 0 0 200px  rgb(0, 254, 34);
}
img{
  border-radius: 50%;
  box-shadow: 0 0 20px  rgb(0, 254, 34);
  width: 150px;
  height: 150px;
  border: 10px solid white;
  animation: rotateImage 5s linear infinite;
}

.header-area {
  text-align: center;
  margin-bottom: 2rem;
}

.header-area h1 {
  font-size: 2.5rem;
  color: #4dff4d;
  margin-bottom: 1rem;
}

.top-image {
  width: 150px; 
  height: 150px; 
  border-radius: 50%;
  animation: rotateImage 5s linear infinite;
  margin-bottom: 2rem; 
}

@keyframes rotateImage {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.projects-grid {
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  align-items: stretch;
}

.card {
  background: linear-gradient(to right, #403c44 0%, #0c0e10 100%);
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(232, 13, 13, 0.5);
  color: white;
  /* box-shadow: 0 0 20px  rgb(0, 254, 34); */
  /* width: 150px;
  height: 150px; */
  border: 2px solid white;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.8);
}

.card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.card-text {
  flex-grow: 1;
}

.btn {
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  display: inline-block;
  margin-top: 1rem;
  background-color: #007bff;
  color: white;
}

.btn:hover {
  background-color: #0056b3;
}

.fa-github, .fa-link {
  margin-right: 5px;
}

/* Adjusts for smaller screens */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
</style>