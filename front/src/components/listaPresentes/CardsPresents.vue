<template>
  <div class="geral" data-aos="fade-up" data-aos-duration="3000">
        <h2>Lista de Presentes</h2>
        <p id="subTitle">Queridos familiares e amigos, para nós, a presença de vocês neste dia tão especial é o maior presente que poderíamos receber. Mas, se vocês também quiserem nos presentear, ficaremos muito agradecidos. Com amor, Jorge e Giovana.</p>
        <p>Preparamos três opções de lista, fique a vontade para escolher qual mais te agrada.</p>
        <div class="check">
            <h5 :class="{active: this.checked == 1 ? this.active = true : this.active = false}" @click="checkedFunction(1)">Enxoval</h5>
            <h5 :class="{active: this.checked == 2 ? this.active = true : this.active = false}" @click="checkedFunction(2)">Patrocinio Lua de Mel</h5>
            <h5 :class="{active: this.checked == 3 ? this.active = true : this.active = false}" @click="checkedFunction(3)">Diversos</h5>
        </div>

        <div class="cards" v-if="checked == 1">
            <div class="cards__unit different">
                <div class="imagem">
                <img src="../../assets/presentes/havan.jpg"> 
                    <h5>Lista de Presentes Havan</h5>
                    
                    <a href="https://lista.havan.com.br/Convidado/ItensListaPresente/601876" target="_blank" class="btn">Acessar</a>
                </div>
            </div>

            <div class="cards__unit different">
                <div class="imagem">
                    <img src="../../assets/presentes/camicado.jpg"> 
                    <h5>Lista de Presentes Camicado</h5>
                    
                    <a href="https://lista.camicado.com.br/giovanaejorge" target="_blank" class="btn">Acessar</a>
                </div>
            </div>

        </div>

        <div class="cards" v-if="checked == 2">
            <div class="cards__unit">
                <div class="imagem">
                <img src="../../assets/presentes/pinhais.jpg"> 
                    <h5>Cota de Viagem para Pinhais</h5>
                    <p class="prince"><span>R$</span><span>30</span><span>,00</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = 'pix'
                        presente = 'Cota de Viagem para Pinhais'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = 'mercadoPago'
                        presente = 'Cota de Viagem para Pinhais'
                        linkMercadoPago = 'https://mpago.la/2WrVGhj'
                    ></BotaoModal>
                </div>
            </div>

            <div class="cards__unit">
                <div class="imagem">
                    <img src="../../assets/presentes/sjp.jpg"> 
                    <h5>Cota de Viagem para São José dos Pinhais</h5>
                    <p class="prince"><span>R$</span><span>50</span><span>,00</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = 'pix'
                        presente = 'Cota de Viagem para São José dos Pinhais'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = 'mercadoPago'
                        presente = 'Cota de Viagem para São José dos Pinhais'
                        linkMercadoPago = 'https://mpago.la/2vYSHGa'
                    ></BotaoModal>
                </div>
            </div>

            <div class="cards__unit">
                <div class="imagem">
                    <img src="../../assets/presentes/matinhos.jpg"> 
                    <h5>Cota de Viagem para o Litoral do Paraná</h5>
                    <p class="prince"><span>R$</span><span>100</span><span>,00</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = 'pix'
                        presente = 'Cota de Viagem para o Litoral do Paraná'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = 'mercadoPago'
                        presente = 'Cota de Viagem para o Litoral do Paraná'
                        linkMercadoPago = 'https://mpago.la/21TuUW9'
                    ></BotaoModal>
                </div>
            </div>

            <div class="cards__unit">
                <div class="imagem">
                    <img src="../../assets/presentes/liroralsc.jpg"> 
                    <h5>Cota de Viagem para o Litoral de Santa catarina</h5>
                    <p class="prince"><span>R$</span><span>150</span><span>,00</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = 'pix'
                        presente = 'Cota de Viagem para o Litoral de Santa catarina'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = 'mercadoPago'
                        presente = 'Cota de Viagem para o Litoral de Santa catarina'
                        linkMercadoPago = 'https://mpago.la/1jbxx5s'
                    ></BotaoModal>
                </div>
            </div>

            <div class="cards__unit">
                <div class="imagem">
                    <img src="../../assets/presentes/sao_paulo.jpg"> 
                    <h5>Cota de Viagem para São Paulo</h5>
                    <p class="prince"><span>R$</span><span>200</span><span>,00</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = 'pix'
                        presente = 'Cota de Viagem para São Paulo'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = 'mercadoPago'
                        presente = 'Cota de Viagem para São Paulo'
                        linkMercadoPago = 'https://mpago.la/18e2Tt7'
                    ></BotaoModal>
                </div>
            </div>

            <div class="cards__unit">
                <div class="imagem">
                    <img src="../../assets/presentes/bahia.jpg"> 
                    <h5>Cota de Viagem para a Bahia</h5>
                    <p class="prince"><span>R$</span><span>300</span><span>,00</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = 'pix'
                        presente = 'Cota de Viagem para a Bahia'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = 'mercadoPago'
                        presente = 'Cota de Viagem para a Bahia'
                        linkMercadoPago = 'https://mpago.la/2QMBjfr'
                    ></BotaoModal>
                </div>
            </div>
        </div>

        <div class="cards" v-if="checked == 3">
            <div class="cards__unit">
                <div class="imagem">
                    <img src="../../assets/presentes/jogodavida.jpg"> 
                    <h5>Jogo da vida para aprender a viver</h5>
                    <p class="prince"><span>R$</span><span>70</span><span>,00</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = 'pix'
                        presente = 'Jogo da vida para aprender a viver'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = 'mercadoPago'
                        presente = 'Jogo da vida para aprender a viver'
                        linkMercadoPago = 'https://mpago.la/2uhhuHy'
                    ></BotaoModal>
                </div>
            </div>

            <div class="cards__unit">
                <div class="imagem">
                    <img src="../../assets/presentes/aviazinhosilvo.jpg"> 
                    <h5>Aviãozinho de dinheiro do Silvio Santos</h5>
                    <p class="prince"><span>R$</span><span>100</span><span>,00</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = true
                        presente = 'Aviãozinho de dinheiro do Silvio Santos'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = true
                        presente = 'Aviãozinho de dinheiro do Silvio Santos'
                        linkMercadoPago = 'https://mpago.la/16WP9Lk'
                    ></BotaoModal>
                </div>
            </div>

            <div class="cards__unit">
                <div class="imagem">
                    <img src="../../assets/presentes/sourica.jpg"> 
                    <h5>Selo da Riqueza Carolina Ferraz</h5>
                    <p class="prince"><span>R$</span><span>500</span><span>,00</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = true
                        presente = 'Selo da Riqueza Carolina Ferraz'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = true
                        presente = 'Selo da Riqueza Carolina Ferraz'
                        linkMercadoPago = 'https://mpago.la/1Hh3bj3'
                    ></BotaoModal>
                </div>
            </div>

            <div class="cards__unit">
                <div class="imagem">
                    <img src="../../assets/presentes/buqye.jpg"> 
                    <h5>Primeira fila pra pegar o buquê da noiva</h5>
                    <p class="prince"><span>R$</span><span>150</span><span>,00</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = true
                        presente = 'Primeira fila pra pegar o buquê da noiva'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = true
                        presente = 'Primeira fila pra pegar o buquê da noiva'
                        linkMercadoPago = 'https://mpago.la/21Wk5mD'
                    ></BotaoModal>
                </div>
            </div>

            <div class="cards__unit">
                <div class="imagem">
                    <img src="../../assets/presentes/5oconto.jpg"> 
                    <h5>Toma aqui uns 50 reais</h5>
                    <p class="prince"><span>R$</span><span>50</span><span>,00</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = true
                        presente = 'Toma aqui uns 50 reais'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = true
                        presente = 'Toma aqui uns 50 reais'
                        linkMercadoPago = 'https://mpago.la/1W5bbjs'
                    ></BotaoModal>
                </div>
            </div>

            <div class="cards__unit">
                <div class="imagem">
                    <img src="../../assets/presentes/buffet.jpg"> 
                    <h5>Primeiro lugar na fila do buffet</h5>
                    <p class="prince"><span>R$</span><span>200</span><span>,00</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = true
                        presente = 'Primeiro lugar na fila do buffet'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = true
                        presente = 'Primeiro lugar na fila do buffet'
                        linkMercadoPago = 'https://mpago.la/1kbWtHm'
                    ></BotaoModal>
                </div>
            </div>

            <div class="cards__unit">
                <div class="imagem">
                    <img src="../../assets/presentes/tiktok.jpg"> 
                    <h5>Dancinha do tiktok com os noivos</h5>
                    <p class="prince"><span>R$</span><span>200</span><span>,00</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = true
                        presente = 'Dancinha do tiktok com os noivos'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = true
                        presente = 'Dancinha do tiktok com os noivos'
                        linkMercadoPago = 'https://mpago.la/1reoDff'
                    ></BotaoModal>
                </div>
            </div>

            <div class="cards__unit">
                <div class="imagem">
                    <img src="../../assets/presentes/razao.jpg"> 
                    <h5>Cobertor para Giovana estar sempre coberta de razão</h5>
                    <p class="prince"><span>R$</span><span>50</span><span>,00</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = true
                        presente = 'Cobertor para Giovana estar sempre coberta de razão'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = true
                        presente = 'Cobertor para Giovana estar sempre coberta de razão'
                        linkMercadoPago = 'https://mpago.la/11PoRxp'
                    ></BotaoModal>
                </div>
            </div>

            <div class="cards__unit">
                <div class="imagem">
                    <img src="../../assets/presentes/opiniao.jpg"> 
                    <h5>Dar pitaco/falar mal da festa</h5>
                    <p class="prince"><span>R$</span><span>30.000</span><span>,00</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = true
                        presente = 'Dar pitaco/falar mal da festa'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = true
                        presente = 'Dar pitaco/falar mal da festa'
                        linkMercadoPago = 'https://mpago.la/2TRDxDg'
                    ></BotaoModal>
                </div>
            </div>

            <div class="cards__unit">
                <div class="imagem">
                    <img src="../../assets/presentes/rolo.jpg"> 
                    <h5>Rolo de macarrão para noiva utilizar quando necessário</h5>
                    <p class="prince"><span>R$</span><span>20</span><span>,00</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = true
                        presente = 'Rolo de macarrão para noiva utilizar quando necessário'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = true
                        presente = 'Rolo de macarrão para noiva utilizar quando necessário'
                        linkMercadoPago = 'https://mpago.la/2Z7WDo7'
                    ></BotaoModal>
                </div>
            </div>

            <div class="cards__unit">
                <div class="imagem">
                    <img src="../../assets/presentes/capacete.jpg"> 
                    <h5>Capacete contra rolo de macarrão</h5>
                    <p class="prince"><span>R$</span><span>50</span><span>,00</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = true
                        presente = 'Capacete contra rolo de macarrão'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = true
                        presente = 'Capacete contra rolo de macarrão'
                        linkMercadoPago = 'https://mpago.la/1xyX86q'
                    ></BotaoModal>
                </div>
            </div>

            <div class="cards__unit">
                <div class="imagem">
                    <img src="../../assets/presentes/jnata.jpg"> 
                    <h5>Jantar dos noivos no 1° dia casados</h5>
                    <p class="prince"><span>R$</span><span>15</span><span>,00</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = true
                        presente = 'Jantar dos noivos no 1° dia casados'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = true
                        presente = 'Jantar dos noivos no 1° dia casados'
                        linkMercadoPago = 'https://mpago.la/1pDnMCF'
                    ></BotaoModal>
                </div>
            </div>

            <div class="cards__unit">
                <div class="imagem">
                    <img src="../../assets/presentes/noite.jpg"> 
                    <h5>Roupa para noite de núpcias da noiva</h5>
                    <p class="prince"><span>R$</span><span>85</span><span>,00</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = true
                        presente = 'Roupa para noite de núpcias da noiva'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = true
                        presente = 'Roupa para noite de núpcias da noiva'
                        linkMercadoPago = 'https://mpago.la/2Sc8psE'
                    ></BotaoModal>
                </div>
            </div>

            <div class="cards__unit">
                <div class="imagem">
                    <img src="../../assets/presentes/despedidanoivo.jpg"> 
                    <h5>Patrocine a despedida de solteiro do noivo</h5>
                    <p class="prince"><span>R$</span><span>49</span><span>,90</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = true
                        presente = 'Patrocine a despedida de solteiro do noivo'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = true
                        presente = 'Patrocine a despedida de solteiro do noivo'
                        linkMercadoPago = 'https://mpago.la/1sKkLS5'
                    ></BotaoModal>
                </div>
            </div>

            <div class="cards__unit">
                <div class="imagem">
                    <img src="../../assets/presentes/despedidanoiva.jpg"> 
                    <h5>Patrocine a despedida de solteiro do noiva</h5>
                    <p class="prince"><span>R$</span><span>150</span><span>,00</span></p>
                    <BotaoModal
                        nomeBotao = "Presentear pelo PIX"
                        pix = true
                        presente = 'Patrocine a despedida de solteiro do noiva'
                    ></BotaoModal>

                    <BotaoModal
                        nomeBotao = "Presentear pelo Mercado Pago"
                        mercadoPago = true
                        presente = 'Patrocine a despedida de solteiro do noiva'
                        linkMercadoPago = 'https://mpago.la/2LzLFBA'
                    ></BotaoModal>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    import BotaoModal from '../Botoes/botaoModal.vue'

  export default {
    name: 'MyComponent',
    components: { BotaoModal },
    data() {
      return {
        slickOptions: {
            arrows: true,
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 4000,
        },
        checked: 1,
        active: false
      }
    },
    methods: {
      checkedFunction(val) {
        if(val == 1) {
            this.checked = val
        } if ( val == 2) {
            this.checked = val
        } if ( val == 3) {
            this.checked = val
        }
      }
    }
  }
</script>

<style scoped>
    h2 {
        font-size: clamp(2.7rem, 4.5vw, 6.5rem);
        font-variant: all-small-caps;
    }
    #subTitle {
        width: 70%;
        font-size: 20px;
    }
    p {
        margin-bottom: 15px;
        font-size: 18px;
        font-weight: 200;
        width: 95%;
        margin: 0 auto 15px;
    }
    .geral {
        padding: 175px 0 140px;
    }
    .check {
        display: inline-flex;
        margin: 40px auto 30px;
        font-variant: all-small-caps;
        font-weight: 300;
    }
    hr {
        width: 30%;
        margin: 10px auto;
    }
    .active {
        font-size: 24px !important;
        color: #71a077 !important;
        margin: 10px 30px !important;
        font-weight: 600 !important;
    }
    .check h5 {
        margin: 10px 30px;
        font-size: 24px;
        color: grey;
        transition: 0.2s;
        cursor: pointer;
        font-weight: 200;
    }
    hr {
        width: 30%;
        margin: 10px auto;
    }
    .cards {
        display: flex;
        width: 80%;
        margin: 0 auto;
        flex-wrap: wrap;
    }
    .different {
        width: 50% !important;
    }
    .cards__unit {
        display: flex !important;
        width: 33%;
        justify-content: space-around;
    }
    .cards__unit .imagem {
        padding: 15px 20px;
        margin: 20px 10px;
        width: 85%;
        box-shadow: 1px 3px 19px -4px #b3b3b3;
        border-radius: 5px;
        transition: 0.9s
    }
    .cards__unit .imagem:hover {
        padding: 15px 20px;
        margin: 10px 10px;
        width: 85%;
        box-shadow: 1px 6px 15px 5px #b3b3b3;
        border-radius: 5px; 
    }
    .cards__unit .imagem img{
        width: 100%;
        margin-bottom: 30px
    }
    .cards__unit .imagem h5 {
        font-variant: all-small-caps;
        margin: -10px 0px 15px 0;
        font-weight: 300;
        font-size: clamp(1.5rem, 1.7vw, 2rem);
    }
    button.slick-arrow.slick-next {
        position: relative !important;
        margin: 100px !important;
        left: 50% !important;
    }
    .slick-next {
        top: 120% !important;
        left: 50% !important;
    }
    .price {
        height: 50px;
        margin: 30px
    }
    p span:nth-child(1){
        font-size: 15px;
        position: relative;
        top: -25px;
        right: 1%;
    }
    p span:nth-child(2) {
        font-size: 50px;
        font-weight: 200;
    }
    p span:nth-child(3) {
        font-size: 15px;
    }
    .btn {
      margin: 20px auto;
      background: #71a077;
      border: 1px solid #71a077;
      padding: 10px;
      font-size: 16px;
      font-weight: 400;
      color: white;
      border-radius: 30px;
      width: 250px;
      transition: 0.6s;
      display: block;
    }
    .btn:hover {
      margin-bottom: 15px;
      background: #ffffff;
      border: 1px solid #71a077;
      color: #71a077;
    }

    @media(max-width:992px) {
        .cards__unit {
            width: 100%;
        }
        .cards {
            width: 100%;
        }
        #subTitle {
            width: 100%;
        }
        .active {
            font-size: 27px !important;
        }
        .check h5 {
            margin: 10px 30px;
            font-size: 20px;
        }
        .check {
            display: grid;
        }
        .different {
            width: 100% !important;
        }
        .geral {
            padding: 70px 0 140px;
        }
    }
</style>