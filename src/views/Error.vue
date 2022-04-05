<template>
    <div id="root">
        <div class="main_background">
            <main>
                <div class="container">
                    <div class="h-100">
                        <div xxs="12" md="10" class="mx-auto my-auto">
                            <div class="form-side d-flex flex-column align-items-center mb-4">
                                <div class="p-4">
                                    <object alt="Página não encontrada" width="240px" data="assets/img/tallos-error-404.svg"></object>
                                </div>

                                <div class="d-flex flex-column align-items-center text-center">
                                    <p class="text-primary p-4" style="font-size: 1.4rem; font-weight: bold;">
                                        A página que você está tentando acessar não existe!
                                    </p>
                                    <router-link to="/app/home">
                                        <img title="Logo Tallos" alt="Logo Tallos" width="110px" height="50px" src="assets/img/tallos-logo-2.png" />
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
<style scoped>
    .main_background {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
</style>