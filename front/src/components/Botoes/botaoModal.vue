<template>
  <div>
    <b-button @click="modalShow = !modalShow">{{nomeBotao}}</b-button>

    <b-modal v-model="modalShow">
      <h4 v-if="pix">PIX: giovanaveiga08@gmail.com</h4>
      <h6>Muito obrigado por abençoar nossas vidas com seu presente, deixe o seu email para que possamos te agradecer!</h6>
      <input type="hidden" disabled="" :value="presente" name="presente">
      <input v-model="formPresent.nome" name="nome" placeholder="nome">
      <input v-model="formPresent.email" name="email" placeholder="email">
      <button @click="enviarPresent">Enviar</button>

      <p v-if="mercadoPago">Mercado pago é um meio de pagamento totalmente seguro, onde você tem opção de parcelar seu presente caso queira</p>
      <a class="btn" :href="this.linkMercadoPago" target="_blank" v-if="mercadoPago" id="mercadoPago">Mercado Pago</a>
    </b-modal>

  </div>
</template>

<script>
  import sendPresentService from '../../services/Send'
  import swat from 'sweetalert'

  export default {
    props: ['nomeBotao', 'pix', 'mercadoPago', 'presente', 'linkMercadoPago'],
    data() {
      return {
        modalShow: false,
        formPresent: {
          nome: '',
          email: '',
          presente: '',
        }
      }
    },
    methods: {
      async enviarPresent() {
        this.formPresent.presente = this.presente

        if(this.formPresent.nome == '' || this.formPresent.email == '') {
          this.alertMensagem('Preencha todos os campos', 'Por favor preencha todos os campos', 'error')
        } else {
            try {
              if(this.pix == 'pix') {
                this.formPresent.pixOrmercadoPago = 'pix'
              } else {
                this.formPresent.pixOrmercadoPago = 'Mercado Pago'
              }
              sendPresentService.sendRequisition('/present', this.formPresent)
              this.modalShow = false
              this.alertMensagem('Sucesso', 'Obrigado pelo seu presente!!! *-*', 'success')
            }
            catch {
              this.alertMensagem('Erro ao enviar', 'Verifique se você preencheu todos os campo corretamente', 'error')
            } 
        }
        this.formPresent.nome = ''
        this.formPresent.email = ''
        this.formPresent.presente = ''
      },
      alertMensagem(title, text, successOrError) {
        swat ({
          title: title,
          text: text,
          icon: successOrError
        })
      }
    }
  }
</script>

<style scoped>
    h4 {
      text-align: center;
      margin-bottom: 20px;
    }
    h6{
      text-align: center;
      margin: 15px auto;
    }
    input {
      width: 90%;
      margin: 15px auto;
      display: flex;
      padding: 5px;
    }
    p {
      text-align: center;
      margin: 30px auto 0;
    }
    button, .btn {
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
    button:hover, .btn:hover {
      margin-bottom: 15px;
      background: #ffffff;
      border: 1px solid #71a077;
      color: #71a077;
    }
    #mercadoPago {
      background: #008bdd;
      border: 1px solid #008bdd;
    }
    #mercadoPago:hover {
      border: 1px solid #008bdd;
      color: #008bdd;
      background: #fff;
    }

    .modal button{
      margin: 20px auto 0;
    }
</style>