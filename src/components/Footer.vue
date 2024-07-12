<template>
  <div>
    <div class="footer bg-dark text-light">
      <p class="lead"> 
        <span>{{  }}</span>
      </p>
      <div class="skills">
        <div class="main">
          <div class="skill">
            <img src="https://i.postimg.cc/GmTjML1J/OIP-22-removebg-preview.png" />
            <h4>HTML</h4>
           
          </div>
          <div class="skill">
            <img  width="120px" height="
            140px"  src="https://i.postimg.cc/GpQTKV9x/css-3-logo-removebg-preview.png" />
            <h4>CSS</h4>
           
          </div>
          <div class="skill">
            <img  width="120px" height="
            140px"   src="https://i.postimg.cc/fbwfMx95/OIP-25-removebg-preview.png" />
            <h4>Vue.js</h4>
           
          </div>
          <div class="skill">
            <img  width="240px" height="
            145px" src="https://i.postimg.cc/L6Ws9RgW/R-6-removebg-preview.png" />
            <h4>Bootstrap </h4>
            
          </div>
          <div class="skill">
            <img width="120px" height="
            140px" src="https://i.postimg.cc/Hn4PSpDk/OIP-29-removebg-preview.png" />
            <h4>MySql</h4>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer bg-dark~ text-secondary p-1">
  <p class="lead"> Designed by Siseko Nonyongo &copy;
    <span>{{ currentYear }}</span>
  </p>

</div> 

</template>

<script>
export default {
  name: "FooterComp",
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
/* Global styles */
html {
  font-family: 'Open Sans', sans-serif;
  background-color: #3d3e42;
  color: #9099a0;
}

img {
  width: 128px;
  height: 1 28px;
}

.main {
  padding: 20px;
  display: flex;
  justify-content: space-around;
}

.skill {
  text-align: center;
}

.skill h4 {
  color: #eee;
  font-size: 1.2rem;
}

.skill p {
  font-size: 0.9rem;
  color: #ccc;
  margin: 0.5rem 0;
}

/* Media query for smaller screens */
@media screen and (max-width: 768px) {
  .main {
    flex-direction: column;
    align-items: center;
  }

  .skill {
    margin-bottom: 20px;
  }
}
</style>
