<template>
    <div class="contador">
        <!-- <h2 data-aos="fade-up" data-aos-duration="2000">SEJAM BEM-VINDOS AO NOSSO SITE!</h2> -->
        <h2 data-aos="fade-up" data-aos-duration="2000">CONTAGEM REGRESSIVA PARA O GRANDE DIA</h2>
        <!-- <h4 data-aos="fade-up" data-aos-duration="3000">CONTAGEM REGRESSIVA PARA O GRANDE DIA</h4> -->
        <!-- <h6 data-aos="fade-up" data-aos-duration="3000">R. Marina Coelho, 330 São José dos Pinhais </h6> -->
        <Countdown deadline="May 21, 2022" data-aos="fade-up" data-aos-duration="3000"></Countdown>
        <img id="folha" data-aos="fade-up" data-aos-duration="3000" src="../assets/matinho.png" alt=""> 
    </div>
</template>

<script>
    import Countdown from 'vuejs-countdown'
    export default {
        components: { Countdown },
        data () {
            return {
            }
        }
    }
</script>

<style scoped>
    .contador {
        padding: 150px 0 120px;
        background: #f5f5f5;
        height: 400px;
    }
    .contador h2 {
        font-weight: 200 !important;
        font-size: clamp(2rem, 2.5vw, 3.5rem);
        color: #5a5a5a;
    }
    #folha {
        width: 55%;
        position: relative;
        top: 50%;
    }
    .vuejs-countdown .digit {
        font-size: 50px !important;
        font-weight: 200 !important;
        line-height: 1 !important;
        margin-bottom: 5px !important;
    }
    .vuejs-countdown {
        padding: 0;
        margin: 30px 0 -200px;
    }
    .vuejs-countdown li:first-of-type {
        margin-left: 0 !important;
        background: white !important;
        padding: 10px !important;
    }

    @media(max-width: 992px) {
        .contador[data-v-bd51f0b0] {
            padding: 100px 0;
            background: #f5f5f5;
            height: 400px;
        }
        #folha {
            display: none
        }
    }
    @media(max-width: 480px) {
        #folha {
            top: 120%;
        }
    }
</style>