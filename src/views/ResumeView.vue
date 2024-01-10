<template>
    <div class="resume">
        <h1> Resume</h1>
        <img height="100px" width="100px"
            src="https://www.bing.com/th/id/OGC.02db1749ae530fc23035fb25bbc2b004?pid=1.7&rurl=https%3a%2f%2f64.media.tumblr.com%2f05a242a1e65589cfa75215ce82944158%2ftumblr_o7vs1zNO341runoqyo1_540.gifv&ehk=tVXSAXjw6U78voRgvXweh%2bs%2bzswDW%2bpZwJag6KMNSyQ%3d"
            alt="">

        <div class="card my-3" v-for="edu in getEducationMethod()" :key="edu.id">
            <div class="card-header">
                {{ edu.year }}
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>{{ edu.description }}</p>
                    <footer class="blockquote-footer">{{ edu.place }} <cite title="Source Title">{{ edu.type }}rce
                            Title</cite></footer>
                </blockquote>
            </div>
        </div>
        <hr>

        <div class="row">
            <h1> Skills </h1>
            <p class="skills" v-for="ski in getSkillsMethod()" :key="ski">
                {{ ski.title }}
                {{ ski.experience }}
            </p>
        </div>

    </div>
</template>
<style></style>

<script>
export default {

    methods: {
        getEducationMethod() {
            console.log(this.$store.state.education);
            return this.$store.state.education
        },

        getSkillsMethod() {
            return this.$store.state.skills
        }
    },

    computed: {
        getEducation() {
            return this.$store.dispatch('getEducation')
        }
        ,
        getSkills() {
            return this.$store.dispatch('getSkills')
        }
    },

    mounted() {
        this.getEducation,
            this.getSkills
    },


}

</script>
<style scoped>
.resume {
    height: 83vh;
}

.skills {
    font-size: 1rem;
    color: black;
    font-weight: 600;
    padding-bottom: 3%;
}

.card {

    padding-top: 10px;
    font-weight: 600;
    background-color: lightblue;
    box-shadow: red 3rem;
    border: 4rem;
}

.card-body {
    font-style: italic;

}</style>