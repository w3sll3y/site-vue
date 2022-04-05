<template>
  <div id="container">
    <section class="pl-5 pt-5 header-checkout">
      <img width="150" src="../../assets/img/tallos-white-logo.svg" alt="">
    </section>
    <section class="txt-checkout d-flex flex-column align-items-center justify-content-center mb-4">
      <h2>Quase lá!</h2>
      <strong> Falta pouco pra você conhecer a plataforma que vai impactar seu negócio! </strong>
    </section>
    <section v-if="selected == 1 && !hasEventsActive" class="bars d-flex justify-content-center mb-3">
      <div class="bar bar-check"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </section>

    <section v-if="selected == 2 && !hasEventsActive" class="bars d-flex justify-content-center mb-3">
      <div class="bar bar-check"></div>
      <div class="bar bar-check"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </section>

    <section v-if="selected == 3 || hasEventsActive" class="bars d-flex justify-content-center mb-3">
      <div class="bar bar-check"></div>
      <div class="bar bar-check"></div>
      <div class="bar bar-check"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </section>

    <section v-if="selected == 4 || hasEventsActive" class="bars d-flex justify-content-center mb-3">
      <div class="bar bar-check"></div>
      <div class="bar bar-check"></div>
      <div class="bar bar-check"></div>
      <div class="bar bar-check"></div>
      <div class="bar"></div>
    </section>

    <section v-if="selected == 5 || hasEventsActive" class="bars d-flex justify-content-center mb-3">
      <div class="bar bar-check"></div>
      <div class="bar bar-check"></div>
      <div class="bar bar-check"></div>
      <div class="bar bar-check"></div>
      <div class="bar bar-check"></div>
    </section>

    <section class="position-relative d-flex justify-content-center">

      <section v-if="selected == 1 && !hasEventsActive"
               class="form-plans d-flex flex-column align-items-center justify-content-center">
        <h4 v-if="plan === 'basic'">Básico</h4>
        <h4 v-if="plan === 'essential'">Essencial</h4>
        <h4 v-if="plan === 'avancado'">Avançado</h4>
        <h4 v-if="plan === 'pro'">Profissional</h4>

        <div class="container-input mb-2">
          <label>
            Razão Social<span class="text-danger">*</span>
          </label> <br>
          <input type="text" @focusout="callFieldsValidationStepOne('name', $event)"
                 :class="invalidFieldsStepOne.name ? 'border-danger' : ''" v-model="newLead.name"/>
        </div>
        <div class="container-input mb-2">
          <label>Nome Fantasia</label> <br>
          <input type="text" v-model="newLead.nameCompany"/>
        </div>

        <div class="container-input mb-2">
          <label>
            Telefone <span class="text-danger">*</span>
          </label> <br>
          <input type="text" v-mask="masks.phone" @focusout="callFieldsValidationStepOne('phone', $event)"
                 :class="invalidFieldsStepOne.phone ? 'border-danger' : ''" v-model="newLead.phone"/>
        </div>

        <div class="container-input mb-2">
          <label>
            CPF/CNPJ <span class="text-danger">*</span>
          </label> <br>
          <input @keyup="callFieldsValidationStepOne('cpf_cnpj', $event)" v-mask="masks.cpf_cnpj_mask"
                 :class="invalidFieldsStepOne.cpf_cnpj ? 'border-danger segment' : 'segment'" type="text"
                 v-model="newLead.cnpj"/>
        </div>
        <div class="container-input mb-3">
          <label>Cargo</label> <br>
          <input class="segment" type="text" v-model="newLead.charge"/>
        </div>
        <div class="container-select mb-3">
          <label>Segmento da Empresa</label> <br>
          <select style="max-width: 90%;" class="form-control" v-model="newLead.follow">
            <option v-for="(item, index) in allSegments" :value="item" :key="index">{{ item }}</option>
          </select>
        </div>

        <div class="container-input mb-5">
          <label>
            E-mail <span class="text-danger">*</span>
          </label> <br>
          <input type="text" @focusout="callFieldsValidationStepOne('email', $event)"
                 :class="invalidFieldsStepOne.email ? 'border-danger segment' : 'segment'" v-model="newLead.email"/>
        </div>

      </section>

      <!-- Sessão de Informações do Negócio -->
      <section v-else-if="selected == 2 && !hasEventsActive" class="form-2 form-plans d-flex justify-content-center flex-column">
        <h4 style="font-style: italic;" class="d-flex justify-content-center"> Adicionais </h4>

        <div class="container-input mb-2-radio">
          <form>
            <section>
              <label  class="row d-flex justify-content-center label-principal"> 
                Adicionar Usuário 
              </label> 
                    <label class="d-flex justify-content-center separator">2 Usuários já disponíveis na plaforma <span class="text-danger">*</span></label>
              <section class="row mt-4 d-flex justify-content-center mb-4">
                  <label class="mr-2 ">Adicionar Usuário</label>
                  <input style="width:30px" type="number" v-model="addUser" @keyup="qtdAddUser()"> 
                  <span @click="moreUser" class="btn btn-sm"> <i style="color:#022e6f" class="fas fa-plus"></i> </span>
              </section>
              <section class="d-flex justify-content-center">
                  <span> Preço por Usuário: R$ {{ price }},00 </span>
              </section><section class="d-flex justify-content-center mb-4">
                  <span> Preço total: R$ {{ totalPrice }},00 </span>
              </section>
            </section>
          </form>
        </div>
      </section>

      <section v-else-if="selected == 3" class="form-2 form-plans d-flex justify-content-center flex-column">
        <h4 style="font-style: italic;" class="d-flex justify-content-center"> Canais de comunicação </h4>
        <div class="form-2 d-flex justify-content-center">
          <div class="container-input mb-2-radio mt-2 d-flex justify-content-center flex-column">
            <label class="d-flex justify-content-center label-principal"> Whatsapp API </label>
            <span class="d-flex justify-content-center mb-3 text-center">Com o Whatsapp API Você consegue tararataratarata atraves do nosso broken, GupShup.</span>
            <form>
              <section class="row mx-0 d-flex justify-content-center">
                <div class="form-check" @click="newLead.whatsappAPI = true">
                  <input 
                    type="radio"
                    name="flexRadioDefault1"
                    class="mr-2"
                    :value="true"
                    v-model="newLead.whatsappAPI"
                    :data-checked="( newLead.whatsappAPI === true ) ? true : false"
                    id="tooltip-target-2"
                  />
                  <label class="form-check-label mr-2">
                    Sim
                  </label>
                </div>
                
                <div class="form-check" @click="newLead.whatsappAPI = false">
                  <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault1"
                      id="nowpp"
                      :value="false"
                      :data-checked="( newLead.whatsappAPI === false ) ? true : false"
                      v-model="newLead.whatsappAPI"
                  />
                  <label class="form-check-label ml-0">
                    Não
                  </label>
                </div>
              <div class="whatsapp-api" v-if="newLead.whatsappAPI">
                <section>
                  <section class="row mr-2 d-flex justify-content-center mt-5 mx-4">
                    <label class="mr-2">Adicionar Números:</label>
                    {{ addWhats }}
                    <span  @click="lessWhats" style="color: #ff6b6b" class="ml-1 p-1 ml-0 btn-sm"> <i class="fas fa-minus"></i> </span >
                    <span  @click="moreWhats" style="color: #022e6f" class="p-1 btn-sm"> <i class="fas fa-plus"></i> </span >
                  </section>
                  <hr class="separator" style="border-top: dashed #ccc .5px"/>
                  <div>
                    <label class="text-center d-flex justify-content-center separator">Interações passivas ilimitadas por R$450,00</label>
                    <h5 class="text-center d-flex justify-content-center"> Cobrança mediante a aprovação do Whatsapp<span class="text-danger">*</span></h5>
                  </div>
                  <div class="form-check mt-2" @click="newLead.whatsappApiType = 'monthly'">
                    <input
                        class="form-check-input mt-1"
                        type="radio"
                        value="monthly"
                        v-model="newLead.whatsappApiType"
                        :data-checked="( newLead.whatsappApiType === 'monthly' ) ? true : false"
                    />
                    <label class="form-check-label ml-3">
                      Passivas Ilimitadas
                    </label>
                  </div>
                  <hr class="separator" style="border-top: dashed #ccc .5px"/>
                  <div>
                    <label class="text-center d-flex justify-content-center separator">Você escolhe na plataforma o pacote que mais se combina com
                      você</label>
                    <h5 class="text-center d-flex justify-content-center"> Cobrança mediante a aprovação do Whatsapp<span class="text-danger">*</span> </h5>
                  </div>
                  <div class="form-check mt-2" @click="newLead.whatsappApiType = 'single'">
                    <input
                        class="form-check-input mt-1"
                        type="radio"
                        value="single"
                        v-model="newLead.whatsappApiType"
                        :data-checked="( newLead.whatsappApiType === 'single' ) ? true : false"
                    />
                    <label class="form-check-label ml-3">
                      Contrato Único
                    </label>
                  </div>
                </section>
                <section class="d-flex justify-content-center mt-3"> 
                  <b-button style="font-weight:900" v-b-modal.modal-5 variant="primary" class="btn-sm">
                      Vídeo explicativo
                  </b-button>
                  <b-modal id="modal-5" size="lg" title="Formulário">
                      <VideoWpp />
                  </b-modal>
                </section>
              </div>
              </section>
            </form>
          </div>
        </div>


        <div class="container-input mb-2-radio">
          <form>
            <hr class="separator" style="background-color: #ccc"/>
              <label class="d-flex justify-content-center label-principal"> PABX </label>
          <span class="d-flex justify-content-center mb-3 text-center">Com PABX você por efetuar e receber ligações pelo meio digital, utilizando a Tallos.</span>
          <form class="mb-5">
            <section class="d-flex justify-content-center row mx-0">
              <div class="form-check" @click="newLead.PABX = true">
                  <input 
                    type="radio"
                    name="flexRadioDefault2"
                    class="mr-2"
                    :value="true"
                    v-model="newLead.PABX"
                    :data-checked="( newLead.PABX === true ) ? true : false"
                    id="tooltip-target-2"
                  />
                  <label class="form-check-label mr-2" for="pabx">
                    Sim
                  </label>
                </div>
                
                <div class="form-check" @click="newLead.PABX = false">
                  <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault2"
                      id="nowpp"
                      :value="false"
                      :data-checked="( newLead.PABX === false ) ? true : false"
                      v-model="newLead.PABX"
                  />
                  <label class="form-check-label ml-0" for="nopabx">
                    Não
                  </label>
                </div>

                <div v-if="newLead.PABX" class="col-12">
                <section>
                  <div>
                    <label class="d-flex justify-content-center separator">5 Ramais e ligações ilimitadas por R$300,00 <span class="text-danger">*</span></label>
                  </div>
                  <section class="row d-flex justify-content-center mt-4">
                    <label class="mr-2 d-flex justify-content-center">Adicionar Ramal</label>
                    <input style="width:30px" type="number" v-model="ramal" @keyup="qtdAddRamal()">
                    <span @click="addRamal" class="btn btn-sm"> <i style="color:#022e6f" class="fas fa-plus"></i> </span>
                  </section>
                      <section class="d-flex justify-content-center mt-4">
                          <span> Preço adicional por ramal R$ 17,00 </span>
                      </section>
                      <section class="d-flex justify-content-center mt-4 mb-5">
                          <span> Preço total: R$ {{ totalRamal }},00 </span>
                      </section>
                  <section>
                </section>
                </section>
                <section class="d-flex justify-content-center mt-3"> 
                        <b-button style="font-weight:900" v-b-modal.modal-5 variant="primary" class="btn-sm">
                            Vídeo explicativo
                        </b-button>
                        <b-modal id="modal-5" size="lg" title="Formulário">
                            <VideoPabx />
                        </b-modal>
                      </section>
              </div>
            </section>
          </form>
          </form>
        </div>
      </section>

      <section v-else-if="selected == 4 && !hasEventsActive" class="form-2 form-plans d-flex justify-content-center flex-column">
        <h4 class="d-flex justify-content-center"> Endereço </h4>
        
        
        <div class="container-input mb-2-radio mt-2">
          <div class="mx-5 container-input mb-2 d-flex justify-content-center flex-column">
            <label>
              País <span class="text-danger">*</span>
            </label>
            <input type="text" @keyup="callFieldsValidationStepTwo('country')"
                  :class="invalidFieldsStepTwo.country ? 'border-danger' : ''" v-model="newLead.address.country"/>
          </div>
          <div class="mx-5 container-input mb-2 d-flex justify-content-center flex-column">
            <label>
              CEP <span class="text-danger">*</span>
            </label>
            <input type="text" @keyup="callFieldsValidationStepTwo('cep')"
                :class="invalidFieldsStepTwo.cep ? 'border-danger' : ''" v-mask="masks.cep"
                v-model="newLead.address.cep"/>
          </div>
          <section class="row mx-5">
            <div class="container-input col-12 col-md-8 mb-2">
              <label>
                Endereço <span class="text-danger">*</span>
              </label> <br>
              <input style="width:250px" type="text" @keyup="callFieldsValidationStepTwo('address')"
                    :class="invalidFieldsStepTwo.address ? 'border-danger' : ''" v-model="newLead.address.address"/>
            </div>
            <div width="10" class="container-input col-12 col-md-4">
              <label>
                Número <span class="text-danger">*</span>
              </label> <br>
              <input style="width:100px" type="number" @keyup="callFieldsValidationStepTwo('number')"
                    :class="invalidFieldsStepTwo.number ? 'border-danger' : ''" v-model="newLead.address.number"/>
            </div>
          </section>
          <div class="container-input mx-5 mb-2">
            <label>Complemento</label> <br>
            <input type="text" v-model="newLead.address.complement"/>
          </div>

          <div class="container-input mx-5 mb-2">
            <label>
              Bairro <span class="text-danger">*</span>
            </label> <br>
            <input type="text" @keyup="callFieldsValidationStepTwo('district')"
                  :class="invalidFieldsStepTwo.district.invalid ? 'border-danger' : ''"
                  :disabled="invalidFieldsStepTwo.district.disabled" v-model="newLead.address.district"/>
          </div>
          <section class="row mx-5">
            <div class="container-input mb-2">
              <label>
                Cidade <span class="text-danger">*</span>
              </label> <br>
              <input type="text" @keyup="callFieldsValidationStepTwo('city')"
                    :class="invalidFieldsStepTwo.city.invalid ? 'border-danger' : ''"
                    :disabled="invalidFieldsStepTwo.city.disabled" v-model="newLead.address.city"/>
            </div>

            <div class="container-input mb-2 mb-5">
              <label>
                Estado <span class="text-danger">*</span>
              </label> <br>
              <input type="text" @keyup="callFieldsValidationStepTwo('state')"
                    :class="invalidFieldsStepTwo.state.invalid ? 'border-danger' : ''"
                    :disabled="invalidFieldsStepTwo.state.disabled" v-model="newLead.address.state"/>
            </div>
          </section>
        </div>
      </section>

      <!-- Sessão de pagamento -->
      <section v-else-if="selected == 5 && !hasEventsActive"
               class="form-plans d-flex flex-column align-items-center justify-content-center">
        <h4>Forma de pagamento</h4>

        <span class="mt-4 mb-4">Selecione a forma de pagamento</span>

        <div class="accordion" role="tablist">
          <b-form-group>
            <b-card no-body class="mb-1">
              <b-card-header @click="payWithTicker" header-tag="header" class="p-1" role="tab">
                <b-button class="btn-collpase btn-primary" variant="primary" block v-b-toggle.accordion-1>Boleto
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text> Boleto <i class="fas fa-barcode"></i></b-card-text>
                  <span v-if="plan === 'basic'" class="price-plan">
                    <h5 style="margin:0; color: #000;">Plano Básico: R$ 97,00 </h5> 
                    <h5 style="margin:0; color: #000;"> Usuários adicionados: {{ addUser }} - R$ {{totalPrice}},00 </h5> 
                    <h5 style="margin:0; color: #000;" v-if="newLead.PABX == true"> PABX: Sim - R$ 300,00 </h5> 
                    <h5 style="margin:0; color: #000;" v-if="newLead.PABX == false"> PABX: Não - R$ 0,00 </h5> 
                    <h5 style="margin:0; color: #000;"> Ramais adicionados: {{ ramal }} - R$ {{totalRamal}},00 </h5>
                    <br />
                    <h5 style="margin:0; color: #000;"> Whatsapp API: 
                      <span v-if="newLead.whatsappAPI == true"> Sim </span>
                      <span v-if="newLead.whatsappAPI == false"> Não </span> </h5> 
                      <h5 v-if="newLead.whatsappAPI == true" style="margin: 0">  Obs: Valor cobrado após aprovação do Whatsapp</h5>
                    <h5 style="margin:0; color: #000;"> Números adicionados: {{ addWhats }}</h5>
                    <div class="d-flex justify-content-end">
                      Total: R$ {{ total = totalPrice + 97 + totalRamal + priceRamal }},00
                    </div>
                  </span> <br>
                  <span v-if="plan === 'essential'" class="price-plan">
                    <h5 style="margin:0; color: #000;">Plano Essencial: R$ 297,00 </h5> 
                    <h5 style="margin:0; color: #000;"> Usuários adicionados: {{ addUser }} - R$ {{totalPrice}},00 </h5> 
                    <h5 style="margin:0; color: #000;" v-if="newLead.PABX == true"> PABX: Sim - R$ 300,00 </h5> 
                    <h5 style="margin:0; color: #000;" v-if="newLead.PABX == false"> PABX: Não - R$ 0,00 </h5> 
                    <h5 style="margin:0; color: #000;"> Ramais adicionados: {{ ramal }} - R$ {{totalRamal}},00 </h5>
                    <br />
                    <h5 style="margin:0; color: #000;"> Whatsapp API: 
                      <span v-if="newLead.whatsappAPI == true"> Sim </span>
                      <span v-if="newLead.whatsappAPI == false"> Não </span> </h5> 
                      <h5 v-if="newLead.whatsappAPI == true" style="margin: 0">  Obs: Valor cobrado após aprovação do Whatsapp</h5>
                    <h5 style="margin:0; color: #000;"> Números adicionados: {{ addWhats }}</h5>
                    <div class="d-flex justify-content-end">
                      Total: R$ {{ total = totalPrice + 297 + totalRamal + priceRamal }},00
                    </div>
                  </span> <br>
                  <span v-if="plan === 'avancado'" class="price-plan">
                    <h5 style="margin:0; color: #000;">Plano Avançado: R$ 497,00 </h5> 
                    <h5 style="margin:0; color: #000;"> Usuários adicionados: {{ addUser }} - R$ {{totalPrice}},00 </h5> 
                    <h5 style="margin:0; color: #000;" v-if="newLead.PABX == true"> PABX: Sim - R$ 300,00 </h5> 
                    <h5 style="margin:0; color: #000;" v-if="newLead.PABX == false"> PABX: Não - R$ 0,00 </h5> 
                    <h5 style="margin:0; color: #000;"> Ramais adicionados: {{ ramal }} - R$ {{totalRamal}},00 </h5>
                    <br />
                    <h5 style="margin:0; color: #000;"> Whatsapp API: 
                      <span v-if="newLead.whatsappAPI == true"> Sim </span>
                      <span v-if="newLead.whatsappAPI == false"> Não </span> </h5> 
                      <h5 v-if="newLead.whatsappAPI == true" style="margin: 0">  Obs: Valor cobrado após aprovação do Whatsapp</h5>
                    <h5 style="margin:0; color: #000;"> Números adicionados: {{ addWhats }}</h5>
                    <div class="d-flex justify-content-end">
                      Total: R$ {{ total = totalPrice + 497 + totalRamal + priceRamal }},00
                    </div>   
                  </span> <br>
                  <span v-if="plan === 'pro'" class="price-plan">
                    <h5 style="margin:0; color: #000;">Plano Profissional: R$ 897,00 </h5> 
                    <h5 style="margin:0; color: #000;"> Usuários adicionados: {{ addUser }} - R$ {{totalPrice}},00 </h5> 
                    <h5 style="margin:0; color: #000;" v-if="newLead.PABX == true"> PABX: Sim - R$ 300,00 </h5> 
                    <h5 style="margin:0; color: #000;" v-if="newLead.PABX == false"> PABX: Não - R$ 0,00 </h5> 
                    <h5 style="margin:0; color: #000;"> Ramais adicionados: {{ ramal }} - R$ {{totalRamal}},00 </h5>
                    <br />
                    <h5 style="margin:0; color: #000;"> Whatsapp API: 
                      <span v-if="newLead.whatsappAPI == true"> Sim </span>
                      <span v-if="newLead.whatsappAPI == false"> Não </span> </h5> 
                      <h5 v-if="newLead.whatsappAPI == true" style="margin: 0">  Obs: Valor cobrado após aprovação do Whatsapp</h5>
                    <h5 style="margin:0; color: #000;"> Números adicionados: {{ addWhats }}</h5>
                    <div class="d-flex justify-content-end">
                      Total: R$ {{ total = totalPrice + 897 + totalRamal + priceRamal }},00
                    </div>
                  </span> <br>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-5">
              <b-card-header @click="payWithCard" header-tag="header" class="p-1" role="tab">
                <b-button class="btn-collpase btn-primary" variant="primary" block v-b-toggle.accordion-2>Cartão
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <div class="d-flex align-items-center">

                    <i class="fab fa-cc-visa h3"></i>

                    <i class="ml-2 fab fa-cc-mastercard h3"></i>

                    <i class="ml-2 fab fa-cc-diners-club h3"></i>

                    <i class="ml-2 fab fa-cc-amex h3"></i>

                    <i class="ml-2 fab fa-cc-discover h3"></i>

                  </div>
                  <b-card-text class="mt-2"> Cartão de Crédito <i class="fas fa-credit-card"></i></b-card-text>
                  <span v-if="plan === 'basic'" class="price-plan"> 
                    <h5 style="margin:0; color: #000;">Plano Básico: R$ 97,00 </h5> 
                    <h5 style="margin:0; color: #000;"> Usuários adicionados: {{ addUser }} - R$ {{totalPrice}},00 </h5> 
                    <h5 style="margin:0; color: #000;" v-if="newLead.PABX == true"> PABX: Sim - R$ 300,00 </h5> 
                    <h5 style="margin:0; color: #000;" v-if="newLead.PABX == false"> PABX: Não - R$ 0,00 </h5> 
                    <h5 style="margin:0; color: #000;"> Ramais adicionados: {{ ramal }} - R$ {{totalRamal}},00 </h5>
                    <br />
                    <h5 style="margin:0; color: #000;"> Whatsapp API: 
                      <span v-if="newLead.whatsappAPI == true"> Sim </span>
                      <span v-if="newLead.whatsappAPI == false"> Não </span> </h5> 
                      <h5 v-if="newLead.whatsappAPI == true" style="margin: 0">  Obs: Valor cobrado após aprovação do Whatsapp</h5>
                    <h5 style="margin:0; color: #000;"> Números adicionados: {{ addWhats }}</h5>
                    <div class="d-flex justify-content-end">
                      Total: R$ {{ total = totalPrice + 97 + totalRamal }},00
                    </div>
                  </span> <br>

                  <span v-if="plan === 'essential'" class="price-plan">
                    <h5 style="margin:0; color: #000;">Plano Essencial: R$ 297,00 </h5> 
                    <h5 style="margin:0; color: #000;"> Usuários adicionados: {{ addUser }} - R$ {{totalPrice}},00 </h5> 
                    <h5 style="margin:0; color: #000;" v-if="newLead.PABX == true"> PABX: Sim - R$ 300,00 </h5> 
                    <h5 style="margin:0; color: #000;" v-if="newLead.PABX == false"> PABX: Não - R$ 0,00 </h5> 
                    <h5 style="margin:0; color: #000;"> Ramais adicionados: {{ ramal }} - R$ {{totalRamal}},00 </h5>
                    <br />
                    <h5 style="margin:0; color: #000;"> Whatsapp API: 
                      <span v-if="newLead.whatsappAPI == true"> Sim </span>
                      <span v-if="newLead.whatsappAPI == false"> Não </span> </h5> 
                      <h5 v-if="newLead.whatsappAPI == true" style="margin: 0">  Obs: Valor cobrado após aprovação do Whatsapp</h5>
                    <h5 style="margin:0; color: #000;"> Números adicionados: {{ addWhats }}</h5>
                    <div class="d-flex justify-content-end">
                      Total: R$ {{ total = totalPrice + 297 + totalRamal }},00
                    </div>
                  </span> <br>

                  <span v-if="plan === 'avancado'" class="price-plan">
                    <h5 style="margin:0; color: #000;">Plano Avançado: R$ 497,00 </h5> 
                    <h5 style="margin:0; color: #000;"> Usuários adicionados: {{ addUser }} - R$ {{totalPrice}},00 </h5> 
                    <h5 style="margin:0; color: #000;" v-if="newLead.PABX == true"> PABX: Sim - R$ 300,00 </h5> 
                    <h5 style="margin:0; color: #000;" v-if="newLead.PABX == false"> PABX: Não - R$ 0,00 </h5> 
                    <h5 style="margin:0; color: #000;"> Ramais adicionados: {{ ramal }} - R$ {{totalRamal}},00 </h5>
                    <br />
                    <h5 style="margin:0; color: #000;"> Whatsapp API: 
                      <span v-if="newLead.whatsappAPI == true"> Sim </span>
                      <span v-if="newLead.whatsappAPI == false"> Não </span> </h5> 
                      <h5 v-if="newLead.whatsappAPI == true" style="margin: 0">  Obs: Valor cobrado após aprovação do Whatsapp</h5>
                    <h5 style="margin:0; color: #000;"> Números adicionados: {{ addWhats }}</h5>
                    <div class="d-flex justify-content-end">
                      Total: R$ {{ total = totalPrice + 497 + totalRamal }},00
                    </div>                  
                  </span> <br>

                  <span v-if="plan === 'pro'" class="price-plan"> 
                    <h5 style="margin:0; color: #000;">Plano Profissional: R$ 897,00 </h5> 
                    <h5 style="margin:0; color: #000;"> Usuários adicionados: {{ addUser }} - R$ {{totalPrice}},00 </h5> 
                    <h5 style="margin:0; color: #000;" v-if="newLead.PABX == true"> PABX: Sim - R$ 300,00 </h5> 
                    <h5 style="margin:0; color: #000;" v-if="newLead.PABX == false"> PABX: Não - R$ 0,00 </h5> 
                    <h5 style="margin:0; color: #000;"> Ramais adicionados: {{ ramal }} - R$ {{totalRamal}},00 </h5>
                    <br />
                    <h5 style="margin:0; color: #000;"> Whatsapp API: 
                      <span v-if="newLead.whatsappAPI == true"> Sim </span>
                      <span v-if="newLead.whatsappAPI == false"> Não </span> </h5> 
                      <h5 v-if="newLead.whatsappAPI == true" style="margin: 0">  Obs: Valor cobrado após aprovação do Whatsapp</h5>
                    <h5 style="margin:0; color: #000;"> Números adicionados: {{ addWhats }}</h5>
                    <div class="d-flex justify-content-end">
                      Total: R$ {{ total = totalPrice + 897 + totalRamal }},00
                    </div>
                  </span> <br>

                  <label class="mt-4">Titular do cartão</label>
                  <b-form-input v-model="newLead.cardData.nameCard" @keyup="callFieldsValidationStepThree('nameCard')"
                                :class="invalidFieldsStepThree.nameCard ? 'border-danger' : ''" class="mt-2"
                                type="text"></b-form-input>

                  <label class="mt-4">Número do cartão</label>
                  <b-form-input v-model="newLead.cardData.numberCard"
                                @keyup="callFieldsValidationStepThree('numberCard')"
                                :class="invalidFieldsStepThree.numberCard ? 'border-danger' : ''"
                                v-mask="masks.numberCard" class="mt-2" type="text"></b-form-input>

                  <div class="row mt-4 d-flex justify-content-between">
                    <div class="col-4">
                      <label class="mt-2">CVV</label>
                      <b-form-input v-model="newLead.cardData.cvvCard" @keyup="callFieldsValidationStepThree('cvvCard')"
                                    :class="invalidFieldsStepThree.cvvCard ? 'border-danger' : ''"
                                    v-mask="masks.cvvCard" class="mt-2" type="text"></b-form-input>
                    </div>
                    <div class="col-8 row d-flex flex-column">
                      <label class="mt-2">Vencimento</label>
                      <div class="d-flex">
                        <b-form-input v-model="newLead.cardData.monthDate"
                                      @keyup="callFieldsValidationStepThree('monthDate')"
                                      :class="invalidFieldsStepThree.monthDate ? 'border-danger' : ''"
                                      v-mask="masks.monthDate" class="mt-2 col-4" placeholder="MM"
                                      type="text"></b-form-input>
                        <b-form-input v-model="newLead.cardData.yearDate"
                                      @keyup="callFieldsValidationStepThree('yearDate')"
                                      :class="invalidFieldsStepThree.yearDate ? 'border-danger' : ''"
                                      v-mask="masks.yearDate" class="mt-2 ml-1 col-4" placeholder="AAAA"
                                      type="text"></b-form-input>
                      </div>
                    </div>
                  </div>
                </b-card-body>
              </b-collapse>
            </b-card>
          </b-form-group>
        </div>

        <div class="container-input mb-2 mb-5">
          <label>
            <i class="fa fa-ticket-alt"></i> Cupom de Desconto
          </label> <br>
          <input type="text" v-model="newLead.coupon"/>
        </div>

        <div class="container-input mb-2 p-3 pt-0 ml-3 mb-5">
          <label class="d-flex">
            <span class="mr-2">
                <input id="checkbox-terms" class="checkbox-terms w-auto" type="checkbox" name="terms" v-model="terms_checked" required />
            </span>
            <span>
                Ao avançar, você estará concordando com nossos <a id="link-terms" href="https://tallos-chat.s3.us-east-2.amazonaws.com/docs/tallos-chat-termos-trial.pdf" target="_blank">termos de uso</a>.
            </span>
          </label>
          <div id="help-block-company-terms" class="help-block with-errors"></div>
        </div>

      </section>

      <div v-else-if="gearScreen"
           class="btns d-flex mt-4 d-flex flex-row align-items-center justify-content-center btn-check">
        <div class="accordion" role="tablist">
          <Gears v-if="gearScreen && !errorRegister"/>
        </div>
      </div>

      <!-- Sessão de pagamento -->
      <div id="success-register-message" v-else-if="successRegister"
           class="form-plans d-flex flex-column align-items-center justify-content-center">
        <p v-if="newLead.payment === '3'">
          Ótimo, tudo pronto :)<br/><br/>
          Estamos processando seu pagamento, após a confirmação você receberá um e-mail com as credenciais de acesso à
          plataforma.
        </p>
        <p v-else>
          Ótimo, tudo pronto :)<br/><br/>
          Logo abaixo você pode fazer o download o boleto, após a confirmação você receberá um e-mail com as credenciais de acesso à
          plataforma.
        </p>
        <a v-if="newLead.payment === '0'" style="color: #ffffff !important;" :href="linkDuplicate" target="_blank" >
          <button class="btn ml-2 btn-next">Download do Boleto</button>
        </a>
        <br/>
        <small>
          Ah, e se não receber o email, verifique em sua caixa de spam ou entre em contato através dos canais de
          suporte.
        </small>
        <br/>
        <small class="d-flex align-items-center justify-content-center">
          <a href="https://api.whatsapp.com/send?phone=558530300410" target="_blank"
             style="color: #666666 !important;font-weight: bold;">
            <i class="fa fa-whatsapp" aria-hidden="true" style="font-size: 11px;"></i> &nbsp; (85) 3030-0410
          </a>
          <a class="mr-1 ml-1" style="color: #666666 !important;font-weight: bold;">
            |
          </a>
          <a href="mailto:financeiro@tallos.com.br" target="_blank" style="color: #666666 !important;font-weight: bold;">
            financeiro@tallos.com.br
          </a>
        </small>
      </div>

      <!-- Sessão de pagamento -->
      <section id="error-register-message" v-else-if="errorRegister"
               class="form-plans d-flex flex-column align-items-center justify-content-center">

        <p>Desculpe! :(<br/>Não consegui criar sua conta.</p>
        <br/>
        <br/>
        <small>Entre em contato com nosso time de suporte para ajudarmos você a começar.</small>
        <br/>
        <small class="d-flex align-items-center justify-content-center">
          <a href="https://api.whatsapp.com/send?phone=558530300410" target="_blank"
             style="color: #666666 !important;font-weight: bold;">
            <i class="fa fa-whatsapp" aria-hidden="true" style="font-size: 11px;"></i> &nbsp; (85) 3030-0410
          </a>
          <a class="mr-1 ml-1" style="color: #666666 !important;font-weight: bold;">
            |
          </a>
          <a href="mailto:suporte@tallos.com.br" target="_blank" style="color: #666666 !important;font-weight: bold;">
            suporte@tallos.com.br
          </a>
        </small>

      </section>

      <div v-if="hasInvalidFieldsStepOne" class="errors-preview alert alert-danger p-0 m-0 mb-3" role="alert">
        <span v-if="invalidFieldsStepOne.cpf_cnpj" class="span p-2 m-2">{{
            newLead.cnpj ? 'Você precisa informar um CPF válido.' : 'Por favor preencha seu CPF.'
          }}</span>
        <span v-else class="span p-2 m-2">Dados Inválidos</span>
      </div>
      <div v-if="hasInvalidFieldsStepTwo || hasInvalidFieldsStepThree"
           class="errors-preview alert alert-danger p-0 m-0 mb-3" role="alert">
        <span class="span p-2 m-2">Dados Inválidos</span>
      </div>
      <div
          v-if="userAreadyExists && !processing && !hasInvalidFieldsStepOne && !hasInvalidFieldsStepTwo && !hasInvalidFieldsStepThree"
          class="errors-preview alert alert-danger p-0 m-0 mb-3" role="alert">
        <span class="span p-2 m-2">{{
            userAreadyExistsStatus === 1 ? 'CPF/CNPJ já possui cadastro' : 'Email já possui cadastro'
          }}</span>
      </div>
      <div v-if="processing" class="errors-preview alert alert-info p-0 m-0 mb-3" role="alert">
        <span class="span p-2 m-2">Validando seus dados</span>
      </div>

    </section>
    <div v-if="selected == 1 && !hasEventsActive"
         class="btns d-flex mt-4 d-flex flex-column align-items-center justify-content-center">
      <!-- <button class="btn btn-danger"> Voltar</button> -->
      <button @click="next(1)" class="btn btn-next btn-continue" :disabled="blockStepOne || processing"> Continuar</button>
    </div>

    <div v-else-if="selected == 2"
         style="margin-bottom: 100%" class="btns d-flex d-flex mt-4 d-flex flex-row align-items-center justify-content-center">
      <button @click="back()" class="btn btn-secondary"> Voltar</button>
      <button @click="selected = 3; processing = false" class="btn ml-2 btn-next"> Continuar</button>
    </div> 

    <div v-else-if="selected == 3"
         style="margin-bottom: 100%" class="btns d-flex d-flex mt-4 d-flex flex-row align-items-center justify-content-center">
      <button @click="back()" class="btn btn-secondary"> Voltar</button>
      <button @click="verifyProd()" class="btn ml-2 btn-next"> Continuar</button>
    </div>

    <div v-else-if="selected == 4 && !hasEventsActive"
         style="margin-bottom: 100%" class="btns d-flex d-flex mt-4 d-flex flex-row align-items-center justify-content-center">
      <button @click="back()" class="btn btn-secondary"> Voltar</button>
      <button @click="next(2)" class="btn ml-2 btn-next" :disabled="blockStepTwo || processing"> Continuar</button>
    </div>

    <div v-else-if="selected == 5 && !hasEventsActive"
         class="btns d-flex mt-4 d-flex flex-row align-items-center justify-content-center btn-check">
      <button @click="back()" class="btn btn-secondary"> Voltar</button>
      <button @click="addLead() " class="btn ml-2 btn-next" :disabled="(blockStepThree && newLead.payment === '3') || (selected === 3 && !terms_checked)">
        Contratar
      </button>
    </div>

    <div v-else-if="successRegister"
         class="btns d-flex mt-4 d-flex flex-row align-items-center justify-content-center btn-check">
      <button @click="goToSite()" class="btn btn-secondary"> Voltar</button>
      <button @click="goToTallosChat() " class="btn ml-2 btn-next"
              :disabled="blockStepThree && newLead.payment === '3'"> Login
      </button>
    </div>

    <div v-else-if="errorRegister"
         class="btns d-flex mt-4 d-flex flex-row align-items-center justify-content-center btn-check">
      <button @click="goToSite()" class="btn btn-secondary"> Voltar</button>
      <!--<button @click="goToTallosChat() " class="btn ml-2 btn-next" :disabled="blockStepThree && newLead.payment === '3'"> Login  </button>-->
    </div>


  </div>

</template>


<script>
import VideoWpp from './components/VideoWpp'
import VideoPabx from './components/VideoPabx'
import axios from 'axios'
import {
  regexValidate,
  cpfIsValid,
  cnpjIsValid,
  nameCardIsValid,
  numberCardIsValid,
  cvvCardIsValid,
  monthDateCardIsValid,
  yearDateCardIsValid,
  getPlainCpfAndCnpj
} from "../../helpers/global"
import states from "./../../assets/scripts/states.json"

export default {

  data() {
    let self = this
    return {
      successRegister: false, // informar sucesso ao realizar cadastro
      gearScreen: false, // informar "loading" para realização do evento
      errorRegister: false, // informar erro ao realizar evento

      terms_checked: false, // termos de uso da plataforma

      addWhats: 0,
      ramal: 0,
      totalRamal: 0,
      priceRamal: 0,
      addUser: 0,
      price: 0,
      totalPrice:0,
      tota: 0,

      states,
      regexValidate,
      cpfIsValid,
      cnpjIsValid,
      cvvCardIsValid,
      nameCardIsValid,
      numberCardIsValid,
      monthDateCardIsValid,
      yearDateCardIsValid,
      getPlainCpfAndCnpj,
      selected: 5,
      dataSale: {},
      newLead: {
        nameCompany: '',
        whatsappApiType: 'monthly',
        name: '',
        phone: '',
        cnpj: '',
        charge: '',
        follow: '',
        email: '',
        whatsappAPI: false,
        PABX: false,
        payment: '0',
        cardData: {
          nameCard: '',
          numberCard: '',
          monthDate: '',
          yearDate: '',
          cvvCard: '',
          bannerCard: ''
        },
        address: {
          country: '',
          cep: '',
          address: '',
          number: '',
          complement: '',
          city: '',
          state: '',
          district: ''
        },
        coupon: ''
      },

      plan: self.$route.params.plan,

      masks: {
        phone: '+## (##) ####-####',
        cpf_cnpj_mask: '',
        cep: '#####-###',
        numberCard: '#### #### #### ####',
        cvvCard: '###',
        monthDate: '##',
        yearDate: '####'
      },

      invalidFieldsStepOne: {
        name: false,
        phone: false,
        cpf_cnpj: false,
        email: false
      },

      invalidFieldsStepTwo: {
        country: false,
        cep: false,
        number: false,
        address: false,
        district: {
          disabled: true,
          invalid: false
        },
        city: {
          disabled: true,
          invalid: false
        },
        state: {
          disabled: true,
          invalid: false
        }
      },

      invalidFieldsStepThree: {
        nameCard: false,
        numberCard: false,
        monthDate: false,
        yearDate: false,
        cvvCard: false
      },

      blockStepOne: true,
      blockStepTwo: true,
      blockStepThree: true,

      initActionsDisabled: true,

      userAreadyExists: false,
      userAreadyExistsStatus: 0,
      processing: false,
      linkDuplicate: '',
      allSegments: [
        "Alimentos e Bebidas",
        "Arte e Antiguidades",
        "Artigos Religiosos",
        "Assinaturas e Revistas",
        "Automóveis e Veículos",
        "Bebês e Cia",
        "Brindes Materiais Promocionais",
        "Brinquedos e Games",
        "Casa e Decoração",
        "Colecionáveis",
        "Compras Coletivas",
        "Construção e Ferramentas",
        "Cosméticos e Perfumaria",
        "Cursos e Educação",
        "Eletrodomésticos",
        "Eletrônicos",
        "Emissoras de Rádio",
        "Emissoras de Televisão",
        "Empregos",
        "Empresas de Telemarketing",
        "Esporte e Lazer",
        "Flores, Cestas e Presentes",
        "Fotografia",
        "Igrejas Templos Instituições Religiosas",
        "Indústria, Comércio e Negócios",
        "Informática",
        "Ingressos",
        "Instrumentos Musicais",
        "Joalheria",
        "Lazer",
        "Livros",
        "Moda e Acessórios",
        "Motéis",
        "Negócios e Oportunidades",
        "Outros Serviços",
        "Outros Serviços de Avaliação",
        "Papelaria e Escritório",
        "Pet Shop",
        "Saúde",
        "Serviço Advocaticios",
        "Serviço de Distribuição de Jornais Revistas",
        "Serviços Administrativos",
        "Serviços Artísticos",
        "Serviços de Abatedouros Matadouros",
        "Serviços de Aeroportos",
        "Serviços de Agências",
        "Serviços de Aluguel Locação",
        "Serviços de Armazenagem",
        "Serviços de Assessorias",
        "Serviços de Assistência Técnica Instalações ",
        "Serviços de Associações",
        "Serviços de Bancos de Sangue",
        "Serviços de Bibliotecas",
        "Serviços de Cartórios",
        "Serviços de Casas Lotéricas",
        "Serviços de Confecções",
        "Serviços de Consórcios",
        "Serviços de Consultorias",
        "Serviços de Cooperativas",
        "Serviços de Despachante",
        "Serviços de Engenharia",
        "Serviços de Estacionamentos",
        "Serviços de Estaleiros",
        "Serviços de Exportação Importação",
        "Serviços de Geólogos",
        "Serviços de joalheiros",
        "Serviços de Leiloeiros",
        "Serviços de limpeza",
        "Serviços de Loja de Conveniência",
        "Serviços de Mão de Obra",
        "Serviços de Órgão Públicos",
        "Serviços de Pesquisas",
        "Serviços de Portos",
        "Serviços de Saúde Bem Estar",
        "Serviços de Seguradoras",
        "Serviços de Segurança",
        "Serviços de Sinalização",
        "Serviços de Sindicatos Federações",
        "Serviços de Traduções",
        "Serviços de Transporte",
        "Serviços de Utilidade Pública",
        "Serviços em Agricultura Pecuária Piscicultura",
        "Serviços em Alimentação",
        "Serviços em Arte",
        "Serviços em Cine Foto Som",
        "Serviços em Comunicação",
        "Serviços em Construção",
        "Serviços em Ecologia Meio Ambiente",
        "Serviços em Eletroeletrônica Metal Mecânica",
        "Serviços em Festas Eventos",
        "Serviços em Informática",
        "Serviços em Internet",
        "Serviços em Jóias Relógios Óticas",
        "Serviços em Telefonia",
        "Serviços em Veículos",
        "Serviços Esotéricos Místicos",
        "Serviços Financeiros",
        "Serviços Funerários",
        "Serviços Gerais",
        "Serviços Gráficos Editoriais",
        "Serviços para Animais",
        "Serviços para Deficientes",
        "Serviços para Escritórios",
        "Serviços para Roupas",
        "Serviços Socias Assistenciais",
        "Sex Shop",
        "Shopping Centers",
        "Tabacaria",
        "Tarifas Bancárias",
        "Tarifas Telefônicas",
        "Telefonia",
        "Turismo"
        ]
    }
  },

  components: {
    Gears: () => import('./Gears'),
    VideoWpp,
    VideoPabx
  },

  computed: {
    // se campos inválido na primeira etapa
    hasInvalidFieldsStepOne() {
      for (let key in this.invalidFieldsStepOne) {
        if (this.invalidFieldsStepOne[key]) {
          return true
        }
      }
      return false
    },

    // se campos inválido na segunda etapa
    hasInvalidFieldsStepTwo() {
      for (let key in this.invalidFieldsStepTwo) {
        if (['district', 'city', 'state'].includes(key)) {
          if (this.invalidFieldsStepTwo[key].invalid) {
            return true
          }
        } else if (this.invalidFieldsStepTwo[key]) {
          return true
        }
      }
      return false
    },

    // se campos inválido na terceira etapa
    hasInvalidFieldsStepThree() {
      for (let key in this.invalidFieldsStepThree) {
        if (this.invalidFieldsStepThree[key]) {
          return true
        }
      }
      return false
    },

    hasEventsActive() {
      return this.successRegister || this.gearScreen || this.errorRegister
    }
  },

  methods: {

    verifyProd() {
      this.selected = 4

      if(this.newLead.PABX == false) {
         return this.ramal = 0
      }
      if(this.newLead.PABX == true) {
         return this.priceRamal = 300
      }
    },

    moreWhats() {
      if (this.addWhats < 10) {
         this.addWhats++
      } else {
         this.addWhats = 10
      }
      // console.log(this.currentPage)
    },
    lessWhats() {
      
      if (this.addWhats > 0) {
         this.addWhats--
      } else {
         this.addWhats = 0
      }
      // console.log(this.currentPage)
    },

    addRamal() {
      this.ramal++
      // console.log(this.currentPage)
    },
    lessRamal() {
      
      if (this.ramal > 0) {
         this.ramal--
      } else {
         this.ramal = 0
      }
      // console.log(this.currentPage)
    },

    moreUser() {
      this.addUser++
      // console.log(this.currentPage)
    },
    lessUser() {
      
      if (this.addUser > 0) {
        return this.addUser--
      } else {
        return this.addUser = 0
      }
      // console.log(this.currentPage)
    },

    qtdAddUser() {
      if (this.addUser >= 6 && this.addUser < 10) {
        this.price = 61.00
      } else if (this.addUser >= 10 && this.addUser < 25) {
        this.price = 57.00
      } else if (this.addUser >= 25 && this.addUser < 50) {
        this.price = 47.00
      } else if (this.addUser >= 50 && this.addUser < 100) {
        this.price = 37.00
      } else if (this.addUser >= 100) {
        this.price = 27.00
      } else {
        this.price = 67.00
      }
      if (this.addUser > 0) {
        this.totalPrice = this.price * this.addUser;
      }
      if (this.addUser == 0) {
        this.totalPrice = 0
        this.price = 0;
      }
    },
    qtdAddRamal() {
      this.totalRamal = this.ramal * 17
    },


    showSuccessRegister() {
      this.successRegister = true
      this.gearScreen = false
      this.errorRegister = false
    },

    showGearScreen() {
      this.successRegister = false
      this.gearScreen = true
      this.errorRegister = false
    },

    showErrorRegister() {
      this.successRegister = false
      this.gearScreen = false
      this.errorRegister = true
    },

    // define tipo de pagamento como boleto
    payWithTicker() {
      this.newLead.payment = '0'
    },

    // define tipo de pagamento como cartão
    payWithCard() {
      this.newLead.payment = '3'
    },

    /**
     * valida de campos requeridos da primeira etapa
     *
     * @param {flag} - Identificador do campo chamado
     */
    callFieldsValidationStepOne(flag, event) {
      let self = this

      function name() {
        const real_name = self.newLead.name ? self.newLead.name.trim() : false;
        if (!real_name || (real_name.length < 4)) {
          self.invalidFieldsStepOne['name'] = true
        } else {
          self.invalidFieldsStepOne['name'] = false
        }
      }

      function phone() {
        if (!self.newLead.phone || (self.newLead.phone && self.newLead.phone.length < 18)) {
          self.invalidFieldsStepOne['phone'] = true
        } else {
          self.invalidFieldsStepOne['phone'] = false
        }
      }

      function cnpjAndCpf(event) {
        if (event && event.code !== 'KeyV') {
          if (isNaN(event.key)) {
            return false
          }
        }

        let plainCpfCnpj = self.getPlainCpfAndCnpj(self.newLead.cnpj)
        self.masks.cpf_cnpj_mask = ''

        if (plainCpfCnpj && plainCpfCnpj.length < 11) {
          self.masks.cpf_cnpj_mask = '###########'
          self.invalidFieldsStepOne['cpf_cnpj'] = !self.cpfIsValid(plainCpfCnpj)
        } else if (plainCpfCnpj && plainCpfCnpj.length === 11) {
          self.masks.cpf_cnpj_mask = '###.###.###-###'
          self.invalidFieldsStepOne['cpf_cnpj'] = !self.cpfIsValid(plainCpfCnpj)
        } else if (plainCpfCnpj && plainCpfCnpj.length >= 11) {
          self.masks.cpf_cnpj_mask = '##.###.###/####-##'
          self.invalidFieldsStepOne['cpf_cnpj'] = !self.cnpjIsValid(plainCpfCnpj)
        } else if (!plainCpfCnpj) {
          self.invalidFieldsStepOne['cpf_cnpj'] = true
        }
      }

      function email() {
        self.invalidFieldsStepOne['email'] = !self.regexValidate(self.newLead.email, 'email')
      }

      function enableRequests() {
        self.blockStepOne = false
        for (let key in self.invalidFieldsStepOne) {
          if (self.invalidFieldsStepOne[key]) {
            self.blockStepOne = true
            break
          }
        }
      }

      if (flag && flag === 'name') {
        name()
      } else if (flag && flag === 'phone') {
        phone()
      } else if (flag && flag === 'cpf_cnpj') {
        cnpjAndCpf(event)
      } else if (flag && flag === 'email') {
        email()
      } else {
        name()
        phone()
        cnpjAndCpf()
        email()
      }

      enableRequests()
    },

    /**
     * valida de campos requeridos da segunda etapa
     *
     * @param {flag} - Identificador do campo chamado
     */
    callFieldsValidationStepTwo(flag) {
      let self = this

      function cep() {
        if (!self.newLead.address.cep || (self.newLead.address.cep && self.newLead.address.cep.length < 9)) {
          self.invalidFieldsStepTwo['cep'] = true
        } else {
          self.invalidFieldsStepTwo['cep'] = false

          if (flag) {
            self.getCEP()
          }
        }
      }

      function country() {
        self.invalidFieldsStepTwo['country'] = !self.newLead.address.country
      }

      function addressNumber() {
        self.invalidFieldsStepTwo['number'] = !self.newLead.address.number
      }

      function plainAddress() {
        self.invalidFieldsStepTwo['address'] = !self.newLead.address.address
      }

      function district() {
        self.invalidFieldsStepTwo['district'].invalid = !self.newLead.address.district
      }

      function city() {
        self.invalidFieldsStepTwo['city'].invalid = !self.newLead.address.city
      }

      function state() {
        self.invalidFieldsStepTwo['state'].invalid = !self.newLead.address.state
      }

      function enableRequests() {
        self.blockStepTwo = false
        for (let key in self.invalidFieldsStepTwo) {
          if (key === 'district' || key === 'city' || key === 'state') {
            if (self.invalidFieldsStepTwo[key].invalid) {
              self.blockStepTwo = true
            }
          } else if (self.invalidFieldsStepTwo[key]) {
            self.blockStepTwo = true
            break
          }
        }
      }

      if (flag && flag === 'cep') {
        cep()
      } else if (flag && flag === 'country') {
        country()
      } else if (flag && flag === 'number') {
        addressNumber()
      } else if (flag && flag === 'address') {
        plainAddress()
      } else if (flag && flag === 'district') {
        district()
      } else if (flag && flag === 'city') {
        city()
      } else if (flag && flag === 'state') {
        state()
      } else {
        cep()
        country()
        addressNumber()
        plainAddress()
        district()
        city()
        state()
      }

      enableRequests()
    },

    callFieldsValidationStepThree(flag) {
      let self = this

      function nameCard() {
        self.invalidFieldsStepThree['nameCard'] = !self.nameCardIsValid(self.newLead.cardData.nameCard)
      }

      function numberCard() {
        self.invalidFieldsStepThree['numberCard'] = !self.numberCardIsValid(self.newLead.cardData.numberCard)
      }

      function cvvCard() {
        self.invalidFieldsStepThree['cvvCard'] = !self.cvvCardIsValid(self.newLead.cardData.cvvCard)
      }

      function monthDate() {
        self.invalidFieldsStepThree['monthDate'] = !self.monthDateCardIsValid(self.newLead.cardData.monthDate)
      }

      function yearDate() {
        self.invalidFieldsStepThree['yearDate'] = !self.yearDateCardIsValid(self.newLead.cardData.yearDate)
      }

      function enableRequests() {
        self.blockStepThree = false
        for (let key in self.invalidFieldsStepThree) {
          if (self.invalidFieldsStepThree[key]) {
            self.blockStepThree = true
            break
          }
        }
      }

      if (flag && flag === 'nameCard') {
        nameCard()
      } else if (flag && flag === 'numberCard') {
        numberCard()
      } else if (flag && flag === 'cvvCard') {
        cvvCard()
      } else if (flag && flag === 'monthDate') {
        monthDate()
      } else if (flag && flag === 'yearDate') {
        yearDate()
      } else {
        nameCard()
        numberCard()
        cvvCard()
        monthDate()
        yearDate()
      }

      enableRequests()
    },

    enablePlainAddress() {
      this.invalidFieldsStepTwo.district.disabled = false
      this.invalidFieldsStepTwo.state.disabled = false
      this.invalidFieldsStepTwo.city.disabled = false
    },

    getCEP() {
      for (let key in this.newLead.address) {
        if (['district', 'city', 'state'].includes(key)) {
          this.newLead.address[key] = null
        }
      }

      this.enablePlainAddress()

      axios.get(`https://viacep.com.br/ws/${this.newLead.address.cep}/json`)
          .then((res) => {
            if (!res.data.erro) {
              let stateIndex = this.states.findIndex(state => state.acronym === res.data.uf)

              this.newLead.address.district = res.data.bairro
              this.invalidFieldsStepTwo.district.disabled = !!res.data.bairro
              this.invalidFieldsStepTwo.district.invalid = !res.data.bairro

              this.newLead.address.state = this.states[stateIndex].name
              this.invalidFieldsStepTwo.state.disabled = !!this.states[stateIndex].name
              this.invalidFieldsStepTwo.state.invalid = !res.data.bairro

              this.newLead.address.city = res.data.localidade
              this.invalidFieldsStepTwo.city.disabled = !!res.data.localidade
              this.invalidFieldsStepTwo.city.invalid = !res.data.localidade

              this.newLead.address.complement = res.data.complemento
            } else {
              this.enablePlainAddress()
            }
          })
          .catch(err => {
            console.error(err)
            this.enablePlainAddress()
          })
    },

    encodeTcrptor(r) {
      var n = "", t = ["-", "#", "%"],
          o = ["0100000101001011", "01011001110000111010011101010100", "010011000110100101010000", "11000011100001110111100001001000", "0101000001110001", "0111010001010010", "0100010101011000", "0110001101011000", "0100100001001011", "0101011001110110"],
          a = function (r) {
            for (var n, t = 0, o = r.length, a = ""; t < o; t += 8) a += "%" + ((n = parseInt(r.substr(t, 8), 2).toString(16)).length % 2 == 0 ? n : "0" + n);
            return decodeURIComponent(a)
          };
      const e = function (t) {
        for (var e in n = "", r) n += a(o[Math.floor(10 * Math.random())]) + r.charCodeAt(e) + a(o[Math.floor(10 * Math.random())]) + (r[parseInt(e) + 1] ? t : "");
        return n
      };
      for (var c = 3; c;) r = e(t[c - 1]), c--;
      return r
    },

    getCardType(cardNumber) {
      let re = new RegExp("^4");
      if (cardNumber.match(re) != null) {
        return 'visa';
      }
      re = new RegExp("^(34|37)");
      if (cardNumber.match(re) != null) {
        return 'amex';
      }
      re = new RegExp("^5[1-5]");
      if (cardNumber.match(re) != null) {
        return 'mastercard';
      }
      re = new RegExp("^6011");
      if (cardNumber.match(re) != null) {
        return 'discover';
      }
      re = new RegExp('^9792');
      if (cardNumber.match(re) != null) {
        return 'dinnersClub';
      }
      return 'visa'; // default type
    },

    async addLead() {

      let newLead = {
        nameCompany: this.newLead.nameCompany,
        name: this.newLead.name,
        phone: this.newLead.phone.split(')')[1].replace("-", '').trim(),
        cnpj: this.newLead.cnpj,
        charge: this.newLead.charge,
        follow: this.newLead.follow,
        email: this.newLead.email,
        users: this.newLead.users,
        facebookVerifi: this.newLead.facebookVerifi,
        whatsappAPI: this.newLead.whatsappAPI,
        whatsappApiType: this.newLead.whatsappApiType,
        PABX: this.newLead.PABX,
        payment: this.newLead.payment,
        cardData: this.newLead.cardData,
        address: this.newLead.address,
        ddd: this.newLead.phone.split(')')[0].replace('(', '').replace(' ', ''),
        coupon: this.newLead.coupon,
        products: {
          whatsapp: this.addWhats,
          pabx: this.ramal,
          user: this.addUser
        }
      }

      if (newLead.payment === '3') {
        let tempCardData = {...this.newLead.cardData}
        newLead.cardData = tempCardData

        // identificar bandeira do cartao
        newLead.cardData.bannerCard = this.getCardType(this.newLead.cardData.numberCard);
        // Criptogradia dados do cartão da empresa
        tempCardData.cvvCard = this.encodeTcrptor(tempCardData.cvvCard)
        tempCardData.numberCard = this.encodeTcrptor(tempCardData.numberCard)

        this.callFieldsValidationStepThree()

        if (this.blockStepThree) {
          return false
        }
      }

      switch (this.plan) {
        case 'basic':
          newLead['plan'] = 1;
          break;
        case 'essential':
          newLead['plan'] = 2;
          break;
        case 'avancado':
          newLead['plan'] = 3;
          break;
        case 'pro':
          newLead['plan'] = 10;
          break;
      }

      // verificar termos de uso aceito
      if (!this.terms_checked) {
        return false
      }

      this.showGearScreen()

      const response = await axios.post(`${process.env.VUE_APP_ADMIN}/finance/create-checkout/${this.$route.params.id ? this.$route.params.id : ''}`, newLead)

      if (response.status === 200) {
        this.showSuccessRegister()
        this.linkDuplicate = response.data.url_boleto;
      } else {
        this.showErrorRegister()
      }
    },

    back() {
      let backSelected = this.selected
      if (backSelected <= 0) {
        return this.selected = 0
      } else {
        return this.selected = this.selected - 1
      }
    },

    goToSite() {
      this.$router.push({name: 'home'})
    },

    goToTallosChat() {
      window.location.href = process.env.VUE_APP_TALLOS_CHAT
    },

    async verifyIfExist() {
      const verify = {
        cnpj: this.newLead.cnpj,
        email: this.newLead.email
      }

      const response = await axios.post(`${process.env.VUE_APP_ADMIN}/finance/verify-if-exist/`, verify)

      if (response.data.status === 200) {
        if (!this.blockStepOne) {
          this.selected = this.selected + 1
          this.userAreadyExists = false;
        }
      } else {
        this.userAreadyExists = true;
        this.userAreadyExistsStatus = response.data.value;
      }

      this.processing = false;
    },

    next(selected) {
      this.processing = true;
      if (selected === 1) {
        this.callFieldsValidationStepOne();
        this.verifyIfExist();
      } else if (selected === 2) {
        this.callFieldsValidationStepTwo()
        this.userAreadyExists = false;

        if (!this.blockStepTwo) {
          this.selected = this.selected + 1
        }
      }
    }
  },

  mounted() {
    window.scrollTo(0, 0);
    console.log(this.total)
  }
}
</script>

<style lang="scss">

h5 {
  font-size: 12px;
  margin: 0 5%;
  font-weight: 200;
  font-style: italic;
}

.form-2 input{
  width: auto;
  height: auto;
}

.label-principal {
  // color: #0199ca;
  font-weight: 600;
  font-size: 18px;
}

.whatsapp-api input {
  margin: 0 auto;
}
.bar {
  width: 80px;
  height: 5px;
  border-radius: 10px;
  margin: 0 5px;
  background: rgb(187, 187, 187);
}
.bar-check {
  background: #0199ca;
}

#success-register-message,
#error-register-message {
  color: #315f31;
  font-weight: normal;
  box-shadow: none;
  background: none;
  text-align: center;
  padding: 20px;
}
#link-terms {
  color: #0199ca !important;
}

#error-register-message {
  color: #9a2929;
}

.custom-tooltip {
  text-align: left;
  background-color: #f8f8f8;
  box-shadow: 0 0 3px #00000040;
}

.price-plan {
  font-weight: 700;
  font-size: 1vw;
}

.form-plans {
  width: 28vw;
  padding: 0;
  border-radius: 15px;
  margin: 0;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.35); 
}

.bar-grey {
  filter: grayscale(100%);;
}

input {
  outline: none;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 5px;
  height: 35px;
  width: 330px;
}
label {
  font-weight: 900;
}

.btn-next {
  background-color: #00b894;
  font-size: 18px;
  font-weight: 900;
  opacity: 1 !important;
  color: white;
}

.btn-next:hover {
  background-color: #00a894;
  cursor: pointer;
  color: white;
}

.btn-secondary {
  font-size: 18px;
  font-weight: 900;
  color: white;
}

h4 {
  margin-top: 10%;
  margin-bottom: 5%;
  font-weight: 700;
}

#t-container > header {
  display: none;
}

#t-container > footer {
  display: none;
}

.txt-checkout {
  color: #fff;
}

.txt-checkout h2 {
  font-size: 45px;
  font-weight: 700;
}

#container {
  display: flex;
  background: linear-gradient(#022e6f ,#029bcd);
  flex-direction: column;
}

#container::before {
    content: '';
    width: 800px;
    height: 450px;
    position: fixed;
    left: -250px;
    transform: rotate(45deg);
    opacity: .03;
    background: #fff;
}

#container::after {
  content: '';
  width: 1000px;
  height: 450px;
  position: fixed;
  margin-top: 10%;
  right: -200px;
  transform: rotate(45deg);
  opacity: .03;
  background: #fff;
}

.container-input {
  padding: 5px;
}

.btn-primary:focus {
  background: #0199ca !important;
  border: none !important;
}

.container-select {
  align-self: center;
  margin-left: 35px;
}

.container-input-radio {
  align-self: start;
  margin-left: 35px;
  padding: 5px;
}

.separator {
  margin: 5%;
  font-weight: 200;
  font-style: italic;
}

#button {
  align-self: center;
}

.number input[type=number] {
  padding: 0 20px;
}

.btn-continue, .btn-check {
  margin-bottom: 30%;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 2px;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.accordion {
  width: 90%;
}

.not-collapsed, .collapsed, .btn-collpase,
.not-collapsed, .collapsed, .btn-collpase:hover {
  background-color: #0199ca;
}

.btn-collpase {
  font-size: 1vw;
  margin: 0;
  font-weight: 900;
}

.not-collapsed, .collapsed:hover {
  background-color: #0199ca;
}

.errors-preview {
  position: absolute;
  bottom: 0;
}

#__BVID__19 > div > div.card.mb-1 > header > button,
#__BVID__19 > div > div.card.mb-5 > header > button {
  background-color: #0199ca;
  color: white;
}

#__BVID__19 > div > div.card.mb-1 > header > button:hover,
#__BVID__19 > div > div.card.mb-5 > header > button:hover {
  background-color: #0185ca;
  color: #fff;
}

@media (max-width: 576px) {

  .txt-checkout strong {
    font-size: 4vw;
    padding: 0 2px 0 20px;
  }

  .form-plans {
    width: 90%;
  }

  input {
    align-items: center;
    width: 90%;
  }

  .price-plan {
    font-size: 6vw;
  }

  .btn-continue, .btn-check {
    margin-bottom: 30%;
  }

  .btn-collpase {
    font-size: 3vw;
    margin: 0;
    font-weight: 900;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  .txt-checkout strong {
    font-size: 4vw;
    padding: 0 2px 0 20px;
  }

  .form-plans {
    width: 400px;
  }

  .price-plan {
    font-size: 6vw;
  }

  .btn-continue, .btn-check {
    margin-bottom: 30%;
  }

  .btn-collpase {
    font-size: 3vw;
    margin: 0;
    font-weight: 900;
  }
}

@media (min-width: 767px) and (max-width: 937px) {

  .txt-checkout strong {
    padding: 0 2px 0 20px;
  }

  .form-plans {
    width: 400px;
  }

  .btn-continue, .btn-check {
    margin-bottom: 30%;
  }

  .btn-collpase {
    font-size: 3vw;
    margin: 0;
    font-weight: 900;
  }
}

@media (min-width: 937px) and (max-width: 1400px) {

  .txt-checkout strong {
    padding: 0 2px 0 20px;
  }

  .form-plans {
    width: 400px;
  }

  .btn-continue, .btn-check {
    margin-bottom: 30%;
  }

  .btn-collpase {
    font-size: 2vw;
    margin: 0;
    font-weight: 900;
  }
}


</style>
