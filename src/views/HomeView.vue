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
                <img src="https://lh3.google.com/u/0/d/11lOCGBhY2uT6EJee0dDV3I1m358P7w4K=w972-h907-iv1
" loading="lazy" class="img-fluid img-landing" alt="#" id="pic">
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
.home{
    background-size: cover;
  background-repeat: no-repeat;
    background-image: url("https://i.ibb.co/JzjB5rk/giphy-1.gif");
}
img[alt='logo'] {
    width: 5rem;
    aspect-ratio: 1/1;
}



.nav-item {
    font-size: large;
    font-weight: bold;
    margin-left: 12%;
    color: white;

}

#aboutme {
    font-size: x-large;
    font-weight: 900;
    color: #063d24;
    font-size: 3em;

}

.img-landing {
    border-radius: 90%;
    width: 65%;
} 

body{
    overflow-x: hidden;
    background-color: #42b983;
}
.nav-item{
    padding: 2%;
}




</style>