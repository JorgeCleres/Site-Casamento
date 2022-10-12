<template>
    <div class="geral" data-aos="fade-up" data-aos-duration="3000">
        <h2>Deixe sua mensagem para nós!</h2>
        <p id="subTitle">Deixe a sua mensagem de carinho para os noivos!</p>
        <div class="form">
            <form v-on:submit.prevent="formMessage()">
                <input type="text" v-model="messageForm.nome" name="nome" placeholder="Seu Nome">

                <input type="text" v-model="messageForm.email" name="email" placeholder="Seu Email" id="email">

                <textarea v-model="messageForm.mensagem" name="mensagem" placeholder="Digite sua mensagem"></textarea>

                <button @click="enviarMensagem()" class="env">Enviar</button>
            </form>
        </div>
        <img src="/img/matinho.c7196136.png" id="matinho">
    </div>

</template>

<script>
    import sendMessage from '../../services/Send'
    import swal from 'sweetalert'
    export default {
        data() {
            return {
                messageForm: {
                    nome: '',
                    email: '',
                    mensagem: ''
                }
            }
        },
        methods: {
            formMessage(){},
            async enviarMensagem() {
                try {
                    if(this.messageForm.nome == '' || this.messageForm.email == '' || this.messageForm.mensagem == '') {
                        this.alertMensagem('Erro ao enviar', 'Preencha todos os campos', 'error')
                    } else {
                        await sendMessage.sendRequisition('/message', this.messageForm)
                        this.alertMensagem('Sucesso', 'Obrigado pela sua Mensagem *-*', 'success')
                    }
                    this.messageForm.nome = ''
                    this.messageForm.email = ''
                    this.messageForm.mensagem = ''
                }
                catch (err) {
                    this.alertMensagem('Erro ao Enviar mensagem', '', 'error')
                }
            },

            async alertMensagem(title, text, successOrError) {
                await swal ({
                    title: title,
                    text: text,
                    icon: successOrError
                })
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
        margin: 0 auto;
    }
    .geral {
        padding: 175px 0 60px;
    }
    form {
        z-index: 1000;
    }
    .form {
        width: 40%;
        margin: 30px auto;
        padding: 40px;
        box-shadow: 0px 5px 8px 2px grey;
        border-radius: 5px;
        display: grid;
    }
    input[type="text"] {
        width: 97%;
        height: 50px;
        padding: 10px;
        margin: 10px;
        display: flex;
    }
    textarea {
        margin: 10px auto 20px;
        width: 97%;
        padding: 10px;
    }
    #email {
        margin: 25px auto 20px;
        width: 97%;
    }
    .env {
        width: 250px;
        font-weight: bold;
        font-size: 20px;
        margin: 10px 5px;
        background: #71a077;
        color: white;
        border: 1px solid #71a077;
        height: 50px;
        font-weight: 400;
        border-radius: 10px;
        transition: 0.5s
    }
    .env:hover {
        background: white;
        color: #71a077;
        border: 1px solid #71a077;
    }
    #matinho {
        z-index: -10;
        margin: -200px auto;
        width: 85%;
    }

    @media(max-width:992px) {
        .form {
            width: 95%;
            padding: 15px 20px
        }
        .radios {
            width: 80%;
        }
        #name {
            display: grid;
        }
        #name > div {
            text-align: initial;
            margin: 0 5px;
        }
        input[type="text"] {
            order: 3;
        }
        #matinho {
            display: none
        }
        .geral {
            padding: 70px 0 60px;
        }
    }
</style>