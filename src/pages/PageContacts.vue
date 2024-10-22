<script>
export default {
    
}
</script>
<template>
    <div class="my-5">
        <div class="container">
            <div class="row gy-5">
                <div class="col-12">
                    <h1 class="text-center">Contatti</h1>
                </div>
                <div class="col-12">
                    <form method="post" @submit.prevent="sendForm()">
                        <div class="row gy-3">
                            <div class="col-12 col-md-6">
                                <label class="control-label">Nome</label>
                                <input type="text" class="form-control" name="name" id="name" placeholder="name">
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="control-label">Cognome</label>
                                <input type="text" class="form-control" name="surname" id="surname" placeholder="surname">
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="control-label">Email</label>
                                <input type="text" class="form-control" name="email" id="email" placeholder="email">
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="control-label">Telefono</label>
                                <input type="text" class="form-control" name="phone" id="phone" placeholder="phone">
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="control-label">Contenuto</label>
                                <textarea type="text" class="form-control" name="content" id="content" placeholder="content"></textarea>
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-sm btn-success">Invia</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>