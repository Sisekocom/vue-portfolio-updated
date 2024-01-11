<template>
    <div>
        <div class="row">
            
            <h1>Testimonials</h1>
        </div>
          
    </div>

      <div class="row gap-4 mb-3">

            <div class="card khadi" v-for="testimonial in getTestimonialMethod()" :key="testimonial" style="width: 18rem;">
                 <img :src="testimonial.profile" class="card-img-top" alt="...">
                 <div class="card-body">
                   <h5 class="card-title">
                           {{ testimonial.name }}
               </h5>
                   <p class="card-text ">{{ testimonial.quotes }}</p>
                   <div class=" d-flex justify-content-center gap-3">

                   </div>
                 </div>
               </div>
        </div>
</template>

<script>
export default {
    methods: {
        getTestimonialMethod() {
            return this.$store.state.testimonials


        },

    },
       computed: {
        testimonial() {
            // console.log(this.$store.state.projects);
            return this.$store.dispatch('gettestimonial')
        }
    },
       mounted() {
        return this.testimonial

    },

    
}
</script>

<style scoped>

.card{
 background-color: antiquewhite;

    
}
.card-text{
    font-size: 13px;
    margin: 2%;
    
}

</style>