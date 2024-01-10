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

body{
  height: 700px;
}

body{
  
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #42b983;
  background-image: url(https://www.colerainecastles.com/theme/green-fade.png);

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
      color: #42b983;
    }
  }
}
</style>
