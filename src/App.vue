<template>
  <div>
    <!-- <div> -->
      <Navbar />
    <!-- </div> -->

    <main class="container">

      <router-view />
    </main>
    
    <Footer /> 

    

  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Footer,
    Navbar
  }
}
  
</script>

<style>

#pic{
    /* background-size: cover;
  background-repeat: no-repeat;
    background-image: url("https://i.ibb.co/JzjB5rk/giphy-1.gif"); */
    padding-top: 11%;}

body{


  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(https://i.gifer.com/1iN6.gif);

}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;


    
    &.router-link-exact-active {
      color: #6d7934
    }
    
  }


}
</style>
