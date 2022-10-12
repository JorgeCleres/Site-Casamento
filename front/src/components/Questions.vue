<template>
  <div class="accordion"  data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-center">
    <h2>Perguntas frequentes</h2>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <img src="../assets/icons/tire-uma-foto.png">
        <h5 block v-b-toggle.accordion-1 >Que horas devo chegar?</h5>
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ accordion1 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <img src="../assets/icons/cocktail.png">
        <h5 block v-b-toggle.accordion-2 >Como devo me vestir?</h5>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ accordion2 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <img src="../assets/icons/roupas.png">
        <h5 block v-b-toggle.accordion-3 >O que vai ser servido na recepção?</h5>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ accordion3 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <img src="../assets/icons/hora-do-relogio.png">
        <h5 block v-b-toggle.accordion-4 >Posso tirar fotos durante a cerimônia?</h5>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>{{ accordion4 }}</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        accordion1: `A nossa cerimonia está marcada ás 16h30 para iniciar no máximo ás 17h00 e a gente curtir um fim de tarde lindo comemorando esse dia tão especial. Imprevistos acontecem, busque se organizar e não se atrasar.`,
        accordion2: `Traje passeio completo. Se estiver com dúvida ou dificuldade, troque uma ideia com os noivos. `,
        accordion3: `Buscamos escolher um cardápio variado e versátil, além de conter pratos preferidos da noiva e do noivo. 2 opções de entradas, 2 opções de saladas com molho especial, 2 opções de carne branca e vermelha, 1 opção de massa e 3 guarnições deliciosas. Se tiver alguma restrição alimentar, busque comunicar os noivos com antecedência mínima de 1 mês do evento. `,
        accordion4: `Sim! Vamos amar ver as fotos de todos vocês. Mas tomem cuidado, teremos uma equipe de fotógrafos registrando todos os momentos, cuidado com celulares no corredor durante a cerimônia e as entradas, nesses momentos, opte por acompanhar as fotos oficiais do casamento que faremos questão de compartilhar com todos no futuro.`
      }
    }
  }
</script>

<style scoped>
    .accordion {
      padding: 100px;
    }
    #accordion-1, #accordion-2, #accordion-3, #accordion-4 {
      transition: 0.9s;
    }
    .accordion h2 {
      font-size: clamp(2rem,3vw,4rem);
      margin-bottom: 20px;
      padding: 20px 0;
      text-align: initial;
      font-weight: 200 !important;
      color: #5a5a5a;
    }
    .accordion h5 {
      text-align: initial;
      padding: 15px 10px;
      color: #8d8d8d;
      font-weight: 300;
      transition: 0.4s;
    }
    .accordion h5:hover {
      font-weight: 700;
      font-size: 23px;
      color: #72a178;
    }
    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 0px solid white !important;
        border-radius: 0.25rem;
    }
    .card.mb-1 {
      background: transparent;
  }
    .card-header {
        padding: 0.5rem 1rem;
        margin-bottom: 0;
        background-color: transparent !important;;
        border-bottom: 0px solid white !important;;
    }
    p.card-text {
      margin: -20px auto 0;
      text-align: justify;
      color: grey;
      padding: 0px 0 0 50px;
    }
    header.card-header.p-1 {
      display: flex
    }
    header.card-header.p-1  img {
      width: 12%;
      height: 10%;
    }

    @media(max-width:992px) {
      .accordion {
          padding: 30px 40px;
      }
      .accordion h5[data-v-d0466a66] {
        padding: 0px 10px;
      }
    }
</style>