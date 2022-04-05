<template>
  <div>
    <!-- Sessão última publicação -->
    <section class="post-emphasis">
      <router-link
        :to="{ name: 'post', params: {slug: postEmphasis.slug}}">  
          <div class="row card-post-emphasis">
            <div class="image-post d-flex justify-content-end col-md-4 col-sm-12 col-12">
              <img :src="postEmphasis.image"/>
            </div>
            <div class="content-post col-md-8 col-sm-12 col-12">      
                <h2 v-html="postEmphasis.title.substring(0, 18) + '...'"></h2>
                <h3 v-html="postEmphasis.subtitle.substring(0, 25 ) + '...'"></h3>
                <p v-html="postEmphasis.content.substring(0, 150) + '...'"></p>
            </div>
          </div>
      </router-link>
    </section>

    <!-- Sessão últimas publicações -->
    <section class="last-publications">
      <h2>Últimas publicações</h2>


      <section class="row last-posts">

        <div class="card-post col-md-4 col-3">
          <router-link
            :to="{ name: 'post', params: {slug: post[0].slug}}">  
            <div class="img-card">
              <img :src="post[0].image" alt="" />
            </div>
            <div class="tag-card mt-3">
              <span> {{ post[0].category }} </span>
            </div>
            <div class="title-card mt-3">
              <h4>{{ post[0].title }}</h4>
              <div class="author mt-4">
                <img src="../../assets/img/company.png" alt="" />
                <i class="ml-1">{{ post[0].author }}</i>
              </div>
            </div>
          </router-link>
        </div>

        <div class="card-post col-md-4 col-3">
          <router-link
            :to="{ name: 'post', params: {slug: post[1].slug}}">  
            <div class="img-card">
              <img :src="post[1].image" alt="" />
            </div>
            <div class="tag-card mt-3">
              <span> {{ post[1].category }} </span>
            </div>
            <div class="title-card mt-3">
              <h4>{{ post[1].title }}</h4>
              <div class="author mt-4">
                <img src="../../assets/img/company.png" alt="" />
                <i class="ml-1">{{ post[1].author }}</i>
              </div>
            </div>
          </router-link>
        </div>

        <div class="card-post col-md-4 col-3">
          <router-link
            :to="{ name: 'post', params: {slug: post[2].slug}}">  
            <div class="img-card">
              <img :src="post[2].image" alt="" />
            </div>
            <div class="tag-card mt-3">
              <span> {{ post[2].category }} </span>
            </div>
            <div class="title-card mt-3">
              <h4>{{ post[2].title }}</h4>
              <div class="author mt-4">
                <img src="../../assets/img/company.png" alt="" />
                <i class="ml-1">{{ post[2].author }}</i>
              </div>
            </div>
          </router-link>
        </div>
      </section>
      
      <section class="buttons-page d-flex justify-content-center py-5">
        <nav class="mt-3">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <button :class="perPage === 1 ? 'page-link disabled' : 'page-link'"
                        :disabled="perPage === 1 ? true : false"
                        :style="perPage === 1 ? { cursor: 'not-allowed' } : {}" @click="firstPage()">Primeira
                </button>
              </li>
              <li class="page-item">
                <button :class="perPage === 1 ? 'page-link disabled' : 'page-link'"
                        :disabled="perPage === 1 ? true : false"
                        :style="perPage === 1 ? { cursor: 'not-allowed' } : {}" @click="previousPage()">Anterior
                </button>
              </li>
              <li class="page-item">
                <button :class="calcTotalPages() ? 'page-link disabled' : 'page-link'" :disabled="calcTotalPages()"
                        :style="calcTotalPages() ? { cursor: 'not-allowed' } : {}" @click="nextPage()">Próxima
                </button>
              </li>
            </ul>
          </nav>
      </section>

    </section>

    <section class="last-publications mt-5 pb-4">
      <h2>Publicações mais lidas</h2>


      <section class="row last-posts">

        <div class="card-post col-md-4 col-3">
          <router-link
            :to="{ name: 'post', params: {slug: post[0].slug}}">  
            <div class="img-card">
              <img :src="post[0].image" alt="" />
            </div>
            <div class="tag-card mt-3">
              <span> {{ post[0].category }} </span>
            </div>
            <div class="title-card mt-3">
              <h4>{{ post[0].title }}</h4>
              <div class="author mt-4">
                <img src="../../assets/img/company.png" alt="" />
                <i class="ml-1">{{ post[0].author }}</i>
              </div>
            </div>
          </router-link>
        </div>

        <div class="card-post col-md-4 col-3">
          <router-link
            :to="{ name: 'post', params: {slug: post[1].slug}}">  
            <div class="img-card">
              <img :src="post[1].image" alt="" />
            </div>
            <div class="tag-card mt-3">
              <span> {{ post[1].category }} </span>
            </div>
            <div class="title-card mt-3">
              <h4>{{ post[1].title }}</h4>
              <div class="author mt-4">
                <img src="../../assets/img/company.png" alt="" />
                <i class="ml-1">{{ post[1].author }}</i>
              </div>
            </div>
          </router-link>
        </div>

        <div class="card-post col-md-4 col-3">
          <router-link
            :to="{ name: 'post', params: {slug: post[2].slug}}">  
            <div class="img-card">
              <img :src="post[2].image" alt="" />
            </div>
            <div class="tag-card mt-3">
              <span> {{ post[2].category }} </span>
            </div>
            <div class="title-card mt-3">
              <h4>{{ post[2].title }}</h4>
              <div class="author mt-4">
                <img src="../../assets/img/company.png" alt="" />
                <i class="ml-1">{{ post[2].author }}</i>
              </div>
            </div>
          </router-link>
        </div>
      </section>

    </section>

    <section class="row d-flex justify-content-around mx-0 mb-5 ebooks">
      <div class="card-ebook col-md-3 col-sm-3 col-lg-3 col-xl-3 col-xs-13 col-3">
        <div class="image-ebook">
          <img width="500px" src="../../assets/img/ebook.png" alt="" />
        </div>
        <div class="content-ebook">
          <span class="">Vendas</span>
          <p><b>Ebook: </b>Guia definitivo para vendas digitais</p>
        </div>
      </div>
      <div class="card-ebook col-md-3 col-sm-3 col-lg-3 col-xl-3 col-xs-13 col-3">
        <div class="image-ebook">
          <img width="500px" src="../../assets/img/ebook.png" alt="" />
        </div>
        <div class="content-ebook">
          <span class="">Vendas</span>
          <p><b>Ebook: </b>Guia definitivo para vendas digitais</p>
        </div>
      </div>
      <div class="card-ebook col-md-3 col-sm-3 col-lg-3 col-xl-3 col-xs-13 col-3">
        <div class="image-ebook">
          <img width="500px" src="../../assets/img/ebook.png" alt="" />
        </div>
        <div class="content-ebook">
          <span class="">Vendas</span>
          <p><b>Ebook: </b>Guia definitivo para vendas digitais</p>
        </div>
      </div>
    </section>
    <section>
      
    </section>


  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      postEmphasis: {},
      post: {},
      perPage: 3,
      currentPage: 1,
      moreViews: {}
    };
  },
  
  computed: {

    totalPages: function(){
    let page = (this.totalPosts + 1) === (this.perPage + 1) ? 1 : 0
    for (let i = 0; i < this.totalPosts; i++) {
      if (i % this.perPage === 0) {
        page++
        }
    }
      return page
    },

    startPage: function () {
        return this.currentPage === 5 ? 0 : (this.currentPage * this.perPage) - this.perPage
    },
  },

  watch: {
    'currentPage'() {
      this.getPosts()
    }
  },

  methods: {

       
    calcTotalPages() {
      return !(this.currentPage < this.perPage)
    },

    firstPage() {
      this.currentPage = 1
    },

    lastPage() {
      this.currentPage = this.perPage
      // console.log(this.currentPage)

    },

    nextPage() {
      this.currentPage++
      // console.log(this.currentPage)
    },
    previousPage() {
      
      if (this.currentPage > 1) {
        return this.currentPage--
      } else {
        return this.currentPage = 1
      }

      // console.log(this.currentPage)

    },

    async getPostEmphasis() {
      await axios.get(`${process.env.VUE_APP_ADMIN}/blog/post/emphasis?emphasis=Emphasis`, {
            headers: {
                'Authorization': `Bearer ${process.env.VUE_APP_TOKEN}`
            }
            })
        .then((res) => {
          this.postEmphasis = res.data
        })
        .catch(err => {
          console.error(err)
      })
    },

    async getPosts() {
      await axios.get(`${process.env.VUE_APP_ADMIN}/blog/posts?status=true&perPage=${this.perPage}&page=${this.currentPage}`, {
            headers: {
                'Authorization': `Bearer ${process.env.VUE_APP_TOKEN}`
            }
            })
      .then((res) => {
        this.post = res.data.docs;
        console.log(res);
      });
    },
  },
  
  async beforeMount() {
    await this.getPosts()
    await this.getPostEmphasis()    
  },

  mounted () {
    window.scrollTo(0, 0)
  }
};
</script>

<style scoped>

span {font-size: 18px !important;}
h2 {font-size: 2vw;}
p {font-size: 1.2vw !important;}
b {font-size: 1.2vw;}
h3{ font-size: 1.8vw;}
strong { font-size: 40px;}

a {
  text-decoration: none;
  color: #1d1d1d;
  cursor: pointer;
}

.post-emphasis {
  display: flex;
  justify-content: center;
  margin: 5%;
  padding: 0 15%;
  margin-left: 10%;
}

.post-emphasis h2 {
  font-weight: 700;
}

.post-emphasis h3 {
  font-weight: 400;
}

.post-emphasis p {
  font-weight: 200;
}

.card-post-emphasis {
  background-color: white;
  border-radius: 200px 0 0 200px;
}


.image-post {
  display:flex;
  justify-content: center;
  align-items: center;
}

.image-post img {
  border-radius: 50%;
  object-fit: cover;
  object-position: center center;
  height: 22vw;
  width: 22vw;
}

.content-post {
  margin: 5% 0;
  padding-right: 5%;
}

.last-publications {
  background-color: white;
}

.last-publications h2 {
  display: flex;
  justify-content: center;
  padding: 2% 0;
  font-weight: 700;
}

.last-publications .title-card img {
  width: 30px;
  border-radius: 50%;
  height: auto;
}

.last-posts {
  display: flex  !important;
  margin: 0 auto !important;
  justify-content: space-around !important;
}

.last-posts img {
  width: 25vw;
  height: 20vw;
  object-fit: cover;
  object-position: center center;
}

.card-post {
  display: flex;
  justify-content: center;
}

span {
  border-radius: 5px;
  background-color: #0199ca;
  cursor: pointer;
  text-transform: lowercase;
  color: white;
  font-weight: 600;
  padding-left: 2%;
  padding-right: 2%;
}

.title-card p {
  font-weight: 200;
}

.attendance {
  margin-top: 20%;
  width: 90%;
  display: flex;
  align-content: center;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: white;
  margin-left: 5%;
}

.attendance .img-card img {
  margin-top: -150px;
}

.content-card p,
h3 {
  text-align: left;
  padding: 0 10% 0 0%;
}

.ebooks {
  margin-top: 10%;
  margin-bottom: 5%;
}

.content-ebook {
  padding-left: 15%;
  padding-right: 15%;
}

.content-ebook {
  text-align: center;
}

.ebooks img {
  width: 25vw;
}


@media (max-width: 576px) {

  h1 {font-size: 10vw;}
  h2 {font-size: 6vw;}
  h3 {font-size: 5.5vw;}
  h4 {font-size: 4vw;}
  p {font-size: 4.5vw !important;}
  b {font-size: 4vw; font-weight: 700}

  .post-emphasis {
    padding: 0;
    margin: 0 auto;
    width: 90%;
  }
  .card-post-emphasis{
    display: flex;
    border-radius: 0;
    margin: 5% auto;
    width: auto;
  }
  .image-post {
    padding: 0;
  }
  .card-post-emphasis img {
    border-radius: 0%;
    width: 100%;
    height: 400px;
    margin-left: 0;
    object-fit: cover;
    object-position: center center;
    margin-bottom: 8%;
  }
  .card-post-emphasis h2 {
    font-weight: 700;
  }
  .card-post-emphasis h3 {
    font-weight: 600;
  }
  .buttons-page {
    font-size: 3vw;
  }
  .last-publications h2 {
    padding: 5% 0;
  }
  .last-posts span {
    font-size: 2.5vw !important;
  }

  .last-posts h4 {
    font-size: 3.5vw !important;
    min-height: 40px;
  }

  .last-posts i {
    font-size: 3vw !important;
  }

  .last-posts .author img {
    width: 5vw !important;
  }

  .author {
    margin: 0 !important;

  }
  .card-post {
    margin: 0;
    padding: 0;
  }

  .publics-views {
    height: 2000px;
    margin-top: 5%;
  }

  .attendance {
    margin-top: 70%;
  }

  .content-card {
    padding: 0 15px !important;
    margin: 0 !important;
  }

  .content-card h3 {
    margin-top: 10%;
  }

  .content-card p {
    margin-top: 5%;
  }
  
  .ebooks img {
    margin-top: 20%;
    width: 70px;
  }

  .ebooks span {
    margin-top: 5%;
    font-size: 4vw !important;
  }

  .content-ebook {
    padding-left: 15%;
    padding-right: 15%;
  }
  .content-ebook {
    text-align: center;
  }
}

/* CSS Telas até entre 577px & 768px */
@media (min-width: 577px) and (max-width: 767px) {

    h1 {font-size: 10vw;}
  h2 {font-size: 6vw;}
  h3 {font-size: 5.5vw;}
  h4 {font-size: 4vw;}
  p {font-size: 4.5vw !important;}
  b {font-size: 4vw; font-weight: 700}

  .post-emphasis {
    padding: 0;
    margin: 0 auto;
    width: 90%;
  }
  .card-post-emphasis{
    display: flex;
    border-radius: 0;
    margin: 5% auto;
    width: auto;
  }
  .image-post {
    padding: 0;
  }
  .card-post-emphasis img {
    border-radius: 0%;
    width: 100%;
    height: 400px;
    margin-left: 0;
    object-fit: cover;
    object-position: center center;
    margin-bottom: 8%;
  }
  .card-post-emphasis h2 {
    font-weight: 700;
  }
  .card-post-emphasis h3 {
    font-weight: 600;
  }
  .buttons-page {
    font-size: 3vw;
  }
  .last-publications h2 {
    padding: 5% 0;
  }
  .last-posts span {
    font-size: 2.5vw !important;
  }

  .last-posts h4 {
    font-size: 3.5vw !important;
    min-height: 40px;
  }

  .last-posts i {
    font-size: 3vw !important;
  }

  .last-posts .author img {
    width: 5vw !important;
  }

  .author {
    margin: 0 !important;

  }
  .card-post {
    margin: 0;
    padding: 0;
  }

  .publics-views {
    height: 2000px;
    margin-top: 5%;
  }

  .attendance {
    margin-top: 70%;
  }

  .content-card {
    padding: 0 15px !important;
    margin: 0 !important;
  }

  .content-card h3 {
    margin-top: 10%;
  }

  .content-card p {
    margin-top: 5%;
  }
  
  .ebooks img {
    margin-top: 20%;
    width: 70px;
  }

  .ebooks span {
    margin-top: 5%;
    font-size: 4vw !important;
  }

  .content-ebook {
    padding-left: 15%;
    padding-right: 15%;
  }
  .content-ebook {
    text-align: center;
  }
}

@media (min-width: 768px) and (max-width: 992px) { 
  .image-post img {
    height: 30vw;
    width: 30vw;
  }
}


</style>