<script>
export default {
    name:'ProjectCard',
    props:{
        project: Object
    },
    methods:{
        truncateText(text){
            return text.substr(0, 50) + '...';
        }
    }
}
</script>
<template lang="">
    <div class="col-12">
        <div class="card">
          <img class="card-img-top" :src="project.image != null ? `http://127.0.0.1:8000/storage/${project.image}` : 'https://placehold.co/600x400?text=Immagine+copertina'">
          <div class="card-body">
            <h4 class="card-title">{{project.name}}</h4>
            <p><strong>Tipoogia</strong>{{ $project.type ? project.type.name: 'Tipologia non definita'}}</p>
            <ul class="list-unstyled d-flex" v-if="project.technologies.lenght > 0">
                <li v-for="tech in project.technologies" :key="tech.id">
                    {{ tech.name}}
                <li>
            </ul>            
            <p>{{truncateText(project.summary)}}</p>
            <router-link class="btn btn-sm btn-primary" :to="{ name: 'single-project', params: { slug: project.slug} }">Dettagli progetto</router-link>
          </div>
        </div>
      </div>
</template>
<style lang="scss">
    
</style>