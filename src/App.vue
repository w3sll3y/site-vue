<template>
  <div id="t-container">
    <Header/>
    <Article/>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: 'App',

  components: {
    Header: () => import('./containers/Header'),
    Article: () => import('./containers/Article'),
    Footer: () => import('./containers/Footer')
  }
}
</script>

<style lang="scss">



@import './assets/css/tallos-variables.scss';
// Then import Bootstrap an BootstrapVue SCSS files (order is important)
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import '../node_modules/bootstrap-vue/src/index.scss';
@import './assets/css/fonts-google-nunito.css';
@import './../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;0,700;0,900;1,400&display=swap');

// Define variable defaults
$body-bg: #f8f8f8;
$body-color: #1d1d1d;

html,
body,
.container,
article {
  font-family: 'Nunito', sans-serif !important;
  color: #1d1d1d !important;
  margin: 0px;
  padding: 0px;
  background-color: #f8f8f8 !important;
}

#t-container {
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
}

 #carousel-1 li{
    background-color: #fff !important;
  }
  #carousel-2 li{
    background-color: #022e6f !important;
  }

h1 {font-size: 2.91vw;}
h2 {font-size: 2.5vw;}
p {font-size: 1.2vw;}
b {font-size: 1.2vw; font-weight: 900}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.carousel-control-prev-icon {
//  background-image: url("./assets/img/MENSSENGER.png") !important;
 width: 50px !important;
 height: 50px !important;
 
}

.carousel-control-next-icon {
  // background-image: url("./assets/img/MENSSENGER.png") !important;
  width: 50px !important;
  height: 50px !important;
}
.carousel-team > #carousel-1 > a.carousel-control-next > span.carousel-control-next-icon {
  filter: invert(52%) sepia(62%) saturate(1277%) hue-rotate(155deg) brightness(85%) contrast(103%);
}

.carousel-team > #carousel-1 > a.carousel-control-prev > span.carousel-control-prev-icon {
  filter: invert(52%) sepia(62%) saturate(1277%) hue-rotate(155deg) brightness(85%) contrast(103%);
}

#t-container > article > div > div > div > section.post.row.mx-0.mb-5 > section.content-post.col-md-8 > p {
  height: auto;
}

.container {
  display: flex;
  flex-direction: column;
} 

#modal-5___BV_modal_header_ {
  display: none;
}
#modal-5___BV_modal_footer_{
  display: none;
}

#rd-text_field-km3jb3fa input {
    box-shadow: none;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid #000;
    outline: none;
    background: none;
    color: #fff;
}
// .ql-editor span{
//     background-color: #f8f8f8 !important;
// }


@media (max-width: 576px) {

  #rd-column-km3h9unw > div {
    padding: 0 15% !important;
  }
#container > section.bck-image.d-flex.justify-content-center > section.title-widget.row.d-flex.justify-content-center.position-absolute > h2 {
  margin-top: 15%;
}
#container > section.bck-image.d-flex.justify-content-center > section.widget > div > div {
  margin-top: 25% !important;
}

  .ql-editor img {
    max-width: 100%;
  }
.carousel-team > #carousel-1 > a.carousel-control-next > span.carousel-control-next-icon {
  display: none;
}

#carousel-1 > a.carousel-control-next > span.carousel-control-next-icon,
#carousel-1 > a.carousel-control-prev > span.carousel-control-prev-icon {
  display: none;
}

.carousel-team > #carousel-1 > a.carousel-control-prev > span.carousel-control-prev-icon {
  display: none;
}


  h1 {font-size: 2.91vw;}
  h2 {font-size: 2vw;}
  p {font-size: 18px;}
  b {font-size: 15px; font-weight: 700}

  .carousel-control-prev-icon {
    width: 50px !important;
    height: 50px !important;
  }

  .carousel-control-next-icon {
    width: 50px !important;
    height: 50px !important;
  }
}


@media (min-width: 576px) and (max-width: 767px) {
container > section.bck-image.d-flex.justify-content-center > section.title-widget.row.d-flex.justify-content-center.position-absolute > h2 {
  margin-top: 25%;
}
#container > section.bck-image.d-flex.justify-content-center > section.widget > div > div {
  margin-top: 25% !important;
}
  h1 {font-size: 2.91vw;}
  h2 {font-size: 2vw;}
  p {font-size: 22px;}
  b {font-size: 20px; font-weight: 700}
  
  .carousel-control-prev-icon {
    width: 80px !important;
    height: 80px !important;
  }

  #carousel-1 > a.carousel-control-next > span.carousel-control-next-icon,
  #carousel-1 > a.carousel-control-prev > span.carousel-control-prev-icon {
    display: none;
  }

  .carousel-control-next-icon {
    width: 80px !important;
    height: 80px !important;
  }
}



@media (min-width: 768px) and (max-width: 992px) {
  container > section.bck-image.d-flex.justify-content-center > section.title-widget.row.d-flex.justify-content-center.position-absolute > h2 {
  margin-top: 15%;
}
#container > section.bck-image.d-flex.justify-content-center > section.widget > div > div {
  margin-top: 25% !important;
}
  h1 {font-size: 2.91vw;}
  h2 {font-size: 2vw;}
  p {font-size: 22px;}
  b {font-size: 20px; font-weight: 700}
}

@media (min-width: 993px) and (max-width: 1200px) {

  #rdstation-bricks-embeddable-form-bricks-component-HJb0ww4QVh-h4FmHtlKkbw .bricks--column > div { 
    // height: 15px;
    margin-top: -3em;
    padding: 5%;
  }
  container > section.bck-image.d-flex.justify-content-center > section.title-widget.row.d-flex.justify-content-center.position-absolute > h2 {
  margin-top: 15%;
}
#container > section.bck-image.d-flex.justify-content-center > section.widget > div > div {
    margin-top: 1rem !important;
}
  h1 {font-size: 2.91vw;}
  h2 {font-size: 2vw;}
  p {font-size: 22px;}
  b {font-size: 20px; font-weight: 700}
}


@media (min-width: 993px) and (max-width: 1200px) {
  container > section.bck-image.d-flex.justify-content-center > section.title-widget.row.d-flex.justify-content-center.position-absolute > h2 {
  margin-top: 15%;
}
#rdstation-bricks-embeddable-form-bricks-component-HJb0ww4QVh-h4FmHtlKkbw .bricks--column > div { 
    // height: 15px;
    margin-top: -3em;
    padding: 5%;
  }
#container > section.bck-image.d-flex.justify-content-center > section.widget > div > div {
    margin-top: 1rem !important;
}
  h1 {font-size: 2.91vw;}
  h2 {font-size: 2vw;}
  p {font-size: 22px;}
  b {font-size: 20px; font-weight: 700}
}

@media (min-width: 1200px) and (max-width: 1600px) {

  #rdstation-bricks-embeddable-form-bricks-component-HJb0ww4QVh-h4FmHtlKkbw .bricks--column > div { 
    // height: 15px;
    margin-top: -3em;
    padding: 5%;
  }
   container > section.bck-image.d-flex.justify-content-center > section.title-widget.row.d-flex.justify-content-center.position-absolute > h2 {
  margin-top: 15%;
}
#container > section.bck-image.d-flex.justify-content-center > section.widget > div > div {
  margin-top: 1rem !important;
}
}

</style>
