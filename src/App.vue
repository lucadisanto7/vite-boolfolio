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
        this.projects = see.data.results.data;
        this.last_page = see.data.results.last_page;
        this.current_page = see.data.results.current_page;
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
        <div class="col-12">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item" v-for="i in last_page"><a class="page-link" href="#">{{i}}</a></li>
              <li class="page-item"><a class="page-link" href="#" @click="goToPage(i)">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
  </div>
</template>
<style lang="scss">
  @import'./styles/generals.scss'
</style>