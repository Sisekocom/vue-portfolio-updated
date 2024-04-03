<template>
    <div>
        <div class="footer bg-dark text-light">
            <p class="lead"> My-Portfolio &copy;
                <span>
                    {{ currentYear }}
                </span>
            </p>
           
                    <div class="contact">
      <div class="container">
  
        <div class="contact">
        <div class="container">
          <div class="contact-details row text-center mb-3">
            <div class="col-md-3">
              <i class="fab fa-html5 mb-3"></i>
              <p>HTML</p>
            </div>
            <div class="col-md-3">
              <i class="fab fa-css3-alt mb-3"></i>
              <p>CSS</p>
            </div>
            <div class="col-md-3">
              <i class="fab fa-js-square mb-3"></i>
              <p>JavaScript</p>
            </div>
            <div class="col-md-3">
              <i class="fab fa-bootstrap mb-3"></i>
              <p>Bootstrap</p>
            </div>
          </div>
          <div class="contact-details row text-center mb-5">
            <div class="col-md-3">
              <i class="fab fa-vuejs mb-3"></i>
              <p>Vue.js</p>
            </div>
            <div class="col-md-3">
              <i class="fab fa-node-js mb-3"></i>
              <p>Node.js</p>
            </div>
            <div class="col-md-3">
              <i class="fas fa-database mb-3"></i>
              <p>MySQL</p>
            </div>
            <div class="col-md-3">
              <i class="fas fa-phone mb-3"></i>
              <p>+27 81 715 9510</p>
            </div>

      </div>
    </div>
        </div>
      </div>
    </div>
  </div>


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
@media screen and (max-width: 412px) {

    
}
.contact {
    padding: 5px 20px;
  }
  .fa-vuejs{
    background-color: forestgreen;
    border-radius: 20%;
  }
  .fa-bootstrap{
    background-color: rgba(71, 213, 97, 0.816);
    border-radius: 20%;
  }
  .fa-database{
    background-color: rgb(0, 149, 255);
    border-radius: 20%;
  }
  .fa-html5{
    background-color: orange;
    border-radius: 20%;
  }
  .fa-css3-alt{
    background-color: rgb(0, 149, 255);
    border-radius: 20%;
  }
  .fa-node-js{
    background-color: rgb(29, 233, 29);
    border-radius: 20%;
  }
  .fa-js-square{
    background-color: rgb(29, 233, 29);
    border-radius: 20%;
  }
 
  .contact-details i {
    font-size: 24px;
    color: #007bff; 
    /* animation: bounceIn 1.5s infinite; */
  }
  
  .contact-details p {
    font-size: 18px;
    margin-top: 10px;
  }
  
 
  @media screen and (max-width: 412px) {}
.contact {
  padding: 5px 20px;
}

.contact-details i {
  font-size: 40px;
  color: #16426f; 

}

.contact-details p {
  font-size: 18px;
  margin-top: 10px;
}


</style>


