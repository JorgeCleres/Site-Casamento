<template>
    <div class="geral" data-aos="fade-up" data-aos-duration="3000">
        <h2>Confirmar presença</h2>
        <p id="subTitle">Faça parte da nossa história de amor, Confirme a presença da sua familia.</p>
        <div class="form">
            <form v-on:submit.prevent="formPrevent()">
                <div id="name">
                    <input type="text" v-model="nome" name="nome" placeholder="Nome completo">
                    <div>
                        <button @click="adcNome" class="btn success"> Adicionar </button>
                    </div>
                </div>
                <div v-for="(nome, id) in arrayNomes" :key="id" class="nomesArray">
                    <p>{{ nome }}</p>
                    <button @click="removeNome(nome)" class="btn danger"> X </button>
                </div>

                <div class="radios">
                    <label>Tem crianças?</label>
                    <div>
                        <div class="radio">
                            <label>Sim</label>
                            <input type="radio" v-model="children" :value="true">
                        </div>

                        <div class="radio">
                            <label>Não</label>
                            <input type="radio" v-model="children" :value="false">
                        </div>
                    </div>
                </div>

                <div v-if="children" class="children">
                    <label>Idade da Criança</label>
                    <div class="children-button">
                        <b-form-spinbutton id="demo-sb" v-model="ageChildren" min="1" max="13"></b-form-spinbutton>
                        <button @click="adcChildren" class="btn success-children">+</button>
                    </div>
                        
                    <div v-for="(age, id) in ageChildrenArray" :key="id" class="children-array">
                        <p>{{id+1}} - Criança com {{age}} anos</p>
                        <button @click="removeChildren(id)" class="btn danger-children">-</button>
                    </div>
                </div>

                <input type="text" v-model="email" name="email" placeholder="Seu Email" id="email" @click="alerta">

                <button @click="enviarConfirmados()" class="env">Confirmar Presença</button>

            </form>
        </div>
        <img src="/img/matinho.c7196136.png" id="matinho">
    </div>

</template>

<script>
    import sendConfirmation from '../../services/Send'
    import swat from 'sweetalert'

    export default {
        data() {
            return {
                nome: '',
                children: false,
                qtdChildren: '',
                email: '',
                ageChildren: 1,
                ageChildrenArray: [],
                id: 0,
                idChildren: 0,
                arrayNomes: [],
                formConfirm: {}
            }
        },
        methods: {
            formPrevent(){},
            adcNome() {
                if(this.nome != '') {
                    // this.formConfirm[`nome${this.id++}`] = this.nome
                    this.arrayNomes.push(this.nome)
                    this.nome = ''
                }
            },
            removeNome(id) {
                if(this.arrayNomes.length != 0) {
                    // this.arrayNomes.pop()
                    let newArray = this.arrayNomes.indexOf(id)
                    this.arrayNomes.splice(newArray, 1)
                    if(this.arrayNomes == 0) {
                        this.arrayNomes = []
                    }
                }
            },
            adcChildren() {
                if(this.agechildren != '') {
                    this.ageChildrenArray.push(this.ageChildren)
                    this.ageChildren = 1
                }
            },
            removeChildren(id) {
                if(this.ageChildrenArray != 0 ) {
                    let newArray = this.ageChildrenArray.indexOf(id)
                    this.ageChildrenArray.splice(newArray, 1)
                    if(this.ageChildrenArray == 0) {
                        this.ageChildrenArray = []
                    }
                }
            },
            alerta() {
                if(this.nome != '') {
                    this.adcNome()
                }
            },
            ageChildrenFunction() {
                var valueAgeChildren = this.ageChildren
                console.log(valueAgeChildren)
                this.ageChildrenArray
            },
            async enviarConfirmados() {
                try {
                    this.alerta()
                    if(this.email == '' || this.arrayNomes == '') {
                        this.alertMensagem('Erro ao confirmar', 'Verifique se preencheu todos os campos', 'error')
                    } else {
                        for(var i = 0; i < this.arrayNomes.length; i++) {
                            this.formConfirm[`nome${this.id++}`] = this.arrayNomes[i]
                        }
                        for(var j = 0; j < this.ageChildrenArray.length; j++) {
                            this.formConfirm[`age${this.idChildren++}`] = this.ageChildrenArray[j]
                        }

                        this.formConfirm['email'] = this.email
                        this.formConfirm['children'] = this.children
                        this.formConfirm['agechildren'] = this.ageChildren

                        await sendConfirmation.sendRequisition('/confirm',this.formConfirm)
                        
                        this.alertMensagem('Presença confirmada', 'Você deverá receber uma mensagem de confirmação no seu email', 'success')

                        setTimeout(()=> {
                            this.formConfirm = {}
                            this.arrayNomes = []
                            this.children = false
                            this.qtdChildren = ''
                            this.ageChildren = ''
                            this.email = ''
                        },2000)
                    }
                }
                catch(error) {
                    this.alertMensagem('Erro ao confirmar 2', 'Verifique se preencheu todos os campos', 'error')
                }
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
    h2 {
        font-size: clamp(2.7rem, 4.5vw, 6.5rem);
        font-variant: all-small-caps;
    }
    #subTitle {
        width: 85%;
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
        width: 50%;
        margin: 30px auto;
        padding: 40px;
        box-shadow: 0px 5px 8px 2px grey;
        border-radius: 5px;
        display: grid;
    }
    #name {
        display: flex;
        margin: 10px 0px 0px;
    }
    #name > div {
        display: flex;
    }
    .nomesArray {
        display: flex;
    }
    .nomesArray p {
        font-size: 30px !important;
        text-align: initial;
        margin: 0px 10px 10px;
    }
    input[type="text"] {
        width: 80%;
        height: 50px;
        padding: 10px;
        margin: 10px;
        display: flex;
    }
    .radios {
        display: flex;
        margin: 20px 8px 20px;
        justify-content: space-between;
        width: 90%;
    }
    .radios > div {
        display: flex;
    }
    .radio {
        margin: 0 0 0 18%;
        display: flex;

    }
    input[type="radio"] {
        width: 30px;
        height: 20px;
    }
    label {
        font-size: 18px;
        margin: -5px 0;
    }
    .success  {
        width: 130px;
        font-weight: bold;
        font-size: 20px;
        margin: 10px 5px;
        background: #71a077;
        color: white;
        transition: 0.4s
    }
    .success:hover  {
        color: #71a077;
        border: 1px solid #71a077;
        background: white;
    }
    .children label {
        width: 80%;
        height: 50px;
        margin: 0px 10px -25px;
        display: flex;
    }
    .children p {
        text-align: initial;
        margin: 10px 10px;
        font-weight: 600;
    }
    .children-button {
        display: flex;
    }
    .children-array {
        display: flex;
        width: 50%;
    }
    .b-form-spinbutton.form-control.d-flex.align-items-stretch {
        width: 50%;
        height: 35px;
        margin: 15px;
    }
    .children .danger-children {
        width: 35px;
        height: 30px;
        padding: 0px;
        font-weight: 200;
        font-size: 16px;
        margin: 10px 5px;
        background: #f84943;
        color: white;
        border-radius: 50px;
    }
    .success-children  {
        width: 30px;
        height: 30px;
        font-weight: 500;
        font-size: 15px;
        padding: 0px;
        margin: 17px 5px;
        background: #71a077;
        color: white;
        transition: 0.4s;
        border-radius: 30px;
    }
    .success-children:hover  {
        color: #71a077;
        border: 1px solid #71a077;
        background: white;
    }
    .danger {
        width: 30px;
        height: 30px;
        padding: 0px;
        font-weight: 200;
        font-size: 16px;
        margin: 10px 5px;
        background: #f84943;
        color: white;
        border-radius: 50px;
    }
    .danger:hover {
        width: 30px;
        height: 30px;
        background: white;
        color: #f03c36;
        border: 1px solid #f03c36;
    }
    .children {
        margin: 0px 0px 20px;
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
        .geral {
            padding: 70px 0 10px;
        }
        .form {
            width: 95%;
            padding: 15px 5px
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
        label {
            font-size: 15px;
            margin: -2px 0;
        }
        .nomesArray p {
            font-size: 20px !important;
            margin: 10px 10px 10px;
        }
        #name {
            display: -webkit-box;
        }
        input[type="text"] {
            width: 70%;
            margin: 10px 2px;
        }
        .success[data-v-43d8d98a] {
            width: 90px;
            font-size: 14px;
            font-weight: 500;
        }
    }

    @media(max-width:360px) {
        input[type="text"] {
            width: 60%;
            margin: 10px 2px;
        }
        .success[data-v-43d8d98a] {
            width: 90px;
        }
    }
</style>