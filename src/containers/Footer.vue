<template>
  <footer class="container-fluid">
    <b-row class="ml-2 mr-2 p-5">
      <b-col xs="3" sm="6">
        <div class="d-flex flex-column">
          <div>
            <img id="footer-white-logo" src="../assets/img/tallos-white-logo.svg" draggable="false" alt="Tallos Tecnologias" />
          </div>
          <div class="mt-3">
            A Tallos ajuda empresas a encantar seus clientes com um atendimento mais humanizado 
            e próximo, tornando acessível o uso da inteligência artificial nos relacionamentos digitais. 
            Construa conexões que geram negócios!
          </div>
          <div id="footer-social-medias" class="d-flex">
            <a href="https://www.instagram.com/tallos.io/"> <i class="fab fa-instagram-square"></i> </a>
            <a href="https://www.facebook.com/tallos.io/"> <i class="fab fa-facebook"></i> </a>
            <a href="https://www.linkedin.com/company/tallos.io"> <i class="fab fa-linkedin"></i> </a>
            <a href="https://api.whatsapp.com/send?phone=558530300410"> <i class="fab fa-whatsapp-square"></i> </a>
           </div>
        </div>
      </b-col>
      <b-col xs="7" sm="6">
        <b-row>
          <b-col xs="12" sm="4">
            <h4 class="mb-2"> 
              <router-link class="mt-3"
                :to="{ name: 'home' }">  
                Tallos
              </router-link>
            </h4>
            <span class="t-description t-pointer">
              <router-link class="mt-3"
                :to="{ name: 'platform' }">  
                Plataforma
              </router-link>
            </span><br/>
            <span class="t-description t-pointer">
              <router-link class="mt-3"
                :to="{ name: 'index' }">  
                Planos
              </router-link>
            </span><br/>
            <span class="t-description t-pointer">
              <router-link class="mt-3"
                :to="{ name: 'about-us' }">  
                Sobre Nós
              </router-link>
            </span><br/>
            <span class="t-description t-pointer">
              <router-link class="mt-3"
                :to="{ name: 'blog' }">  
                Blog
              </router-link>
            </span><br/>
          </b-col>
          <b-col xs="12" sm="4">
            <router-link class="mt-3"
                :to="{ name: 'platform' }">
              <h4 class="mb-2">Recursos</h4>
            </router-link>
            <router-link class="mt-3"
                :to="{ name: 'platform' }">
              <span class="t-description">Análise de Emoções</span><br/>
            </router-link>
            <router-link class="mt-3"
                :to="{ name: 'platform' }">
              <span class="t-description">Chatbot</span><br/>
            </router-link>
            <router-link class="mt-3"
                :to="{ name: 'platform' }">
              <span class="t-description">Dashboard</span><br/>
            </router-link>
            <router-link class="mt-3"
                :to="{ name: 'platform' }">
              <span class="t-description">Inteligência Artificial</span><br/>
            </router-link>
            <router-link class="mt-3"
                :to="{ name: 'platform' }">
            <span class="t-description">Integrações</span><br/>
            </router-link>
            <router-link class="mt-3"
                :to="{ name: 'platform' }">
              <span class="t-description">Omnichannel</span><br/>
            </router-link>
          </b-col>
          <b-col xs="12" sm="4">
            <h4 class="mb-2">Informações</h4>
            <div class="d-flex flex-column">
              <span class="t-description mb-3 d-flex">
                <i class="fas fa-map-marker-alt mr-2"></i>
                <span>
                  AV I, Nº 57, 12° andar, Torre II - Business Place - jereissati, Maracanaú - CE, 61900-410
                </span>
              </span>
              <span class="t-description mb-3 d-flex align-items-start">
                <i class="fas fa-phone-alt mr-2"></i>
                <span>(85) 3030-0410</span>
              </span>
              <span class="t-description mb-3 d-flex align-items-center">
                <i class="far fa-envelope mr-2"></i>
                <span>contato@tallos.com.br</span>
              </span>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
    
    }
  }
}
</script>

<style lang="scss">
@import './../assets/css/tallos-variables.scss';

footer {
  background-color: $mainColor !important;
  color: #fff !important;
  z-index: 1;
  // border-radius: 25% 25% 0 0;
}
#t-container > footer > div > div:nth-child(2) > div > div:nth-child(1) > h4 > a {
  color: white;
  text-decoration: none;
}
.t-description a { 
  color: white;
  // text-decoration: none;
  }

.t-description a:hover {
  color: white;
}

#footer-white-logo {
  height: 30px;
  width: auto;
}
#footer-social-medias {
  $icons-size: 30px;
  i {
    line-height: $icons-size;
    font-size: $icons-size;
    width: $icons-size;
    height: $icons-size;
    margin-top: 20px;
    margin-right: 20px;
    border-radius: 50px !important;
  }
}
.t-description {
  font-size: 13px;
}
.t-pointer {
  cursor: pointer !important;
}

a {
  color: inherit;
}

a:hover {
  color:inherit;
}

@media (max-width: 578px) {
  footer {
    border-radius: 0% 0% 0 0;
  }
}
@media (min-width: 577px) and (max-width: 767px) {
  footer {
    border-radius: 0% 0% 0 0;
  }
}

</style>