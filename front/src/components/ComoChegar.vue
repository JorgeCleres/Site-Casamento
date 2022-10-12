<template>
    <div class="accordion" role="tablist" data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="top-center">
        <h2>Quando e Onde?</h2>
        <div class="when">
            <img src="../assets/icons/dia-da-paz.png">
            <h5>Dia 21 de Maio 2022</h5>
        </div>
        <div class="when">
            <img src="../assets/icons/tempo-de-chegada.png">
            <h5>16:30 Horas</h5>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    }
  }
</script>

<style scoped>
    .accordion {
      padding: 100px;
      border-left: 1px solid #ababab;
    }
    .accordion h2 {
      font-size: clamp(2rem,3vw,4rem);
      margin-bottom: 20px;
      padding: 20px 0;
      text-align: initial;
      font-weight: 200 !important;
      color: #5a5a5a;
    }
    .when {
        display: flex;
        margin: 10px auto;
    }
    .when img {
        width: 13%;
        height: 10%;  
    }
    .when h5 {
        margin: 10px;
        text-align: initial;
        color: #8d8d8d;
        font-weight: 300;
        padding: 0px 0px 10px;
    }

    @media(max-width:992px) {
      .accordion {
        padding: 0 55px;
      }
      .when h5 {
        margin: 0 10px;
      }
    }
    
</style>