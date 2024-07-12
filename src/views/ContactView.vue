<template>
    
    <div class="contact-section">
        <div class="profile-image ">
          <img 
               src="https://www.bing.com/th/id/OGC.02db1749ae530fc23035fb25bbc2b004?pid=1.7&rurl=https%3a%2f%2f64.media.tumblr.com%2f05a242a1e65589cfa75215ce82944158%2ftumblr_o7vs1zNO341runoqyo1_540.gifv&ehk=tVXSAXjw6U78voRgvXweh%2bs%2bzswDW%2bpZwJag6KMNSyQ%3d"
            alt=""
            height="100px"
            width="100px"
          />
        </div>
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-5 mb-5 mb-lg-0">
            <h2 class="section-title text-center">GET IN TOUCH</h2>
            <p class="text-center">Do you have any questions? Please do not hesitate to contact me directly. I will get back to you within a matter of hours to help you.</p>
            <div class="contact-info mt-4">
              <a href="https://www.linkedin.com/in/siseko-nonyongo-a52629236/?msgControlName=view_message_button&msgConversationId=2-NDdkODcyZWMtN2FlZi00YWNjLTk4MGItMzk1ZTY5NWU1NzU5XzAxMA%3D%3D&msgOverlay=true" target="_blank">
                <img width="50px" height="50px" src="https://cdn2.iconfinder.com/data/icons/linkedin-ui-flat/48/LinkedIn_UI-02-1024.png" loading="lazy">
              </a>
              
            </div>
          </div>
          
          <div class="col-lg-6 m-4">
            <form action="https://formspree.io/f/mwkdzevr" method="POST" class="contact-form">
              <div class="form-row">
                <div class="form-group col">
                  <label for="Inputfirstname">First Name</label>
                  <input type="text" name="first_name" class="form-control" id="Inputfirstname" required>
                </div>
                <div class="form-group col">
                  <label for="Inputlastname">Last Name</label>
                  <input type="text" name="surname" class="form-control" id="Inputlastname" required>
                </div>
              </div>
              <div class="form-group">
                <label for="InputEmail1">Email Address</label>
                <input type="email" name="email" class="form-control" id="InputEmail1" required>
              </div>
              <div class="form-group">
                <label for="exampleInputmessage">Message</label>
                <textarea name="message" class="form-control" id="exampleInputmessage" rows="4" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary m-3">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <div class="contact-details row text-center mb-5">
          <div class="col-md-3">
            <i class="fas fa-envelope mb-3"></i>
            <p>nonyongos1@gmail.com</p>
          </div>
        
          <div class="col-md-3">
            <i class="fas fa-map-marker-alt mb-3"></i>
            <p>Khayelitsha, Cape Town, South Africa</p>
          </div>

 


        </div>
    </div>
    
  </template>
  
  <script>
  export default {

  }
  </script>
  
  <style scoped>
  .btn1{
    margin-top: 25% ;
    
  }
  .contact-section {
    padding: 60px 0;
    background: #121212; 
    color: #ffffff;
    /* box-shadow: 0 0 20px  rgb(4, 254, 0); */
  }
  
  .section-title {
    margin-bottom: 30px;
    font-size: 36px;
    font-weight: 700;
    color: #00ffea; 
  }
  
  .contact-info p {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .contact-info i {
    margin-right: 10px;
    font-size: 24px;
    color: #6d7934; 
  }
  
  .contact-info i:hover {
    color: #4dff4d; 
  }
  
  .contact-form .form-control {
    border-radius: 0.25rem;
    background-color: #ffffff; 
    border: 1px solid #6d7934; 
  }
  
  .contact-form .form-control:focus {
    border-color: #4dff4d; 
    box-shadow: none;
  }
  
  .contact-form label {
    color: #ffffff; 
  }
  
  .contact-form .btn-primary {
    background-color: #6d7934; 
    border-color: #6d7934;
  }
  
  .contact-form .btn-primary:hover {
    background-color: #4dff4d; 
    border-color: #4dff4d;
  }
img{
    border-radius: 50%;
    border-radius: 50%;
  box-shadow: 0 0 20px  rgb(0, 254, 34);
  width: 150px;
  height: 150px;
  border: 5px solid #6d7934;
  animation: rotateImage 5s linear infinite;
    

}
  </style>
  