<template>
  <div class="carrousel-fotos">
    <h2>Melhores Momentos</h2>
    <!-- <b-container class="bv-example-row"> -->
      <VueSlickCarousel v-bind="settings">
          <div>
            <img src="../assets/nossas-fotos/EBM_1068FotografodeCasamento.jpg">
          </div>
          <div>
            <img src="../assets/nossas-fotos/preweeding(1).jpg">
          </div>
          <div>
            <img src="../assets/nossas-fotos/preweeding(2).jpg">
          </div>
          <div>
            <img src="../assets/nossas-fotos/EBM_1016Fotografo de Casamento.jpg">
          </div>
           <div>
            <img src="../assets/nossas-fotos/EBM_1343FotografodeCasamento.jpg">
          </div>
          <div>
            <img src="../assets/nossas-fotos/EBM_1301Fotografo de Casamento.jpg">
          </div>
          <div>
            <img src="../assets/nossas-fotos/EBM_1812Fotografo de Casamento.jpg">
          </div>
          <div>
            <img src="../assets/nossas-fotos/preweeding(3).jpg">
          </div>
          <div>
            <img src="../assets/nossas-fotos/preweeding(4).jpg">
          </div>
          <div>
            <img src="../assets/nossas-fotos/preweeding(5).jpg">
          </div>
          <div>
            <img src="../assets/nossas-fotos/preweeding(6).jpg">
          </div>
          <div>
            <img src="../assets/nossas-fotos/preweeding(7).jpg">
          </div>
      </VueSlickCarousel>
    <!-- </b-container> -->
  </div>
</template>
<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    components: {VueSlickCarousel},
    data() {
      return {
        settings: {
            fade: true,
            speed: 800,
            autoplay: true
        },
      }
    },
  }
</script>

<style scoped>
  .carrousel-fotos {
      background-image: url('../assets/background_14.jpg');
      background-size: cover;
      padding: 50px 150px;
  }
  .carrousel-fotos h2 {
    font-size: clamp(2rem,3vw,4rem);
    margin: 0 0 10px;
    font-weight: 200 !important;
    color: #5a5a5a;
  }
  .carrousel-fotos img {
    width: 100%;
    padding: 40px 50px;
    margin: 0 auto
  }
  @media(max-width:992px) {
    .carrousel-fotos {
      padding: 50px 30px;
    }
    .carrousel-fotos img {
      width: 100%;
      padding: 30px 0px;
    }
  }
</style>