<script>
import AppHeader from './components/AppHeader.vue'
import ProjectCard from './components/ProjectCard.vue';
import axios from 'axios';
export default {
  components:{
    AppHeader,
    ProjectCard,
  },
  data(){
    return{
      projects:[],
      last_page: null,
      current_page: null,
    }
  },
  methods:{
    getAllProjects(){
      axios.get('http://127.0.0.1:8000/api/projects').then((see) =>{
        this.projects = see.data.results.data;
        this.last_page = see.data.results.last_page;
        this.current_page = see.data.results.current_page;
      });
    },
    goToPage(page){
      axios.get('http://127.0.0.1:8000/api/projects', {params: {page:page}}).then((see) =>{
        this.projects = see.data.results.data;
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
  <AppHeader />
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
              <li class="page-item"><a class="page-link" href="#" @click="goToPage(current_page - 1)">Previous</a></li>
              <li class="page-item" v-for="i in last_page"><a class="page-link" href="#" @click="goToPage(i)">{{i}}</a></li>
              <li class="page-item"><a class="page-link" href="#" @click="goToPage(current_page + 1)">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
  </div>
</template>
<style lang="scss">
  @import'./styles/generals.scss'
</style>