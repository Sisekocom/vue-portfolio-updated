<template>
    <div >
        <h1>This is project page</h1>
          <img height="100px" width="100px"
                src="https://www.bing.com/th/id/OGC.02db1749ae530fc23035fb25bbc2b004?pid=1.7&rurl=https%3a%2f%2f64.media.tumblr.com%2f05a242a1e65589cfa75215ce82944158%2ftumblr_o7vs1zNO341runoqyo1_540.gifv&ehk=tVXSAXjw6U78voRgvXweh%2bs%2bzswDW%2bpZwJag6KMNSyQ%3d"
                alt="">

           <p >

     </p>

    
        
    </div>
    <div class="row gap-4 mb-3">

        <div class="card khadi" v-for="project in getProjectsMethod()" :key="project" style="width: 18rem;">
             <img :src="project.image" class="card-img-top" alt="...">
             <div class="card-body">
               <h5 class="card-title">
                       {{ project.name }}
           </h5>
               <p class="card-text">{{ project.description }}</p>
               <div class=" d-flex justify-content-center gap-3">

                   <a :href="project.gitHub" class="btn btn-primary">gitHub</a>
                    <a :href="project.netlify" class="btn btn-primary">netlify</a>
               </div>
             </div>
           </div>
    </div>

</template>
<script>
export default {
    methods: {
        getProjectsMethod() {
            return this.$store.state.projects
        
        
        },
      
        },

        computed: {
            projects() {
                // console.log(this.$store.state.projects);
                return this.$store.dispatch('getProjects')
            }
        },
        mounted() {
            return this.projects
            
        },

    }


</script>
<style scoped>
.project {
    height: 77vh;

}

#exampleInputmessage {
    padding: 4%;
}

label {
    font-weight: bold;
    font-size: 17px;
}

h2 {
    text-shadow: 5rem maroon;
    font-size: large;
}
</style>


