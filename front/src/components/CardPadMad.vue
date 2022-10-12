<template>
  <div class="geral">
    <div class="check" data-aos="fade-up" data-aos-duration="1000">
      <h5 :class="{active: isActive}" @click="checkedNames(true)">Padrinhos</h5>
      <h5 :class="{active: !isActive}" @click="checkedNames(false)">Madrinhas</h5>
      <hr>
    </div>
    <hr>

    <div class="cont" v-if="checked" data-aos="fade-up" data-aos-duration="2000">
        <div class="unit">
          <div class="imagem">
            <img src="../assets/padrinho-madrinhas/Bruno-star-wars.png" alt="imagem" width="100%">
          </div>
          <div class="text">
            <h5>Bruno Lopes</h5>
            <h6>Cunhado</h6>
            <p>Nosso cunhado 'minerim' amado e querido, dono da Amazon e super fã de Star Wars.</p>
          </div>
        </div>

        <div class="unit">
          <div class="imagem">
            <img src="../assets/padrinho-madrinhas/Rafael-veio-da-lancha.png" alt="imagem" width="100%">
          </div>
          <div class="text">
            <h5>Rafael David</h5>
            <h6>Tio</h6>
            <p>Vulgo véio da lancha. O Hacker mais rico e querido da família.</p>
          </div>
        </div>

        <div class="unit">
          <div class="imagem">
            <img src="../assets/padrinho-madrinhas/carlos-crocodilo-dante.png" alt="imagem" width="100%">
          </div>
          <div class="text">
            <h5>Carlos Riato</h5>
            <h6>Tio</h6>
            <p>Tio querido conhecido por suas histórias de pescador, sendo a mais famosa o dia que caçou jacaré na mão.</p>
          </div>
        </div>

        <div class="unit">
          <div class="imagem">
            <img src="../assets/padrinho-madrinhas/Alvimar-cat.png" alt="imagem" width="100%">
          </div>
          <div class="text">
            <h5>Alvimar</h5>
            <h6>Tio</h6>
            <p>O mais novo velho membro da família que retornou após uma longa peregrinação pelo mundo com seus gatos.</p>
          </div>
        </div>

        <div class="unit">
          <div class="imagem">
            <img src="../assets/padrinho-madrinhas/mauricio-boxeador.png" alt="imagem" width="100%">
          </div>
          <div class="text">
            <h5>Mauricio Cleres</h5>
            <h6>Tio</h6>
            <p>Tio amado, conhecido pela sua vestimenta do Recanto Gaúcho e também por ser um apreciador de box.</p>
          </div>
        </div>

        <div class="unit">
          <div class="imagem">
            <img src="../assets/padrinho-madrinhas/maycon-piloto.png" alt="imagem" width="100%">
          </div>
          <div class="text">
            <h5>Maycon Riato</h5>
            <h6>Primo</h6>
            <p>Primo querido conhecido por beber e marcar roles que nunca se concretizam! Estamos aguardando o próximo convite.</p>
          </div>
        </div>

        <div class="unit">
          <div class="imagem">
            <img src="../assets/padrinho-madrinhas/nego-ladrao-truco.png" alt="imagem" width="100%">
          </div>
          <div class="text">
            <h5>Julio Cesar Lages</h5>
            <h6>Cunhado</h6>
            <p>Cunhado amado, metido a 'jogadô', torcedor do Palmeiras (que não tem Mundial) e também é conhecido por ser um ladrão no truco.</p>
          </div>
        </div>

        <div class="unit">
          <div class="imagem">
            <img src="../assets/padrinho-madrinhas/zamir-juiz.png" alt="imagem" width="100%">
          </div>
          <div class="text">
            <h5>Zamir Machado</h5>
            <h6>Primo</h6>
            <p>Machado, Machadinho, Machadão, Zamir será um Juizão! Te amamos Zamiro.</p>
          </div>
        </div>

        <div class="unit">
          <div class="imagem">
            <img src="../assets/padrinho-madrinhas/Matheus-quente.png" alt="imagem" width="100%">
          </div>
          <div class="text">
            <h5>Matheus Rosa</h5>
            <h6>Melhor Amigo</h6>
            <p>Cachorro quenteeee, Te amamos Math.</p>
          </div>
        </div>

        <div class="unit">
          <div class="imagem">
            <img src="../assets/padrinho-madrinhas/Rafa-uzumaki.png" alt="imagem" width="100%">
          </div>
          <div class="text">
            <h5>Rafael</h5>
            <h6>Primo</h6>
            <p>Rafael Primo querido, apreciador da história de vida do Naruto. Nós sabemos que o Naruto passou por muita coisa.</p>
          </div>
        </div>
    </div>

    <div class="cont" v-else data-aos="fade-up" data-aos-duration="2000">
        <div class="unit">
          <div class="imagem">
            <img src="../assets/padrinho-madrinhas/Fabiane-cinderela.png" alt="imagem" width="100%">
          </div>
          <div class="text">
            <h5>Fabiane Cleres</h5>
            <h6>Irmã</h6>
            <p>Irmã e Cunhada amada, gosta muito de limpeza mas tem sempre os seus momentos de Cinderela.</p>
          </div>
        </div>

        <div class="unit">
          <div class="imagem">
            <img src="../assets/padrinho-madrinhas/Bele - biscoito.png" alt="imagem" width="100%">
          </div>
          <div class="text">
            <h5>Isabelle Lemes</h5>
            <h6>Prima</h6>
            <p>É a menina dos biscoitos mais talentosa que já vimos. (Os botões de açucar não!!!)</p>
          </div>
        </div>

        <div class="unit">
          <div class="imagem">
            <img src="../assets/padrinho-madrinhas/Beti-italiana.png" alt="imagem" width="100%">
          </div>
          <div class="text">
            <h5>Beth Riato</h5>
            <h6>Tia</h6>
            <p>Tia amavél e generosa, famosa por suas premonições e instintos de bruxa (do bem rsrs).</p>
          </div>
        </div>

        <div class="unit">
          <div class="imagem">
            <img src="../assets/padrinho-madrinhas/Fabiele-doutora.png" alt="imagem" width="100%">
          </div>
          <div class="text">
            <h5>Fabiele Lopes</h5>
            <h6>Irmã</h6>
            <p>Irmã e Cunhada amada, conhecida por seus diagnósticos precisos sobre os problemas de saúde da família. (É mesmo Doutora?)</p>
          </div>
        </div>

        <div class="unit">
          <div class="imagem">
            <img src="../assets/padrinho-madrinhas/Mari-caminhonera.png" alt="imagem" width="100%">
          </div>
          <div class="text">
            <h5>Mariana Garcia</h5>
            <h6>Melhor Amiga</h6>
            <p>Amiga linda, conhecida popularmente como Caminhoneira por sua incrível capacidade de beber litros, litros e litros de cerveja e não ficar bêbada (é cilada Bino).</p>
          </div>
        </div>

        <div class="unit">
          <div class="imagem">
            <img src="../assets/padrinho-madrinhas/gabriela-bebada.png" alt="imagem" width="100%">
          </div>
          <div class="text">
            <h5>Gabriela Machado</h5>
            <h6>Prima</h6>
            <p>Prima linda e querida, conhecida por ser extremamente engraçada e também por ser aprecidora da bebida corote.</p>
          </div>
        </div>

        <div class="unit">
          <div class="imagem">
            <img src="../assets/padrinho-madrinhas/go-vera-go.png" alt="imagem" width="100%">
          </div>
          <div class="text">
            <h5>Vera Riato</h5>
            <h6>Tia</h6>
            <p>Tia amada, famosa por nunca chegar no horário combinado, todos acreditam que ela vive em seu próprio fuso-horário duas horas atrasado.</p>
          </div>
        </div>

        <div class="unit">
          <div class="imagem">
            <img src="../assets/padrinho-madrinhas/marcinha-vinho.png" alt="imagem" width="100%">
          </div>
          <div class="text">
            <h5>Marcia Cleres</h5>
            <h6>Tia</h6>
            <p>Tia querida, conhecida por ser a mais queitinha da familia, talentosa na costura e recém empresária de sucesso.</p>
          </div>
        </div>

        <div class="unit">
          <div class="imagem">
            <img src="../assets/padrinho-madrinhas/Tia-lu-master-chef.png" alt="imagem" width="100%">
          </div>
          <div class="text">
            <h5>Luciana David</h5>
            <h6>Tia</h6>
            <p>Tia do bombom de uva, que se entrasse no Master Chef se tornaria dona do programa.</p>
          </div>
        </div>

        <div class="unit">
          <div class="imagem">
            <img src="../assets/padrinho-madrinhas/Angela-roubando-lvros.png" alt="imagem" width="100%">
          </div>
          <div class="text">
            <h5>Angela</h5>
            <h6>Tia</h6>
            <p>Tia amada, Magali da família, que de pouquinho em pouquinho come um ou dois bolos inteiros.</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data() {
      return {
        slickOptions: {
          slidesToShow: 3
        },
        checked: true,
        isActive: true
      }
    },
    methods: {
      checkedNames(val) {
        this.checked = val
        this.isActive = val
      }
    }
  }
</script>

<style scoped>
  .geral {
    padding: 140px 0;
  }
  .check {
    display: inline-flex;
    margin: 0 auto;
  }
  .active {
    font-size: 35px !important;
    color: #71a077 !important;
    margin: 0px 30px !important;
    font-weight: 400 !important;
  }
  .check h5 {
    margin: 0px 30px;
    font-size: 34px;
    color: grey;
    transition: 0.2s;
    cursor: pointer;
  }
  hr {
    width: 30%;
    margin: 10px auto;
  }
  .top {
    margin: 40px auto
  }
  .top h2 {
    font-size: 50px;
  }
  .cont  {
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .unit {
    display: flex !important;
    width: 45%;
    box-shadow: 2px 10px 19px 0px #d5d5d5;
    margin: 30px auto;
    border-radius: 10px
  }
  .unit .imagem {
    width: 40%;
    padding: 10px;
  }
  .unit .imagem img {
    width: 100%;
  }
  .unit .text {
    padding: 30px 10px;
    margin: 0;
    width: 60%;
    border-radius: 5px;
  }
  .unit .text h5{
    text-align: initial;
    font-size: 38px;
    font-weight: 400;
    margin-bottom: 0;
  }
  .unit .text h6{
    text-align: initial;
    font-size: 22px;
    font-weight: 300;
  }
  .unit .text p{
    text-align: initial;
    font-size: 18px;
    font-weight: 300;
  }

  @media(max-width: 992px) {
    .unit {
      width: 100%;
      display: grid !important;
    }
    .unit .imagem {
      width: 100%;
      padding: 10px;
    }
    .unit .text {
      padding: 30px;
      width: 100%;
    }
    .check h5 {
      font-size: 20px;
    }
    .active {
      font-size: 22px !important;

    }
  }
 </style>