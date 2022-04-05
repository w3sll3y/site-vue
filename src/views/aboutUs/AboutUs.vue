<template>
  <div id="t-container">
       
    <!-- Sessão "Pra quem sonha GRANDE" -->
    <section class="card-dream row mx-0">
      <div class="col-md-12 col-sm-12 col-lg-6 col-lg-6 col-xs-12 contentCard">
        <h1>Pra quem sonha <br /><span>GRANDE</span></h1> 
        <p class="mt-3">
          A jornada da Tallos começou em 2016, com a vontade do nosso CEO, Arthur Frota, 
          de desenvolver um projeto que pudesse ajudar pessoas por meio da inovação. 
          Ao longo dos anos passamos por vários ciclos e construímos uma trajetória de aprendizado.
        </p>

        <p>
          Em 2019 nos firmamos como plataforma de atendimento omnichannel e uma das maiores startups do Ceará. 
          Temos um time formado por pessoas que acreditam no que fazem e são apaixonadas por impactar 
          e ajudar os nossos clientes. 
        </p>
        <p>
          Para saber mais sobre a Tallos, acompanhe as nossas redes sociais. 
          Para conferir as vagas disponíveis no nosso time, basta clicar aqui.
        </p>
        <b>#GoTallos</b>
      </div>
      <div class="col-md-12 col-sm-12 col-lg-6 col-lg-6 col-xs-12 videoApresetation">
        <video controls>
          <source src="https://tallos-chat.s3.us-east-2.amazonaws.com/medias-site-v2/movies/video+arthur.mp4" type="video/mp4">
        </video>
      </div>
    </section>


    <section class="us-history2">
      <section v-scrollanimation class="year mb-5">
        <div class="d-flex justify-content-center">
          <h3 class="mt-5 mb-5">2016</h3>
        </div>
        <div class="content-one row mx-0">
          <div class="col-12 col-lg-6 img-one d-flex justify-content-end">
            <img src="../../assets/img/2016.jpg" loading="lazy" alt="">
          </div>
          <div class="col-12 col-lg-6 content-one">
            <p class=mt-2> <strong> Vontade </strong> <br />
              Primeira sede da Tallos, na garagem do nosso CEO, Arthur Frota
            </p>
          </div>
        </div>
      </section>
      <section v-scrollanimation class="ball mb-5 d-flex justify-content-center"><i class="fas fa-dot-circle"></i></section>

      <section v-scrollanimation class="year">
        <div class="d-flex justify-content-center">
          <h3 class="mb-5">2017</h3>
        </div>
        <div class="row mx-0">
          <div class="col-12 col-lg-6 content-two mb-5">
            <p class=mt-2> <strong> Desejo </strong> <br />
              A Tallos surgiu da vontade do nosso CEO, Arthur Frota, de desenvolver um projeto com o propósito de impactar pessoas.
            </p>
          </div>
          <div class="col-12 col-lg-6 img-two">
            <img src="../../assets/img/2017.png" loading="lazy" alt="">
          </div>
        </div>
      </section>
      <section v-scrollanimation class="ball mt-5 d-flex justify-content-center"><i class="fas fa-dot-circle"></i></section>
      <section v-scrollanimation class="year mb-5 mt-5">
        <div class="d-flex justify-content-center">
          <h3 class="mt-5 mb-5">2018</h3>
        </div>
        <div class="content-one row mx-0">
          <div class="col-12 col-lg-6 img-one d-flex justify-content-end">
            <img src="../../assets/img/2018.jpg" loading="lazy" alt="">
          </div>
          <div class="col-12 col-lg-6 content-one">
            <p class=mt-2> <strong> Aprendizado </strong> <br />
              Em 2018 estávamos em processo de aprendizado, olhando 
              para o mercado e procurando o nosso espaço.
            </p>
          </div>
        </div>
      </section>
      <section v-scrollanimation class="ball mt-5 mb-5 d-flex justify-content-center"><i class="fas fa-dot-circle"></i></section>
      <section v-scrollanimation class="year">
        <div class="d-flex justify-content-center">
          <h3 class="mb-5">2019</h3>
        </div>
        <div class="row mx-0">
          <div class="col-12 col-lg-6 content-two mb-5">
            <p class=mt-2> <strong> Coragem </strong> <br />
              Em 2019 demos um passo de coragem e crescimento: Inauguramos a nossa 
              1ª sala comercial.
            </p>
            
          </div>
          <div class="col-12 col-lg-6 img-two">
            <img src="../../assets/img/2019.jpg" loading="lazy" alt="">
          </div>
        </div>
      </section>
      <section v-scrollanimation class="ball mt-5 d-flex justify-content-center"><i class="fas fa-dot-circle"></i></section>
      <section v-scrollanimation class="year mb-5 mt-5">
        <div class="d-flex justify-content-center">
          <h3 class="mt-5 mb-5">2020</h3>
        </div>
        <div class="content-one row mx-0">
          <div class="col-12 col-lg-6 img-one d-flex justify-content-end">
            <img src="../../assets/img/2020.jpg" loading="lazy" alt="">
          </div>
          <div class="col-12 col-lg-6 content-one">
            <p class=mt-2> <strong> Conexões </strong> <br />
             Em 2020 a Tallos fez conexões importantes e entrou para o maior 
             Hub de Inovação da América Latina, o Cubo Itaú.
            </p>
          </div>
        </div>
      </section>
      <section v-scrollanimation style="margin: 0 auto;" class="year  ball mt-2 mb-5">
          <i class="d-flex justify-content-center fas fa-dot-circle"></i>
          <h3 class="mb-5 d-flex justify-content-center mt-5">2021</h3>
      </section>
      
      <section v-scrollanimation class="team-tallos">
        <video src="https://tallos-chat.s3.us-east-2.amazonaws.com/medias-site-v2/team-tallos.mp4" autoplay muted loop></video>
      </section>
      
      <section class="d-flex justify-content-center go-tallos">
        <h2>#GOTALLOS</h2>
      </section>


    </section>
            
    
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: 1
    };
  },

  methods: {
    back(){
      let backSelected = this.selected
      if (backSelected <= 0){
        return this.selected = 0
      }
      else{
        return this.selected = this.selected -1
        }
    },
    next(){
      let nextSelected = this.selected
      if (nextSelected >=2){
        return this.selected = 2
      }
      else{
        return this.selected = this.selected + 1
      }
    }
  },
  
  mounted () {
    window.scrollTo(0, 0)
  }
};
</script>

<style scoped>

.before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 1s ease-out;
  }

  .enter {
    opacity: 1;
    transform: translateY(0px);
  }

  .us-history2 {
    background: linear-gradient(#022e6f ,#029bcd);
  }

  .year {
    position: relative;
    margin-bottom: 10%;
  }
  .year h3{
    color: #fff;
    font-weight: 900;
    text-shadow: 3px 2px rgba(0, 0, 0, 0.40);
    font-style: italic;
  }
  .img-one {
    box-shadow: 1px 0px 0px rgba(221, 217, 217, 0.2);
  }
  .img-two {
    padding-left: 3%;
  }
  .img-one img{
    position: absolute;
    box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
    border: #fff solid 5px;
    border-bottom-width: 40px;
    object-fit: cover;
    width: 30vw;
    height: 20vw;
    transform: rotate(-2deg);
    z-index: 1000;
  }
  .img-one::after {
    content: '';
    background: url('../../assets/img/tallos-2019.jpg');
    box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
    border: #fff solid 5px;
    border-bottom-width: 40px;
    transform: rotate(-10deg);
    margin-right: 2%;
    width: 30vw;
    height: 20vw;
  }

  .img-two img{
    position: absolute;
    box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
    border: #fff solid 5px;
    border-bottom-width: 40px;
    object-fit: cover;
    width: 30vw;
    height: 20vw;
    transform: rotate(2deg);
    z-index: 1000;
  }
  .img-two::after {
    content: '';
    position: absolute;
    background: url('../../assets/img/history.png');
    box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
    border: #fff solid 5px;
    border-bottom-width: 40px;
    transform: rotate(10deg);
    margin-right: 2%;
    width: 30vw;
    height: 20vw;
  }

  .ball {
    color: rgba(255, 255, 255, 0.8);
  }

  .content-one p {
    color: #fff;
    padding-right: 25%;
    text-align: justify
  }

  .content-two {
    padding-left: 15%;
    box-shadow: 1px 0px 0px rgba(221, 217, 217, 0.2);
    color: #fff;text-align: justify
  }

  .go-tallos h2{
    color: #fff;
    margin-bottom: 5%;
    text-shadow: 3px 2px rgba(0, 0, 0, 0.40);
    font-size: 40px;
    font-weight: 900;
    font-style: italic;
  }




  h1 {font-size: 3.8vw; }
  h2 {font-size: 2vw; }
  h3 {font-size: 1.6vw; }
  p {font-size: 1vw; }
  b {font-size: 1vw; font-weight: 700;}
  strong {font-size: 1.3vw;}

  /* CSS Sessão pra quem sonha GRANDE */
  .card-dream {
    margin: 5% !important;
    display: flex;
    align-items: center;
  }

  .videoApresetation {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .videoApresetation video {
    width: 100%;
    height: 100%;
  }

  .carousel-item.active, .carousel-item-next, .carousel-item-prev {
    display: flex;
    justify-content: center;
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .card-carousel {
    padding: 0 15%;
  }

  .us-history span {
    margin-bottom: -4%;
    font-size: 2.5vw;
    color: white;
    background-color: #0199ca;
    font-weight: 900;
  }
  .div-histroy p {
    min-height: 150px;
    margin: 0;
    font-size: 1.1vw;
  }
  .div-histroy img {

    width: 100%;
    height: 25vw;
    object-fit: cover;
    object-position: center center;
  }

  .image-history {
    display: flex;
    justify-content: center;
  }

  .contentCard b {
    font-weight: 700;
  }



  /* CSS Sessão História */
  .history {
    margin-top: 5%;
    background: #0199ca;
    height: 800px;
  }
  
  .div-histroy {
    padding: 2%;
    background: white;
    border-radius: 5px;
    max-width: 70%;
  }

  .div-histroy video {
    padding: 0;
  }

  .content-history p {
    text-align: left;
  }

  .txt-tallos {
    display: flex;
    margin: 3% auto;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  .txt-tallos h3 {
    font-weight: 700;
    font-size: 2vw;
  }
  
  .team-tallos {
    padding: 0 20%;
    margin-bottom: 3%;
  }

  .team-tallos video {
    width: 100%;
    box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
    border: #fff solid 5px;
    border-bottom-width: 40px;
    object-fit: cover;
    object-position: center center;
  }

  h1 {
    color: #0199ca;
  }

  span {
    font-weight: 700;
  }

@media (max-width: 576px) {
  
  h1 {font-size: 10vw;}
  h2 {font-size: 6vw;}
  h3 {font-size: 5.5vw;}
  p {font-size: 4.5vw;}
  b {font-size: 4vw; font-weight: 700}

  .videoApresetation {
    margin: 10% 0;
    width: 100%;
  }
  .div-histroy img {
    width: 100%;
    height: 100%;
  }
  .videoApresetation video {
    width: 100%;
  }
  .us-history span {
    font-size: 10vw;
  }
  .div-histroy p {
    font-size: 15px;
  }
  .div-histroy {
    padding: 2%;
    background: white;
    border-radius: 5px;
    max-width: 90%;
  }
  
  .card-carousel {
    padding: 0 !important;
    margin: 0 !important;
  }
  .card {
    width: 1000px;
  }
  .card p {
    display: none;
  }
  .card h3 {
    margin-top: 50%;
    font-size: 3vw;
  }
  .txt-tallos h3{
    margin: 0;
    font-size: 3.5vw;
  }
  .card h5 {
    font-size: 2vw;
  }
  .card img {
    width: 100px !important;
    margin: -20px 0 !important;
  }
  .card-body {
    margin: 0  !important;
    padding: 0  !important;
  }
  .card-team {
    justify-content: flex-end !important;
  }
  .txt-tallos h3 {
    font-size: 4vw;
    margin: auto !important;
  }
  .img-one {
    justify-content: center !important;
  }

  .img-one img,
  .img-two img {
    height: 70vw;
    width: 90vw;
    margin-bottom: 150% !important;
  }
  .img-one::after,
  .img-two::after {
    height: 70vw;
    width: 90vw;
  }

  .content-one p {
    color: #fff;
    margin-top: 15% !important;
    padding-right: 0%;
    text-align: justify
  }

  .content-two {
    color: #fff;
    /* margin-top: 15% !important; */
    padding: 0 15px;
    margin-bottom: 5% !important;
    text-align: justify
  }
  
  #t-container > section.us-history2 > section:nth-child(3) > div.row.mx-0 > div.col-12.col-lg-6.img-two,
  #t-container > section.us-history2 > section:nth-child(6) > div.row.mx-0 > div.col-12.col-lg-6.img-two {
    display: flex;
    justify-content: center;
  }

  #t-container > section.us-history2 > section.ball.mt-5.d-flex.justify-content-center,
  #t-container > section.us-history2 > section.year.ball.mt-5.mb-5 {
    margin-top: 20rem !important;
  }

  .team-tallos {
    padding: 0;
  }
}

@media (min-width: 577px) and (max-width: 767px) {
  
  h1 {font-size: 6.4vw;}
  h2 {font-size: 5vw;}
  h3 {font-size: 4vw;}
  p {font-size: 3vw;}
  b {font-size: 2.5vw; font-weight: 700}

  .videoApresetation {
    margin: 10% 0;
    width: 100%;
  }
  .div-histroy img {
    width: 90%;
    height: 80%;
  }
  .videoApresetation video {
    width: 100%;
  }
  .us-history span {
    font-size: 6vw;
  }
  .div-histroy p {
    font-size: 2.5vw;
  }
  .div-histroy {
    padding: 2%;
    background: white;
    border-radius: 5px;
    max-width: 90%;
  }

  .txt-tallos h3{
    margin: 0;
    font-size: 3.5vw;
  }

 .img-one {
    justify-content: center !important;
  }

  .img-one img,
  .img-two img {
    height: 60vw;
    width: 80vw;
    margin-bottom: 150% !important;
  }
  .img-one::after,
  .img-two::after {
    height: 60vw;
    width: 80vw;
  }

  .content-one p {
    color: #fff;
    margin-top: 15% !important;
    padding-right: 0%;
    text-align: justify
  }
  #t-container > section.us-history2 > section:nth-child(3) > div.row.mx-0 > div.col-12.col-lg-6.img-two,
  #t-container > section.us-history2 > section:nth-child(6) > div.row.mx-0 > div.col-12.col-lg-6.img-two {
    display: flex;
    justify-content: center;
  }
  #t-container > section.us-history2 > section:nth-child(1) > div.content-one.row.mx-0 > div.col-12.col-lg-6.content-one > p:nth-child(2),
  #t-container > section.us-history2 > section:nth-child(5) > div.content-one.row.mx-0 > div.col-12.col-lg-6.content-one > p:nth-child(2){
    margin-top: 0 !important;
  }
  .content-two {
    color: #fff;
    /* margin-top: 15% !important; */
    padding: 0 15px;
    margin-bottom: 5% !important;
    text-align: justify
  }

  #t-container > section.us-history2 > section.ball.mt-5.d-flex.justify-content-center,
  #t-container > section.us-history2 > section.year.ball.mt-5.mb-5 {
    margin-top: 25rem !important;
  }
  .team-tallos {
    padding: 2%;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  
  h1 {font-size: 5vw;}
  h2 {font-size: 4vw;}
  h3 {font-size: 3.5vw;}
  p {font-size: 2.5vw;}
  b {font-size: 2.2vw; font-weight: 700}

  .videoApresetation {
    margin: 10% 0;
    width: 100%;
  }
  .videoApresetation video {
    width: 100%;
  }
  .div-histroy img {
    width: 90%;
    height: 80%;
  }
  
  .div-histroy {
    padding: 2%;
    background: white;
    border-radius: 5px;
    max-width: 90%;
  }

  .txt-tallos h3{
    margin: 0;
    font-size: 3.5vw;
  }
  .div-histroy p {
    font-size: 2.2vw;
  }
  .img-one {
    justify-content: center !important;
  }

  .img-one img,
  .img-two img {
    height: 60vw;
    width: 80vw;
  }
  .img-one::after,
  .img-two::after {
    height: 60vw;
    width: 80vw;
  }

  .content-one p {
    color: #fff;
    margin-top: 15% !important;
    padding-right: 0%;
    text-align: justify
  }
  #t-container > section.us-history2 > section:nth-child(3) > div.row.mx-0 > div.col-12.col-lg-6.img-two,
  #t-container > section.us-history2 > section:nth-child(5) > div.content-one.row.mx-0 > div.col-12.col-lg-6.img-one.d-flex.justify-content-end {
    margin-top: 15%;
  }
  #t-container > section.us-history2 > section:nth-child(1) > div.content-one.row.mx-0 > div.col-12.col-lg-6.content-one > p:nth-child(2),
  #t-container > section.us-history2 > section:nth-child(5) > div.content-one.row.mx-0 > div.col-12.col-lg-6.content-one > p:nth-child(2){
    margin-top: 0 !important;
  }
  .content-two {
    color: #fff;
    /* margin-top: 15% !important; */
    padding: 0 15px;
    margin-bottom: 5% !important;
    text-align: justify
  }
  #t-container > section.us-history2 > section:nth-child(3) > div.row.mx-0 > div.col-12.col-lg-6.img-two,
  #t-container > section.us-history2 > section:nth-child(6) > div.row.mx-0 > div.col-12.col-lg-6.img-two {
    display: flex;
    justify-content: center;
  }
  #t-container > section.us-history2 > section.ball.mt-5.d-flex.justify-content-center,
  #t-container > section.us-history2 > section.year.ball.mt-5.mb-5 {
    margin-top: 40rem !important;
  }

  .team-tallos {
    padding: 2%;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {

  .videoApresetation {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .videoApresetation video {
    width: 100%;
    height: 100%;
  }
  
  .img-one img {
    height: 25vw;
    width: 35vw;
  }
  .img-one::before{
    height: 25vw;
    width: 35vw;
    left: 15%;
  }
  .img-two img {
    height: 25vw;
    width: 35vw;
  }
  .img-two::before{
    height: 25vw;
    width: 35vw;
    left: 15%;
  }

  .ball {
    margin-left: 0;
  }

  .team-tallos {
    padding: 2%;
  }
}

@media (min-width: 1200px) and (max-width: 1600px) {


  .us-history span h3{
    margin: 0;
    font-size: .9vw !important;
  }
  
}

</style>
