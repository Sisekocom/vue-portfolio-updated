<template>
    <div>
        <div class="footer bg-dark text-light">
            <p class="lead"> Siseko Portfolio &copy;
                <span>
                    {{ currentYear }}
                </span>
            </p>
           
                    <div class="contact">
      <div class="container">
      
    
  
        <div class="contact-details row text-center mb-5">
          <div class="col-md-4">
            <i class="fas fa-envelope mb-3"></i>
            <p>nonyongos1@gmail.com</p>
          </div>
          <div class="col-md-4">
            <i class="fas fa-phone mb-3"></i>
            <p>+27 81 715 9510</p>
          </div>
          <div class="col-md-4">
            <i class="fas fa-map-marker-alt mb-3"></i>
            <p>Khayelitsha, Cape Town, South Africa</p>
          </div>
        </div>
  
        <form action="https://formspree.io/f/mwkdzevr" method="POST" id="form">
          <!-- Form content remains the same -->
        </form>
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
  
  .contact-details i {
    font-size: 24px;
    color: #007bff; /* Adjust the color to fit your design */
    animation: bounceIn 1.5s infinite;
  }
  
  .contact-details p {
    font-size: 18px;
    margin-top: 10px;
  }
  
  /* Add the rest of your original styling here, ensuring it's scoped to maintain page consistency */
  
  @keyframes bounceIn {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }

</style>