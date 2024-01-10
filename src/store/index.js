import { createStore } from "vuex";
let dataUrl = "https://sisekocom.github.io/repo-data/data/";
export default createStore({
  state: {
    jobTitle: null,
    about: null,
    education: null,
    skills: null,
    testimonial: null,
    projects: null,
  },
  getters: {},
  mutations: {
    setJobTitle(state, value) {
      state.jobTitle = value;
    },
    setAbout(state, value) {
      state.about = value;
    },
    setEducation(state, value) {
      state.education = value;
    },
    setTestimonial(state, value) {
      state.testimonial = value;
    },
    setProjects(state, value) {
      state.projects = value;
    },
    setSkills(state, value) {
      state.skills = value;
    },
    setresume(state, value) {
      state.resume = value;
    },
  },
  actions: {
    async getJobTItle(context) {
      let jobTitlee = await fetch(dataUrl);
      let response = await jobTitlee.json();
      // console.log(response.jobTitle);
      context.commit("setJobTitle", response.jobTitle);
    },
    async getAbout(context) {
      let aboutData = await fetch(dataUrl);
      // console.log(aboutData);
      let aboutResponse = await aboutData.json();
      console.log(aboutResponse.about);
      context.commit("setAbout", aboutResponse.about);
    },
    async getEducation(context) {
      let EducationData = await fetch(dataUrl);
      // console.log(aboutData);
      let EducationResponse = await EducationData.json();
      console.log(EducationResponse.education);
      context.commit("setEducation", EducationResponse.education);
    },
    async getSkills(context) {
      let SkillsData = await fetch(dataUrl);
      // console.log(aboutData);
      let SkillsResponse = await SkillsData.json();
      console.log(SkillsResponse.skills);
      context.commit("setSkills", SkillsResponse.skills);
    },
  },
  modules: {},
});
