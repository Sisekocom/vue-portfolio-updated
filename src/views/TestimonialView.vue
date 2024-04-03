<template>
    <section class="testimonials-section">
      <div class="container">
        <h2 class="section-title"><i class="fas fa-quote-left"></i> What People Say <i class="fas fa-quote-right"></i></h2>
        <div class="image-container">
        <img src="https://www.bing.com/th/id/OGC.02db1749ae530fc23035fb25bbc2b004?pid=1.7&rurl=https%3a%2f%2f64.media.tumblr.com%2f05a242a1e65589cfa75215ce82944158%2ftumblr_o7vs1zNO341runoqyo1_540.gifv&ehk=tVXSAXjw6U78voRgvXweh%2bs%2bzswDW%2bpZwJag6KMNSyQ%3d" alt="" class="about-image">
      </div>
        <p class="section-description">
          Here are some reviews from my peers and colleagues. I am thrilled to share their experiences with you!
        </p>
        <div class="testimonials-wrapper">
          <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
            <figure class="testimonial-figure">
              <img :src="testimonial.profile" alt="User testimonial" class="testimonial-image">
              <figcaption>
                <div class="testimonial-text">{{ testimonial.quotes }}</div>
                <div class="testimonial-author">{{ testimonial.name }}</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    computed: {
      testimonials() {
        return this.$store.state.testimonial || [];
      },
    },
    mounted() {
      this.$store.dispatch('getTestimonial');
    },
  };
  </script>
  
  <style scoped>
  .testimonials-section {
    padding: 60px 0;
    background-color: #f8f9fa; 
    color: #343a40; 
    background-color: #000000b7;
    box-shadow: 0 0 20px  rgb(4, 254, 0);
  }
  .about-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid white;
  animation: rotateImage 5s linear infinite;
  border-radius: 50%;
  box-shadow: 0 0 20px  rgb(0, 254, 34);
  width: 50px;
  height: 50px;
  border: 5px solid white;
  animation: rotateImage 5s linear infinite;
  
}
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    box-shadow: 0 0 20px  rgb(4, 254, 0);
  }
  
  .section-title {
    text-align: center;
    font-size: 2.5rem;
    color: #007bff; 
    margin-bottom: 1rem;
    font-family: 'Orbitron', sans-serif;
  }
  
  .section-description {
    text-align: center;
    margin-bottom: 2rem;
    color: #6c757d;
    font-size: 1.1rem;
    font-family: 'Orbitron', sans-serif;
  }
  
  .testimonials-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    justify-content: center;
  }
  
  .testimonial-card {
    background-color: #000000; /* Black background */
    border: none;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4); /* 3D effect */
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }
  
  .testimonial-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6); /* Increased shadow on hover */
  }
  
  .testimonial-figure {
    margin: 0;
    padding: 20px;
    text-align: center;
  }
  
  .testimonial-image {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    margin-bottom: 1rem;
    border: 4px solid #007bff; /* Accent border color */
  }
  
  .testimonial-text {
    font-size: 0.9rem;
    color: #ffffff; /* White text color */
    margin-bottom: 1rem;
    font-family: 'Orbitron', sans-serif;
  }
  
  .testimonial-author {
    font-weight: bold;
    color: #ffffff; /* White text color */
    font-family: 'Orbitron', sans-serif;
  }
  </style>
  