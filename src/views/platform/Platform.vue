<template>
  <div id="container">

    <section class="section-platform">
      <b-carousel
        id="carousel-1"
        indicators
        :interval="30000"
      >
       
        <b-carousel-slide>
          <template #img>
            <div class="tallos-platform row">
                <div class="image-tallos col-md-5 d-flex justify-content-center">
                  <video loading="lazy" autoplay="" loop="" muted="" playsinline="" class="rds-screen active video-desktop" data-feature="1">
                    <source src="https://tallos-chat.s3.us-east-2.amazonaws.com/medias-site-v2/desktop/video4.webm" type="video/webm">
                  </video>
                  <video loading="lazy" autoplay="" loop="" muted="" playsinline="" class="rds-screen active video-mobile" data-feature="1">
                    <source src="https://tallos-chat.s3.us-east-2.amazonaws.com/medias-site-v2/movies/video4.webm" type="video/webm">
                  </video>
                </div>
                <div class="content-tallos col-md-7">
                  <h3 class="d-flex justify-content-start mb-3">
                    <em> Analise resultados em tempo real </em>
                  </h3>
                  <p> Veja quantos clientes esperam por atendimento, 
                    quais suas principais demandas, quantos atendentes 
                    estão online e quantos clientes estão sendo atendidos 
                    simultaneamente por cada operador, acompanhando os 
                    principais indicadores da sua operação. 
                  </p>
                </div>
              </div>
          </template>
        </b-carousel-slide>
        
        <b-carousel-slide>
          <template #img>
            <div class="tallos-platform row">
                <div class="image-tallos col-md-5 d-flex justify-content-center">
                   <video loading="lazy" width="100%" height="auto" autoplay="" loop="" muted="" playsinline="" class="rds-screen active video-desktop" data-feature="1">
                    <source src="https://tallos-chat.s3.us-east-2.amazonaws.com/medias-site-v2/desktop/video2.webm" loading="lazy" type="video/webm">
                  </video>
                  <video loading="lazy" width="100%" height="auto" autoplay="" loop="" muted="" playsinline="" class="rds-screen active video-mobile" data-feature="1">
                    <source src="https://tallos-chat.s3.us-east-2.amazonaws.com/medias-site-v2/movies/video2.webm" loading="lazy" type="video/webm">
                  </video>
                </div>
                <div class="content-tallos col-md-7">
                  <h3 class="d-flex justify-content-start mb-3">
                    <em> Análise de emoções </em>
                  </h3>
                  <p> 
                    A nossa IA é capaz de catalogar as interações do cliente, 
                    com o objetivo de identificar a percepção sobre o atendimento; 
                    negativo, neutro e positivo. Tudo isso de forma automática!
                  </p>
                </div>
              </div>
          </template>
        </b-carousel-slide>  
        
        <b-carousel-slide>
          <template #img>
            <div class="tallos-platform row">
                <div class="image-tallos col-md-5 d-flex justify-content-center">
                   <video loading="lazy" autoplay="" loop="" muted="" playsinline="" class="rds-screen active video-desktop" data-feature="1">
                    <source src="https://tallos-chat.s3.us-east-2.amazonaws.com/medias-site-v2/desktop/video.webm" type="video/webm">
                  </video>
                  <video loading="lazy" autoplay="" loop="" muted="" playsinline="" class="rds-screen active video-mobile" data-feature="1">
                    <source src="https://tallos-chat.s3.us-east-2.amazonaws.com/medias-site-v2/movies/video.webm" type="video/webm">
                  </video>
                </div>
                <div class="content-tallos col-md-7">
                  <h3 class="d-flex justify-content-start mb-3">
                    <em> Atendimento integrado </em>
                  </h3>
                  <p> 
                    Com o atendimento integrado você concentra a 
                    conversa com o cliente em um único lugar, 
                    independente do canal que ele usou para entrar 
                    em contato com a sua empresa.
                  </p>
                </div>
              </div>
          </template>
        </b-carousel-slide>  
        
        <b-carousel-slide>
          <template #img>
            <div class="tallos-platform row">
                <div class="image-tallos col-md-5 d-flex justify-content-center">
                   <video loading="lazy" autoplay="" loop="" muted="" playsinline="" class="rds-screen active video-desktop" data-feature="1">
                    <source src="https://tallos-chat.s3.us-east-2.amazonaws.com/medias-site-v2/desktop/video3.webm" type="video/webm">
                  </video>
                  <video loading="lazy" autoplay="" loop="" muted="" playsinline="" class="rds-screen active video-mobile" data-feature="1">
                    <source src="https://tallos-chat.s3.us-east-2.amazonaws.com/medias-site-v2/movies/video3.webm" type="video/webm">
                  </video>
                </div>
                <div class="content-tallos col-md-7">
                  <h3 class="d-flex justify-content-start mb-3">
                    <em> Automação de atendimento </em>
                  </h3>
                  <p> 
                    Com a Tallos você pode criar fluxos de atendimento e 
                    automatizar a coleta de informações do cliente, 
                    conforme as necessidades do seu negócio.
                  </p>
                </div>
              </div>
          </template>
        </b-carousel-slide>  
        
      </b-carousel>
    </section>

    
    <!-- Sessão botão quero experimentar agora -->
    <section class="btn-now">
      <router-link class="mt-3"
        :to="{ path: 'plans' }">  
        <b-button class="btn btn-plans btn-lg">Quero experimentar agora!</b-button>
      </router-link>
      <!-- <b-button class="btn btn-plans btn-lg" :href="plans_url">Quero experimentar agora!</b-button> -->
    </section>

    <section class="bck-image d-flex justify-content-center">


      <section class="title-widget row d-flex justify-content-center position-absolute">
        <h2 class="d-flex justify-content-center">Teste o nosso chatbot</h2>
      </section>

      <section class="widget">
          <Widget />  
      </section>



      <!-- <div class="col-12 col-xl-6 chat-widget">
        <div class="content-chat">
          <div class="bck-widget">
            <div class="header-chat">
              <h3>Chat</h3>
            </div>
            <div class="body-chat">
              <p>
                O chatbot traz para sua empresa mais objetividade e redução de custos. 
                Automatize seu atendimento, assim sua equipe estará focada a gerar mais resultados. 
                Tecnologia, inteligente, em prol do seu crescimento. 
              </p>
              <p>
               Experimente ao lado como o Chatbot funcionará na sua operação!
              </p>
            </div>
          </div>
        </div>
      </div> -->
      
    </section>

    <!-- Sessão texto nossas integrações -->
    <section class="txt-integrations">
      <center><h3>Nossas Integrações</h3></center>
    </section>

    <!-- Sessão ícones nossas integrações -->
    <b-carousel
      id="carousel-2"
      :interval="4000"
      fade
      indicators
      class="us-integrations pt-5 pb-5"
    >
      <b-carousel-slide>
          <template #img>
            <div class="us-integrations d-flex justify-content-center">
              <img v-b-tooltip.hover.html.bottom title="Telegram" width="90px" src="../../assets/img/integrations/telegram.png" loading="lazy" alt="">
              <img v-b-tooltip.hover.html.bottom title="WhatsApp" width="90px" src="../../assets/img/integrations/ico-whatsapp.png" loading="lazy" alt="">
              <img v-b-tooltip.hover.html.bottom title="Menssenger" width="90px" src="../../assets/img/integrations/MENSSENGER.png" loading="lazy" alt="">
              <img v-b-tooltip.hover.html.bottom title="Sales Force" width="90px" src="../../assets/img/integrations/RD.png" loading="lazy" alt="">
            </div>
          </template>
      </b-carousel-slide>

      <b-carousel-slide>
          <template #img>
            <div class="us-integrations d-flex justify-content-center">
              <img v-b-tooltip.hover.html.bottom title="Agendor" width="90px" src="../../assets/img/integrations/AGENDOR.png" loading="lazy" alt="">
              <img v-b-tooltip.hover.html.bottom title="Nectar" width="90px" src="../../assets/img/integrations/nectar.png" loading="lazy" alt="">
              <img v-b-tooltip.hover.html.bottom title="Pipe Drive" width="90px" src="../../assets/img/integrations/PIPER-DRIVE.png" loading="lazy" alt="">   
              <img class="insta" v-b-tooltip.hover.html.bottom title="Em breve" width="90px" src="../../assets/img/integrations/insta.png" loading="lazy" alt="">
            </div>
          </template>
      </b-carousel-slide>
    </b-carousel>

  </div>
</template>
<script>  

import Widget from '../blog/Widget'

export default {
  components: {
    Widget
  },
  data() {
    return {
      selected: 0,
      messages: {
        start: 'Olá, tudo bem?!',
        secondMessage: 'Qual de nossos setores você gostaria de conhecer?',
        support: 'Olá, tudo bem? Somos da equipe de Suporte. Somos responsáveis por ......',
        comercial: 'Olá, tudo bem? Somos da equipe de Comercial. Somos responsáveis por ......'
      },
    };
  },
  methods: {
    developerTeam() {
      document.querySelector('.messages-test').innerHTML = `<p class="m-3"> ${this.messages.developers} </p>`
    },
    supportTeam() {
      document.querySelector('.messages-test').innerHTML = `<p class="m-3"> ${this.messages.support}`
    },
    backButton() {
      let a = document.querySelector('.messages-test')
      document.querySelector('.messages-test').innerHTML = a
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
};
</script>

<style scoped>


.insta {
  background: #373737;
  opacity: 0.3;
}

  .video-mobile {
    display: none;
  }

  .bck-image {
    background: url('../../assets/img/back-img-reverse2.jpg');
    object-position: center center;
    height: 110vh;
    margin-bottom: 5%;
    width: 100%;
    background-attachment: fixed;
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    display: flex;
  }

  #container > section.bck-image.d-flex.justify-content-center > section.title-widget.row.d-flex.justify-content-center.position-absolute > h2 {
    font-weight: 900 !important;
  }
  .title-widget {
    margin-top: 3%;
    color: #fff;
  }
  .widget {
    display: flex;
    margin-top: 8em;
    justify-content: center;
  }

  .chat-widget {
    margin-top: 12%;
    padding-right: 20%;
  }
  .bck-widget{
    background: rgba(255, 255, 255, 0.33);
    padding: 5%;
    box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  .chat-widget h3 {
    color: white;
    font-weight: 900;
  }

  .chat-widget p {
    font-size: 24px;
    color: white;
  }

  h1 {font-size: 2.5vw; }
  h2 {font-size: 2vw; }
  h3 {font-size: 1.6vw; }
  p {font-size: 1.2vw; }
  b {font-size: 1vw; font-weight: 700; }

  .tallos-platform video {
    width: 40em;
  }

  .section-platform {
    height: 750px;
    background: linear-gradient(#022e6f ,#029bcd);
    /* margin: 0 5vw; */
  }

  #carousel-1 {
    height: 100%;
    margin-top: -7px;
    display: flex;
    align-items: center !important;
  }

  #carousel-1 h3{
    color: white;
    font-weight: 700;
    display: flex;
    margin-top: 5%;
    text-align: left;
  }
  .content-tallos p {
    color: white;
    padding: 0 20% 0 0;
  }

  .carousel-videos {
    width: 100%;
  }

  .carousel-videos video {
    width: 100%;
    height: 100%;
    padding: 0 10% 0 10%;
  }

  /* CSS Sessão frase "Conheça as funcionalidades"  */
  .functions-tallos {
    display: flex;
    justify-content: center;
    margin: 4% 0;
  }

  .functions-tallos h2 {
    font-weight: 600;
  }

  .videoApresetation video {
    margin-top: 0% ;
  }

  span {
    /* font-size: 50px; */
    font-weight: 700;
  }

  video {
    width: 80%;
  }

  #container > section.functions-tallos > h2 {
    margin: 0;
  }

  #container > section.row.mx-0.card-user > div:nth-child(1) > video {
    height: 100%;
  }
  
  .video-content {
    display: flex;
    justify-content: center;
  }

  .content-cards {
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: start;
  }
  .content-cards p {
    padding-right: 15%;
  }

  .btn-now {
    display: flex;
    justify-content: center;
    padding-top: 2%;
    padding-bottom: 2%;
    margin-top: 5vw;
    margin-bottom: 5vw;
    /* background: #0199ca; */
  }

  .btn-plans {
    font-size: 25px;
    color: white;
    font-weight: 800;
    border-radius: 5px;
  }

  .btn-plans:hover {
    font-weight: 400;  
  }


  .txt-integrations h3 {
    font-weight: 900;
    font-size: 2.2vw;
  }
  .us-integrations {
    margin: 2% 5%;
  }
  .us-integrations img {
    border-radius: 50%;
    margin: 5%;
    box-shadow: 0px 0px 10px .5px rgba(0, 0, 0, 0.2);
  }

  /* .us-integrations img:hover {
    cursor: pointer;
  } */


@media (max-width: 576px) {

  .video-mobile {
    display: flex;
  }
  .video-desktop {
    display: none;
  }

  .section-platform {
    margin: 0;
  }

  .tallos-platform video {
    margin-top: 15%;
    width: 50vw;
  }

  h1 {font-size: 10vw;}
  h2 {font-size: 6vw;}
  h3 {font-size: 5.5vw;}
  p {font-size: 4.5vw;}
  b {font-size: 4vw; font-weight: 700}

  .bck-image {
    background-attachment:scroll;
    height: 150vh;
  }

  .image-tallos video{
    margin-bottom: 10%;
  }

  .section-platform {
    height: auto;
  }

  .section-platform h3 {
    justify-content: start !important;
    margin: 10% 5% 0 5%;
  }

  .btn-now {
    margin: 0;
  }

  .image-tallos {
    justify-content: center !important;
  }

  .content-tallos {
    height: 150vw;
  }

  .content-tallos p {
    padding: 0;
    margin: 0 5% 5% 5%;
  }

  .functions-tallos {
    /* padding: 5% 1% 1% 0%; */
    text-align: left;
    margin-bottom: 0;
  }

  .functions-tallos h2{
    padding: 15px 20px;
  }

  .bck-image img {
    height: 80vh;
  }

  .carousel-videos {
    height: 350px;
  }
  .carousel-videos {
    height: 100%;
  }
  .carousel-videos video {
    padding: 0% 5%;
    height: 350px;
  }
  .carousel-videos video {
    height: 100%;
    margin-top: 5%;
  }
  .btn-plans {
    font-size: 4.5vw;
    margin-bottom: 10%;
    margin-top: 7%;
  }
  
  .chat-widget {
    margin: 0 auto !important;
    justify-content: center;
    display: flex;
    padding: 0 5%;
  }
  .chat-widget p {
    font-size: 4.5vw;
  }

  .card-user video{
    padding: 0% ;
    width: 100%;
    margin: 0;
  }
  .content-cards {
    margin: 10% 0;
  }
  .content-cards p {
    padding: 0;
  }
  .us-integrations {
    margin: 2% 0;
    padding: 0;
  }
  .us-integrations img {
    width: 50px;
    height: 50px;
  }
  .us-integrations p {
    font-size: 2.5vw;
  }
  #__BVID__26 > div > div:nth-child(2) > div,
  #__BVID__25 > div > div:nth-child(2) > div,
  #__BVID__24 > div > div:nth-child(2) > div {
    margin-top: 5%;
  }
  .box-chat {
    margin: auto;
  }

  .txt-integrations h3{
    font-size: 25px;
  }

  .center-align {
    justify-content: center;
  }

}

@media (min-width: 577px) and (max-width: 767px) {

  .video-mobile {
    display: flex;
  }
  .video-desktop {
    display: none;
  }

  .section-platform {
    margin: 0;
  }

  .tallos-platform video {
    margin-top: 15%;
    width: 20em;
  }

  .btn-now {
    margin: 0;
  }

  .section-platform h3 {
    justify-content: start !important;
    margin: 10% 5% 0 5%;
  }

  h1 {font-size: 6.4vw;}
  h2 {font-size: 5vw;}
  h3 {font-size: 4vw;}
  p {font-size: 3vw;}
  b {font-size: 2.5vw; font-weight: 700}

  .bck-image {
    background-attachment:scroll;
    height: 200vh;
  }

  .image-tallos video{
    margin-bottom: 10%;
  }

  .section-platform {
    height: auto;
  }

  .section-platform h3 {
    margin-top: 10%;
  }

  .image-tallos {
    justify-content: center !important;
  }
  

  .content-tallos p {
    padding: 0;
    margin: 0 5% 5% 5%;
  }

  .functions-tallos {
    /* padding: 5% 1% 1% 0%; */
    text-align: center;
    margin-bottom: 0;
  }

  .functions-tallos h2{
    padding: 15px 20px;
  }

  .carousel-videos {
    height: 350px;
  }
  .carousel-videos {
    height: 100%;
  }
  .carousel-videos video {
    padding: 0% 5%;
    height: 350px;
  }
  .carousel-videos video {
    height: 100%;
    margin-top: 5%;
  }
  .btn-plans {
    font-size: 3vw;
    margin-bottom: 10%;
    margin-top: 7%;
  }
  .card-user video{
    padding: 0% ;
    width: 100%;
    margin: 0;
  }
  .content-cards {
    margin: 10% 0;
  }

  .chat-widget {
    margin: 15% auto !important;
    justify-content: center;
    display: flex;
    padding: 0 5%;
  }

  .chat-widget p {
    font-size: 3vw;
  }

  .content-cards p {
    padding: 0;
  }
  #__BVID__24 > div > div:nth-child(1) > div,
  #__BVID__25 > div > div:nth-child(1) > div,
  #__BVID__26 > div > div:nth-child(1) > div,
  #__BVID__26 > div > div:nth-child(2) > div,
  #__BVID__25 > div > div:nth-child(2) > div,
  #__BVID__24 > div > div:nth-child(2) > div  {
    display: flex;
    justify-content: center;
  }
  .us-integrations {
    margin: 2% 0;
    padding: 0;
  }
  .us-integrations img {
    width: 50px;
    height: 50px;
  }
  .us-integrations p {
    font-size: 2.5vw;
  }
  #__BVID__26 > div > div:nth-child(2) > div,
  #__BVID__25 > div > div:nth-child(2) > div,
  #__BVID__24 > div > div:nth-child(2) > div {
    margin-top: 5%;
  }
  .box-chat {
    margin: auto;
  }

  .txt-integrations h3{
    font-size: 25px;
  }
}

@media (min-width: 768px) and (max-width: 992px) {

  .video-mobile {
    display: flex;
  }
  .video-desktop {
    display: none;
  }
  
  h1 {font-size: 5vw;}
  h2 {font-size: 4vw;}
  h3 {font-size: 3.5vw;}
  p {font-size: 2.5vw;}
  b {font-size: 2.2vw; font-weight: 700}

  .bck-image {
    height: 170vw;
  }
  .chat-widget {
    margin: 15% auto !important;
    justify-content: center;
    display: flex;
    padding: 0 5%;
  }
  .section-platform {
    height: auto;
  }

  .section-platform h3 {
    margin: 5% 0;
  }

  #__BVID__19 > div > div.content-tallos h3 {
    text-align: left;
  }

  .content-tallos p {
    padding: 0;
    /* margin: 0 5% 5% 5%; */
    font-size: 2vw;
  }
  
  .image-tallos {
    align-content: flex-start !important ;
  }

  .image-tallos video{
    margin: 15% 0 ;
    width: 15em;
  }

  .functions-tallos {
    /* padding: 5% 1% 1% 0%; */
    text-align: center;
    margin-bottom: 0;
  }

  .functions-tallos h2{
    padding: 15px 20px;
  }

  .carousel-videos {
    height: 350px;
  }
  .carousel-videos {
    height: 100%;
  }
  .carousel-videos video {
    padding: 0% 5%;
    height: 350px;
  }
  .carousel-videos video {
    height: 100%;
    margin-top: 5%;
  }
  .btn-plans {
    font-size: 3vw;
    margin-bottom: 10%;
    margin-top: 7%;
  }
  .card-user video{
    padding: 0% ;
    width: 100%;
    margin: 0;
  }
  .content-cards {
    margin: 10% 0;
  }
  .content-cards p {
    padding: 0;
  }
  .us-integrations {
    margin: 2% 0;
    /* padding: 0; */
  }
  .us-integrations img {
    width: 50px;
    height: 50px;
  }
  .us-integrations p {
    font-size: 1.5vw;
  }
  .box-chat {
    margin: auto;
  }

  .txt-integrations h3{
    font-size: 25px;
  }
}
  
@media (min-width: 992px) and (max-width: 1200px) {

  h1 {font-size: 3.8vw; z-index: 100;}
  h2 {font-size: 3vw; z-index: 100;}
  h3 {font-size: 2.2vw; z-index: 100;}
  p {font-size: 1.5vw; z-index: 100;}
  b {font-size: 1.5vw; font-weight: 700; z-index: 100;}

  .bck-image {
    height: 70em;
  }

  .chat-widget {
    margin: 0 auto !important;
    justify-content: center;
    display: flex;
    padding: 0 5%;
  } 

  .content-tallos p {
    padding: 0;
    margin: 
    0 5% 5% 5%;
  }

  .section-platform {
    height: 800px;
  }

  .section-platform h3 {
    margin: 5% 0;
  }

  .image-tallos {
    padding-right: 0 !important;
  }

  .image-tallos video{
    width: 100%;
  }

  #container > section.row.mx-0.card-user > div:nth-child(1) > video{
    height: 40vh;
    width: 100%;
    margin:0 ;
  }
  .content-cards {
    margin: 0;
  }
  .tallos-platform video {
    width: 30em;
  }

}

@media (min-width: 1200px) and (max-width: 1600px) {

  .tallos-platform video {
    width: 30em;
  }

  .bck-image {
    height: 70em;
  }


  .title-widget {
    margin-top: 3em;
    color: #fff;
  }

  .section-platform {
    height: 550px;
    background: linear-gradient(#022e6f ,#029bcd);
    /* margin: 0 5vw; */
  }

  h1 {font-size: 3.8vw; z-index: 100;}
  h2 {font-size: 3vw; z-index: 100;}
  h3 {font-size: 2.2vw; z-index: 100;}
  p {font-size: 1.5vw; z-index: 100;}
  b {font-size: 1.5vw; font-weight: 700; z-index: 100;}
  #container > section.row.mx-0.card-user > div:nth-child(1) > video{
    height: 40vh;
    margin:0 ;
  }
  .content-cards {
    margin: 0;
  }
  .chat-widget {
    /* padding: 0 5%; */
  }
}
</style>