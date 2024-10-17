<script>
import ProjectCard from './components/ProjectCard.vue';
import axios from 'axios';
export default {
  components:{
    ProjectCard,
  },
  data(){
    return{
      projects:[]
    }
  },
  methods:{
    getAllProjects(){
      axios.get('http://127.0.0.1:8000/api/projects').then((see) =>{
        this.projects = see.data.results;
      });
    }
  },
  created(){
    this.getAllProjects();
  }
}
</script>
<template lang="">
  <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center"> Elenco progetti</h1>
        </div>
        <div class="col-12">
          <div class="row gy-3">
            <ProjectCard v-for="proj in projects" :key="proj.id" :project="proj"/>
          </div>
        </div>
      </div>
  </div>
</template>
<style lang="scss">
  @import'./styles/generals.scss'
</style>