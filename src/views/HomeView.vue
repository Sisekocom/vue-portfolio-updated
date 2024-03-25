<template>
  <div class="home" >
    <div class="container-fluid">
      <div class="row">
        <h1></h1>
        
      </div>
      <section class="container" id="pic" >
        <div class="row mb-5 pb-5">
          <div class="col mt-5 pt-5 bio  animate__animated animate__backInLeft " >

            <h1>Hi , my name  <span style="color:rgb(109, 121, 52);font-weight:bold">Siseko Nonyongo </span></h1>
            <span id="aboutme"> Aspiring Full stack Developer</span>

          </div>

          <div class="col">

            <div class="row my-7 d-block d-sm-flex">
              <div class="col animate__animated animate__rotateInUpRight">
                <img src="https://i.ibb.co/MPDvDCk/178387048-1863360767156238-70019032027000302-n-removebg-preview.png" loading="lazy" class="img-fluid img-landing" alt="#" id="pic">
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }

  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');
@import url('https://use.fontawesome.com/releases/v5.15.1/css/all.css');

.home {
  min-height: 80vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #121212; /* Dark theme background */
  color: #ffffff; /* Light text for contrast */
  font-family: 'Orbitron', sans-serif;
  box-shadow: 0 0 20px  rgb(0, 254, 34);
}

.header-intro {
  text-align: center;
  margin-top: 2rem;
}

.header-intro h1 {
  font-size: 2.5rem;
  color: #00ffea; /* Techy cyan for the main title */
  animation: neon 1.5s ease-in-out infinite alternate;
}

.highlight {
  color: rgb(109, 121, 52);
  font-weight: bold;
}

#aboutme {
  font-size: 2rem;
  font-weight: 900;
  color: #4dff4d; /* Vibrant green for emphasis */
}

.img-landing {
  border-radius: 50%;
  width: 50%;
  box-shadow: 0 0 40px  rgb(109, 121, 52); /* Cyan glow for the image */
  transition: transform 0.5s ease;
}

.img-landing:hover {
  transform: scale(1.05);
}

.social-icons {
  margin-top: 20px;
}

.social-link {
  color: #ffffff;
  margin: 0 10px;
  font-size: 24px;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #00ffea;
}

@keyframes neon {
  from {
    text-shadow: 0 0 8px #00ffea;
  }
  to {
    text-shadow: 0 0 20px #00ffea, 0 0 30px #ff00ff;
  }
}

body {
  overflow-x: hidden;
  background-color: #42b983;
}

</style>
