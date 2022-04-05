<template>
    <div>
        <div v-scrollanimation class="chat-widget">
            <div class="header-widget">
                <img src="../../assets/img/tallos-white-logo.svg">
            </div>
            <div class="body-widget">
                <div class="msg row mx-0">
                    <div class="box-body-img col-2">
                        <img src="../../assets/img/chat-box.png" alt="">
                    </div>
                    <div class="msg-widget d-flex align-items-center mt-3">
                        <span> {{ messages.start }} </span>
                    </div>
                    <div class="msg-widget2">
                        <span> {{ messages.secondMessage }} </span>
                    </div>
                    <section v-if="selected==0" class="btns-chat">
                            <div class="btn-rsp1 col-6">
                                <button @click="selected=1"> Suporte</button>
                            </div>
                            <div class="btn-rsp2 col-6">
                                <button @click="selected=2"> Comercial </button>
                            </div>
                    </section>
                </div>

                <div v-if="selected==1" class="msg">
                    <div class="rsp-widget-support d-flex col-10 justify-content-end mt-3">
                        <span> Suporte </span>
                    </div>
                    <div class="msg2 row mx-0">
                        <div class="box-body-img2 col-2">
                            <img src="../../assets/img/chat-box.png" alt="">
                        </div>
                        <div class="msg-widget3">
                            <span> {{ messages.support }} </span>
                        </div>
                    
                        <section class="btns-chat d-flex justify-content-center">
                                <div class="btn-rsp2 col-6 d-flex justify-content-center">
                                    <router-link class="mt-3"
                                        :to="{ path: 'about-us' }">  
                                            <button> Sobre nós </button>
                                    </router-link>
                                </div>
                        </section>
                    </div>
                </div>

                <div v-if="selected==2" class="msg">
                    <div class="rsp-widget-support d-flex col-10 justify-content-end mt-3">
                        <span> Comercial </span>
                    </div>
                    <div class="msg2 row mx-0">
                        <div class="box-body-img2 col-2">
                            <img src="../../assets/img/chat-box.png" alt="">
                        </div>
                        <div class="msg-widget3">
                            <span> {{ messages.comercial }} </span>
                        </div>
                    
                        <section class="btns-chat d-flex justify-content-center">
                                <div class="btn-rsp2 col-6">
                                    <router-link class="mt-3"
                                        :to="{ path: 'plans' }">  
                                            <button> Quero adquirir a plataforma </button>
                                    </router-link>
                                </div>
                        </section>
                    </div>
                </div>

                <div v-if="selected==3" class="msg">
                    <div class="rsp-widget-support d-flex col-10 justify-content-end mt-3">
                        <span> Sobre nós </span>
                    </div>
                    <div class="msg2 row mx-0">
                        <div class="box-body-img2 col-2">
                            <img src="../../assets/img/chat-box.png" alt="">
                        </div>
                        <div class="msg-widget3">
                            <span> {{ messages.usHistory }} </span>
                        </div>
                    
                        <section class="btns-chat">
                                <div class="btn-rsp1 col-6">
                                    <div class="btn-rsp1 col-6">
                                        <button @click="selected=1"> Suporte</button>
                                    </div>
                                </div>
                                <div class="btn-rsp2 col-6">
                                    <button @click="selected=2"> Comercial </button>
                                </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

// import Video from './VideoWidget'

export default {
//   components: {
//     Video
//   },
  data() {
    return {
      selected: 0,
      messages: {
        start: '🤖: Olá, tudo bem?!',
        secondMessage: '🤖: Qual setor você gostaria de conhecer?',
        support: 'Suporte - Somos a equipe de Suporte e estamos responsáveis por te acompanhar nessa jornada com a TALLOS. Para nos conhecer um pouco mais, clique no botão abaixo! 😁',
        comercial: 'Somos da equipe Comercial! Caso queira conhecer um pouco da nossa plataforma, clique no botão abaixo! 😉 ',
        usHistory: '🤖: Empresa brasileira, focada exclusivamente em soluções de atendimento digital. Desenvolvemos a TALLOS Chat: Plataforma é construída na modalidade de software como serviços (SaaS) e oferece soluções para automatizar e estruturar o serviço de atendimento ao cliente. Como resultado, aprimora a gestão de empresas de diferentes portes e segmentos de atuação.👍'
      },
    };
  }
}
</script>

<style scoped>
    .before-enter {
        opacity: 0;
        transform: translateX(-100px);
        transition: all 2s cubic-bezier(.81,-0.11,.37,1.77);
    }

    .enter {
        opacity: 1;
        transform: translateX(0px);
    }


    .chat-widget {
        width: 500px;
        height: 650px;
        margin: 0 auto;
        background-color: #f8f8f8;
        box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
        border-radius: 25px;
        /* border: 1px solid; */
    }
    .header-widget {
        background-color: #0199ca;
        border-radius: 25px 25px 0 0;
        width: auto;
        display: flex;
        justify-content: center;
    }
    .header-widget img {
        width: 30%;
        margin: 20px 0;
    }
    .body-widget {
        /* overflow-y: scroll; */
        width: 100%;
        max-height: 650px;
    }
    .msg {
        padding: 15px 20px;
    }
    .box-body-img {
        display: flex;
        justify-content: start;
        margin-left: -5%;
        margin-right: 2%;
    }
    .msg-widget {
        background-color: #0199ca ;
        border-radius: 10px 10px 10px 0;
        padding: 2%;
        display: flex;
        animation: fadeIn .5s;
        align-items: center;
        height: 4vh;
        font-weight: 900;
        color: white;
    }
    .msg-widget2 {
        background-color: #0199ca ;
        border-radius: 10px 10px 10px 0;
        animation: fadeIn 2s;
        margin-left: 14%;
        padding: 2%;
        font-weight: 900;
        color: white;
    }
    .btns-chat {
        display: flex;
        margin-top: 5%;
        width: 100%;
    }
    .btn-rsp1 {
        display: flex;
        justify-content: flex-end;
    }

    .btns-chat button{
        background-color: #004E69;
        border-radius: 10px;
        color: white;
        font-weight: 900;
        border: none;
        /* margin-left: 90%; */
        padding: 15px;
        animation: fadeIn2 1s;
        outline: none;
    }
    .rsp-widget-support {
        display: flex;
        justify-content: flex-end;
        /* background: red; */
        margin-left: 15%;
    }
    .rsp-widget-support span {
        background-color: #004E69;
        font-weight: 900;
        color: white;
        margin-top: -8%;
        margin-bottom: 5%;
        animation: inFade 2s;
        border-radius: 10px 10px 0 10px;
        padding: 5%;
    }

    .box-body-img2  {
        margin-left: -5%;
    }

    .msg-widget3 {
        background-color: #0199ca ;
        border-radius: 10px 10px 10px 0;
        animation: fadeIn 2s;
        margin-left: 14%;
        padding: 2%;
        margin-top: -70px;
        font-weight: 900;
        color: white;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
    }
    @keyframes fadeIn2 {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        80% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes inFade {
        0% {
            margin-right: -40px;
        }
        100% {
            margin-right: 0;
        }
    }

@media (max-width: 576px) {
    span, button {
        font-size: 3vw;
    }
    .chat-widget {
        width: 100%;
        min-height: 400px;
        height: auto;
        border: 1px solid;
    }
    .header-widget img {
        width: 40%;
        margin: 20px 0;
    }

    .box-body-img {
        margin-left: -8%;
        margin-right: 8%;
    }
    .box-body-img2 {
        margin-left: -8%;
        margin-right: 8%;
    }
    .box-body-img img,
    .box-body-img2 img {
        width: 40px;
    }

    .msg-widget2 {
        margin-left: 16%;
        margin-top: 2%;
    }

    .msg-widget3 {
        margin-top: -50px;
    }
    
    
}
</style>