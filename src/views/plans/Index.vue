<template>
  <div>
    <section class="background-plans">
      <section id="txt-initial" class="txt-start d-flex flex-column justify-content-start">
        <h1>Aumente as vendas do seu negócio agora mesmo!</h1>
        <p>Preços simples e sem taxas internacionais</p>
      </section>
    </section>

    <!-- sessão preços -->
    <section class="row mx-5 plan">

      <section class="d-flex flex-column justify-content-between col-md-6 col-sm-12 col-lg-4 col-xl-3 col-xs-12 plan-basic">
          <div class="d-flex flex-column">
            <i class="fa fa-star"></i>
            <h2>Básico </h2>
            <p style="min-height: 90px;">Centralize seu atendimento de forma inteligênte</p>
            <div class="row">
              <div class="col-12">
                <span>R$ 97,00</span> 
                <span style="font-size: 15px;"
                    v-b-tooltip.hover.top title="Valores adicionais de implantação e API oficial."
                  >
                    <i class="fas fa-question-circle ml-1"></i>
                </span>
              </div>
            </div>
            <small class="mb-3">Mensal</small>
            <h5>Principais funcionalidades</h5>
            <p class="my-0"> Gerencie conversas </p>
            <p class="my-0"> 2 usuários inclusos </p>
            <p class="my-0"> Fila de atendimento </p>
            <p class="my-0"> Envio de arquivos </p>
            <p class="my-0"> Chatbot por fluxo </p>
            <p class="my-0"> Dashboard </p>
            <p class="my-0"> Aplicativos </p>
            <p class="my-0">Setores de atendimento</p>
            <p class="my-0">R$ 67,00 por usuário adicional <br /> conectado 
              <span style="font-size: 15px; position: relative;z-index: 1;"
                v-b-tooltip.hover.right title="Descontos de acordo com a quantidade de usuários."
              >
                <i class="fas fa-question-circle"></i>
              </span>
            </p>
          </div>
          <router-link class="mt-3"
            :to="{ name: 'plans', params: { plan: 'basic' } }">  
            <b-button class="btn btn-plan btn-lg mb-5">Contrate agora!</b-button>
          </router-link>

      </section>

      <!-- Sessão Essencial -->
      <section class="d-flex flex-column justify-content-between col-md-6 col-sm-12 col-lg-4 col-xl-3 col-xs-12 mt-2 plan-essential">
          <div class="d-flex flex-column">
            <h2>Essencial  </h2>
            <p style="min-height: 90px;"> Trabalhe em equipe e gerencie o seu atendimento de forma rápida e eficiente </p>

            <div class="row">
              <div class="col-12">
                <span>R$ 297,00</span>
                <span style="font-size: 15px; color: #022e6f"
                    v-b-tooltip.hover.top title="Valores adicionais de implantação e API oficial."
                  >
                    <i class="fas fa-question-circle ml-1"></i>
                </span>
              </div>
            </div>
            <small class="mb-3">Mensal</small>
            <h5> Principais funcionalidades </h5>
            <p class="my-0">Todas as funcionalidades do plano <br />Básico mais:</p>
            <p class="my-0"> 2 usuários inclusos </p>
            <p class="my-0">Relatórios e Analytics</p>
            <p class="my-0">Treinamento de gatilhos na</p>
            <p class="my-0">inteligência artificial - Até 1.000</p>
            <p class="my-0">treinamentos</p>
            <p class="my-0">02 Fluxos (sem req. externa)</p>
            <p class="my-0">Monitoramento dos atendimentos</p>
            <p class="my-0">Funil / Workflow</p>
            <p class="my-0">Carteira</p>
            <p class="my-0">Agenda de atividades</p>
            <p class="my-0">Palavra Chaves</p>
            <p class="my-0">R$ 67,00 por usuário adicional <br /> conectado 
              <span style="font-size: 15px; color: #022e6f" 
                v-b-tooltip.hover.html.right title="Descontos de acordo com a quantidade de usuários."
              >
                <i class="fas fa-question-circle"></i>
              </span>
            </p>
          </div>
          <!-- <router-link class="mt-3"
            :to="{ name: 'plans', params: { plan: 'essential' } }">  
            <b-button class="btn btn-plan btn-lg mb-5">Contrate agora!</b-button>
          </router-link> -->
      </section>

      <!-- Sessão Avançado -->
      <section class="d-flex flex-column justify-content-between col-md-6 col-sm-12 col-lg-4 col-xl-3 col-xs-12 mt-2 plan-avanced">
          <div class="d-flex flex-column">
            <h2>Avançado  </h2>
            <p style="min-height: 90px;">Automatize conversas, gerencie os atendimentos e esscale as suas vendas</p>

            <div class="row">
              <div class="col-12">
                <span>R$ 497,00</span>
                <span style="font-size: 15px; color: #022e6f"
                    v-b-tooltip.hover.top title="Valores adicionais de implantação e API oficial."
                  >
                    <i class="fas fa-question-circle ml-1"></i>
                </span>
              </div>
            </div>

            <small class="mb-3">Mensal</small>
            <h5>Principais funcionalidades</h5>
            <p class="my-0">Todas as funcionalidades do plano <br /> Essencial mais:</p>
            <p class="my-0"> 2 usuários inclusos </p>
            <p class="my-0"> 5 Flows (com req. externa) </p>
            <p class="my-0"> Treinamento de gatilhos na </p>
            <p class="my-0"> inteligência artificial - Até 5.000 </p>
            <p class="my-0"> Treinamentos </p>
            <p class="my-0"> Analise de emoções </p>
            <p class="my-0"> API / Webhook </p>
            <p class="my-0"> R$ 67,00 por usuário adicional <br /> conectado 
              <span style="font-size: 15px; color: #022e6f"
                v-b-tooltip.hover.html.right title="Descontos de acordo com a quantidade de usuários."
              >
                <i class="fas fa-question-circle"></i>
              </span> 
            </p>
          </div>
          <!-- <router-link class="mt-3"
            :to="{ name: 'plans', params: { plan: 'avancado' } }">  
            <b-button class="btn btn-plan btn-lg mb-5">Contrate agora!</b-button>
          </router-link> -->
      </section>

      <!-- Sessão Pro -->
      <section class="d-flex flex-column justify-content-between col-md-6 col-sm-12 col-lg-4 col-xl-3 col-xs-12 mt-2 plan-pro">
          <div class="d-flex flex-column">
            <h2>Profissional  </h2>
            <p style="min-height: 90px;">Suíte completa para gestão de atendimentos, gerenciamento de equipes </p>
            <div class="row">
              <div class="col">
                <span>R$ 897,00</span>
                <span style="font-size: 15px; color: #022e6f"
                    v-b-tooltip.hover.top title="Valores adicionais de implantação e API oficial."
                  >
                    <i class="fas fa-question-circle ml-1"></i>
                </span>
              </div>
            </div>
            <small class="mb-3">Mensal</small>
            <h5>Principais funcionalidades </h5>
            <p class="my-0">Todas as funcionalidades do plano</p>
            <p class="my-0">Avançado mais:</p>
            <p class="my-0"> 2 usuários inclusos </p>
            <p class="my-0">Flows ilimitados (com req. externa)</p>
            <p class="my-0">Treinamento de gatilhos na</p>
            <p class="my-0">inteligência artificial - Ilimitados</p>
            <p class="my-0"> R$ 67,00 por usuário adicional <br /> conectado 
              <span style="font-size: 15px; color: #022e6f"
                v-b-tooltip.hover.html.right title="Descontos de acordo com a quantidade de usuários."
              >
                <i class="fas fa-question-circle"></i>
              </span>  
            </p>
          </div>
          <!-- <router-link class="mt-3"
            :to="{ name: 'plans', params: { plan: 'pro' } }">  
            <b-button class="btn btn-plan btn-lg mb-5">Contrate agora!</b-button>
          </router-link> -->
      </section>
    </section>

    <section class="btn-consultor d-flex justify-content-center position-relative my-5">
      <b-button v-b-modal.modal-5 variant="secondary">
        <span> Fale com um consultor!</span>
      </b-button>
      <b-modal id="modal-5" size="xl" title="Formulário">
        <FormRD />
      </b-modal>
    </section>

    <section v-scrollanimation class="mx-5 table-section row">
    <section class="col-md-12 col-lg-12 col-xl-4 col-12 table-imgs"> 
        <img style="margin-top:25%;" src="https://droitthemes.com/wp/saasland-theme/wp-content/uploads/2018/11/featured_img1.png" loading="lazy"/>
        <!-- <img style="margin-top:25%" src="https://droitthemes.com/wp/saasland-theme/wp-content/uploads/2018/11/featured_img1.png" loading="lazy"/> -->
    </section>
    <section class="col-md-12 col-lg-12 col-xl-8 col-12"> 
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Básico</th>
            <th scope="col">Essencial</th>
            <th scope="col">Avançado</th>
            <th scope="col">Profissional</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Dashboard de desempenho</th>
            <td><i class="fas fa-check"></i></td>
            <td><i class="fas fa-check"></i></td>
            <td><i class="fas fa-check"></i></td>
            <td><i class="fas fa-check"></i></td>
          </tr>
          <tr>
            <th scope="row">Relatorios</th>
            <td><i class="fas fa-times"></i></td>
            <td><i class="fas fa-check"></i></td>
            <td><i class="fas fa-check"></i></td>
            <td><i class="fas fa-check"></i></td>
          </tr>
          <tr>
            <th scope="row">Monitoramento de equipe</th>
            <td><i class="fas fa-times"></i></td>
            <td><i class="fas fa-check"></i></td>
            <td><i class="fas fa-check"></i></td>
            <td><i class="fas fa-check"></i></td>
          </tr>
          <tr>
            <th scope="row">Avaliação do atendimento</th>
            <td><i class="fas fa-times"></i></td>
            <td><i class="fas fa-check"></i></td>
            <td><i class="fas fa-check"></i></td>
            <td><i class="fas fa-check"></i></td>
          </tr>
          <tr>
            <th scope="row">Analise de emoções dos atendimentos</th>
            <td><i class="fas fa-times"></i></td>
            <td><i class="fas fa-times"></i></td>
            <td><i class="fas fa-check"></i></td>
            <td><i class="fas fa-check"></i></td>
          </tr>
        </tbody>
      </table>

      <!-- Sessão Flows -->
      <section class="mt-3">
        <div>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button @click="arcodion = !arcodion" style="width:100%" v-b-toggle.accordion-1 variant="info"> 
                <div class="row">
                  <span class="d-flex justify-content-start pr-4 col-6" style="font-weight:900; font-size:20px; color:#022e6f; font-style: italic;"> Flows / Fluxos </span>
                  <h5 v-if="arcodion" class="d-flex justify-content-end pr-4 pt-2 col-6"><i class="fas fa-minus"></i></h5> 
                  <h5 v-if="!arcodion" class="d-flex justify-content-end pr-4 pt-2 col-6"><i class="fas fa-plus"></i></h5> 
                </div>
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <table class="table table-bordered">
                    <tbody style="background: #f8f8f8; max-width:1vw !important;">
                      <tr>
                        <th scope="row">Quantidades de robôs por fluxo</th>
                        <td> <p> 1 </p> </td>
                        <td> <p> 2 </p> </td>
                        <td> <p> 5 </p> </td>
                        <td> <p> Ilimitado </p> </td>
                      </tr>
                      <tr>
                        <th scope="row">Criação de Robôs por fluxos</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Cadastro de informação via robô</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Adição de tags</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Direcionamento para um CRM</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Direcionamento para fila de atendimento</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Chamadas de APIs via requisição externa (Com tratamento de sucesso e erro, bem como tratamento do valor retornado)</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Envio de arquivos de midia</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Envio de audio</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Criação de sequências de menus numéricos e por palavra</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Envio de e-mail</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                    </tbody>
                  </table>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </section>


      <!-- Sessão Funil -->
      <section class="mt-3">
        <div>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button @click="arcodion2 = !arcodion2" style="width:100%" v-b-toggle.accordion-2 variant="info"> 
                <div class="row">
                  <span class="d-flex justify-content-start pr-4 col-6" style="font-weight:900; font-size:20px; color:#022e6f; font-style: italic;"> Funil </span>
                  <h5 v-if="arcodion2" class="d-flex justify-content-end pr-4 pt-2 col-6"><i class="fas fa-minus"></i></h5> 
                  <h5 v-if="!arcodion2" class="d-flex justify-content-end pr-4 pt-2 col-6"><i class="fas fa-plus"></i></h5> 
                </div>
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion2" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <table class="table table-bordered">
                    <tbody style="background: #f8f8f8;">
                      <tr>
                        <th scope="row">Agenda de atividades</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Criação de etapas do relacionamento</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Linha do tempo do cliente</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Dados cadastrais do cliente</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                    </tbody>
                  </table>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </section>

      <!-- Sessão Chat -->
      <section class="mt-3">
        <div>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button @click="arcodion3 = !arcodion3" style="width:100%" v-b-toggle.accordion-3 variant="info"> 
                <div class="row">
                  <span class="d-flex justify-content-start pr-4 col-6" style="font-weight:900; font-size:20px; color:#022e6f; font-style: italic;"> Chat </span>
                  <h5 v-if="arcodion3" class="d-flex justify-content-end pr-4 pt-2 col-6"><i class="fas fa-minus"></i></h5> 
                  <h5 v-if="!arcodion3" class="d-flex justify-content-end pr-4 pt-2 col-6"><i class="fas fa-plus"></i></h5> 
                </div>
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion3" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <table class="table table-bordered">
                    <tbody style="background: #f8f8f8;">
                      <tr>
                        <th scope="row">Adição de contatos</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Fila de atendimento</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Fila do chatbot</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Atendimentos dos operadores *</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Atendimentos por setores</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Analista de emoções no chat de mensagens </th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                    </tbody>
                  </table>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </section>


      <!-- Sessão Clientes e Mensagens -->
      <section class="mt-3">
        <div>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button @click="arcodion4 = !arcodion4" style="width:100%" v-b-toggle.accordion-4 variant="info"> 
                <div class="row">
                  <span class="d-flex justify-content-start pr-4 col-6" style="font-weight:900; font-size:20px; color:#022e6f; font-style: italic;"> Clientes e Mensagens </span>
                  <h5 v-if="arcodion4" class="d-flex justify-content-end pr-4 pt-2 col-6"><i class="fas fa-minus"></i></h5> 
                  <h5 v-if="!arcodion4" class="d-flex justify-content-end pr-4 pt-2 col-6"><i class="fas fa-plus"></i></h5> 
                </div>
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-4" accordion="my-accordion4" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <table class="table table-bordered">
                    <tbody style="background: #f8f8f8;">
                      <tr>
                        <th scope="row">Agenda de clientes</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Carteira de clientes</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Etiquetas</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Mensagens rápidas</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Mensagens Variáveis</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Comandos</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Tabulação nos atendimentos</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Setorização nos atendimentos</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                    </tbody>
                  </table>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </section>


      <!-- Sessão Inteligência Artificial -->
      <section class="mt-3">
        <div>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button @click="arcodion5 = !arcodion5" style="width:100%" v-b-toggle.accordion-5 variant="info"> 
                <div class="row">
                  <span class="d-flex justify-content-start pr-4 col-6" style="font-weight:900; font-size:20px; color:#022e6f; font-style: italic;"> Inteligência Artificial da Tallos </span>
                  <h5 v-if="arcodion5" class="d-flex justify-content-end pr-4 pt-2 col-6"><i class="fas fa-minus"></i></h5> 
                  <h5 v-if="!arcodion5" class="d-flex justify-content-end pr-4 pt-2 col-6"><i class="fas fa-plus"></i></h5> 
                </div>
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-5" accordion="my-accordion5" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <table class="table table-bordered">
                    <tbody style="background: #f8f8f8;">
                      <tr>
                        <th scope="row">Quantidade de treinamentos na I.A</th>
                        <td style="opacity:0.5"> 0 </td>
                        <td style="opacity:0.5"> 1000 </td>
                        <td style="opacity:0.5"> 5000 </td>
                        <td style="opacity:0.5"> Ilimitado </td>
                      </tr>
                      <tr>
                        <th scope="row">Demandas e Treinamento: Treine o seu chatbot para responder mensagens padrões, sendo possível o entendimento de contextos conversacionais </th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Palavras-chaves / gatilhos</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Analise de treinamentos </th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Registros de atendimento: saiba a taxa de precisão de respostas do seu chatbot. </th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Treinamentos para chamadas de fluxos ou ações no sistema </th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                    </tbody>
                  </table>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </section>


      <!-- Sessão Integrações -->
      <section class="mt-3">
        <div>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button @click="arcodion6 = !arcodion6" style="width:100%" v-b-toggle.accordion-6 variant="info"> 
                <div class="row">
                  <span class="d-flex justify-content-start pr-4 col-6" style="font-weight:900; font-size:20px; color:#022e6f; font-style: italic;"> Integrações </span>
                  <h5 v-if="arcodion6" class="d-flex justify-content-end pr-4 pt-2 col-6"><i class="fas fa-minus"></i></h5> 
                  <h5 v-if="!arcodion6" class="d-flex justify-content-end pr-4 pt-2 col-6"><i class="fas fa-plus"></i></h5> 
                </div>
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-6" accordion="my-accordion6" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <table class="table table-bordered">
                    <tbody style="background: #f8f8f8;">
                      <tr>
                        <th scope="row">Webhook / RD Station Marketing</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Chamadas de API</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Webhook / RD Station Marketing</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                    </tbody>
                  </table>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </section>


      <!-- Sessãos Canais -->
      <section class="mt-3">
        <div>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button @click="arcodion7 = !arcodion7" style="width:100%" v-b-toggle.accordion-7 variant="info"> 
                <div class="row">
                  <span class="d-flex justify-content-start pr-4 col-6" style="font-weight:900; font-size:20px; color:#022e6f; font-style: italic;"> Canais </span>
                  <h5 v-if="arcodion7" class="d-flex justify-content-end pr-4 pt-2 col-6"><i class="fas fa-minus"></i></h5> 
                  <h5 v-if="!arcodion7" class="d-flex justify-content-end pr-4 pt-2 col-6"><i class="fas fa-plus"></i></h5> 
                </div>
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-7" accordion="my-accordion7" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <table class="table table-bordered">
                    <tbody style="background: #f8f8f8;">
                      <tr>
                        <th scope="row">Widget Site</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">WhatsApp Business API</th>
                        <td colspan="4">Disponibilizamos a integração com WhatsApp Business API em todos os planos, mediante contratação e aprovação junto ao broker oficial. Após o processo, é possível integrar o canal na Tallos.	</td>
                      </tr>
                      <tr>
                        <th scope="row">Telegram</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Messenger</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">VoIP *</th>
                        <td colspan="4">Mediante contratação do plano de tarifação de ligações.</td>
                      </tr>
                    </tbody>
                  </table>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </section>


      <!-- Sessão Configurações -->
      <section class="mt-3">
        <div>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button @click="arcodion8 = !arcodion8" style="width:100%" v-b-toggle.accordion-8 variant="info"> 
                <div class="row">
                  <span class="d-flex justify-content-start pr-4 col-6" style="font-weight:900; font-size:20px; color:#022e6f; font-style: italic;"> Configurações </span>
                  <h5 v-if="arcodion8" class="d-flex justify-content-end pr-4 pt-2 col-6"><i class="fas fa-minus"></i></h5> 
                  <h5 v-if="!arcodion8" class="d-flex justify-content-end pr-4 pt-2 col-6"><i class="fas fa-plus"></i></h5> 
                </div>
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-8" accordion="my-accordion8" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <table class="table table-bordered">
                    <tbody style="background: #f8f8f8;">
                      <tr>
                        <th scope="row">Encerramento Automático</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Fuso horário</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Horário de atendimento *</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Ocultar Início e Término</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Ocultar Aguardando Atendimento</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Exibir posição da fila</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Ocultar Transferência</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Limitar Tentativas de Interações: Informar número máximo de tentativas de interações com o Bot.</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Configurações da Fila</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Configurações do Fluxo</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Configuração de Avaliações de Atendimentos</th>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Definir o nome do operador na Mensagem</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Mensagens padrões no atendimento</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                      <tr>
                        <th scope="row">Feriados</th>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                        <td><i class="fas fa-check"></i></td>
                      </tr>
                    </tbody>
                  </table>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </section>


    </section>
    </section>

    <section class="btn-up d-flex justify-content-end mx-5 mt-0 mb-5">
      <button style="border-color: #022e6f;" class="btn" @click="toUp()"> 
        <p style="color:#022e6f; position: relative;" class="d-flex align-items-center justify-content-center p-0 m-0 mt-2">
          Voltar ao topo 
        </p>
      </button>
    </section>

  </div>
</template>

<script>
import FormRD from './FormRd'

export default {
  components: {
    FormRD
  },
  data() {
    return {
      arcodion: false,
      arcodion2: false,
      arcodion3: false,
      arcodion4: false,
      arcodion5: false,
      arcodion6: false,
      arcodion7: false,
      arcodion8: false,
    }
  },
  methods: {
    toUp() {
      window.scrollTo(0, 0)
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
    .before-enter {
        opacity: 0;
        transform: translateY(100px);
        transition: all 1.5s ease-out;
    }

    .enter {
        opacity: 1;
        transform: translateY(0px);
    }


  h1 {font-size: 2.8vw;}
  h2 {font-size: 2vw;}
  h3 {font-size: 1.6vw;}
  p {font-size: 1vw;}
  b {font-size: 3vw;}

  .btn-plan {
    background-color: #0199ca;
    border: none;
  }

  button:hover {
    font-weight: 400 !important;
  }
  
  .plan h2 {
    font-weight: 700;
  }

  .plan p {
    font-weight: 300;
  }

  .plan .fa-star {
    position:absolute; 
    left:5%; 
    color: gold;
    top: 3%;
    animation: pulse 1s;
    animation-iteration-count: infinite;
  }

  @keyframes pulse {
    0%{
      transform: scale(.5);
    }
    60%{
      transform: scale(1.1);
    }
    80% {
      transform: scale(1);
    }
    100%{
      transform: scale(.5);
    }
  }
  span {
    color: #0199ca;
    font-size: 30px;
    font-weight: 800;
  }

  #accordion-1 > div > p > table,
  #accordion-2 > div > p > table {
    margin-bottom: 0 !important;
  }

  h5 {
    font-size: 15px;
    font-weight: 900;
  }

  .background-plans {
    position: absolute;
    width: 100%;
    height: 750px;
    background: linear-gradient(#022e6f ,#029bcd);
    text-align: center;
  }
  .background-plans::before {
    content: '';
    width: 800px;
    height: 450px;
    position: fixed;
    left: -250px;
    transform: rotate(45deg);
    opacity: .03;
    background: #fff;
  }


  .background-plans::after {
    content: '';
    width: 1000px;
    height: 450px;
    position: fixed;
    margin-top: 1%;
    right: -200px;
    transform: rotate(45deg);
    opacity: .03;
    background: #fff;
  }

  .txt-start {
    margin-top: 8%;
  }

  #t-container > article > div > div > div > section.mx-5.table-section.row > section.col-md-8.col-12 > table > tbody {
    background: #f8f8f8;
  }

  .plan {
    position: relative;
    z-index: 1;
    box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.2);
    background: #fff;
    text-align: center;
    border-radius: 10px;
    top:450px;
    margin-bottom: 25%;
  }
  .plan-basic {
    color: white;
    padding: 40px;
    border-radius: 10px 0 0 10px;
    background: #022e6f;/*#0199ca; 4158d8 */
  }
  .plan-basic::before {
    content: '';
    height: 50%;
    background: #fff;
    width: 100%;
    left: 25%;
    top: 25%;
    transform: rotate(60deg);
    opacity: 0.05;
    position: absolute;
  }

  .plan-basic span {
    color: white;
  }
  .section-color {
    background: #f8f8f8;
    width: 100%;
    height: 100px;
  }

  /* .plan-basic::before {
    background: url('../../assets/img/tt.gif');
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  } */

  .plan-essential, .plan-avanced, .plan-pro {
    padding: 40px;
  }


  .plan-basic:hover {
    transform: scale(1.01);
    border-radius: 10px;
    box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.2);
  }
  .plan-essential:hover,
  .plan-avanced:hover {
    transform: scale(1.03);
    border-radius: 10px 10px 0 0;
    box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.2);
    background: white;
  }

  .plan-pro:hover {
    transform: scale(1.03);
    border-radius: 10px 10px 10px 0;
    box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.2);
    background: white;
  }

  .plan-basic, .plan-essential, .plan-avanced {
    box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.2);
  }
  
  .txt-start {
    margin-bottom: 5% ;
    color: white;
    font-size: 70px;
    padding: 0 20% 0 20%;
  }

  .txt-start h1 {
    /* font-weight: 900; */
    max-width: 70vw;
    margin: auto;
    margin-bottom: 30px;
  }

  .txt-start span {
    font-size: 25px;
    font-weight: 600;
    word-spacing: 5px;
    letter-spacing: 1px;
  }

  .txt-start p {
    font-size: 1.3vw;
  }

  .btn {
    font-size: 15px;
    font-weight: 800;
    text-transform: uppercase;
    margin-top: 5%;
  }
  .btn-consultor button{
    background-color: #008FBF;
    color: white;
    outline: none;
    border: none;
    /* border-radius: 10px !important; */
  }

  .btn-consultor span{
    color: white;
    font-size: 1.2vw;
  }
  
  .table-section {
    margin: 5vw  5vw 0 ;
  }

  .table-imgs img{
    width: 30vw;
  }

  .p-1 {
    padding: 0!important;
  }

  .card-body {
    padding: 0 !important;
  }

  td{
    text-align: center;
    min-width: 9vw !important;
    max-width: 9vw !important;
    font-size: 20px;
  }
  td p {
    opacity: 0.5;
    margin: auto;
    align-items: center;
  }
  tbody th {
    font-size: 20px;
    min-width: 9vw !important;
    max-width: 9vw !important;
    font-weight: 400;
    width: 25%;
  }

  #t-container > article > div > div > div > section.mx-5.table-section.row > section.col-md-12.col-lg-12.col-xl-8.col-12 > table > tbody {
    background: #f8f8f8;
  }

  tbody td:hover {
    background-color: #b2bec3;
  }
  .btn:focus ,.btn-info:focus {
    box-shadow: none !important;
  }

  #accordion-3 > div > p > table {
    margin-bottom: 0 !important;
  }
  thead th {
    background-color:#dfe6e9;
    color: #022e6f;
    font-size: 25px;
    font-weight: 400;
    min-width: 9vw !important;
    max-width: 9vw !important;
    font-style: italic;
    text-align: center;
  }
  .table-active {
    background-color: #dfe6e9;
  }
  .table-section button {
    margin: 0 !important;
    color: #022e6f;
    outline: none;
    border: none;
    background: #dfe6e9;
  }
  .btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active, .show > .btn-info.dropdown-toggle {
    background: none;
    border-color: none;
  }

  .fa-times {
    filter: opacity(.3);
  }
  .fa-check {
    color: #00A3D9;
    /* filter:  invert(57%) sepia(81%) saturate(1623%) hue-rotate(106deg) brightness(94%) contrast(101%); */
  }

  .attendance {
    width: 90%;
    display: flex;
    align-content: center;
    text-align: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.9);
    align-items: center;
    background: white;
    margin: 0 auto;
  }

  .img-card img {
    margin-top: -150px;
  }

  .content-card p, h3 {
    text-align: left;
    padding: 0 10% 0 10%;
  }

  .content-card h3 {
    font-size: 50px;
  }



@media (max-width: 576px) {
  h1 {font-size: 7vw;}
  h2 {font-size: 8vw;}
  h3 {font-size: 5.5vw;}
  p {font-size: 4.5vw;}
  b {font-size: 8vw; font-weight: 700}

  .background-plans {
    top: 0px;
  }

  .txt-start p {
    font-size: 4vw;
  }

  .plan-basic::before {
    content: '';
    height: 35%;
    background: #fff;
    width: 60%;
    left: 20%;
    z-index: 1000;
    overflow: hidden;
    top: 35%;
    transform: rotate(45deg);
    opacity: 0.05;
    position: absolute;
  }

  .plan-basic {
    border-radius: 10px 10px 0 0;
  }

  .btn {
    width: 80%;
  }

  .btn-contract {
    position: relative !important;
  }

  .txt-start {
    margin-top: 25vw;
    padding: 0 5px;
  }
  
  #t-container > article > div > div > div > section.btn-consultor.d-flex.justify-content-center > button {
    position: relative;
    width: 50%;
    margin-top: 450px;
  }
  
  .plan-basic, .plan-essential, .plan-avanced, .plan-pro {
    box-shadow: none;
  }

  .table-section {
    display: none;
  }

  #t-container > article > div > div > div > section.btn-consultor.d-flex.justify-content-center > button {
    margin-top: 500px;
    font-size: 10px;
  }

  #t-container > article > div > div > div > section.btn-consultor.d-flex.justify-content-center > button span{
    font-size: 20px;
  }
  .plan {
    width: 90%;
    margin: 0 auto !important;
    z-index: 1;
  }
  .attendance {
    border-radius: 10px;
  }

  .img-card img {
    margin-top: 0px;
  }

  .content-card p, h3 {
    text-align: left;
    padding: 5% 0;
  }

  .content-card h3 {
    margin-top:15px;
    font-size: 30px;
  }

  .btn-up {
    display: none !important;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  h1 {font-size: 6vw;}
  h2 {font-size: 5vw;}
  h3 {font-size: 4vw;}
  p {font-size: 3vw;}
  b {font-size: 5vw; font-weight: 700}

  .plan-basic, .plan-essential, .plan-avanced, .plan-pro {
    box-shadow: none;
  }
  .txt-start {
    padding: 0 5px;
  }

  .txt-start p {
    font-size: 2.5vw;
  }

  #t-container > article > div > div > div > section.btn-consultor.d-flex.justify-content-center.position-relative.my-5 > button > span {
    font-size: 2vw;
  }
  
  .plan-basic {
    border-radius: 10px 10px 0 0;
  }

  .background-plans {
    top: 0px;
  }

  .attendance {
    margin-top: 0%;
    width: 90%;
    display: flex;
    align-content: center;
    text-align: center;
    justify-content: center;
    align-items: center;
    background: white;
    margin-left: 5%;
  }

  #t-container > article > div > div > div > section.btn-consultor.d-flex.justify-content-center > button {
    width: 70%;
    margin-top: 400px;
  }
  .plan-basic::before {
    content: '';
    height: 40%;
    background: #fff;
    width: 50%;
    left: 25%;
    z-index: 1000;
    overflow: hidden;
    top: 30%;
    transform: rotate(45deg);
    opacity: 0.05;
    position: absolute;
  }
  .table-section {
    display: none;
  }

  .btn-up {
    display: none !important;
  }

  .img-card img {
    margin-top: 0px;
  }

  .content-card p, h3 {
    text-align: left;
    padding: 0 10% 0 10%;
  }

  .content-card h3 {
    margin-top:15px;
    font-size: 30px;
  }

  .attendance img {
    width: 70%
  }

}

@media (min-width: 768px) and (max-width: 992px) {
  h1 {font-size: 5vw;}
  h2 {font-size: 4vw;}
  h3 {font-size: 3.5vw;}
  p {font-size: 2.5vw;}
  b {font-size: 4vw; font-weight: 700}

  .plan-essential {
    box-shadow: none;
  }
  .txt-start {
    padding: 0 50px;
  }

  .txt-start p {
    font-size: 2vw;
  }

  .background-plans {
    top: 0px;
  }

  .plan-basic::before {
    content: '';
    height: 40%;
    background: #fff;
    width: 100%;
    left: 5%;
    z-index: 1000;
    overflow: hidden;
    top: 25%;
    transform: rotate(45deg);
    opacity: 0.05;
    position: absolute;
  }

  .table-imgs {
    display: none;
  }

  .btn-up {
    display: none !important;
  }

  .attendance {
    margin-top: 0%;
    width: 90%;
    display: flex;
    align-content: center;
    text-align: center;
    justify-content: center;
    align-items: center;
    background: white;
    margin-left: 5%;
  }

  #t-container > article > div > div > div > section.btn-consultor.d-flex.justify-content-center > button {
    width: 50%;
    margin-top: 400px;
  }

  #t-container > article > div > div > div > section.btn-consultor.d-flex.justify-content-center.position-relative.my-5 > button > span {
    font-size: 2vw;
  }

  .img-card img {
    margin-top: 0px;
  }

  .content-card p, h3 {
    text-align: left;
    padding: 10px;
  }

  .section-accordion {
    display: none;
  }

  .plan {
    z-index: 1;
  }

  .plan-basic {
    border-radius: 10px 0 0 0;
  }

  .content-card h3 {
    margin-top:15px;
    font-size: 30px;
  }

  .attendance img {
    width: 100%
  }
}

@media (min-width: 992px) and (max-width: 1200px) {

  h1 {font-size: 5vw;}
  h2 {font-size: 3vw;}
  h3 {font-size: 2.5vw;}
  p {font-size: 2vw;}
  b {font-size: 3vw; font-weight: 700}

  .plan-avanced {
    box-shadow: none;
  }
  .txt-start {
    padding: 0 50px;
  }

  .plan-basic {
    border-radius: 10px 0 0 0;
  }

  .background-plans {
    top: 0px;
  }

  .plan {
    z-index: 1;
  }
  .table-imgs {
    display: none;
  }
  .attendance {
    margin-top: 0%;
    width: 90%;
    display: flex;
    align-content: center;
    text-align: center;
    justify-content: center;
    align-items: center;
    background: white;
    margin-left: 5%;
  }

  #t-container > article > div > div > div > section.btn-consultor.d-flex.justify-content-center > button {
    width: 50%;
    margin-top: 350px;
  }

  .section-accordion {
    margin: 0 15vw 15%;
  }

  .img-card img {
    margin-top: 0px;
  }

  .content-card p, h3 {
    text-align: left;
    padding: 10px;
  }

  .content-card h3 {
    margin-top:15px;
    font-size: 30px;
  }

  .attendance img {
    width: 100%
  }
  .btn-contract {
    width: 100%;
  }

}

@media (min-width: 1200px) and (max-width: 1600px) {

  h1 {font-size: 2.8vw;}
  h2 {font-size: 2vw;}
  h3 {font-size: 1.6vw;}
  p {font-size: 1vw;}
  b {font-size: 3vw;}

  .txt-start {
    padding: 0 50px;
  }

  .background-plans {
    top: 0px;
    height: 650px;
  }

  .plan {
    margin-bottom: 15%;
    margin-top: -10rem;
    z-index: 1;
  }

  .attendance {
    margin-top: 0%;
    width: 90%;
    display: flex;
    align-content: center;
    text-align: center;
    justify-content: center;
    align-items: center;
    background: white;
    margin-left: 5%;
  }

  #t-container > article > div > div > div > section.btn-consultor.d-flex.justify-content-center > button {
    width: 30%;
    margin-top: 300px;
  }

  .img-card img {
    margin-top: 0px;
  }

  .content-card p, h3 {
    text-align: left;
    padding: 10px;
  }

  .content-card h3 {
    margin-top:15px;
    font-size: 30px;
  }

  .attendance img {
    width: 100%
  }
  .btn-contract {
    width: 100%;
  }
}

</style> 