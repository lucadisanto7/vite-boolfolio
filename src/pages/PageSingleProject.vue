<script>

import axios from'axios';
import { store } from 'store.js';
export default {
    data(){
        return{
            store,
            project: null
        }
    },
    methods:{
        getProject(){
            axios.get(`${store.baseUrl}/projects/${this.$route.params.slug}`).then((res)=>{
                if(res.data.success){
                this.project = res.data.results
                }
            });
        }
    },
    created(){
        this.getProject()
    }
}
</script>
<template>
    <div>
        <div class="container">
            <div class="row my-5">
                <div class="col-12 col-md-6 col-lg-4">
                    <img class="img-fluid" :src="project.image !=null ? `http://127.0.0.1:8000/storage/${project.image}`: 'https://placehold.co/600x400?text=Immagine+copertina'" />
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="content">
                        <h1>{{project.name}}</h1>
                        <p><strong>Tipologia:</strong> {{project.type != null ? project.type.name : 'nessuna tipologia'}}</p>
                        <p v-if="project.technologies.lenght > 0">
                            <strong>Tecnologie:</strong> 
                            <span class="pe-2" v-for="tech in project.technologies">
                                {{ tech.name }}
                            </span>
                        </p>
                    </div>
                </div>
                <div class="col-12">
                    
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    .content{
        margin-top: 30px;
    }
</style>