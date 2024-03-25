<template>
    <div class="resume-container">
      <div class="resume">
        <h1 class="resume-title"><i class="fas fa-file-alt"></i> Resume</h1>
        <div class="profile-image">
          <img
            src="https://www.bing.com/th/id/OGC.02db1749ae530fc23035fb25bbc2b004?pid=1.7&rurl=https%3a%2f%2f64.media.tumblr.com%2f05a242a1e65589cfa75215ce82944158%2ftumblr_o7vs1zNO341runoqyo1_540.gifv&ehk=tVXSAXjw6U78voRgvXweh%2bs%2bzswDW%2bpZwJag6KMNSyQ%3d"
            alt="Profile Image"
            class="profile-img"
          />
        </div>
        <div class="education-section">
          <h2 class="section-title"><i class="fas fa-graduation-cap"></i> Education</h2>
          <transition-group name="fade" tag="div">
            <div class="card my-3" v-for="edu in education" :key="edu.id">
              <div class="card-header">{{ edu.year }}</div>
              <div class="card-body">
                <p>{{ edu.description }}</p>
                <footer>{{ edu.place }} - {{ edu.type }}</footer>
              </div>
            </div>
          </transition-group>
        </div>
        <hr class="divider" />
        <div class="skills-section">
          <h2 class="section-title"><i class="fas fa-tools"></i> Skills</h2>
          <transition-group name="fade" tag="div">
            <div class="skills" v-for="skill in skills" :key="skill.id">
              <i class="fas fa-check-circle"></i> {{ skill.title }} - Experience: {{ skill.experience }} years
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        education: [],
        skills: [],
      };
    },
    mounted() {
      // Fetch education and skills data
      this.education = this.$store.state.education;
      this.skills = this.$store.state.skills;
    },
  };
  </script>
  
  <style scoped>
  .resume-container {
    background-color: #121212;
    color: #fff;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .resume {
    background-color: #0c0e10;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    width: 100%;
  }
  
  .resume-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .profile-img {
    border-radius: 50%;
    display: block;
    margin: 0 auto;
    width: 150px;
    height: 150px;
  }
  
  .education-section,
  .skills-section {
    margin-top: 30px;
  }
  
  .section-title {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  
  .card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .card-header {
    background-color: #007bff;
    color: #fff;
    font-weight: bold;
    padding: 10px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  
  .card-body {
    padding: 15px;
  }
  
  .footer {
    color: #6c757d;
    font-size: 0.9rem;
    margin-top: 10px;
  }
  
  .skills {
    margin-bottom: 10px;
    padding-left: 30px;
    position: relative;
    font-size: 1rem;
  }
  
  .skills i {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    color: #28a745;
    margin-right: 10px;
  }
  
  .divider {
    margin: 40px 0;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  