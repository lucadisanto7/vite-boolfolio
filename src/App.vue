<script>
import axios from 'axios';
export default {
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
          <div class="row">
            <div class="col-12" v-for="proj in projects" :key="proj.id">
              <div class="card">
                <img class="card-img-top" :src="proj.image != null ? `http://127.0.0.1:8000/storage/${proj.image}` : 'https://placehold.co/600x400?text=Immagine+copertina'">
                <div class="card-body">
                  <h4 class="card-title">{{proj.name}}</h4>
                  <p>{{proj.summary}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<style lang="scss">
  @import'./styles/generals.scss'
</style>