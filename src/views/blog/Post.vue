<template>
    <div>

        <!-- Sessão Título Postagem -->
        <div class="img-post">
            <img :src="post.image" alt="">
        </div>
        <section class="content-image-post  col-12">
               <div class="content-img">
                <span class="span-category"> Categoria: {{ post.category }} </span> 
                <h1> {{ post.title }} </h1>
                <span> <i> Por: <strong> {{ post.author }} </strong> </i> </span> 
               </div>
        </section>
        <!-- Fim Sessão Título Postagem -->
        

        <!-- Sessão Postagem -->
        <section class="post row mx-0 mb-5">
            <section class="content-post col-md-8">
                <img :src="post.image" alt="">
                <h2 class="mt-4 mb-2"> {{ post.subtitle }}</h2>
                
                <div v-if="post.file !== null && post.file !=='false'" class="mb-0">
                    <audio controls="controls">
                        <source :src='post.file' type="audio/mp3" />
                    </audio>
                </div>
                
                <i v-if="post.file !== null && post.file !=='false'">Se quiser ouvir em formato de Podcast clica aqui! 👆🏻</i>

                <p class="ql-editor px-0 mt-4" v-html="post.content"> 
                   
                </p>
                
            </section>

            
            <section class="col-md-4 pl-5">
                <!-- <h4> <b> Buscar: </b> </h4>
                <div class="input-group mt-3">
                    <div class="form-outline">
                        <input type="search" placeholder="Procurar" id="form1" class="form-control" />
                    </div>
                    <button type="button" class="btn btn-primary ml-2">
                        <i class="fas fa-search"></i>
                    </button>
                </div> -->

                <h4 class="mt-0 mb-4"> <b> Mais recentes: </b> </h4>
                
                <div class="recents row mx-0">
                    <div class="recent-1 pr-3 col-md-6 col-sm-6 px-0">
                        <router-link
                            :to="{ name: 'post', params: {slug: lastPosts[lastPosts.length -1].slug}}">  
                        <p style="font-weight:700"> {{ lastPosts[lastPosts.length -1].title.substring(0, 25) + '...' }} </p>
                        {{ lastPosts[lastPosts.length -1].subtitle }}   </router-link>
                    </div>
                    <div class="recent-1 pr-3 col-md-6 col-sm-6 px-0">
                        <router-link
                            :to="{ name: 'post', params: {slug: lastPosts[lastPosts.length -2].slug}}">  
                        <p style="font-weight:700"> {{ lastPosts[lastPosts.length -2].title.substring(0, 25) + '...' }} </p>
                        {{ lastPosts[lastPosts.length -2].subtitle }}   </router-link>
                    </div>
                    <div class="recent-1 pr-3 mt-5 col-md-6 col-sm-6 px-0">
                        <router-link
                            :to="{ name: 'post', params: {slug: lastPosts[lastPosts.length -3].slug}}">  
                        <p style="font-weight:700"> {{ lastPosts[lastPosts.length -3].title.substring(0, 25) + '...' }} </p>
                        {{ lastPosts[lastPosts.length -3].subtitle }}   </router-link>
                    </div>
                    <div class="recent-1 pr-3 mt-5 col-md-6 col-sm-6 px-0">
                        <router-link
                            :to="{ name: 'post', params: {slug: lastPosts[lastPosts.length -4].slug}}">  
                        <p style="font-weight:700"> {{ lastPosts[lastPosts.length -4].title.substring(0, 25) + '...' }} </p>
                        {{ lastPosts[lastPosts.length -4].subtitle }}   </router-link>
                    </div>
                        
                </div>

                 <h4 class="mt-5 mb-4"> <b> Categorias: </b> </h4>

                 <ol>
                     <li :key="categories" v-for="categories in options"> {{ categories.content }} </li>
                 </ol>             
            </section>
        </section>
        <section class="comments col-md-8">
            <Comments />
        </section>
        <!-- Fim Sessão Postagem -->
    </div>
</template>

<script>  
import axios from 'axios'
import Comments from './Comments'

export default {
  components: { Comments },
  data() {
    return {
      options: [],
      post: {},
      category: {},
      lastPosts: {}
    };
  },

  async mounted() {
    // Buscar Postagens
    await axios.get(`${process.env.VUE_APP_ADMIN}/blog/post/${this.$route.params.slug}`, {
            headers: {
                'Authorization': `Bearer ${process.env.VUE_APP_TOKEN}`
            }
            })
        .then((res) => {
            // console.log(res)
            this.post = res.data
                
        let newViews = {
            views: this.post.views + 1
        }

    axios.put(`${process.env.VUE_APP_ADMIN}/blog/` + this.post._id, newViews, {
            headers: {
                'Authorization': `Bearer ${process.env.VUE_APP_TOKEN}`
            }
            })
    .then(() => {
        // console.log(res)
    })

       window.scrollTo(0, 0)
  
    })
      
    await axios.get(`${process.env.VUE_APP_ADMIN}/category`, {
            headers: {
                'Authorization': `Bearer ${process.env.VUE_APP_TOKEN}`
            }
            })
    .then((res) => {
        this.options = res.data
        // console.log(res.data)
    })
    .catch(() => {
        // console.log(err)
    })

    await axios.get(`${process.env.VUE_APP_ADMIN}/blog`, {
            headers: {
                'Authorization': `Bearer ${process.env.VUE_APP_TOKEN}`
            }
            })
    .then((res) => {
    //   console.log(res);
      this.lastPosts = res.data.docs;
    });
  },

  methods: {
      
  },
};
</script>

<style scoped>
  h1 {font-size: 3.8vw; z-index: 100;}
  h2 {font-size: 2vw; z-index: 100; font-weight: 700;}
  span {font-size: 1.8vw; z-index: 100;}
  p {font-size: 1.2vw; z-index: 100;}
  b {font-size: 1.8vw; font-weight: 700; z-index: 100;}

a {
    color: black;
}

/* .content-img  {
    background-color: rgba(1, 153, 202, 0.7);
    border-radius: 50px;
    padding: 20px 50px;
} */

.content-img, .content-image-post {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
}

audio {
    width: 100%;
    align-self: center;
}
.img-post img {
    width: 100%;
    height: 750px;
    object-fit: cover;
    object-position: center center;
    position: absolute;
    filter: blur(5px);
}
.content-image-post {
    object-fit: cover;
    height: 750px;
    object-position: center center;
    width: 100%;
    color: white;
    background-repeat: no-repeat;
    background-size: 100%;
}

.content-image-post h1 {
    font-weight: 900;
}

.span-category {
    font-weight: 700;
}

.ql-editor {
    height: none;
}

#t-container > article > div > div > div > section.post.row.mx-0.mb-5 > section.content-post span {
    background-color: none !important;
}

.post {
    padding: 5% 5% 0 5%;
}
.content-post img{
    max-width: 100%; 
}
#t-container > article > div > div > div > section.post.row.mx-0.mb-5 > section.content-post.col-md-8 > p > p:nth-child(35) > span > img
{
    width: 150px;
}

.content-post h1{
    font-weight: 700;
}
.recents h1{
    font-size: 22px;
    font-weight: 800;
}
.recents {
    font-size: 18px;
}
ol {
    padding: 0;
}
ol li{
     display: inline-block;
    padding: 0 15px 0 0;
}

.comments {
    display: flex;
    justify-content: center;
    margin: 5% 0;
    padding: 0 5%;
}

@media (max-width: 576px) {

    h1 {font-size: 7vw;}
    h2 {font-size: 6vw;}
    span {font-size: 5.5vw;}
    p {font-size: 4.5vw;}
    b {font-size: 8vw; font-weight: 700}
    
    .img-post img  {
        height: 300px;
    }
    .content-image-post {
        width: 100%;
        height: 300px;
    }
    .content-image-post h1, span {
        top: 0px;
    }


}

@media (min-width: 577px) and (max-width: 767px) {
    h1 {font-size: 6.4vw;}
    h2 {font-size: 5vw;}
    span {font-size: 4vw;}
    p {font-size: 3vw;}
    b {font-size: 4vw; font-weight: 700}

    .img-post img  {
        height: 400px;
    }
    .content-image-post {
        width: 100%;
        height: 300px;
    }
    .content-image-post h1, span {
        top: 0px;
    }
    .post {
        padding: 20% 5% 0 5%;
    }

    #t-container > article > div > div > div > section.post.row.mx-0.mb-5 > section.content-post.col-md-8 > p {
        margin-bottom: 20%;
    }
    
    .recents {
        margin-top: 5%;
    }
}

@media (min-width: 768px) and (max-width: 992px) {

    h1 {font-size: 5vw;}
    h2 {font-size: 4vw;}
    h3 {font-size: 3.5vw;}
    p {font-size: 2.5vw;}
    b {font-size: 2.2vw; font-weight: 700}
    
    .img-post img  {
        height: 400px;
    }
    .content-image-post {
        width: 100%;
        height: 300px;
    }
    .content-image-post h1, span {
        top: 0px;
    }
    .post {
        padding: 20% 5% 0 5%;
    }
    
    #t-container > article > div > div > div > section.post.row.mx-0.mb-5 > section.col-md-4.pl-5 {
        padding: 0 !important;
    }
}

@media (min-width: 992px) and (max-width: 1600px) {
  h1 {font-size: 3.8vw; z-index: 100;}
  h2 {font-size: 2vw; z-index: 100; font-weight: 700;}
  span {font-size: 1.8vw; z-index: 100;}
  p {font-size: 1.2vw; z-index: 100;}
  b {font-size: 1.8vw; font-weight: 700; z-index: 100;}
}

</style>