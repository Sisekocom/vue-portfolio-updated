<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <h1 class="header-intro animate__animated animate__heartBeat">
          Hi, my name <span class="highlight">Siseko Nonyongo</span>
        </h1>
      </div>
      <section class="content">
        <div class="row">
          <div class="col-md-6 animate__animated animate__fadeInLeft">
            <div class="bio">
              <h2 class="animate__animated animate__fadeInUp">I'm a full stack web developer</h2>
              <p class="animate__animated animate__fadeInUp">Passionate about coding and building innovative projects.</p>
            </div>
          </div>
          <div class="col-md-6 animate__animated animate__fadeInRight">
            <div class="image-container">
              <img src="https://i.ibb.co/MPDvDCk/178387048-1863360767156238-70019032027000302-n-removebg-preview.png" loading="lazy" class="img-fluid img-landing" alt="Profile Picture">
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');
@import url('https://use.fontawesome.com/releases/v5.15.1/css/all.css');

.home {
  min-height: 100vh;
  background-color: #121212;
  color: #ffffff;
  font-family: 'Orbitron', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 20px  #6d7934(0, 254, 34);
}

.header-intro {
  text-align: center;
  font-size: 2.5rem;
  animation: neon 1.5s ease-in-out infinite alternate;
}

.highlight {
  color: #6d7934;
  font-weight: bold;
}

.content {
  margin-top: 50px;
}

.bio {
  padding: 20px;
}

.bio h2 {
  font-size: 3rem;
  font-weight: bold;
  color:  #6d7934;
  margin-top: 10%;
}

.bio p {
 
  font-size: 1.2rem;
  line-height: 1.6;
}

.img-landing {
  border-radius: 50%;
  width: 100%;
  box-shadow: 0 0 40px #6d7934;
  transition: transform 0.5s ease;
  height: 350px;
  width: 350px;
margin-top: -2%;
border-radius: 50%;
  box-shadow: 0 0 20px  rgb(98, 190, 6);
  width: 350px;
  height: 350px;
  border: 7px solid #6d7934;
  animation: rotateImage 5s linear infinite;
}


.img-landing:hover {
  transform: scale(1.05);
}

@keyframes neon {
  from {
    text-shadow: 0 0 8px #00ffea;
  }
  to {
    text-shadow: 0 0 20px #00ffea, 0 0 30px #ff00ff;
  }
}

@keyframes heartBeat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(0.95);
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate__heartBeat {
  animation: heartBeat 20s ease infinite;
}

.animate__fadeInLeft {
  animation: fadeInLeft 1s ease;
}

.animate__fadeInRight {
  animation: fadeInRight 1s ease;
}

.animate__fadeInUp {
  animation: fadeInUp 1s ease;
}
</style>
