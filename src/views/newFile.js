/* __placeholder__ */
export default (await import('vue')).defineComponent({
import: SpinnerComp, from, "../components/SpinnerComp": ,

components: {
SpinnerComp
},
methods: {
getProjectsMethod() {
return this.$store.state.projects;


},
},

computed: {
projects() {
// console.log(this.$store.state.projects);
return this.$store.dispatch('getProjects');
}
},
mounted() {
return this.projects;

},
});
