<template>
    <div>

        <!-- Sessão Título Postagem -->
        <section class="img-post d-flex flex-column align-items-center justify-content-center col-12">
                <h2 class="h1-category"> Categoria: {{ post.category }} Vendas</h2> 
        </section>
        <!-- Fim Sessão Título Postagem -->
        
        <section class="d-flex shadow-sm mx-0 last-publications justify-content-center">
            <h1>Últimas publicações</h1>
            <section class="row mx-0 last-posts d-flex justify-content-center ">
                <div class="card-post mb-3 ml-3 col-md-6 col-sm-6 col-lg-4 col-xl-3 col-xs-12">
                    <a href="https://google.com">
                        <div class="img-card">
                            <img src="../../assets/img/bck2.jpg" alt="">
                        </div>
                        <div class="title-card">
                            <h3>title</h3>
                            <p> Description</p>
                        </div>
                        <div class="author mt-3">
                            <img class="shadow" width="50px" src="../../assets/img/company.png" alt=""> Wesley
                        </div>
                    </a>
                </div>
                <div class="card-post mb-3 ml-3 col-md-6 col-sm-6 col-lg-4 col-xl-3 col-xs-12">
                    <a href="https://google.com">
                        <div class="img-card">
                            <img src="../../assets/img/bck3.jpg" alt="">
                        </div>
                        <div class="title-card">
                            <h3>tit</h3>
                            <p> Description</p>
                        </div>
                        <div class="author mt-3">
                            <img class="shadow" width="50px" src="../../assets/img/company.png" alt=""> Wesley
                        </div>
                    </a>
                </div>
                <div class="card-post mb-3 ml-3 col-md-6 col-sm-6 col-lg-4 col-xl-3 col-xs-12">
                    <a href="https://google.com">
                        <div class="img-card">
                            <img src="../../assets/img/bck4.jpg" alt="">
                        </div>
                        <div class="title-card">
                            <h3> tit</h3>
                            <p> Description</p>
                        </div>
                        <div class="author mt-3">
                            <img class="shadow" width="50px" src="../../assets/img/company.png" alt=""> Wesley
                        </div>
                    </a>
                </div>
            </section>
            
        </section>

        

    </div>
</template>

<script>  
import axios from 'axios'

export default {
  data() {
    return {
      options: [],
      post: {
        title: '',
        subtitle: '', 
        category: '',
        image: '',
        content: '',
        status: ''
      },
      category: {
          content: ''
      }
    };
  },
  mounted() {
      axios.get(`${process.env.VUE_APP_ADMIN}/category`)
        .then((res) => {
            console.log(res.data)
            this.options = res.data
        })
        .catch((err) => {
            console.log(err)
        })
       // Buscar Postagens
        axios.get(`${process.env.VUE_APP_ADMIN}/${this.$route.params.id}`)
            .then((res) => {
                console.log(res)
                this.post = res.data
            })
  },
  methods: {
    
  },
};
</script>

<style scoped>
a {
    color: black;
}

p {
    font-size: 15px;
    font-weight: 200;
}
.img-post {
    background: linear-gradient(to bottom, #33ccff 0%, #19316f 100%);
    object-fit: cover;
    height: 65vh;
    object-position: center center;
    width: 100%;
    color: white;
}

.last-publications 
{
    margin-top: 5%;
    margin-bottom: 5%;
    background: white;
    
}
.last-publications h1
{
    position: absolute;
    margin-top: 2%;
    font-weight: 700;
}

.last-posts .card-post
{
    margin-top:120px;
    height: 500px;
    justify-content: center;
}
.last-posts .card-post img
{
    width: 70%;
    object-fit: cover;
    object-position: center center;
}
.last-publications h3
{
    margin-top:5%;  
    padding-right: 20%;
    font-size: 20px;
}
.last-posts .card-post .author img
{
    width: 10%;
    border-radius: 100%;
    object-fit: cover;
    object-position: center center;
}

@media (max-width: 576px) 
{
 
}

/* CSS Telas até entre 769px & 992px */
@media (min-width: 768px) and (max-width: 992px) 
{

}

/* CSS Telas até entre 992px & 1400px*/
@media (min-width: 992px) and (max-width: 1600px) 
{
  
}

</style>