<template>
  <div id="container">

    <section class="section">
      <b-carousel
        id="carousel-1"
        indicators
        :interval="10000000"
      >
        <b-carousel-slide #img>
          <!-- Sessão Texto Inicial -->
          <section class="txt-bck">
            <h1>Seus canais de atendimento integrados em uma única plataforma!</h1>
            <router-link class="mt-3"
              :to="{ name: 'platform' }">  
              <b-button class="btn-platform btn-lg mb-5">Quero conhecer!</b-button>
            </router-link>
          </section>
          <!-- Sessão Vídeo de Background -->
          <section class="section">
            <video src="https://tallos-chat.s3.us-east-2.amazonaws.com/medias-site-v2/team-tallos.mp4" autoplay muted loop></video>
          </section>
        </b-carousel-slide>

        <b-carousel-slide #img>
          <section class="section row p-0">
            <div class="img-upload col-12 col-lg-7">
              <img src="../assets/img/capa2.jpg" alt="">
            </div>
            <div class="form-rd col-12 col-lg-4 p-0">
              <div class="form-rd">
                <div role="main" id="form-site-novo-a65d3fe027222fb11bcf"></div>
              </div>
            </div>
          </section>
        </b-carousel-slide>
        <section class="img-3">
          <b-carousel-slide #img>
            <section class="section d-flex justify-content-center">
              <a href="https://conteudo.tallos.com.br/webinar-whatsapp-para-vendas"> 
                <img src="../assets/img/capa3.png" alt=""> 
              </a>
            </section>
          </b-carousel-slide>
        </section>
      </b-carousel>
    </section>
    



    <!-- Sessão Gifs e texto -->
    <section class="animations"> <br><br>
      <section class="section-h1">
        <h2>Confira os benefícios que a Tallos pode proporcionar para o seu negócio:</h2>
      </section>
      
      <section v-scrollanimation class="row mx-0 animation-1">
        <div class="video-animation col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xs-12">
          <video loading="lazy" width="100%" height="auto" autoplay="" muted="" playsinline="" class="rds-screen active" data-feature="1">
            <source src="https://tallos-chat.s3.us-east-2.amazonaws.com/medias-site-v2/home-animations/omnichannel.webm" loading="lazy" type="video/webm">
          </video>
          <!-- <img src="../assets/img/gifs/teste.gif" alt=""> -->
        </div>
        <div class="content-video mt-2 col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xs-12">
          <button class="btn btn-primary">OMNICHANNEL</button>
          <h3> Esteja onde o seu cliente está! </h3>
          <p> Integre todos os seus canais de atendimento na Tallos e converse 
            com o cliente <strong> por onde ele escolher</strong>, otimizando tempo, centralizando 
            o lead e potencializando os resultados da sua equipe.
          </p>
          
        </div>
      </section>

      <section v-scrollanimation class="row mx-0 animation-2">
        <div class="content-video mt-3 col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xs-12">
          <button class="btn btn-primary">API OFICIAL</button>
          <h3>Seja oficial e homologado!</h3>
          <p> Seja oficial e homologado!
              Com as API’s oficiais você 
              tem a segurança de <strong> não ser 
              considerado SPAM, </strong> não ter números 
              bloqueados ou perdidos e várias 
              vantagens que só integrações oficiais possuem.
          </p>
        </div>
        <div v-scrollanimation class="video-animation-3 col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xs-12">
          <video loading="lazy" width="100%" height="auto" autoplay="" muted="" playsinline="" class="rds-screen active" data-feature="1">
            <source src="https://tallos-chat.s3.us-east-2.amazonaws.com/medias-site-v2/home-animations/api-oficial.webm" loading="lazy" type="video/webm">
          </video>
        </div>
      </section>

      <section v-scrollanimation class="row mx-0 animation-3">
        <div class="video-animation col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xs-12">
          <video loading="lazy" width="100%" height="auto" autoplay="" muted="" playsinline="" class="rds-screen active" data-feature="1">
            <source src="https://tallos-chat.s3.us-east-2.amazonaws.com/medias-site-v2/home-animations/chat.webm" loading="lazy" type="video/webm">
          </video>
        </div>
        <div class="content-video mt-3 col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xs-12">
          <button class="btn btn-primary">CHATBOT</button>
          <h3> Atenda seus clientes 7 dias por semana, 24 horas por dia! </h3>
          <p> Não perca mais vendas - mesmo quando você 
            não estiver online! Utilize o chatbot da Tallos 
            para agilizar o contato com seus clientes <strong> por meio 
            de conversas automáticas. </strong>
          </p>
        </div>
      </section>

      <section v-scrollanimation class="row mx-0 animation-4">
        <div class="content-video mt-3 col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xs-12">
          <button class="btn btn-primary">INTELIGÊNCIA ARTIFICIAL</button>
          <h3>Analise o seu cliente em tempo real!</h3>
          <p> Com o uso de inteligência artificial você consegue analisar 
              o cliente em tempo real, filtrando o que ele mais fala e o 
              <strong>grau de satisfação.</strong> Com isso é possível intervir em atendimentos 
              ruins e transformá-los em excelentes!
          </p>
        </div>
        <div class="video-animation-3 col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xs-12">
          <video loading="lazy" width="100%" height="auto" autoplay="" muted="" playsinline="" class="rds-screen active" data-feature="1">
            <source src="https://tallos-chat.s3.us-east-2.amazonaws.com/medias-site-v2/home-animations/analise.webm" loading="lazy" type="video/webm">
          </video>
        </div>
      </section>

      <section v-scrollanimation class="row mx-0 animation-5">
        <div class="video-animation col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xs-12">
          <video loading="lazy" width="100%" height="auto" autoplay="" muted="" playsinline="" class="rds-screen active" data-feature="1">
            <source src="https://tallos-chat.s3.us-east-2.amazonaws.com/medias-site-v2/home-animations/indicadores.webm" loading="lazy" type="video/webm">
          </video>
          <!-- <img src="https://tallos-chat.s3.us-east-2.amazonaws.com/medias-site-v2/home-animations/teste.gif" alt=""> -->
        </div>
        <div class="content-video mt-2 col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xs-12">
          <button class="btn btn-primary">INDICADORES</button>
          <h3> Utilize os seus dados para tomar decisões! </h3>
          <p> Saiba quantos clientes aguardam atendimento, o 
            <strong> tempo médio de espera,</strong> principais demandas, quantos 
            atendentes estão online, quantos clientes estão sendo 
            atendidos simultaneamente e outros indicadores da sua operação.
          </p>
          
        </div>
      </section>

      <section v-scrollanimation class="btn-now">
        <b-button v-b-modal.modal-5 class="btn btn-primary btn-plans btn-lg mb-5">
          <span> Quero experimentar agora!</span>
        </b-button>
        <b-modal id="modal-5" size="xl" title="Formulário">
          <FormRD />
        </b-modal>
        </section>
    </section>

    <!-- Sessão Carousel Nossas empresas  -->
    <b-carousel
      v-scrollanimation 
      id="carousel-2"
      :interval="4000"
      indicators
      class="card-carousel pt-5 pb-5"
    >
     <b-carousel-slide>
        <template #img>
          <div class="us-companies d-flex justify-content-center">
            <img width="170px" class="mr-5 " src="../assets/img/companies/dam.png" alt="">
            <img width="170px" class="mr-5 " src="../assets/img/companies/dag.png" alt="">
            <img width="170px" class="mr-5 " src="../assets/img/companies/wizard.png" alt="">
            <img width="170px" class="mr-5 " src="../assets/img/companies/norma.png" alt="">
          </div>
        </template>
     </b-carousel-slide>
     <b-carousel-slide>
        <template #img>
          <div class="us-companies d-flex justify-content-center">
            <img width="170px" class="mr-5 " src="../assets/img/companies/betania.jpg" alt="">
            <img width="170px" class="mr-5 " src="../assets/img/companies/bn.png" alt="">
            <img width="170px" class="mr-5 " src="../assets/img/companies/camed.png" alt="">
            <img width="170px" class="mr-5 " src="../assets/img/companies/gc.png" alt="">
          </div>
        </template>
     </b-carousel-slide>

    </b-carousel>
    
  </div>
</template>

<script>

import FormRD from '../views/plans/FormRd2'

export default {
  components: {
    FormRD
  },
  mounted () {
    let RDStationForms = window['RDStationForms']
    new RDStationForms('form-site-novo-a65d3fe027222fb11bcf', 'UA-91797132-2').createForm()
    window.scrollTo(0, 0)
  }
}

</script>

<style scoped>

  h1 {font-size: 3.8vw; z-index: 100;}
  h2 {font-size: 2vw; z-index: 100;}
  h3 {font-size: 1.6vw; z-index: 100;}
  p {font-size: 1vw; z-index: 100;}
  b {font-size: 1vw; font-weight: 700; z-index: 100;}

  .section {
    background-color: #022e6f;
    height: 45em;
  }

  .section-h1 {
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 2% 0;
  }

  .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 1s ease-out;
  }

  .enter {
    opacity: 1;
    transform: translateY(0px);
  }

  .section video {
    width: 100%;
    object-fit: cover;
    opacity: 0.5;
    object-position: center center;
    filter: blur(5px);
  }

  .section img {
    object-position: center center;
    object-fit: contain;
    width: 100%;
  }

  .form-rd {
    /* padding: 15%; */
  }

  .img-upload {
    height: 750px;
  }

  .img-upload img {
    object-fit: cover;
    padding: 0%;
    margin: 0 !important;
  }

  .img-3 img {
    width: 100%;
    height: 100%;
  }

  .txt-bck {
    position: absolute;
    margin-top: 15%;
    text-align: center;
    padding: 0 15% 0 15%;
    z-index: 1;
    color: white;
  }

  .txt-bck h1 {
    font-weight: 700;
    color: white;
    margin-top: 2%;
    margin: 0 auto;
  }

  .btn-platform {
    position: relative;
    background: none;
    z-index: 1;
    margin-top: 4%;
    font-size: 2vw;
    font-weight: 600;
    border-color: white;
    color: white;
    text-align: center;
  }

  .btn-platform:hover {
    font-weight: 700;
  }

  .animations {
    position: relative;
    background: #f8f8f8;
    z-index: 1;
    /* margin-top: -10%; */
  }
  .animations video {
    height: 80%;
  }

  .animations .btn-primary {
    background-color: #0199ca;
    border: none;
  }
  
  .animations .btn-primary:hover {
    background-color: #0185ca;
  }

  .animations section {
    padding: 1% 10%;  
  }

  /* .section-h1::after {
    content: '';
    background: linear-gradient(to bottom, #33ccff 0%, #19316f 100%);
    left: -120px;
    border-radius: 50%;
    width: 450px;
    height: 450px;
    position: absolute;
  }
  
  .animation-2::before {
    content: '';
    background: linear-gradient(to bottom, #33ccff 0%, #19316f 100%);
    right: 0px;
    margin-top: -150px;
    border-radius: 50%;
    width: 400px;
    height: 400px;
    position: absolute;
    z-index: -1; 
  }

  .animation-3::before {
    content: '';
    background: linear-gradient(to bottom, #33ccff 0%, #19316f 100%);
    left: 0px;
    margin-top: -100px;
    border-radius: 50%;
    width: 400px;
    height: 400px;
    position: absolute;
    z-index: -1;
  } */

  .animations h2 {
    font-weight: 700;
    margin-top: 2%;
    margin: 0 auto;
  }

  .section video {
    width: 100%;
    height: 100%;
  }
  .animations img {
    margin-bottom: 5%;
  }

  .content-video {
    padding-top: 5%;
  }

  .content-video button, p, h2, b {
    margin-left: 0%;
  }

  .content-video button {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5%;
  }

  .content-video h3 {
    font-weight: 600;
  }

  .content-video p {
    margin-bottom: 3%;
  }


  .btn-now {
    display: flex;
    justify-content: center;
    margin-bottom: 0%;
    margin-top: 7%;
  }

  .btn-plans {
    font-size: 25px;
    color: white;
    font-weight: 800;
    border-radius: 5px;
  }
  
  .us-companies img { 
    filter: grayscale(100%); 
  }

  .us-companies img:hover {
    filter: none;
    cursor: pointer;
  }

  .us-companies img { 
    margin: 0 5% !important;
  }

@media (max-width: 576px) {

  #rd-column-km3h9unw > div {
    padding: 0 15% !important;
  }

  .img-3 ïmg{
    /* display: none; */
    padding: 0 !important;
    width: 100%;
    margin: 0 !important;
  }

  .section img {
    /* object-fit: cover; */
    content: url('../assets/img/capa4.png');
  }

  .img-upload {
    display: none !important;
  }
  
  h1 {font-size: 10vw;}
  h2 {font-size: 6vw;}
  h3 {font-size: 5.5vw;}
  p {font-size: 4.5vw;}
  b {font-size: 4vw; font-weight: 700}

  .section-h1::after, 
  .animation-2::before,
  .animation-3::before {
    display: none;
  }
  .btn-now {
    font-size: 2px;
  }

  .section {
    height: 50em;
  }

  .section video {
    width: 100%;
    height: 100%;
  }

  .txt-bck { 
    margin: 50% auto;
  }

  .animation-2,
  .animation-3,
  .animation-4,
  .animation-5 {
    margin: 10% 0;
  }

  .animation-3 .video-animation,
  .animation-5 .video-animation {
    order: 2;
  }

  .animations h2 {
    margin-bottom: 10%;
  }

  .animations video {
    margin-top: 5%;
  }

  .animations button {
    font-size: 16px;
  } 

  #container > section.animations > section.btn-now > a { 
    margin: 0;
  }

  .btn-plans {
    font-size: 18px;
  }
  .btn-platform {
    margin-top: 5%;
    font-size: 5vw;
  }
  .us-companies img { 
    width: 20vw;
    margin: 0 auto !important;
  }
}

@media (min-width: 577px) and (max-width: 767px) {
  .img-3 img{
    /* display: none; */
    padding: 0 !important;
    margin: 0 !important;
  }

  .img-upload {
    display: none !important;
  }

  h1 {font-size: 6.4vw;}
  h2 {font-size: 5vw;}
  h3 {font-size: 4vw;}
  p {font-size: 3vw;}
  b {font-size: 2.5vw; font-weight: 700}


  .section-h1::after, 
  .animation-2::before,
  .animation-3::before {
    display: none;
  }

  .section {
    height: 850px;
  }

  .section img {
    object-fit: cover !important;
  }

  .section video {
    width: 100%;
    height: 100%;
  }
  .txt-bck {
    padding: 5% 5% 0 5%;
  }
  .txt-bck h1 {
    margin-top: 10%;
  }
  .animations h2 {
    margin-bottom: 10%;
  }

  .animations video {
    margin-top: 5%;
    width: 100%;
    height: 90%;
  }

  .animation-3 .video-animation,
  .animation-5 .video-animation {
    order: 2;
  }

  .btn-platform {
    margin-top: 10%;
    font-size: 4vw;
  }

  .us-companies img { 
    width: 20vw;
    margin: 0 auto !important;
  }
}

@media (min-width: 768px) and (max-width: 991px) {

   .img-upload {
    display: none !important;
  }

  h1 {font-size: 5vw;}
  h2 {font-size: 4vw;}
  h3 {font-size: 3.5vw;}
  p {font-size: 2.5vw;}
  b {font-size: 2.2vw; font-weight: 700}


  .section-h1::after, 
  .animation-2::before,
  .animation-3::before {
    display: none;
  }

  .section img {
    /* object-position: none; */
    object-fit: cover !important;
    width: 100%;
  }

  .img-upload img {
    padding: 0;
  }

  .img-3 img {
    width: 100%;
  }

  .section {
    height: 850px;
  }

  .section video {
    width: 100%;
    height: 100%;
  }
  .txt-bck {
    padding: 0 5%;
  }

  .animation-3 .video-animation,
  .animation-5 .video-animation {
    order: 2;
  }

  .txt-bck h1 {
    margin-top: 5%;
  }
  .animations h2 {
    margin-bottom: 10%;
  }

  .animations video {
    margin-top: 5%;
    width: 100%;
    height: 90%;
  }
  
  .btn-primary {
      margin-left: 0;
  }

  .btn-platform {
    margin-top: 10%;
    font-size: 4vw;
  }

  .us-companies img { 
    width: 20vw;
    margin: 0 auto !important;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {

  .img-3 img {
    width: 100%;
    height: 100%;
    object-fit: cover !important;
  }

  .section {
    height: 45em;
  }

  h1 {font-size: 5vw;}
  h2 {font-size: 3vw;}
  h3 {font-size: 2.5vw;}
  p {font-size: 2vw;}
  b {font-size: 2vw; font-weight: 700}

  .section img {
    /* object-position: none; */
    object-fit: contain;
    width: 100%;
  }
  
  .img-upload img {
    padding-left: 2%;
    height: 100%;
  }

}

@media (min-width: 1200px) and (max-width: 1600px) {

  .form-rd {
    height: auto;
    padding-bottom: 15%;
  }

  .section {
    height: 45em;
  }

  .img-upload img {
    height: 100%;
    object-fit: cover !important;
  }

  .section img {
    /* object-position: none; */
    object-fit: contain;
    width: 100%;
  }
  
  .img-3 img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

 h1 {font-size: 3.8vw; z-index: 100;}
  h2 {font-size: 3vw; z-index: 100;}
  h3 {font-size: 2.2vw; z-index: 100;}
  p {font-size: 1.5vw; z-index: 100;}
  b {font-size: 1.5vw; font-weight: 700; z-index: 100;}
}

  </style>