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
                this.project = res.data.result
                }
            });
        }
    }
}
</script>
<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                    <img src="" />
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="content">
                        <h1>Titolo</h1>
                        <p><strong>Tipologia:</strong> Tipo</p>
                        <p><strong>Tecnologie:</strong> Tecnologie</p>
                    </div>
                </div>
                <div class="col-12">
                    
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>