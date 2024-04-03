<template>
    <div>
               
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
              <div class="container-fluid">
                <button
                
                
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <RouterLink to="/" class="nav-link "> HOME </RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink to="/about" class="nav-link "> ABOUT </RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink to="/project" class="nav-link "> PROJECTS </RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink to="/testimonial" class="nav-link "> TESTIMONIALS </RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink to="/resume" class="nav-link "> EDUCATION </RouterLink>
                    </li>

                    <li class="nav-item">
                      <RouterLink to="/contact" class="nav-link "> CONTACT </RouterLink>
                    </li>
        
                  </ul>
                </div>
              </div>
            </nav>
    </div>
</template>
<script>
    export default {
        name : 'NavbarComp'
    }
</script>

<style >

* nav { 
     padding: 30px; 
} 

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}

img[alt='logo'] {
    width: 5rem;
    aspect-ratio: 1/1;
}



.nav-item {
    font-size: large;
    font-weight: bold;
    margin-left: 9.8%;
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
    padding: 5%;
}
</style>